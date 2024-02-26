import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./team.module.css";

const Team = () => {
  const teamData = [
    { name: "John Doe", title: "CEO", img: "person.jpg" },
    { name: "Jane Doe", title: "CTO", img: "person.jpg" },
    { name: "John Doe", title: "CEO", img: "person.jpg" },
    { name: "Jane Doe", title: "CTO", img: "person.jpg" },
  ];
  return (
    <section className={styles.teamWrapper}>
      <h3>
        <hr />
        OUR TEAM
      </h3>
      <h1>Our Leadership Team</h1>
      <section className={styles.cardWrapper}>
        <section className={styles.teamCardDesign}></section>

        {teamData.map((value, indx) => {
          return (
            <div className={styles.card} key={indx}>
              <div className={styles.imageSection}>
                <img src={value.img} className="card-img-top" alt="..." />
                <div className={styles.socialMedia}>
                  <i className="bi bi-facebook"></i>
                  <i className="bi bi-twitter"></i>
                  <i className="bi bi-instagram"></i>
                  <i className="bi bi-linkedin"></i>
                </div>
              </div>
              <div className={styles.desigination}>
                <span className="card-text">{value.name}</span>
                <p className="card-text">{value.title}</p>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default Team;
