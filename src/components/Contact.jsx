import ContactForm from "./ContactForm";

import styles from "./Contact.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <h3>
        Contact<span>Join me for greatness</span>
      </h3>
      <ContactForm />
    </section>
  );
}

export default Contact;
