import React from "react";
import styles from "../style/fascinated.scss";

const Corefacinated = () => {
    return (
        <div className={styles.inner}>
            <h2 className={styles.title}>fascinated</h2>
            <p className={styles.text}>好きなもの達</p>
            <ul className={styles.facinatedList}>
                <li className={styles.facinatedListItem}>
                    <div className={styles.facinatedListImgWrapper}>
                        <img
                            className={styles.facinatedImgColorLens}
                            src="images/icons/color_lens.svg"
                            alt=""
                        />
                    </div>
                    <p className={styles.facinatedTitle}>イラスト・アート</p>
                    <p className={styles.facinatedText}>
                        <div className={styles.facinatedTextInner}>
                            絵は観るのも描くのも大好きです。デジタルアートから油絵まで割となんでも楽しめます。
                        </div>
                    </p>
                </li>
                <li className={styles.facinatedListItem}>
                    <div className={styles.facinatedListImgWrapper}>
                        <img
                            className={styles.facinatedImgEmbed2}
                            src="images/icons/embed2.svg"
                            alt=""
                        />
                    </div>
                    <p className={styles.facinatedTitle}>フロントエンド</p>
                    <div className={styles.facinatedText}>
                        <div className={styles.facinatedTextInner}>
                            目に見える『モノ』を作ることが好きなので、成果物が目に見えやすいフロントエンドは楽しいなと思います。もうちょっと深めたり、広めたりしたいところ。
                        </div>
                    </div>
                </li>
                <li className={styles.facinatedListItem}>
                    <div className={styles.facinatedListImgWrapper}>
                        <img
                            className={styles.facinatedImgAirplane}
                            src="images/icons/airplane.svg"
                            alt=""
                        />
                    </div>
                    <p className={styles.facinatedTitle}>旅</p>
                    <div className={styles.facinatedText}>
                        <div className={styles.facinatedTextInner}>
                            学生時代に一人旅にハマってから海外旅行が好きです。いろんな国に行ってお気に入りの場所を見つけてぼーっとしていると心の底から幸せを感じます。
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Corefacinated;
