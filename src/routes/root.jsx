import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { changeLoginStatus } from '../features/login/loginSlice';

function Root(props) {
    const loggedIn=useSelector(state=>state.login.loggedIn)
   const user=useSelector(state=>state.login.user)
    const dispatch=useDispatch()
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_BASE_URL}/auth/verify`,{withCredentials:true})
        .then(response=>{console.log(response)
        dispatch(changeLoginStatus({
            loggedIn: true,
            user: response.data
        }))

        })
        .catch(error=>{
            console.log(error)
            dispatch(changeLoginStatus({
                loggedIn: false,
                user: null
        }))
        })
    },[])
    return (
        <>
        <header className="shadow-lg h-20">
            <div className="container flex flex-row justify-between items-center h-full mx-auto">
            <h1>BookNest</h1>
            <nav>
                <ul className="flex flex-row gap-6">
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/books'}>Books</Link>
                    </li>
                    <li>
                        <Link to={'/authors'}>Authors</Link>
                    </li> {loggedIn?
                    <li>
                      <Link to={'/logout'}>Logout</Link>  
                    </li>:  
                    <li>
                        <Link to={'/login'}>Login</Link>
                    </li> }             
                </ul>
                
            </nav>
            {loggedIn && user && user.name &&
           <div className='bg-gray-500 w-12 h-12 rounded-full flex flex-row items-center justify-center text-xl text-white'>
            <span>{user.name.charAt(0)}</span>
           </div>}
            </div>
        </header>
        <Outlet />
        <footer>

        </footer>
        </>
    );
}

export default Root;
