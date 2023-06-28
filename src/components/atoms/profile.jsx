import React, { useEffect, useState } from 'react'
import user from '../../assets/images/81.png'
import right from '../../assets/images/icons/u_angle-right.svg'
import styles from './atoms.module.css'

function Profile() {
  const [avatar, setAvatar] = useState()
  const [name, setName] = useState() 

  useEffect(() => {
    const data = localStorage.getItem('avatar');
    const user = localStorage.getItem('name')
    setAvatar(data)
    setName(user)
  }, [])
  return (
          <div className={styles.usertab}>
              <img src={avatar ? avatar : user} alt="user-avater" />
                  <h1>{name ? name : "John Doe.."}</h1>
                  <span>
                      <img src={right} alt="icon" />
                  </span>
          </div>
  )
}

export default Profile