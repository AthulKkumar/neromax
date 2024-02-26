import React from "react";
import styles from "./info.module.css";

const Info = () => {
  const data = [
    {
      title: "Marketing",
      description:
        "We provide marketing solutions to help you grow your business.",
      img: "kpi.png",
    },
    {
      title: "Development",
      description:
        "We provide development solutions to help you grow your business.",
      img: "programming.png",
    },
    {
      title: "Design",
      description:
        "We provide design solutions to help you grow your business.",
      img: "application.png",
    },
    {
      title: "SEO",
      description: "We provide SEO solutions to help you grow your business.",
      img: "programming.png",
    },
    {
      title: "Social Media",
      description:
        "We provide social media solutions to help you grow your business.",
      img: "programming.png",
    },
    {
      title: "Content",
      description:
        "We provide content solutions to help you grow your business.",
      img: "programming.png",
    },
  ];
  return (
    <div className={styles.infoSection}>
      <h3>
        <hr />
        WHAT WE DO
      </h3>
      <h1>We Make Things Possible</h1>
      <p style={{ width: "50%", textAlign: "center" }}>
        Our solutions are simple, robust and are aesthetically designed to keep
        the customer engaged to deliver consistent growth for your business.
      </p>
      <section className={styles.infoCards}>
        {data.map((value, indx) => {
          return (
            <div className={styles.card} key={indx}>
              {/* <img src="..." className="card-img-top" alt="..." /> */}
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <img src={value.img} alt="" className={styles.cardIcon} />
                <h5 className="card-title">{value.title}</h5>
                <p className="card-text">{value.description}</p>
                <div className={styles.infoCardButton}>
                  <p>READ MORE</p>
                  <i class="bi bi-arrow-right"></i>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <section className={styles.contactCard}>
        <div className="card text-bg-dark">
          <img
            src="https://picsum.photos/200/300/?blur=2"
            className="card-img"
            alt="..."
          />
          <div className="card-img-overlay d-inline-flex justify-content-between align-items-center">
            <div className=" d-flex flex-column p-2">
              <p className="card-text">
                Why Do You Need a Business Application?
              </p>
              <h5 className="card-title">Let's Build Your Application!</h5>
            </div>
            <button>Contact us</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Info;
