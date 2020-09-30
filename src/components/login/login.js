import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import { Card } from '@material-ui/core';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles,  withStyles,} from '@material-ui/core/styles';
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



export default function Login() {

  const classes = useStyles();

const [userName, setUserName] = useState('');
const [password, setPassword] = useState('');




const handleUserName = (e) =>{
    setUserName(e.target.value);

}
const handlePassword =  (e)  =>{
    setPassword(e.target.value);
}

const handleformSubmit = (e) =>{
    
        e.preventDefault();

       if (localStorage.getItem('document')) {
        setUserName(userName);
        setPassword(password)
        } else {
            setUserName('');
                setPassword('')
        }

    localStorage.setItem('username',JSON.stringify(userName));
    localStorage.setItem('password',JSON.stringify(password));
   
}

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
                  required
                    autoComplete='fname'
                    name='User Name'
                    variant='outlined'
                    fullWidth
                    id='firstName'
                    label='Username / Email'
                    helperText={userName === "" ? 'Username is required!' : ' '}
                    autoFocus
                    onChange={(e) => handleUserName(e) }
                   
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
                    helperText={password === "" ? 'Password is required!' : ' '}
                    autoComplete='current-password'
                    onChange={(e) => handlePassword(e) }
                     
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
                Login
              </Button>
              
            </form>
          </div>
        </Card>
      </Container>
    </Box>
  );
}
