import type { NextPage } from "next";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.contentDescription}>
        <div className={styles.description}>
          <div className={styles.solutionInfo}>
            <b className={styles.dtcOptimusContainer}>
              <p className={styles.dtcOptimus}>DTC - OPTIMUS</p>
              <p className={styles.anAutomatedBus}>
                An Automated Bus Scheduling and Route Management System
              </p>
              </b>
            <div className={styles.ourApplicationIs}>
              Our application is a comprehensive software solution designed to
              automate various aspects of bus scheduling and route management
              for the Delhi Transport Corporation (DTC). The system utilizes
              advanced algorithms, data analytics, and Geographic Information
              System (GIS) technologies to optimize operations, reduce errors,
              and enhance service reliability. The system will offer a
              user-friendly interface for schedulers, planners, and managers to
              interact with the system, manage schedules, plan routes, and
              access real-time data and reports.
            </div>
          </div>
          <div className={styles.callToAction}>
            <div className={styles.buttonBackground} />
            <b className={styles.loginRegister}>Login/ Register</b>
          </div>
        </div>
        </div>
      <div className={styles.tags}>
        <img
          className={styles.delhi1Icon}
          loading="lazy"
          alt=""
          src="/delhi-1@2x.png"
        />
        <img className={styles.bus1Icon} alt="" src="/-bus-1@2x.png" />
        <img
          className={styles.dtcDelhiTransportCorporati}
          loading="lazy"
          alt=""
          src="/dtc-delhi-transport-corporation-buses-1@2x.png"
        />
      </div>
    </div>
  );
};
export default FrameComponent;