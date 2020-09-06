import React from "react";

import styles from "./index.module.scss";

const SectionTitle = ({ title, subtitle}) => {
    return (
        <>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.text}>{subtitle}</p>
        </>
    );
};

export default SectionTitle;