import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import { heroItem } from "@/data/static-data";
import Link from "next/link";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Hero = () => {
  return (
    <div className={styles.container}>
      {/* <Image
        className={styles.image}
        src={heroItem.image_url}
        height={100}
        width={100}
        alt=""
      /> */}

      <p className={styles.desc}>
        こんにちは、私はSasada Yosukeです。 私は 8 年の経験を持つソフトウェア エンジニアです。 私はサイトやアプリの構築が好きで、Next.js と TypeScript に重点を置いています。
      </p>

      <div className={styles.connect}>
        <Link className={styles.btnPrimary} href={heroItem.contact.url}>
          {heroItem.contact.title}
        </Link>
      </div>
    </div>
  );
};

export default Hero;
