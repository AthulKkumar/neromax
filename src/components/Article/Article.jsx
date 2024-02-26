import React from "react";

import styles from "./article.module.css";

const Article = () => {
  const articles = [
    {
      title: "PhP Framewok for 2021",
      abstract:
        "Running a small business is a ton of work. As important as your website is to the success of your business, you...",
      tags: "Technology",
      date: "12th May 2021",
      img: "blog.webp",
    },
    {
      title: "PhP Framewok for 2021",
      abstract:
        "Running a small business is a ton of work. As important as your website is to the success of your business, you...",
      tags: "Technology",
      date: "12th May 2021",
      img: "blog.webp",
    },
    {
      title: "PhP Framewok for 2021",
      abstract:
        "Running a small business is a ton of work. As important as your website is to the success of your business, you...",
      tags: "Technology",
      date: "12th May 2021",
      img: "blog.webp",
    },
  ];

  const company = [
    { img: "company1.webp" },
    { img: "company2.webp" },
    { img: "company1.webp" },
    { img: "company2.webp" },
  ];
  return (
    <div className={styles.superArticleWrapper}>
      <div className={styles.articleWrapper}>
        <h3>
          <hr />
          RECENT ARTICLE
        </h3>
        <section className={styles.articleHeader}>
          <h1>
            Read Our Latest <br />
            <span> Article & Knwolage </span>
          </h1>
          <button>All Articles</button>
        </section>
        <section className={styles.articleCardWrapper}>
          {articles.map((article, index) => {
            return (
              <div class={`card ${styles.articleCard}`}>
                <img src={article.img} class="card-img-top" alt="..." />
                <div class={`card-body p-3 ${styles.articleCardBody} `}>
                  <a href="#" class="btn btn-primary">
                    {article.tags}
                  </a>
                  <p class="card-text">{article.date}</p>
                  <h5 class="card-title">{article.title}</h5>
                  <p class="card-text">{article.abstract}</p>
                  <button>
                    Read More <i class="bi bi-arrow-right"></i>
                  </button>
                </div>
              </div>
            );
          })}
        </section>
        <div className={styles.supercompanyWrapper}>
          <section className={styles.companyWrapper}>
            {company.map((company, index) => {
              return (
                <img
                  src={company.img}
                  alt="..."
                  class={`img-fluid ${styles.companyImg}`}
                />
              );
            })}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Article;
