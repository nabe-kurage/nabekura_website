import React from "react";
import Link from "next/link";

import styles from "./index.module.scss";

const LinkArea = ({ title, text, link}) => {
    return (
        <>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.text}>{text}</p>
            <div className={styles.buttonWrapper}>
                <Link href={link}>
                    <a href="" className={styles.button}>
                        こちら
                    </a>
                </Link>
            </div>
        </>
    );
};

export default LinkArea;