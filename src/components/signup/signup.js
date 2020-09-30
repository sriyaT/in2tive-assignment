import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { Card } from '@material-ui/core';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '90%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const ValidationTextField = withStyles({
  root: {
    '& input:valid + fieldset': {
        borderColor:'#3f51b5',
      borderWidth: 2,
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      color:'red',
      borderWidth: 2,
      
      
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 2,
      padding: '4px !important',
    },
  },
})(TextField);

export default function SignUp() {
  const classes = useStyles();

const [userName, setUserName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');



const handleUserName = (e) =>{
    setUserName(e.target.value);

}
const handleEmail = (e) =>{
    setEmail(e.target.value);

}
const handlePassword =  (e)  =>{
    setPassword(e.target.value);
}

const handleformSubmit = (e) =>{
    
        e.preventDefault();

       if (localStorage.getItem('document')) {
        setUserName(userName);
        setEmail(email);
        setPassword(password)
        } else {
            setUserName('');
                setPassword('')
        }

    localStorage.setItem('username',JSON.stringify(userName));
     localStorage.setItem('email',JSON.stringify(email));
    localStorage.setItem('password',JSON.stringify(password));
   
}

  return (
    <Box m={1}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Card>
          <div className={classes.paper}>
            <Typography component='h1' variant='h5'>
              Sign up
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                  <ValidationTextField
                    autoComplete='fname'
                    name='Username'
                    variant='outlined'
                    required
                    fullWidth
                    id='firstName'
                    label='Username'
                    autoFocus
                    onChange={(e) => handleUserName(e) }
                     helperText={userName === "" ? 'Username is required!' : ' '}
                  />
                </Grid>
                <Grid item xs={12}>
                  <ValidationTextField
                    variant='outlined'
                    required
                    fullWidth
                    id='email'
                    label='Email Address'
                    name='email'
                    autoComplete='email'
                    onChange={(e) => handleEmail(e) }
                     helperText={email === "" ? 'Email is required!' : ' '}
                  />
                </Grid>
                <Grid item xs={12}>
                  <ValidationTextField
                    variant='outlined'
                    required
                    fullWidth
                    name='password'
                    label='Password'
                    type='password'
                    id='password'
                    autoComplete='current-password'
                    onChange={(e) => handlePassword(e) }
                    helperText={password === "" ? 'Password is required!' : ' '}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value='allowExtraEmails' color='primary' />
                    }
                    label='I have read and agree to the Privacy Policy'
                  />
                </Grid>
              </Grid>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                className={classes.submit}
                onClick={(e) => handleformSubmit(e)}
              >
                Sign Up
              </Button>
              <Grid container justify='center'>
                <Grid item>
                  <Link href='/Login' variant='body2'>
                    Already have an account? Login
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Card>
      </Container>
    </Box>
  );
}
