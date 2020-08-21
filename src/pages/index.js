import React from "react";

import styles from "./index.module.scss";

import Mv from "../components/mv";
import TopFirstText from "../components/top_firstText";

export default () => (
  <>
    <main>
      <Mv />
      <div className={`${styles.inner} ${styles.innerColor}`}>
        <TopFirstText />
      </div>      
    </main>
  </>
);
