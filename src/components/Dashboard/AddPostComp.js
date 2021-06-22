import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import LeftSidebar from './LeftSidebar'

import axios from 'axios';

import {reactLocalStorage} from 'reactjs-localstorage';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


export default function AddPostComp() {

    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("");
    const[image, setImage] = useState("");
    const[status, setStatus] = useState(true);


    const handleAddPostSubmit = (evt) => {
        evt.preventDefault();

        axios.post(`${process.env.REACT_APP_API_URL}/posts`, {
                user_id: reactLocalStorage.get('userId'),
                title: title,
                description: description,
                image: image,
                status: status
            })
            .then(function (response) {
                toast.success('New Post added Successfully...', {
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
    
    const onFileChange = event => {

        const formData = new FormData();
        formData.append('file',event.target.files[0])
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        axios.post(`${process.env.REACT_APP_API_URL}/posts/upload_img`, formData,config)
        .then((response) => {
            //handle success
            setImage(response.data.mediaSource)

        }).catch((error) => {
            //handle error
            console.log(error);
        });

        // Update the state
        // this.setState({ selectedFile: event.target.files[0] });
      
      };

    return (
        <>
        <ToastContainer />
            <div className="container-fluid mobile-mb">
                <div className="row">
                    <LeftSidebar />

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className="container d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Add New Post</h1>
                            <div className="btn-toolbar mb-2 mb-md-0">
                                <Link to={'/post'} className="btn btn-outline-primary"> 
                                    <i className="bi bi-arrow-left dashboard-icons"></i>
                                    Back to Post Page
                                </Link>
                            </div>
                        </div>

                        {/* <h2>Section title</h2> */}

                        <div className="container">
                                    
                            <form className="g-3" onSubmit={handleAddPostSubmit}>

                                <div className="row">
                                    <div className="col-md-8 col-sm-12">

                                        <div className="row mb-3">
                                            <div className="col">
                                                <label htmlFor="title" className="form-label">Post Title</label>
                                                <input type="text" className="form-control" id="title" onChange={e => setTitle(e.target.value)} value={title}  placeholder="Enter Post Title" />
                                            </div>
                                        </div>

                                        {/* <div className="row mb-3">
                                            <div className="col">
                                                <label htmlFor="description" className="form-label">Post Description</label>
                                                <textarea className="form-control" id="description" onChange={e => setDescription(e.target.value)} value={description} rows="13" placeholder="Enter Description"></textarea>
                                            </div>
                                        </div> */}

                                        <div className="row mb-3">
                                            <div className="col">
                                                <label htmlFor="description" className="form-label">Post Description</label>
                                                <CKEditor
                                                    editor={ ClassicEditor }
                                                    data={description}
                                                    onChange={ ( event, editor ) => {
                                                        const data = editor.getData();
                                                        setDescription(data)
                                                    } }
                                                />
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="col-md-4 col-sm-12 container-mb">
                                        
                                        <div className="row mt-4 mbp-2">
                                            <div className="col-12">
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" defaultChecked={status ? true : false } onChange={e => setStatus(!e.target.value)} />
                                                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Public Visiblity</label>
                                                </div>
                                            </div>
                                            <div className="col-12 mt-4">
                                                <button type="submit" className="btn btn-primary">Publish</button>
                                            </div>
                                        </div>

                                        <div className="row mt-4 mbp-1">
                                            <div className="col-12">
                                                <div className="mb-3">
                                                    <label htmlFor="formFile" className="form-label">Featured Image</label>
                                                    <input className="form-control" type="file" id="formFile" onChange={onFileChange} />
                                                    <div className="preview-image mt-2">
                                                        { image && <img src={image} className="rounded img-thumbnail" alt="..." /> }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                
                            </form>
                            
                        </div>
                        
                    </main>
                </div>
            </div>
        </>
    )
}
