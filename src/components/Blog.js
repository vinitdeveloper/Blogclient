import React from 'react'
import ReadMoreReact from 'read-more-react';
import ReactTimeAgo from 'react-time-ago'

export default function Blog(props) {
    return (
        <>
            <div className="card mb-3">
                <div className="row g-0 container-mb">
                    <div className="col-md-8 mbp-2">
                        <div className="card-body">
                            <h5 className="card-title text-start fw-bold blog-title">{props.postData.title}</h5>
                            <p className="card-text text-start">

                            {/* {props.postData.description.replace(/<[^>]+>/g, '')} */}
                            
                            <ReadMoreReact text={props.postData.description.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, '')}
                                readMoreText="Read More..."/>
                            </p>
                            <p className="card-text text-start">
                                <small className="text-muted">Last updated <ReactTimeAgo date={props.postData.updated_at} locale="en-US"/></small>
                                <span className="vote-section text-muted">
                                    {/* <i className="bi bi-hand-thumbs-down">
                                        <span className="vote-counter">40</span>
                                    </i>
                                    <i className="bi bi-hand-thumbs-up">
                                        <span className="vote-counter">10</span>
                                    </i> */}
                                    {/* <i className="bi bi-hand-thumbs-up-fill"></i> */}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 mbp-1">
                        <img src={props.postData.image} className="img-fluid" alt={props.postData.title} style={{width:'285px', height:'196px', borderRadius:'5px'}} />
                    </div>
                </div>
            </div>
        </>
    )
}
