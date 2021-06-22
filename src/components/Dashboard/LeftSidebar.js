/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link, useHistory } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {reactLocalStorage} from 'reactjs-localstorage';

import { removeUserSession } from '../../Utils/Common';

export default function LeftSidebar(props) {

    let history = useHistory();

    const logout = () => {
        toast.success("Logout Successfully...", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        reactLocalStorage.remove('isLoggedIn');
        reactLocalStorage.remove('userId');

        removeUserSession();
        history.push('/signin')
    }

    return (
        <>
        <ToastContainer />
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        <div className="position-sticky pt-5">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link to={'/dashboard'} className="nav-link active"> 
                                        <i className="bi bi-house-door-fill dashboard-icons"></i>
                                        Dashboard
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/profile'} className="nav-link"> 
                                        <i className="bi bi-person-circle dashboard-icons"></i>
                                        Profile
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/post'} className="nav-link"> 
                                        <i className="bi bi-grid-fill dashboard-icons"></i>
                                        Post
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="#" onClick={logout} className="nav-link"> 
                                        <i className="bi bi-box-arrow-right dashboard-icons"></i>
                                        Logout
                                    </Link>
                                </li>
                            </ul>

                        </div>
                    </nav>
        </>
    )
}
