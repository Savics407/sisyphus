import React from 'react'
import styles from './molecules.module.css'
import icon from '../../assets/images/icons/u_angle-down.svg'

function Filter() {
  return (
      <div className={styles.filter}>
          <div className={styles.filter__tabs}>
              <div className={`${styles['filter__tabs--icons']} ${styles.active}`}>
                  <div className={`${styles.line} ${styles.orange}`}></div>
                  <div className={`${styles.line} ${styles.neutral}`}></div>
                  <div className={` ${styles.line} ${styles.success}`}></div>
              </div>

              <div className={styles['filter__tabs--icons']} >
                  <div className={`${styles.line} ${styles.neutral}`}></div>
                  <div className={`${styles.line} ${styles.neutral}`}></div>
                  <div className={` ${styles.line} ${styles.success}`}></div>
              </div>

              <div className={styles['filter__tabs--icons']} >
                  <div className={`${styles.line} ${styles.orange}`}></div>
                  <div className={`${styles.line} ${styles.neutral}`}></div>
                  <div className={`${styles.line} ${styles.neutral}`}></div>
              </div>
          </div>
          <div className={styles.filter__counter}>
              <h1>10</h1>
              <span>
                  <img
                      src={icon}
                      alt="icon"
                  />
              </span>
          </div>
      </div>
  )
}

export default Filter