import React from "react";

import styles from "./index.module.scss";

import CoreValues from "../../components/CoreValues";
import Fascinated from "../../components/fascinated";

export default () => (
	<>
		<section className={styles.wrapper}>
			<div className={styles.textWrapper}>
				<p className={styles.authorName}>なべくら</p>
				<p className={styles.job}>Frontend Engineer</p>
				<ul className={styles.snsList}>
					<li className={styles.snsListItem}>
						<a href="https://twitter.com/nabe__kurage">
							<img
								src="images/snsIcons/sns_twitter.png"
								alt=""
							/>
						</a>
					</li>
					<li className={styles.snsListItem}>
						<a href="https://github.com/nabe-kurage">
							<img
								src="images/snsIcons/sns_github.png"
								alt=""
							/>
						</a>
					</li>
				</ul>
				<p className={styles.dscription}>
					視覚表現（コーディング・イラスト・デザイン・モーション）極めていきたい人。学生時代は旅にハマって40ヵ国ほど訪れました。今は絵を描きながらフロントエンドエンジニアとして働いています。日常呟きの他、イラスト・デザイン・フロント・海外等に関連することを発信していきます。
				</p>
			</div>
			<div className={styles.imgWrapper}>
				<div className={styles.imgInner}>
					<img
						className={styles.profileImg}
						src="images/img_prof.jpg"
						alt="プロフィール画像"
					/>
				</div>
			</div>
		</section>
		<div className={`${styles.inner} ${styles.innerColor}`}>
			<CoreValues />
		</div>
		<div className={styles.inner}>
			<Fascinated />
		</div>
	</>
);
