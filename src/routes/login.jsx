import React from 'react';
import LoginForm from '../components/LoginForm';

function Login(props) {
    return (
        <main className='mx-auto py-10 container'>
            <section>
             <h2 className='text-3xl font-bold'>Login</h2>
             <LoginForm />
            </section>
        </main>
    );
}

export default Login;