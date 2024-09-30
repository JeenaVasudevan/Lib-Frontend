import React from 'react';
import SignupForm from '../components/SignupForm';

function Signup(props) {
    return (
        <main className='mx-auto py-10 container'>
            <section>
             <h2 className='text-3xl font-bold'>Signup</h2>
            <SignupForm />
            </section>
        </main>
    );
}

export default Signup;