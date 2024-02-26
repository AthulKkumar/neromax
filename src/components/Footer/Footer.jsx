import React from "react";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.companyDetails}>
        <section>
          <h4>Company</h4>

          <li>About Us</li>
          <li>Blog</li>
          <li>Careers</li>
          <li>Contact Us</li>
        </section>
        <section>
          <h4>For Foodies</h4>

          <li>Community</li>
          <li>Developers</li>
          <li>Mobile Apps</li>
        </section>
        <section>
          <h4>Contact</h4>

          <li>Support</li>
          <li>Live Chat</li>
          <li>Customer Service</li>
        </section>
        <section>
          <h4>Community</h4>

          <li>Blogs | Review | Protected</li>
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
      </div>
    </div>
  );
};

export default Footer;
