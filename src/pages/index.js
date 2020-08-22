import React from "react";

import styles from "./index.module.scss";

import Mv from "../components/mv";
import TopFirstText from "../components/top_firstText";
import SnsLink from "../components/snsLink";

export default () => (
  <>
    <main>
      <Mv />
      <div className={`${styles.inner} ${styles.innerColor}`}>
        <TopFirstText />
      </div>
      <div className={styles.inner}>
        <SnsLink />
      </div>
    </main>
  </>
);
