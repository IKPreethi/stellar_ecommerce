import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './LandingPage.css';
import { Button, Nav, Form, FormControl, InputGroup, ToggleButton } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';

const LandingPage = () => {

    const dispatch = useDispatch();
    const userToken = useSelector((state) => state.authenticationReducer);
    const [user, setUser] = useState({
        userName: "",
        password:"",
        email:""
    });
    const [signInDisplay, setSignInDisplay] = useState(false);
    const [signUpDisplay, setSignUpDisplay] = useState(false);
    const [ConfirmPassword, setConfirmPassword] = useState('');
    const history = useHistory();
   
    useEffect(() => {
        console.log(userToken);
    }, [userToken])

   const signIn = () => {
     axios
       .post('https://localhost:5001/Authentication/signin/' , user)
      .then((response) => {
           dispatch({type: "USER_AUTHENTICATED", payload:response.data});
       });
   };

   const signUp = () => {
    if(user.password == ConfirmPassword)
    {
        axios
        .post('https://localhost:5001/Authentication/signup/' , user)
       .then((response) => {
            dispatch({type: "USER_AUTHENTICATED", payload:response.data});
        });
    }
  };

   const userUpdate = (event, field) => {
       setUser((prev) => {
           if(field == "userName")
                prev.userName = event;
           else if(field == "email")
                prev.email = event;
           else if(field == "password")
                prev.password = event;
           return prev
             }
       )
   }

   const renderLogin = (
    <React.Fragment>
    <h3 class="display-4">Welcome to Stellar</h3>
    <p class="text-muted mb-4">One stop solution to all your shopping needs</p>
    <div class="mb-3">
            <Button
                className="mb-2"
                id="toggle-check"
                type="checkbox"
                variant="outline-primary"
                value="1"
                onClick = {() => setSignInDisplay(!signInDisplay)}
                >
                    Login
            </Button>
        </div>
        </React.Fragment>
   );

   const renderSignUpForm = (
    <React.Fragment>
    <Form
    onSubmit={event => {
        event.preventDefault();
        signUp();
    }}>
    <h4 style={{ textAlign: 'center' }}>Register Here</h4>
    <InputGroup className='mb-3'>
        <FormControl placeholder='Username'
            onChange={event => userUpdate(event.target.value, "userName")} />
    </InputGroup>
    <InputGroup className='mb-3'>
        <FormControl placeholder='Email'
            onChange={event => userUpdate(event.target.value, "email")} />
    </InputGroup>
    <InputGroup className='mb-3'>
        <FormControl placeholder='Password' type='password'
            onChange={event => userUpdate(event.target.value, "password")} />
    </InputGroup>
    <InputGroup className='mb-3'>
        <FormControl placeholder='ConfirmPassword' type='password'
            onChange={event => setConfirmPassword(event.target.value)} />
    </InputGroup>
        <Button type='submit' variant='primary' style={{ margin: 'auto', display: 'block', width: '10rem' }}>Sign In</Button>
    </Form>
    </React.Fragment> 
   );


   const renderSignInForm = (
       <React.Fragment>
            <Form
            onSubmit={event => {
                event.preventDefault();
                signIn();
            }}>
            <h4 style={{ textAlign: 'center' }}>Welcome back</h4>
            <InputGroup className='mb-3'>
                <FormControl placeholder='Username'
                    onChange={event => userUpdate(event.target.value, "userName")} />
            </InputGroup>
            <InputGroup className='mb-3'>
                <FormControl placeholder='Email'
                    onChange={event => userUpdate(event.target.value, "email")} />
            </InputGroup>
            <InputGroup className='mb-3'>
                <FormControl placeholder='Password' type='password'
                    onChange={event => userUpdate(event.target.value, "password")} />
            </InputGroup>
            <Button type='submit' variant='primary' style={{ margin: 'auto', display: 'block', width: '10rem' }}>Sign In</Button>
            </Form>
            <Nav.Link onClick={() => setSignUpDisplay(!signUpDisplay)}>Don't have an account yet? Register Now!</Nav.Link>
            </React.Fragment>
        );

    return (
       <div className="maincontainer">
        <div class="container-fluid">
            <div class="row no-gutter">
                <div class="col-md-6 d-none d-md-flex bg-image"></div> 
                <div class="col-md-6 bg-light">
                    <div class="login d-flex align-items-center py-5"> 
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-10 col-xl-7 mx-auto">
                                    {!signInDisplay ? renderLogin :  (signUpDisplay ? renderSignUpForm : renderSignInForm)  }
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
      </div>
      
        )
    };

export default LandingPage;