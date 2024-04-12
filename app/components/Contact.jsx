"use client"
import styles from './styles/contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
    <h2 className={styles.heading}>Contact Us</h2>
    <p className={styles.text}>Have questions, suggestions, or business inquiries? We'd love to hear from you!</p>
    <a className={styles.emailLink} href="mailto:ishankhurana176@gmail.com">ishankhurana176@gmail.com</a>
    <p className={styles.footer}>&copy; {new Date().getFullYear()} 2op Commerce. All rights reserved.</p>
  </div>
  );
}

export default Contact;
