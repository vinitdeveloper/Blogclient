import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getToken } from '../Utils/Common';

export default function Header() {

    const [authLoading, setAuthLoading] = useState(false);

    useEffect(() => {

        const token = getToken();
    
        if(token){
            console.log('token ',token)
            setAuthLoading(token)
        }else{
            console.log('not token ')
        }
    
      }, []);

    return (
        <div className="primary-header">
            <div className="container">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <Link to={'/'} className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                        <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" />
                        <span className="fs-4"> Logo</span>
                    </Link>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <Link to={'/'} className="nav-link active"> Home </Link>
                        </li>

                        {!authLoading && 
                            <>
                                <li className="nav-item">
                                    <Link to={'/signin'} className="nav-link"> SignIn </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/signup'} className="nav-link"> SignUp </Link>
                                </li>
                            </>
                        }

                        {authLoading && 
                            <>
                               <li className="nav-item">
                                    <Link to={'/dashboard'} className="nav-link"> Dashboard </Link>
                                </li>
                            </>
                        }
                        
                    </ul>
                </header>
            </div>
        </div>
    )
}
