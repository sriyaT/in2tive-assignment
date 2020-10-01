import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { Card } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginRight: theme.spacing(10),
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100px',
    color: '#6a5acd',
  },
  text: {
    textAlign: 'center',
  },
}));

const Profile = () => {
  const classes = useStyles(``);
  let history = useHistory();

  const userName = localStorage.getItem('username');
  const email = localStorage.getItem('email');

  useEffect(() => {
    console.log('hello', userName);
    if (typeof userName !== 'undefined' && userName !== null) {
      history.replace('/');
    }
  }, [history, userName]);

  return (
    <Box m={1}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Card>
          <div className={classes.paper}>
            <Typography component='h1' variant='h5' className={classes.text}>
              Welcome {userName} {email}!!!
            </Typography>
          </div>
        </Card>
      </Container>
    </Box>
  );
};

export default Profile;
