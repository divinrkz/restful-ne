import React, {useState, useEffect} from 'react';

import {Link, Navigate} from 'react-router-dom';
import { isLoggedIn, removeToken } from '../services';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const [state, setState] = useState({page: 1});
    const navigate = useNavigate()
    const [user, setUser] = useState(null)

   const handleChange = page => {
        setState({ page });
    }

    useEffect(() => {
        setUser(isLoggedIn())
    }, [])
    
    const logout = () => {
        removeToken()
        navigate('/login')
    }
    
    return (
            <React.Fragment>
                <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-blue-600 text-gray-200  navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                      
                    <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent1">
                        <a className="text-xl text-white pr-2 font-semibold" href="#">VMS</a>
                        {/* Left links */}
                      
                    </div>
                    {/* Collapsible wrapper */}
                    {/* Right elements */}
                    <div className="flex items-center relative">
                        {user ? 
                        <div className='flex'>   
                        <img className='mr-4' src={`https://ui-avatars.com/api/?name=${user.names}&rounded=true`} style={{width:'23px', height: '23px'}}></img>
                        <img src={'/images/power-white.svg'} onClick={logout} className='cursor-pointer' style={{width:'23px', height: '23px'}} />
                        </div>
                     : null}
                        
                    </div>

                    </div>
                </nav>
                    
           
               
            </React.Fragment>
    )
}