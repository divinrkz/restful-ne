
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

export const Form = ({page=1, handleSubmit, formState, setFormState}) => {


   const handleChange = (e) => {
        var name = e.target.name;

        setFormState({...formState, [name]: e.target.value});
    }
    

    return (
            <React.Fragment>
                  <form>
                        {page == 'login' ? 
                        <React.Fragment>
                            <div className="mb-6">
                                <label htmlFor="emailAddress" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email Address</label>
                                <input type="text" name="email" value={formState.meterNumber} onChange={handleChange} id="emailAddress" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required=""/>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                                <input type="password" name="password" value={formState.amount} onChange={handleChange} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder="Password" required=""/>
                            </div>
                            <button type="button" onClick={handleSubmit} className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-md text-sm w-96 px-8 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700  text-sm uppercase font-bold">Login</button>
                            <p className='w-full mt-2 text-sm flex'><p><Link to={'/register'}> <span className='text-blue-600 underline'>Register Here</span></Link></p></p>
                        
                        </React.Fragment>
                    : 
                        page == 'register' ? 
                        <div>
                                <div className='flex'>
                                    <React.Fragment>
                                        <div className="mb-6 mr-6">
                                            <label htmlFor="names" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Full Names</label>
                                            <input type="text" id="names" name="names"  value={formState.token} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-42 focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Names" required=""/>
                                        </div>
                                    </React.Fragment>
                                    <React.Fragment>
                                        <div className="mb-6">
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email Address</label>
                                            <input type="text" id="email" name="email"  value={formState.token} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 w-42 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required=""/>
                                        </div>
                                    </React.Fragment>
                                </div>
                                
                                <div className='flex'>
                                    <React.Fragment>
                                        <div className="mb-6 mr-6">
                                            <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone Number</label>
                                            <input type="text" id="phoneNumber" name="phoneNumber"  value={formState.token} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-42 focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone" required=""/>
                                        </div>
                                    </React.Fragment>
                                    <React.Fragment>
                                        <div className="mb-6">
                                            <label htmlFor="nationalId" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">National Id</label>
                                            <input type="text" id="nationalId" name="nationalId"  value={formState.token} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 w-42 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="National Id" required=""/>
                                        </div>
                                    </React.Fragment>
                                </div>
                                
                                <div className='flex'>
                                    <React.Fragment>
                                        <div className="mb-6 mr-6">
                                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                                            <input type="password" id="password" name="password"  value={formState.token} onChange={handleChange} style={{width: '32rem'}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required=""/>
                                        </div>
                                    </React.Fragment>
                                </div>
                            <button type="button" onClick={handleSubmit} style={{width: '32rem'}} className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-md text-sm  mt-8 px-8 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700  text-sm uppercase font-bold">Register</button>
                            <p className='w-full mt-2 text-sm flex'><p><Link to={'/login'}> <span className='text-blue-600 underline'>Login Here</span></Link></p></p>
                        </div>
                            : null

                    }
                            
                        </form>

            </React.Fragment>
    )
}

