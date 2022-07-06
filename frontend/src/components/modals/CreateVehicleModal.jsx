import React, {useState, useEffect} from 'react';
import {Alert, Form } from '../';

export default function CreateVehicleModal() {
    const [response, setResponse] = useState(null);
    const [alert, setAlert] = useState(false);
    const [results, setResults] = useState(null);


    const login = async () => {
        setResults(null);
        try {
            console.log(form);
            let res = await loginToken(form.token);
            if (!res.success) {
                console.log(res);
                setAlert(true);
                res.message = `${res?.message}: ${res?.error}`;
                setResponse(res);
                setTimeout(() => {
                    setAlert(false);
                }, 4000)
            } else {
                console.log(res);
                setResults(res.data);
                setResponse(res);
                setTimeout(() => {
                    setAlert(false);
                }, 7000)
            }
        } catch(e) {
            console.log(e);
        }
    }
    const [form, setForm] = useState({
        email: '',
        password: ''
    });


    const closeAlert = () => {
        setAlert(false);
        setResponse(null);
    }

    useEffect(() => {
        // setAlert(true);
    }, [])

    return (
        <div>
                <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
             
                        <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Create New Vehicle
                            </h3>
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                            </button>
                        </div>

                        <div className="p-12">
                               <Form page={'register'} handleSubmit={login} formState={form} setFormState={setForm}/>
                       </div>
                    </div>
                </div>
            </div>
    )
}