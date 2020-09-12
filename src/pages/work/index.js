import React from "react";

import styles from "./index.module.scss";

import SectionTitle from "../../components/SectionTitle";

export default () => (
	<>
		<section className={styles.wrapper}>
		<SectionTitle title="work" subtitle="今までの作品" />
			<ul>
				<li>さくひん</li>
				<li>さくひん</li>
				<li>さくひん</li>
			</ul>
		</section>
	</>
);
