import React, {useState, useEffect} from 'react';
import {Alert, Form, Tabber } from '../components';
import CreateOwnersModal from '../components/modals/CreateOwnerModal';
import { Pagination } from '../components/Pagination';
import {API_URL, get} from '../utils/common.util'


export function OwnersPage() {
    const [response, setResponse] = useState(null);
    const [alert, setAlert] = useState(false);
    const [owners, setOwners] = useState([])

    const getOwners = async () => {
        try {
            let res = await fetch(API_URL + '/owners', get());
            let data = await res.json();
            setOwners(data.data)
            
        } catch(e) {
            console.log(e);
        }
    }
    const [form, setForm] = useState({
        meterNumber: '',
        amount: ''
    });


    const closeAlert = () => {
        setAlert(false);
        setResponse(null);
    }

    useEffect(() => {
        // setAlert(true);
        getOwners();
    }, [])

    return (
        <React.Fragment>
            <div className='container lg:mx-32 md:mx-8 my-12'>
                <Tabber />
            
            
                <section className={'container mt-5'}>
                {alert ? <Alert success={response?.success} handleClose={closeAlert} message={`${response?.message}`}/> : null}
                        <div className='mx-6'>
                            <div className='mb-5 flex justify-end'>
                            <button class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="createOwnersModal">
                                Create Owner
                                </button>
                            </div>
                         <div class="relative overflow-x-auto shadow-md sm:rounded-lg mb-12">
                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                    <th scope="col" class="px-6 py-3">
                                           #
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Names
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            National ID
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Phone Number
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Address
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                   { owners.map((owner, i) => 
                                   (
                                    <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                                           <td class="px-6 py-4">
                                             {i + 1}
                                        </td>

                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                            {owner.names}
                                        </th>
                                        <td class="px-6 py-4">
                                        {owner.nationalId}
                                        </td>
                                        <td class="px-6 py-4">
                                         {owner.phoneNumber}
                                        </td>
                                        <td class="px-6 py-4">
                                            {owner.address}
                                        </td>
                                        <td class="px-6 py-4 text-right">
                                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View Vehicles</a>
                                        </td>
                                    </tr>
                                   ))
                            }
                                    
                                </tbody>
                            </table>
</div>
                            <Pagination/>
                        </div>
                </section>
            </div>   




            {/* {modales} */}
            <div id="createOwnersModal" tabindex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                <CreateOwnersModal />
            </div>
        </React.Fragment>
    )
}


