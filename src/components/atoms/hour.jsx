import React from 'react'
import styles from './atoms.module.css'


function Hour({main, title, icon, alt, price, percentage}) {
  return (
    <div>
          <div className={styles.hour}>
              <h1 className={styles.hour__timer}>
                  <img src={icon} alt="clock" />
                  <span>{title}</span>
              </h1>
              <h1 className={`${styles.hour__figure}`} style={main} alt={alt}>{price} {percentage}%</h1>
          </div>
    </div>
  )
}

export default Hour