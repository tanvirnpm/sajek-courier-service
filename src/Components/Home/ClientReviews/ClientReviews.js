import React from 'react';

const ClientReviews = () => {
    return (
        <div className="container">
            <div className="row justify-content-center bg-light py-5">
                <div className="col-md-6">
                    <div className="d-flex flex-column justify-content-center text-center mb-5">
                        <h1 className="py-3">Client Reviews</h1>
                        <p>A service review is a review of an organisation's services designed to identify potential service delivery improvements. A Service Review can be used to improve the organisation's efficiency and effectiveness, and assists in addressing financial sustainability.</p>
                    </div>
                    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <img style={{ height: '400px' }} src="https://i.pinimg.com/474x/57/94/df/5794df8d0345bdb497454dd822625813.jpg" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block  bg-dark text-white">
                                    <h5>Mizan Hassan</h5>
                                    <p>Sajek Courier can make a good impression on courier business if they do the deliver fast</p>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img style={{ height: '400px' }} src="https://us.123rf.com/450wm/yacobchuk/yacobchuk2008/yacobchuk200801413/153588199-kind-brunette-male-person-standing-on-the-foreground-while-waiting-for-the-administrator.jpg?ver=6" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block bg-dark text-white">
                                    <h5>Mohammad Abdullah Maruf</h5>
                                    <p>Good For Parcel Delivery.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img style={{ height: '400px' }} src="https://i.dailymail.co.uk/i/pix/2017/04/20/13/3F6B966D00000578-4428630-image-m-80_1492690622006.jpg" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block  bg-dark text-white">
                                    <h5>Sadek Mizan</h5>
                                    <p>Sajke is well maintained service but too complicated.</p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientReviews;