import type { NextPage } from "next";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <footer className={[styles.frameParent, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.copyright202425}>Copyright 2024-25</div>
      </div>
      <div className={styles.footerLinks}>
        <div className={styles.footerLinksChild} />
        <div className={styles.footerContent}>
          <div className={styles.footerInfo}>
            <h2 className={styles.footer}>FOOTER</h2>
            <div className={styles.connectWithUs}>Connect With Us</div>
          </div>
          <div className={styles.socialLinks}>
            <div className={styles.socialIconsParent}>
              <div className={styles.socialIcons} />
              <div className={styles.socialIcons1} />
              <div className={styles.socialIcons2} />
              <div className={styles.socialIcons3} />
            </div>
          </div>
        </div>
        <div className={styles.viewSoltions}>View Soltions</div>
      </div>
    </footer>
  );
};

export default FrameComponent1;