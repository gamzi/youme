import {useEffect, useState, useMemo, useRef} from 'react';
import YouTube from "react-youtube";
import React from 'react';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import StarRate from './StarRate.jsx';
import watchingImg from '../assets/watching.png';
import givingheartImg from '../assets/givingheart.png';

const Content = (props) => {
    const [showVideo, setShowVideo] = useState(false);
    const [showFeedback, setShowFeedback] = useState(false);
    const [rating, setRating] = useState('Rating: 1');
    const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
    const [feedbackData, setFeedbackData] = useState({
        day: {
            title: 'How was your day today?',
            ratingRange: 5,
            rating: 0,
            comment: ''
        },
        marko: {
            title: 'How do we feel about Marko today?',
            rating: 0,
            comment: ''
        },
        extra: {
            title: 'Penny for your thoughts?',
            comment: ''
        }
    });

    // useEffect(() => {
    //     console.log(username);
    // }, [username]);

    const enjoyShow = () => {
        setShowVideo(true);
    }

    const giveFeedback = () => {
        setShowFeedback(true);
    }

    const handleSetRating = (key, value) => {
        updateFeedbackData(key, 'rating', value);
    }

    const submitFeedback = () => {
        setFeedbackSubmitted(true);
        let body = '';

        Object.keys(feedbackData).forEach(item => {
            body += `${feedbackData[item].title} %0D%0A`;
            if (feedbackData[item].rating) {
                body += `Rating: ${feedbackData[item].rating} %0D%0A`;
            }
            body += `${feedbackData[item].comment} %0D%0A%0D%0A%0D%0A`;
        })

        const mailtoLink = `mailto:gamzi91@gmail.com?subject=Guza and Marko&body=${body}`;

        window.open(mailtoLink);
    };

    const updateFeedbackData = (question, key, value) => {
        setFeedbackData(prevState => ({
            ...prevState,
            [question]: {
                ...prevState[question],
                [key]: value
            },
        }));
    };

    return (
        <Box sx={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column'
        }}>
            {showVideo &&
                <div className="video-responsive">
                    <MovieClip/>
                    <img className="watching-img" src={watchingImg} alt="watching"/>
                </div>
            }

            {!showVideo &&
                <Typography variant="h4" color="primary" onClick={enjoyShow} style={{ cursor: 'pointer' }}>Enjoy a show!</Typography>
            }
            
            {(!showVideo && !showFeedback) &&
                <Typography variant="h4">or</Typography>
            }
            
            {!showFeedback &&
                <Typography variant="h4"color="primary" onClick={giveFeedback} style={{ cursor: 'pointer' }}>Give some feedback</Typography>
            }

            {showFeedback &&
                <Box sx={{textAlign: 'center'}}>
                    {
                        Object.keys(feedbackData).map(key => <Box key={key} sx={{marginTop: '40px'}}>
                            <Typography variant="h5" style={{marginBottom: '20px'}}>{feedbackData[key].title}</Typography>
                            {
                                feedbackData[key].rating > -1 &&
                                    <StarRate ratingCallback={(i) => handleSetRating(key, i)} ratingRange={feedbackData[key].ratingRange}/>
                            }
                            <TextField
                                onChange={(e) => {
                                    updateFeedbackData(key, 'comment', e.target.value);
                                }}
                                style={{ maxWidth: '500px' }}
                                fullWidth
                                variant="outlined"
                                margin="normal"
                                multiline
                                minRows={4}
                                maxRows={8}
                            />
                        </Box>)
                    }
                    { !feedbackSubmitted &&
                        <Button variant="contained" onClick={submitFeedback} color="primary" type="submit" style={{ marginTop: '20px', width: '200px' }}>SUBMIT FEEDBACK</Button>
                    }
                    { feedbackSubmitted &&
                        <>
                            <img className="givingheart-img" src={givingheartImg} alt="givingheart"/>
                        </>
                    }
                </Box>
            }
        </Box>
    )
};

export default Content;


class MovieClip extends React.Component {
    render() {
      const options = {
        playerVars: {
          autoplay: 1,
          controls: 1,
        },
      };
  
      return <YouTube videoId="ttVX8oe7Ti0" 
        className='videoPlayer'
        options={options} onReady={this._onReady} id="video"/>;
    }
  
    _onReady(event) {
      event.target.pauseVideo();
    }
}