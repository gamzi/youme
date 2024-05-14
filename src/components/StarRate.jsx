import {useEffect, useState, useMemo, useRef} from 'react';
import YouTube from "react-youtube";
import styled from "styled-components";
import React from 'react';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useTheme } from '@mui/material/styles';
import star from '../assets/star.svg';


const StarRate = (props) => {
    const { ratingRange = 5, ratingCallback } = props;
    const [hoverIndex, setHoverIndex] = useState(-1);
    const [rating, setRating] = useState(-1);

    const handleSetRating = (i) => {
        setRating(i);
        ratingCallback(i);
    }

    return (
        <Box>
            {
                [...Array(ratingRange)].map((e, i) => {
                    return <img 
                        style={{
                            cursor: 'pointer',
                            margin: '0 5px',
                            width: '50px',
                            opacity: (rating >= i || hoverIndex >= i ) ? 1 : 0.2
                        }}
                        src={star} key={i} 
                        alt="star"
                        onClick={() => handleSetRating(i)}
                        onMouseEnter={() => setHoverIndex(i)}
                        onMouseLeave={() => setHoverIndex(-1)}
                        />  
                    })
            }
        </Box>
    );
}

export default StarRate;