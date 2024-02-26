import React from "react";

import styles from "./casestudy.module.css";

const CaseStudy = () => {
  const caseStudiesData = [
    { title: "Analysis of Security", area: "Technology", img: "casestudy.jpg" },
    { title: "Analysis of Security", area: "Technology", img: "casestudy.jpg" },
    { title: "Analysis of Security", area: "Technology", img: "casestudy.jpg" },
    { title: "Analysis of Security", area: "Technology", img: "casestudy.jpg" },
  ];

  const statsData = [
    { number: 500, text: "Happy Clients" },
    { number: 500, text: "Happy Clients" },
    { number: 100, text: "Business Partners" },
    { number: 850, text: "Projects Done" },
  ];
  return (
    <div className={styles.supercasestudyWrapper}>
      <div className={styles.casestudyWrapper}>
        <h3>
          <hr />
          CASE STUDIES
        </h3>
        <section className={styles.casestudyHeader}>
          <h1>Our Latest Case Studies </h1>
          <button>View More</button>
        </section>
        <section className={styles.casestudyOptions}>
          <p>Technology</p>
          <p>Technology</p>
          <p>Technology</p>
          <p>Technology</p>
        </section>
        <section className={styles.imageCardWrapper}>
          {caseStudiesData.map((data, index) => {
            return (
              <div className={`card  ${styles.imageCard}`} key={index}>
                <img src={data.img} className="card-img" alt="..." />
                <div className={`card-img-overlay ${styles.imageCardContent}`}>
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.area}</p>
                </div>
              </div>
            );
          })}
        </section>
        <section className={styles.statsSection}>
          {statsData.map((data, index) => {
            return (
              <div className="card d-flex flex-column justify-content-center align-items-center">
                {/* <img src="..." className="card-img-top" alt="..." /> */}
                <i class="bi bi-emoji-smile"></i>
                <div
                  className={`card-body d-flex flex-column justify-content-center align-items-center ${styles.statsSectionContent}`}
                >
                  <h5 className="card-title">{data.number}</h5>
                  <p className="card-text">{data.text}</p>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default CaseStudy;
