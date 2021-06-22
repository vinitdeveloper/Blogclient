import React, { useState, useEffect } from 'react'
import Blog from './Blog'

import axios from 'axios';

export default function Content() {

    const[posts, setPosts] = useState([]);

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_URL}/posts/public_posts`)
        .then(function (response) {
            // handle success
            setPosts(response.data.data)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    },[])

    return (
        <div className="content-part p-5 mobile-mb">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-12">

                        {posts.map((post, index) => 
                            <Blog postData={post} key={index} />
                        )}
                
                    </div>
                    <div className="col-md-4 col-sm-12">
                        side bar section
                    </div>
                </div>
            </div>
        </div>
    )
}
