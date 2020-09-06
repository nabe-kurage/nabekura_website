import React from "react";
import styles from "./index.module.scss";

import SectionTitle from "../SectionTitle";

const CoreValues = () => {
    return (
        <>
            <SectionTitle title="core values" subtitle="軸となる価値観" />
            <ul className={styles.valuesList}>
                <li className={styles.valuesListItem}>
                    <div className={styles.valuesListImgWrapper}>
                        <img
                            className={styles.valuesImgPower}
                            src="images/icons/power.svg"
                            alt=""
                        />
                    </div>
                    <p className={styles.valuesTitle}>好奇心</p>
                    <div className={styles.valuesText}>
                        <div className={styles.valuesTextInner}>
                            <p>
                                好奇心に従う。
                                <br />
                                できるだけその時の好奇心を満たせるように活動しています。そのせいで手を広げすぎてしまうこともありますが、私にとっての大事なエネルギーです。
                            </p>
                        </div>
                    </div>
                </li>
                <li className={styles.valuesListItem}>
                    <div className={styles.valuesListImgWrapper}>
                        <img src="images/icons/hammer.svg" alt="" />
                    </div>
                    <p className={styles.valuesTitle}>ものづくり</p>
                    <div className={styles.valuesText}>
                        <div className={styles.valuesTextInner}>
                            <p>
                                ものづくりをし続ける。
                                <br />
                                デジタルでもアナログでも手を動かして『モノ』を作り続けるようにしています。正直めんどくさいですが、手を動かし始めると楽しくなってきます。
                            </p>
                        </div>
                    </div>
                </li>
                <li className={styles.valuesListItem}>
                    <div className={styles.valuesListImgWrapper}>
                        <img
                            className={styles.valuesImgWalk}
                            src="images/icons/directions_walk.svg"
                            alt=""
                        />
                    </div>
                    <p className={styles.valuesTitle}>体験</p>
                    <div className={styles.valuesText}>
                        <div className={styles.valuesTextInner}>
                            <p>
                                体験を大事にする。
                                <br />
                                やったことがないことはできるだけやってみようと思っています。仕事や目標に関係ないことでも、実際に体験してみると人生が豊かになる気がします。
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    );
};

export default CoreValues;
