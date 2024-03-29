import React from "react";

import styles from "./process.module.css";

const Process = () => {
  const [clickedData, setClickedData] = React.useState(0);
  const cardData = [
    { title: "Consultation", img: "programming.png" },
    { title: "Design", img: "programming.png" },
    { title: "Build", img: "programming.png" },
    { title: "Launch", img: "programming.png" },
    { title: "Grow", img: "programming.png" },
    { title: "Support", img: "programming.png" },
  ];

  const cardDataDetails = [
    {
      title: "Consultation",
      img: "consultation_art.png",
      description:
        "We will consult with you to understand your business and your goals. We will then provide you with a plan to achieve your goals.",
    },
    {
      title: "Design",
      img: "consultation_art.png",
      description:
        "We will design a website that is tailored to your business and your goals.",
    },
    {
      title: "Build",
      img: "consultation_art.png",
      description:
        "We will build a website that is tailored to your business and your goals.",
    },
    {
      title: "Launch",
      img: "consultation_art.png",
      description:
        "We will launch your website and make sure it is running smoothly.",
    },
    {
      title: "Grow",
      img: "consultation_art.png",
      description:
        "We will help you grow your business and achieve your goals.",
    },
    {
      title: "Support",
      img: "consultation_art.png",
      description:
        "We will provide you with support to help you achieve your goals.",
    },
  ];

  return (
    <div className={styles.processWrapper}>
      <h2>
        <hr />
        Our Process
      </h2>
      <h1>The Development Process</h1>
      <p className={styles.processWrapperPara}>
        Creating a website is a very complex and painstaking process that takes
        a lot of time. The best web designers are the ones who take the time to
        get this process right.
      </p>
      <Accordion cardDataDetails={cardDataDetails} />
      <ul className={styles.processCardWrapper}>
        <div className={styles.processCardsWrapper}>
          {cardData.map((card, index) => {
            return (
              <div
                className={` ${styles.processCard}`}
                onClick={(e) => {
                  setClickedData(index);
                }}
                key={index}
              >
                <div
                  className={`card d-flex flex-column justify-content-center align-items-center p-2 position-relative ${styles.processCardDiv}`}
                >
                  <span className="position-absolute top-0 start-100 translate-middle p-2 text-bg-light border border-light rounded-circle">
                    {index + 1}
                  </span>
                  <img src={card.img} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <section className={styles.processCardDetailsWrapper}>
          {cardDataDetails.map((card, index) => {
            if (index === clickedData) {
              return (
                <div
                  className={`card mb-3 ${styles.processcardDetails}`}
                  key={index}
                >
                  <div
                    className={`row g-0 flex-grow-1 p-2 ${styles.processCardDetailsContent}`}
                  >
                    <div className="col-md-8 ">
                      <div className="card-body d-flex flex-column justify-content-start align-items-start ">
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-text">{card.description}</p>
                      </div>
                    </div>
                    <div className="col-md-4 flex-shrink-1 d-flex justify-content-center">
                      <img
                        src={card.img}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </section>
      </ul>
    </div>
  );
};

function Accordion({ cardDataDetails }) {
  return (
    <>
      {cardDataDetails.map((card, index) => {
        return (
          <div
            className={`accordion ${styles.accordion}`}
            id="accordionExample"
            key={index}
          >
            <div className="accordion-item">
              <h2 className={`accordion-header ${styles.accordionHeader}`}>
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <img src={card.img} alt="" srcset="" />
                  {card.title}
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className={`accordion-body ${styles.accordionBody}`}>
                  {card.description}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Process;
