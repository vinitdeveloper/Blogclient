import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {reactLocalStorage} from 'reactjs-localstorage';

import { setUserSession } from '../Utils/Common';


export default function SigninForm(props) {

    let history = useHistory();

    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        // alert(`Submitting Name ${username} ${email} ${password}`)
        if(username === '' && password === ''){
            toast.error('All fields is required!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }else{
            axios.post(`${process.env.REACT_APP_API_URL}/auth/signin`, {
                username: username,
                password: password
              })
              .then(function (response) {
                if(response.data.data !== null){
                    toast.success(response.data.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });

                    reactLocalStorage.set('isLoggedIn', true);
                    reactLocalStorage.set('userId', response.data.data._id);

                    setUserSession(true, response.data.data._id);
                    history.push('/dashboard')


                }else{
                    toast.error(response.data.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
                
              })
              .catch(function (error) {
                console.log(error);
              });
        }

    }
    return (
        <div className="p-3">
            <ToastContainer />
            <div className="container text-left">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h3>Signin Page</h3>
                        <form className="row g-3" onSubmit={handleSubmit}>
                            <div className="col-12">
                                <label htmlFor="username" className="form-label">Username/Email</label>
                                <input type="text" className="form-control" id="username" value={username} onChange={e => setUsername(e.target.value)} aria-describedby="usernameHelp" />
                                <div id="usernameHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="col-12">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" value={password} onChange={e => setPassword(e.target.value)} />
                            </div>
                            <button type="submit" className="btn btn-primary">Signin</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}
