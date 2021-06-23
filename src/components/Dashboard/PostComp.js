import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import LeftSidebar from './LeftSidebar'

import axios from 'axios';

import {reactLocalStorage} from 'reactjs-localstorage';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PostComp() {

    const[update, setUpdate] = useState(0);
    const[posts, setPosts] = useState([]);

    useEffect(()=>{

        let userID = reactLocalStorage.get('userId');

        axios.get(`${process.env.REACT_APP_API_URL}/posts/user/${userID}`)
        .then(function (response) {
            // handle success
            setPosts(response.data.data)
            setUpdate(response.data.data.length)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    },[update])

    const removePost = (post_id) => {
        console.log('working ',post_id)

        axios.delete(`${process.env.REACT_APP_API_URL}/posts/${post_id}`)
            .then(function (response) {
                setUpdate(0)
                toast.success('Post removed Successfully...', {
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
            <div className="container-fluid">
                <div className="row">
                    <LeftSidebar />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mb-5">
                        <div className="container d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Post</h1>
                            <div className="btn-toolbar mb-2 mb-md-0">
                                <Link to={'/add-post'} className="btn btn-outline-primary"> 
                                    <i className="bi bi-plus-circle-fill dashboard-icons"></i>
                                    Add New Post
                                </Link>
                            </div>
                        </div>

                        {/* <h2>Section title</h2> */}

                        <div className="container table-responsive">
                                    
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col" width="5%">#</th>
                                    <th scope="col" width="15%">Title</th>
                                    <th scope="col" width="50%" className="mb-hide">Description</th>
                                    <th scope="col" width="10%" className="text-end">Visiblity</th>
                                    <th scope="col" width="20%" className="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts.map((post, index) => 
                                    <tr key={index}>
                                        <th width="5%" scope="row">{index + 1}</th>
                                        <td width="15%"><b>{post.title}</b></td>
                                        <td width="50%" className="mb-hide">
                                            {post.description && post.description.length > 250 ? post.description.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, '').substr(0, 250)+'...' : post.description.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, '') }
                                        </td>
                                        <td width="10%" className="text-end">
                                            {post.status === true
                                                ? <span className="badge bg-success">public</span>
                                                : <span className="badge bg-primary">private</span>
                                            }                                        
                                        </td>
                                        <td width="20%" className="text-center">
                                            <Link to={`/edit-post/${post._id}`} className="btn btn-outline-primary"> 
                                                <i className="bi bi-pen-fill"></i>
                                                Edit
                                            </Link>
                                            <button type="button" className="btn btn-outline-danger" onClick={() => removePost(post._id)}>
                                                <i className="bi bi-trash-fill"></i>
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                            
                        </div>
                        
                    </main>
                </div>
            </div>
        </>
    )
}
