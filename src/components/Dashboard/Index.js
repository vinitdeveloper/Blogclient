import React from 'react'
import LeftSidebar from './LeftSidebar'

export default function Index() {
    return (
        <>
            <div className="container-fluid mobile-mb">
                <div className="row">
                    <LeftSidebar />

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className="container d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Dashboard</h1>
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
                            <div className="row text-center pt-5">
                                <div className="col-md-4 col-sm-12">
                                    <div className="card text-white bg-primary mb-3">
                                        <div className="card-header">Header</div>
                                        <div className="card-body">
                                            <h5 className="card-title">Primary card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <div className="card text-white bg-success mb-3">
                                    <div className="card-header">Header</div>
                                    <div className="card-body">
                                        <h5 className="card-title">Success card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <div className="card text-dark bg-warning mb-3">
                                    <div className="card-header">Header</div>
                                    <div className="card-body">
                                        <h5 className="card-title">Warning card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row text-center pt-5">
                                <div className="col-md-4 col-sm-12">
                                    <div className="card text-white bg-primary mb-3">
                                        <div className="card-header">Header</div>
                                        <div className="card-body">
                                            <h5 className="card-title">Primary card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <div className="card text-white bg-success mb-3">
                                    <div className="card-header">Header</div>
                                    <div className="card-body">
                                        <h5 className="card-title">Success card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <div className="card text-dark bg-warning mb-3">
                                    <div className="card-header">Header</div>
                                    <div className="card-body">
                                        <h5 className="card-title">Warning card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </main>
                </div>
            </div>
        </>
    )
}
