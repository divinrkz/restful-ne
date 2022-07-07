
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

export const Form = ({page=1, handleSubmit, formState, setFormState, vehicles=[], owners=[]}) => {



   const handleChange = (e) => {
        var name = e.target.name;
    console.log(name, e.target.value);
        setFormState({...formState, [name]: e.target.value});
    }
    

    return (
            <React.Fragment>
                  <form>
                        {page == 'login' ? 
                        <React.Fragment>
                            <div className="mb-6">
                                <label htmlFor="emailAddress" className="block mb-2  text-sm font-medium text-gray-900 dark:text-gray-300">Email Address</label>
                                <input type="text" name="email" value={formState.email} onChange={handleChange} id="emailAddress" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required=""/>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                                <input type="password" name="password" value={formState.password} onChange={handleChange} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder="Password" required=""/>
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
                                            <input type="text" id="names" name="names"  value={formState.names} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-42 focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Names" required=""/>
                                        </div>
                                    </React.Fragment>
                                    <React.Fragment>
                                        <div className="mb-6">
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email Address</label>
                                            <input type="text" id="email" name="email"  value={formState.email} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 w-42 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required=""/>
                                        </div>
                                    </React.Fragment>
                                </div>
                                
                                <div className='flex'>
                                    <React.Fragment>
                                        <div className="mb-6 mr-6">
                                            <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone Number</label>
                                            <input type="text" id="phoneNumber" name="phoneNumber"  value={formState.phoneNumber} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-42 focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone" required=""/>
                                        </div>
                                    </React.Fragment>
                                    <React.Fragment>
                                        <div className="mb-6">
                                            <label htmlFor="nationalId" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">National Id</label>
                                            <input type="text" id="nationalId" name="nationalId"  value={formState.nationalId} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 w-42 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="National Id" required=""/>
                                        </div>
                                    </React.Fragment>
                                </div>
                                
                                <div className='flex'>
                                    <React.Fragment>
                                        <div className="mb-6 mr-6">
                                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                                            <input type="password" id="password" name="password"  value={formState.password} onChange={handleChange} style={{width: '32rem'}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required=""/>
                                        </div>
                                    </React.Fragment>
                                </div>
                            <button type="button" onClick={handleSubmit} style={{width: '32rem'}} className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-md text-sm  mt-8 px-8 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700  text-sm uppercase font-bold">Register</button>
                            <p className='w-full mt-2 text-sm flex'><p><Link to={'/login'}> <span className='text-blue-600 underline'>Login Here</span></Link></p></p>
                        </div>
                       :  page == 'create-vehicle' ? 
                       <div>
                            <div>
                            <React.Fragment>
                                       <div className="mb-6">
                                           <label htmlFor="modelName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Model Name</label>
                                           <input type="text" id="modelName" name="modelName"  value={formState.modelName} onChange={handleChange} style={{width: '32rem'}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Model" required=""/>
                                       </div>
                                   </React.Fragment>
                            </div>
                               <div className='flex'>
                                   <React.Fragment>
                                       <div className="mb-6 mr-6 flex-1">
                                           <label htmlFor="chasisNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Chasis Number</label>
                                           <input type="text" id="chasisNumber" name="chasisNumber"  value={formState.chasisNumber} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-42 focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Chasis" required=""/>
                                       </div>
                                   </React.Fragment>
                                   <React.Fragment>
                                       <div className="mb-6">
                                           <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Price</label>
                                           <input type="text" id="price" name="price"  value={formState.price} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 w-42 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Price" required=""/>
                                       </div>
                                   </React.Fragment>
                               </div>
                               
                               <div className='flex'>
                                   <React.Fragment>
                                       <div className="mb-6 mr-6 flex-1">
                                           <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Manufacture Company</label>
                                           <input type="text" id="company" name="company"  value={formState.company} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-42 focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Company" required=""/>
                                       </div>
                                   </React.Fragment>
                                   <React.Fragment>
                                       <div className="mb-6">
                                           <label htmlFor="year" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Manufacture Year</label>
                                           <input type="text" id="year" name="year"  value={formState.year} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 w-42 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Year" required=""/>
                                       </div>
                                   </React.Fragment>
                               </div>
                               
                           <button type="button" onClick={handleSubmit} style={{width: '32rem'}} className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-md text-sm  mt-8 px-8 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700  text-sm uppercase font-bold">Create Vehicle</button>
                       </div> 
                       : page == 'create-owner' ? 
                       <div>

                          <div className='flex'>
                              <React.Fragment>
                                  <div className="mb-6 mr-6 flex-1">
                                      <label htmlFor="names" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Full Names</label>
                                      <input type="text" id="names" name="names"  value={formState.names} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Names" required=""/>
                                  </div>
                              </React.Fragment>
                              <React.Fragment>
                                  <div className="mb-6">
                                      <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Address</label>
                                      <input type="text" id="address" name="address"  value={formState.address} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 w-42 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="address" required=""/>
                                  </div>
                              </React.Fragment>
                          </div>
                          
                          <div className='flex'>
                              <React.Fragment>
                                  <div className="mb-6 mr-6 flex-1">
                                      <label htmlFor="nationalId" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 dark:text-gray-300">National Id</label>
                                      <input type="text" id="nationalId" name="nationalId"  value={formState.nationalId} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-42 focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="National Id" required=""/>
                                  </div>
                              </React.Fragment>
                              <React.Fragment>
                                  <div className="mb-6">
                                      <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone Number</label>
                                      <input type="text" id="phoneNumber" name="phoneNumber"  value={formState.phoneNumber} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 w-42 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone Number" required=""/>
                                  </div>
                              </React.Fragment>
                          </div>
                          
                      <button type="button" onClick={handleSubmit} style={{width: '32rem'}} className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-md text-sm  mt-8 px-8 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700  text-sm uppercase font-bold">Create Owner</button>
                  </div> 
                   : page == 'create-record' ? 
                   <div>

                      <div className='flex'>
                          <React.Fragment>
                              <div className="mb-6 mr-6 flex-1">
                              <label for="vehicles" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Choose a Vehicle</label>
                                <select id="vehicles" name={'vehicleId'} value={formState.vehicleId} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="">Vehicles</option>
                                {vehicles.map(vehicle => (
                                    <option value={vehicle._id}>{vehicle.modelName} {vehicle.chasisNumber} {vehicle.year} </option>
                                ))}
                                </select>
                              </div>
                          </React.Fragment>
                      </div>

                      <div className='flex'>
                          <React.Fragment>
                              <div className="mb-6 mr-6 flex-1">
                              <label for="owners" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Choose an Owner</label>
                                <select id="owners" value={formState.ownerId} onChange={handleChange} name={'ownerId'} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="">Owners</option>
                               
                                {owners.map(owner => (
                                    <option value={owner._id}>{owner.names} #{owner.nationalId} </option>
                                ))}
                                </select>
                              </div>
                          </React.Fragment>
                      </div>

                      
                  <button type="button" onClick={handleSubmit} style={{width: '32rem'}} className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-md text-sm  mt-8 px-8 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700  text-sm uppercase font-bold">Create Vehicle Owner</button>
              </div> 
                            : null



                    }
                            
                        </form>

            </React.Fragment>
    )
}

