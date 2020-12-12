import React from "react";
const images = [
  "https://stratacent.bigdropinc.net/wp-content/uploads/2020/09/1.jpg",
  "https://stratacent.bigdropinc.net/wp-content/uploads/2020/09/2.jpg",
  "https://stratacent.bigdropinc.net/wp-content/uploads/2020/09/3.jpg",
  "https://stratacent.bigdropinc.net/wp-content/uploads/2020/09/4.jpg",
];

const Slider = () => {
  return (
    <div>
      <div
        id="home-slider"
        className="carousel slide"
        data-ride="carousel"
        data-interval="30000000">
        <ol className="carousel-indicators">
          <li
            data-target="#home-slider"
            data-slide-to="0"
            className="active"></li>
          <li data-target="#home-slider" data-slide-to="1"></li>
          <li data-target="#home-slider" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={images[0]}
              className="d-block w-100 carousel-image"
              alt="slider"
            />
            <div className="carousel-caption">
              <h2>First slide label</h2>
              <button className="btn btn-main">Call To Action</button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={images[1]}
              className="d-block w-100 carousel-image"
              alt="slider"
            />
            <div className="carousel-caption">
              <h2>Second slide label</h2>
              <button className="btn btn-main">Call To Action</button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={images[2]}
              className="d-block w-100 carousel-image"
              alt="slider"
            />
            <div className="carousel-caption">
              <h2>Third slide label</h2>
              <button className="btn btn-main">Call To Action</button>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#home-slider"
          role="button"
          data-slide="prev">
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#home-slider"
          role="button"
          data-slide="next">
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Slider;
