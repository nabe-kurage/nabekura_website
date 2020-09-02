import React from "react";
import styles from "../style/fascinated.scss";

const CoreValues = () => {
    return (
        <div className={styles.inner}>
            <h2 className={styles.title}>fascinated</h2>
            <p className={styles.text}>好きなもの達</p>
            <ul className={styles.valuesList}>
                <li className={styles.valuesListItem}>
                    <div className={styles.valuesListImgWrapper}>
                        <img
                            className={styles.valuesImgColorLens}
                            src="images/icons/color_lens.svg"
                            alt=""
                        />
                    </div>
                    <p className={styles.valuesTitle}>イラスト・アート</p>
                    <p className={styles.valuesText}>
                        <div className={styles.valuesTextInner}>
                            絵は観るのも描くのも大好きです。デジタルアートから油絵まで割となんでも楽しめます。
                        </div>
                    </p>
                </li>
                <li className={styles.valuesListItem}>
                    <div className={styles.valuesListImgWrapper}>
                        <img
                            className={styles.valuesImgEmbed2}
                            src="images/icons/embed2.svg"
                            alt=""
                        />
                    </div>
                    <p className={styles.valuesTitle}>フロントエンド</p>
                    <div className={styles.valuesText}>
                        <div className={styles.valuesTextInner}>
                            目に見える『モノ』を作ることが好きなので、成果物が目に見えやすいフロントエンドは楽しいなと思います。もうちょっと深めたり、広めたりしたいところ。
                        </div>
                    </div>
                </li>
                <li className={styles.valuesListItem}>
                    <div className={styles.valuesListImgWrapper}>
                        <img
                            className={styles.valuesImgAirplane}
                            src="images/icons/airplane.svg"
                            alt=""
                        />
                    </div>
                    <p className={styles.valuesTitle}>旅</p>
                    <div className={styles.valuesText}>
                        <div className={styles.valuesTextInner}>
                            学生時代に一人旅にハマってから海外旅行が好きです。いろんな国に行ってお気に入りの場所を見つけてぼーっとしていると心の底から幸せを感じます。
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default CoreValues;
