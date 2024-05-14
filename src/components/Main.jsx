import {useEffect, useState} from 'react';
import React from 'react';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Content from './Content';


const Main = (props) => {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <>
            { !loggedIn && 
                <Login handleLogin={(value) => setLoggedIn(value)}/>
            }
            {
                loggedIn && <Content />
            }
        </>
    );
}

export default Main;

const Login = (props) => {
    const [username, setUsername] = useState(localStorage.getItem("username"));
    const { handleLogin } = props;

    const submitUsername = (e) => {
        e.preventDefault();
        localStorage.setItem("username", username);

        if (username.toLowerCase() !== 'chungica') {
            alert("You shouldn't be here!");
        } else {
            handleLogin(true);
        }
        console.log(username);
    }

    useEffect(() => {
        console.log(username);
    }, [username]);

    return (
        <Box sx={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column'
        }}>
            <Typography variant="h4" className='poetsen' style={{ marginBottom: '20px' }}>Welcome!</Typography>
            <form>
                <TextField
                    style={{ width: '200px' }}
                    variant="outlined"
                    margin="normal"
                    defaultValue={username}
                    inputProps={{
                        style: { fontFamily: "'PoetsenOne', sans-serif" },
                    }}
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                />
                <Typography variant="subtitle2">Hint: It should start with a <span className='poetsen'>C</span> and end with an <span className='poetsen'>A</span></Typography>

                <Button variant="contained" onClick={submitUsername} color="primary" type="submit" style={{ marginTop: '20px', width: '200px' }}>ENTER</Button>
            </form>
        </Box>
    );

};