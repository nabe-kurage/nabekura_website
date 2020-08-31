import React from "react";

import styles from "./index.module.scss";

const PrtSectionTitle = ({ title, subtitle}) => {
    return (
        <>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.text}>{subtitle}</p>
        </>
    );
};

export default PrtSectionTitle;