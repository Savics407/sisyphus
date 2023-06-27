import React from 'react'
import user from '../../assets/images/81.png'
import right from '../../assets/images/icons/u_angle-right.svg'
import styles from './atoms.module.css'

function Profile() {
  return (
          <div className={styles.usertab}>
              <img src={user} alt="user-avater" />
                  <h1>Olakunle Te...</h1>
                  <span>
                      <img src={right} alt="icon" />
                  </span>
          </div>
  )
}

export default Profile