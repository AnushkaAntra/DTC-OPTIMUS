import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./admin-icons.module.css";

export type AdminIconsType = {
  className?: string;
  routeManagement?: string;
  mapExistingRoutesAndOptimize?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const AdminIcons: NextPage<AdminIconsType> = ({
  className = "",
  routeManagement,
  mapExistingRoutesAndOptimize,
  propMinWidth,
}) => {
    const adminIconsStyle: CSSProperties = useMemo(() => {
      return {
        minWidth: propMinWidth,
      };
    }, [propMinWidth]);
  
    return (
      <div
        className={[styles.adminIcons, className].join(" ")}
        style={adminIconsStyle}
      >
        <div className={styles.adminIconsChild} />
        <div className={styles.routeManagementMapExistingWrapper}>
          <div className={styles.routeManagementMapContainer}>
            <p className={styles.routeManagement}>
              <span>
                <span>{routeManagement}</span>
              </span>
              </p>
          <p className={styles.blankLine}>
            <span>
              <span>&nbsp;</span>
            </span>
          </p>
          <p className={styles.mapExistingRoutes}>
            {mapExistingRoutesAndOptimize}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminIcons;