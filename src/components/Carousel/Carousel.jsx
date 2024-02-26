import React from "react";
import styles from "./carousel.module.css";

const Carousel = () => {
  return (
    <section className={styles.carouselSection}>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://picsum.photos/100/150?random=1"
              className="d-block w-100"
              alt="..."
            />
            <section className={styles.carouselContent}>
              <div
                className="card-img-overlay d-flex flex-column justify-content-center align-items-start text-light "
                style={{ marginLeft: "12rem" }}
              >
                <h2 className="card-title ">New Online Task Management</h2>
                <h1 className="card-text">Manage Less Do More</h1>

                <div className={styles.caruoselButtonSection}>
                  <button className="btn btn-primary mr-4">Get Started</button>
                  <button className="btn btn-primary"> Demo</button>
                </div>
              </div>
            </section>
          </div>
          <div className="carousel-item ">
            <img
              src="https://picsum.photos/100/150?random=1"
              className="d-block w-100"
              alt="..."
            />
            <section className={styles.carouselContent}>
              <div
                className="card-img-overlay d-flex flex-column justify-content-center align-items-start text-light "
                style={{ marginLeft: "12rem" }}
              >
                <h2 className="card-title ">New Online Task Management</h2>
                <h1 className="card-text">Manage Less Do More</h1>

                <div className={styles.caruoselButtonSection}>
                  <button className="btn btn-primary mr-4">Get Started</button>
                  <button className="btn btn-primary"> Demo</button>
                </div>
              </div>
            </section>
          </div>
          <div className="carousel-item ">
            <img
              src="https://picsum.photos/100/150?random=1"
              className="d-block w-100"
              alt="..."
            />
            <section className={styles.carouselContent}>
              <div
                className="card-img-overlay d-flex flex-column justify-content-center align-items-start text-light "
                style={{ marginLeft: "12rem" }}
              >
                <h2 className="card-title ">New Online Task Management</h2>
                <h1 className="card-text">Manage Less Do More</h1>

                <div className={styles.caruoselButtonSection}>
                  <button className="btn btn-primary mr-4">Get Started</button>
                  <button className="btn btn-primary"> Demo</button>
                </div>
              </div>
            </section>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Carousel;
