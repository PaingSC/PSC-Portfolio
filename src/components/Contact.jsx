/* eslint-disable react/prop-types */
// import ContactForm from "./ContactForm";
// import { ContactUs } from "./ContactForm2";

import styles from "./Contact.module.css";
import ContactUs from "./ContactUs";

function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <h3>
        Contact<span>Join me for greatness</span>
      </h3>
      {/* <ContactForm phoneNumber={phoneNumber} emailAddress={emailAddress} /> */}
      {/* <ContactUs phoneNumber={phoneNumber} emailAddress={emailAddress} /> */}
      <ContactUs />
    </section>
  );
}

export default Contact;
