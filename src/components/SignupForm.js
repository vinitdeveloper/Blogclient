import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignupForm() {

    const[username, setUsername] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        // alert(`Submitting Name ${username} ${email} ${password}`)
        if(username === '' && email === '' && password === ''){
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
            axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`, {
                username: username,
                email: email,
                password: password
              })
              .then(function (response) {
                // console.log(response);
                toast.success('Signup Successfully...', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
              })
              .catch(function (error) {
                console.log(error);
              });
        }

    }


    return (
        <div className="p-3 mobile-mb">
            <ToastContainer />
            <div className="container text-left">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h3>Signup Page</h3>
                        <form className="row g-3" onSubmit={handleSubmit}>
                            <div className="col-12">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input type="text" className="form-control" id="username" value={username} onChange={e => setUsername(e.target.value)} aria-describedby="usernameHelp" />
                                <div id="usernameHelp" className="form-text">We'll never share your username with anyone else.</div>
                            </div>
                            <div className="col-12">
                                <label htmlFor="emailAddress" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="emailAddress" value={email} onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className="col-12">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" value={password} onChange={e => setPassword(e.target.value)} />
                            </div>
                            <button type="submit" className="btn btn-primary">Signup</button>
                        </form>

                        <div className="pt-3">
                            <Link to={'/signin'} className="nav-link active"> Already have an account </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
