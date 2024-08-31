

import type { NextPage } from "next";
import Navbar from "@/components/custom/navbar";
import FrameComponent from "@/components/custom/frame-component";
import Features from "@/components/custom/features";
import FrameComponent1 from "@/components/custom/frame-component1";
import styles from "@/components/custom/index.module.css";

const LandingPage: NextPage = () => {
  return (
    <div className={styles.landingPage}>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <section className={styles.content}>
        <Navbar />
        <FrameComponent />
      </section>
      <section className={styles.featuresWrapper}>
        <Features />
      </section>
      <FrameComponent1 />
    </div>
  );
};
export default LandingPage;