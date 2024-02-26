/* eslint-disable react/prop-types */
import ContactForm from "./ContactForm";

import styles from "./Contact.module.css";

function Contact({ phoneNumber, emailAddress }) {
  return (
    <section id="contact" className={styles.contactSection}>
      <h3>
        Contact<span>Join me for greatness</span>
      </h3>
      <ContactForm phoneNumber={phoneNumber} emailAddress={emailAddress} />
    </section>
  );
}

export default Contact;
