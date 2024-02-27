import React from "react";

import styles from "./footer.module.css";

const Footer = () => {
  const companyDetails = ["About Us", "Blog", "Careers", "Contact Us"];
  const services = ["Community", "Developers", "Mobile Apps", "Websites"];
  const contact = ["Support", "Live Chat", "Customer Service"];
  const Community = ["Blogs ", "Review", "Protected"];
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.companyDetails}>
        <section className={styles.footerInfo}>
          <h4>Company</h4>

          {companyDetails.map((item) => {
            return <li>{item}</li>;
          })}
        </section>
        <section className={styles.footerInfo}>
          <h4>Services</h4>
          {services.map((item) => {
            return <li>{item}</li>;
          })}
        </section>
        <section className={styles.footerInfo}>
          <h4>Contact</h4>
          {contact.map((item) => {
            return <li>{item}</li>;
          })}
        </section>
        <section className={styles.footerInfo}>
          <h4>Community</h4>

          <div className={styles.communitySection}>
            {Community.map((item) => {
              return <span>{item}</span>;
            })}
          </div>
          <li>
            <div class="input-group mb-3 mt-2">
              <input
                type="text"
                class="form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                Button
              </button>
            </div>
          </li>
          <li>
            <div>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-linkedin"></i>
            </div>
          </li>
        </section>
      </div>
      <div className={styles.copyright}>
        <p>&copy; 2021 Foodies. All Rights Reserved</p>
        <p>Sitemap Privacy Policy Terms & Conditions</p>
      </div>
    </div>
  );
};

export default Footer;
