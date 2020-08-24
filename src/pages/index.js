import React from "react";

import styles from "./index.module.scss";

import Mv from "../components/mv";
import TopFirstText from "../components/top_firstText";
import SnsLink from "../components/snsLink";
import LinkArea from "../components/LinkArea";

export default () => (
	<>
			<Mv />
			<div className={`${styles.inner} ${styles.innerColor}`}>
				<TopFirstText />
			</div>
			<div className={styles.inner}>
				<SnsLink />
			</div>
			<div className={`${styles.inner} ${styles.innerColor}`}>
				<LinkArea title="About" text="作者について知る" link="/about" />
			</div>
			<div className={styles.inner}>
				<LinkArea title="Work" text="作品をみる" link="/work" />
			</div>
	</>
);
