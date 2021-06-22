import React, { useState, useEffect } from 'react'
import LeftSidebar from './LeftSidebar'

import axios from 'axios';
import {reactLocalStorage} from 'reactjs-localstorage';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProfileComp() {
    
    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[email, setEmail] = useState("");
    const[mobile, setMobile] = useState("");
    const[address, setAddress] = useState("");
    const[city, setCity] = useState("");
    const[zip, setZip] = useState("");
    const[website, setWebsite] = useState("");

    useEffect(()=>{

        let userID = reactLocalStorage.get('userId');

        axios.get(`${process.env.REACT_APP_API_URL}/auth/${userID}`)
        .then(function (response) {
            // handle success
            setFirstName(response.data.data.firstname)
            setLastName(response.data.data.lastname)
            setEmail(response.data.data.email)
            setMobile(response.data.data.mobile)
            setAddress(response.data.data.address)
            setCity(response.data.data.city)
            setZip(response.data.data.zipcode)
            setWebsite(response.data.data.website)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    },[])

    const handleProfileSubmit = (evt) => {
        evt.preventDefault();

        let userID = reactLocalStorage.get('userId');

        axios.put(`${process.env.REACT_APP_API_URL}/auth/${userID}`, {
                firstname: firstName,
                lastname: lastName,
                mobile: mobile,
                address: address,
                city: city,
                zipcode: zip,
                website: website
            })
            .then(function (response) {
                toast.success('Profile Updated Successfully...', {
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

    return (
        <>
        <ToastContainer />
            <div className="container-fluid mobile-mb">
                <div className="row">
                    <LeftSidebar />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className="container d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Profile</h1>
                            <div className="btn-toolbar mb-2 mb-md-0">
                                {/* <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="#">Home</a>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <a href="#">Library</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">Data</li>
                                    </ol>
                                </nav> */}
                            </div>
                        </div>

                        {/* <h2>Section title</h2> */}

                        <div className="container">
                                    
                            <form className="row g-3" onSubmit={handleProfileSubmit}>
                                <div className="col-md-6">
                                    <label htmlFor="Firstname" className="form-label">Firstname</label>
                                    <input type="text" className="form-control" id="Firstname" onChange={e => setFirstName(e.target.value)} value={firstName} placeholder="Enter Firstname" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="Lastname" className="form-label">Lastname</label>
                                    <input type="text" className="form-control" id="Lastname" onChange={e => setLastName(e.target.value)} value={lastName} placeholder="Enter Lastname" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputEmail4" className="form-label">Email Address</label>
                                    <input type="email" className="form-control" id="inputEmail4" value={email} disabled />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="Mobile" className="form-label">Mobile Number</label>
                                    <input type="number" className="form-control" id="Mobile" onChange={e => setMobile(e.target.value)} value={mobile} placeholder="Enter Mobile number"  />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputAddress" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="inputAddress" onChange={e => setAddress(e.target.value)} value={address} placeholder="Example Adddress : 1234 Main St" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputCity" className="form-label">City</label>
                                    <input type="text" className="form-control" id="inputCity" onChange={e => setCity(e.target.value)} value={city} placeholder="Enter City name" />
                                </div>
                                <div className="col-md-2">
                                    <label htmlFor="inputZip" className="form-label">Zip Code</label>
                                    <input type="text" className="form-control" id="inputZip" onChange={e => setZip(e.target.value)} value={zip} placeholder="Enter Postal code" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="website" className="form-label">Website URL</label>
                                    <input type="url" className="form-control" id="website" onChange={e => setWebsite(e.target.value)} value={website} placeholder="Example Url : http://blog.com" />
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary">Update</button>
                                </div>
                            </form>
                            
                        </div>
                        
                    </main>
                </div>
            </div>
        </>
    )
}
