import { useRef } from "react";

import emailjs from "@emailjs/browser";

import styles from "./ContactForm.module.css";

const ServiceID = "service_807lhf2";
const TemplateID = "template_fajbmlk";
const PublicKey = "7yPTUJGgrdMD1x-Jq";

function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(ServiceID, TemplateID, form.current, {
        publicKey: PublicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert(
            `Thank you for reaching out! Your message has been successfully sent. I'll get back to you as soon as possible.`
          );
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={styles.form}>
      <div className={styles.inputWrapper}>
        <label>Your Name:</label>
        <input type="text" name="user_name" placeholder="Your Name" required />
      </div>
      <div className={styles.inputWrapper}>
        <label>Your Email:</label>
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />
      </div>
      <div className={styles.inputWrapper}>
        <label>Subject:</label>
        <input type="text" name="user_subject" placeholder="Subject" required />
      </div>
      <div className={styles.inputWrapper}>
        <label>Your Message:</label>
        <textarea name="message" placeholder="Your Message" required />
      </div>

      <button type="submit" className={styles.submitBtn} value="Send">
        Submit
      </button>
    </form>
  );
}

export default ContactUs;
