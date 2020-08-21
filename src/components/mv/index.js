import React from "react";

import styles from "./index.module.scss";

const Mv = () => {
    return (
        <div className={styles.mvWrappe}>
            <img className={styles.mv} src="images/kv.jpg" alt="kv" />
        </div>
    );
};

export default Mv;