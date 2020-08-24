import React from "react";

import styles from "./index.module.scss";

const SnsLink = () => {
    return (
        <>
            <h2 className={styles.title}>SNS LINK</h2>
            <p className={styles.text}>主な活動場所</p>
            <ul className={styles.snsList}>
                <li className={styles.snsListItem}>
                    <a href="https://twitter.com/nabe__kurage">
                        <img
                            className={styles.snsListImg}
                            src="/images/snsIcons/sns_twitter_square.png"
                            alt=""
                        />
                    </a>
                </li>
                <li className={styles.snsListItem}>
                    <a href="https://github.com/nabe-kurage">
                        <img
                            className={styles.snsListImg}
                            src="/images/snsIcons/sns_github.png"
                            alt=""
                        />
                    </a>
                </li>
                <li className={styles.snsListItem}>
                    <a href="">
                        <img
                            className={styles.snsListImg}
                            src="/images/snsIcons/sns_instagram.png"
                            alt=""
                        />
                    </a>
                </li>
                <li className={styles.snsListItem}>
                    <a href="https://qiita.com/nabe_kurage">
                        <img
                            className={styles.snsListImg}
                            src="/images/snsIcons/sns_qiita.png"
                            alt=""
                        />
                    </a>
                </li>
                <li className={styles.snsListItem}>
                    <a href="https://note.com/nabekura">
                        <img
                            className={`${styles.snsListImg} ${styles.snsListImgNote}`}
                            src="/images/snsIcons/sns_note.png"
                            alt=""
                        />
                    </a>
                </li>
            </ul>
        </>
    );
};

export default SnsLink;