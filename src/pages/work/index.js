import React from "react";

import styles from "./index.module.scss";

import SectionTitle from "../../components/SectionTitle";

export default () => (
	<>
		<SectionTitle title="work" subtitle="" />
		<section className={styles.wrapper}>
		<SectionTitle title="Illustration" subtitle="イラスト" />
			<ul>
				<li>さくひん</li>
				<li>さくひん</li>
				<li>さくひん</li>
			</ul>
		</section>
		<section className={styles.wrapper}>
		<SectionTitle title="other" subtitle="その他" />
			<ul>
				<li>さくひん</li>
				<li>さくひん</li>
				<li>さくひん</li>
			</ul>
		</section>
	</>
);
