import React from 'react'
import styles from './organisms.module.css'
import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa'

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles['footer-content']}>
                <div className={styles['footer-content__socials']}>
                    <a href="#" className={styles['social-icon']}
                    ><FaFacebookF />
                    </a>
                    <a href="#" className={styles['social-icon']}>
                        <FaTwitter /></a>
                    <a href="#" className={styles['social-icon']}>
                        <FaInstagram /></a>
                </div>
                <div className={styles['contact-link']}>
                    <a href="mailto:savicstech@gmail.com">Contact Us</a>
                </div>
            </div>
            <div className={styles.copyright}>&copy; 2023 Sisyphus. All rights reserved.</div>
        </div>
    )
}

export default Footer