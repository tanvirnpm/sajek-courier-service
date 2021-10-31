import React from 'react';

const HeroCarousel = () => {
    return (
        <div className="container">
            <div id="carouselExampleCaptions" className="carousel slide my-3" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img style={{height: '400px'}} src="https://media-eng.dhakatribune.com/uploads/2021/06/pathao-tong-1585128259698-1623691413280.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block text-dark bg-light">
                            <h5>Merchant Delivery Service</h5>
                            <p>We understand the hustle you go through while building your business, we empathise with the nervousness of your very first-order. We see the hope in y...</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img style={{height: '400px'}} src="https://img.freepik.com/free-vector/customer-very-happy-receive-package-order-through-smartphone-application_197170-301.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block text-dark bg-light">
                            <h5>Person 2 Person Delivery (P2P)</h5>
                            <p>In a generation where everything happens in an instant, delivery services also need to level up their game. Whether you need to send your father’s rea....</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img style={{height: '400px'}} src="https://image.freepik.com/free-vector/people-ordering-food-cafe-online_74855-5913.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block text-dark bg-light">
                            <h5>Parcel Pick & Drop Service</h5>
                            <p>Currently we deliver and pick parcels by bicycle, motorbike and pickup vans based on the size and volume of parcels. We have the following delivery ca...</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default HeroCarousel;