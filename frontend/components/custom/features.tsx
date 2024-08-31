import type { NextPage } from "next";
import AdminIcons from "./admin-icons";
import styles from "./features.module.css";

export type FeaturesType = {
  className?: string;
};

const Features: NextPage<FeaturesType> = ({ className = "" }) => {
  return (
    <div className={[styles.features, className].join(" ")}>
      <div className={styles.featureList}>
        <div className={styles.busFeature}>
          <div className={styles.frameParent}>
            <div className={styles.busIconContainerWrapper}>
              <div className={styles.busIconContainer}>
                <div className={styles.busIconContainerChild} />
                <img
                  className={styles.directionsBusIcon}
                  loading="lazy"
                  alt=""
                  src="/directions-bus.svg"
                />
                <div className={styles.busWrapper}>
                  <b className={styles.bus}>Bus</b>
                </div>
              </div>
            </div>
            <div className={styles.crewFeature}>
              <div className={styles.crewFeatureChild} />
              <img
                className={styles.image3Icon}
                loading="lazy"
                alt=""
                src="/image-3@2x.png"
              />
              <div className={styles.crewWrapper}>
                <b className={styles.crew}>Crew</b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.descriptionFeature}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              rhoncus sem quis tellus lobortis molestie. Cras ultricies, metus
              ac facilisis volutpat, neque dolor iaculis massa, id congue tortor
              turpis eget ligula. Nulla tristique magna ex, in aliquam justo
              cursus id. Aliquam erat volutpat. Morbi ornare sem sed luctus
              gravida. Duis porta volutpat dolor, vitae bibendum eros. Sed vitae
              neque arcu.
            </div>
          </div>
        </div>
        <div className={styles.featuresTitle}>
          <div className={styles.featuresProvidedWrapper}>
            <div className={styles.featuresProvided}>Features Provided</div>
          </div>
          <div className={styles.titleSeparator} />
        </div>
        <div className={styles.adminFeature}>
          <div className={styles.adminContent}>
            <div className={styles.adminIcons}>
              <div className={styles.adminIconsChild} />
              <div className={styles.adminFeaturesDescriptions}>
                <div className={styles.dutySchedulingLinkedContainer}>
                  <p className={styles.dutyScheduling}>
                    <span>
                      <span>Duty Scheduling</span>
                    </span>
                  </p>
                  <p className={styles.blankLine}>
                    <span>
                      <span>&nbsp;</span>
                    </span>
                  </p>
                  <p className={styles.linkedDutySchedulingAssign}>
                    <span>
                      <span>
                        Linked Duty Scheduling: Assign crews to specific buses
                        for their entire shifts.
                      </span>
                    </span>
                  </p>
                  <p className={styles.blankLine1}>
                    <span>
                      <span>&nbsp;</span>
                    </span>
                  </p>
                  <p className={styles.unlinkedDutySchedulingAllo}>
                    <span>
                      <span>
                        Unlinked Duty Scheduling: Allow crews to switch buses
                        between trips and manage rest periods
                      </span>
                      <span className={styles.span}>.</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <AdminIcons
              routeManagement="Route Management "
              mapExistingRoutesAndOptimize="Map existing routes, and optimize for congestion and coverage."
            />
          </div>
        </div>
      </div>
      <div className={styles.optimizedRoutesFeature}>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <img
            className={styles.personIcon}
            loading="lazy"
            alt=""
            src="/person.svg"
          />
          <div className={styles.adminWrapper}>
            <b className={styles.admin}>Admin</b>
          </div>
        </div>
        <div className={styles.optimizedRoutesDescription}>
          <AdminIcons
            routeManagement="Optimized routes:"
            mapExistingRoutesAndOptimize="GIS mapping and route planning."
            propMinWidth="unset"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;