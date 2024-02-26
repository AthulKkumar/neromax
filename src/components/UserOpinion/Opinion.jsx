import React from "react";

import styles from "./opinion.module.css";

const Opinion = () => {
  const opinions = [
    {
      company: "BlackTie",
      position: "Client of company",
      opinion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.",
      img: "quotation.png",
    },
    {
      company: "BlackTie",
      position: "Client of company",
      opinion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.",
      img: "quotation.png",
    },
    {
      company: "BlackTie",
      position: "Client of company",
      opinion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.",
      img: "quotation.png",
    },
  ];
  return (
    <div className={styles.superopinionWrapper}>
      <div className={styles.opinionWrapper}>
        <h2>OUR CLIENTS</h2>
        <h1>What Our Clients Says</h1>
        <div className={styles.superopinionCardWrapper}>
          <section className={styles.opinionCardWrapper}>
            {opinions.map((opinion, index) => {
              return (
                <div className={`card mb-3 ${styles.opinionCard}`} key={index}>
                  <div className="row g-0 ">
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{opinion.company}</h5>
                        <p class="card-text">
                          <small class="text-body-secondary">
                            {opinion.position}
                          </small>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <img
                        src={opinion.img}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <p className="card-text">{opinion.opinion}</p>
                  </div>
                </div>
              );
            })}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Opinion;
