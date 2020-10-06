import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Card } from '@material-ui/core';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { passwordValidation, usernameValidation } from '../utils/validation';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '10px',
    color: '#3f51b5',
  },
  form: {
    width: '90%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const ValidationTextField = withStyles({
  root: {
    '& input:valid + fieldset': {
      borderColor: '#3f51b5',
      borderWidth: 2,
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      color: 'red',
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 2,
      padding: '4px !important',
    },
  },
})(TextField);

export default function Login() {
  const classes = useStyles();

  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    history.push('/profile');
  };

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  let history = useHistory();
  const SignedUpUserName = localStorage.getItem('username');
  const SignedUpPassword = localStorage.getItem('password');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('====..', userName, SignedUpUserName);

    if (
      userName !== null &&
      password !== null &&
      usernameValidation(userName) &&
      passwordValidation(password) &&
      userName === SignedUpUserName &&
      password === SignedUpPassword
    ) {
      console.log('====..', userName, SignedUpUserName);
      handleOpen();
      setTimeout(() => {
        handleClose();
      }, 5000);
    }
  };

  return (
    <Box m={1}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Card>
          <div className={classes.paper}>
            <Typography component='h1' variant='h5'>
              Login
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                  <ValidationTextField
                    error={
                      userName !== null &&
                      (!usernameValidation(userName) ||
                        userName !== SignedUpUserName)
                    }
                    autoComplete='fname'
                    name='User Name'
                    variant='outlined'
                    fullWidth
                    id='firstName'
                    label='Username'
                    autoFocus
                    onChange={(e) => handleUserName(e)}
                    helperText={
                      userName !== null &&
                      (!usernameValidation(userName) ||
                        userName !== SignedUpUserName)
                        ? 'Username is not valid'
                        : ''
                    }
                  />
                </Grid>

                <Grid item xs={12}>
                  <ValidationTextField
                    error={
                      password !== null &&
                      (!passwordValidation(password) ||
                        password !== SignedUpPassword)
                    }
                    variant='outlined'
                    fullWidth
                    name='password'
                    label='Password'
                    type='password'
                    id='password'
                    autoComplete='current-password'
                    onChange={(e) => handlePassword(e)}
                    helperText={
                      password !== null &&
                      (!passwordValidation(password) ||
                        password !== SignedUpPassword)
                        ? 'Password is not valid'
                        : ''
                    }
                  />
                </Grid>
              </Grid>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                className={classes.submit}
                onClick={(e) => handleFormSubmit(e)}
              >
                Login
              </Button>
              <Modal
                aria-labelledby='transition-modal-title'
                aria-describedby='transition-modal-description'
                className={classes.modal}
                open={open}
                closeAfterTransition
              >
                <Fade in={open}>
                  <div className={classes.paper}>
                    <p id='transition-modal-description'>
                      Thank You For Login !
                    </p>
                  </div>
                </Fade>
              </Modal>
            </form>
          </div>
        </Card>
      </Container>
    </Box>
  );
}
