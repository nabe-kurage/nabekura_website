import React from "react";

import styles from "./index.module.scss";

const Header = () => {
    return (
        <p className={styles.firstText}>
            こんにちは、なべくらです。
            <br />
            エンジニアとして働きつつ、趣味で創作活動をしています。
            <br />
            物づくりが好きでいろんなことに手をだしていたらこんなところにいました。
            <br />
            <br />
            まだコンテンツは少ないですが、少しずつ追加していけたらなと思っています。
            <br />
            趣味や業界が近い人達と繋がれたら幸いです。
            <br />
            <br />
            どうぞよろしくお願いいたします。
            <br />
        </p>
    );
};

export default Header;