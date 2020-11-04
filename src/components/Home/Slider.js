import React from 'react'

const Slider = () => {
    const PUBLIC_URL = process.env.PUBLIC_URL;
    return (
        <div>
            <div id="home-slider" className="carousel slide" data-ride="carousel" data-interval="3000000">
                <ol className="carousel-indicators">
                    <li data-target="#home-slider" data-slide-to="0" className="active"></li>
                    <li data-target="#home-slider" data-slide-to="1"></li>
                    <li data-target="#home-slider" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={PUBLIC_URL + "/assets/images/sample.jpg"} className="d-block w-100 carousel-image" alt="slider" />
                        <div className="carousel-caption">
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            <button className="btn btn-dark">Call To Action</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={PUBLIC_URL + "/assets/images/sample.jpg"} className="d-block w-100 carousel-image" alt="slider" />
                        <div className="carousel-caption">
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={PUBLIC_URL + "/assets/images/sample.jpg"} className="d-block w-100 carousel-image" alt="slider" />
                        <div className="carousel-caption">
                            <h5>Third slide label</h5>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#home-slider" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#home-slider" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

        </div>
    )
}

export default Slider