import React from "react";
import Link from "next/link";

import styles from "./index.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <small>&copy; 2020 nabekura</small>
        </footer>
    );
};

export default Footer;