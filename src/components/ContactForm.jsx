/* eslint-disable react/prop-types */
import { useState } from "react";

import { MdOutlinePhoneInTalk } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";

import styles from "./ContactForm.module.css";

function ContactForm({ phoneNumber, emailAddress }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    subject: "",
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send email functionality goes here
    const { subject, name, email, message } = formData;
    const emailContent = `Subject: ${subject}\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
    // You can use any method to send an email, such as an API call or a library like nodemailer
    console.log("Sending email:", emailContent);
    // alert("Your message has been sent successfully!");
    setFormData({
      subject: "",
      name: "",
      email: "",
      message: "",
    });
    setIsSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputWrapper}>
        <label>Your Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
      </div>
      <div className={styles.inputWrapper}>
        <label>Your Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
      </div>
      <div className={styles.inputWrapper}>
        <label>Subject:</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
        />
      </div>
      <div className={styles.inputWrapper}>
        <label>Your Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
        />
      </div>

      {isSubmitted ? (
        <p>
          Unable to send the email at the moment. <br /> Please reach me at{" "}
          <span className={styles.contactInfo}>
            <a href={`tel:${phoneNumber}`}>
              <MdOutlinePhoneInTalk /> 09-45650-7434
            </a>{" "}
            or{" "}
            <a href={`mailto:${emailAddress}`}>
              <TfiEmail /> paingsoechit.job@gmail.com
            </a>
          </span>
        </p>
      ) : null}

      <button
        type="submit"
        className={styles.submitBtn}
        onSubmit={() => handleSubmit()}
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
