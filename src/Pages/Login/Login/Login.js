import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { async } from '@firebase/util';
import { toast } from 'react-toastify';

const Login = () => {
    const [agree, setAgree] = useState(false);
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
    );

    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);

    }
    const ResetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please enter your email');
        }
    }
    const navigateRegister = () => {
        navigate('/login');
    }
    return (
        <div>
            <h2 className='text-primary text-center'>Please Login</h2>
            <Form onSubmit={handleLoginSubmit} className='container w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check className={agree ? 'text-primary' : 'text-danger'} onClick={() => setAgree(!agree)} type="checkbox" label="Accept terms and conditions?" />
                </Form.Group>
                <Button disabled={!agree} variant="primary" type="submit">
                    Login
                </Button>
                <p className='my-2'>Don't have an Account? <Link onClick={navigateRegister} className='text-primary text-decoration-none' to="/register">Please Register...</Link></p>

                <p className='my-2'>Forget your Password? <Button onClick={ResetPassword} variant="link" className='text-primary text-decoration-none' >Reset Password... </Button></p>
                <p className='text-danger'></p>
            </Form>
        </div>
    );
};

export default Login;