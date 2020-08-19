import React from "react";
import Link from "next/link";

import styles from "./index.module.scss";

const Footer = () => {
    return (
        <header className={styles.header}>
            <Link href="/">
                <a className={styles.logoWrapper}>nabekura</a>
            </Link>
            <nav className={styles.nav}>
                <Link href="/about">
                    <a className={styles.navItem}>about</a>
                </Link>
                <Link href="/work">
                    <a className={styles.navItem}>work</a>
                </Link>
            </nav>
        </header>
    );
};

export default Footer;