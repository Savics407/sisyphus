import React from 'react'
import Coins from '../molecules/coins'
import styles from './organisms.module.css'
import Rates from '../molecules/rates'

function TopInfo() {
 
  return (
    <div>
      <div className={styles.topinfo}>
        <Coins />

        <div className={styles.topinfo__info}>
          <Rates />
        </div>
      </div>
    </div>
  )
}

export default TopInfo