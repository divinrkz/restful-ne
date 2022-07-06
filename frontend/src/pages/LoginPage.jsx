import React, {useState, useEffect} from 'react';
import {Alert, Form } from '../components';
import {API_URL, post} from '../utils/common.util'
import {useNavigate} from 'react-router-dom';
import { setToken } from '../services';

export function LoginPage() {
    const [response, setResponse] = useState(null);
    const [alert, setAlert] = useState(false);
    const [results, setResults] = useState(null);
    const navigate = useNavigate()


    const login = async () => {
        setResults(null);
        try {
            
            let res = await fetch(API_URL + '/auth/login', post(form));
            let data = await res.json();

            if (!data.success) {
                setAlert(true);
                setResponse( `${data?.message}`);
            } else {
                authenticate(data.data.token);
                window.location.href = ('/vehicles')

            }
        } catch(e) {
           setAlert(true);
           console.log('error', e)
           setResponse('Internal server error');
        }
    }
    const [form, setForm] = useState({
        email: '',
        password: ''
    });


    const authenticate = (token) => {
        setToken(token)
    }
    const closeAlert = () => {
        setAlert(false);
        setResponse(null);
    }

    useEffect(() => {
        // setAlert(true);
    }, [])

    return (
        <React.Fragment>
            <section className={'container h-screen flex flex-row'}>
                <div className='w-1/5'></div>
                <div className='w-1/5 justify-center items-center flex'>
                    <img src={'/images/logo.png'} style={{width: '40rem', height: '10rem'}}  alt="Logo" />
                </div>


                <div  className='  justify-center items-center flex'>
                    <div>
                     <div className="ml-60">
                        {alert ? <Alert success={response?.success} handleClose={closeAlert} message={`${response}`}/> : null}
                     </div>
                        <h4 className="mb-12 uppercase text-4xl font-bold text-center ml-32 w-full">Login to VMS</h4>
                        <div className='w-4/12 mx-auto'>
                                <Form page={'login'} handleSubmit={login} formState={form} setFormState={setForm}/>
                        </div>
                    </div>
                </div>   
            </section>
    </React.Fragment>
    )
}