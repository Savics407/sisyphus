import React from 'react'
import styles from './organisms.module.css'
import logo from '../../assets/images/Fictional company logo.svg'
import search from '../../assets/images/icons/Search.svg'
import Profile from '../atoms/profile'
import globe from '../../assets/images/icons/globe.svg'
import signout from '../../assets/images/icons/sign-out.svg'
import atom from '../atoms/atoms.module.css'
import menu from '../../assets/images/icons/menu-alt-1.svg'


function Navbar() {
    return (
        <div>
            <div className={styles.navbar}>
                <div className={styles.navbar__content}>
                    <div className={styles['navbar__content--logo']}>
                        <img
                            src={logo}
                            alt="fictional logo"
                        />
                    </div>
                    <div className="">
                        <ul id="nav">
                            <li className={styles.activenav}>Dashboard</li>
                            <li className="">Markets</li>
                            <li>Wallet</li>
                            <li className="deskhide"><a href="/" style={{color: "inherit"}}>Logout</a></li>
                        </ul>
                    </div>
                    <div className={styles.navbar__search}>
                        <img src={search} alt="search icon" />
                        <input type="search" placeholder="Search" id="nav_search" />
                    </div>
                </div>
                <div className={styles.navbar__actions}>
                    <Profile />
                    <div>
                        <img src={globe} alt="globe" />
                    </div>
                    <div className={atom.signout}>
                      <a href="/" >
                          <img src={signout} alt="sign-out icon" />
                      </a>
                  </div>
                  <div className={atom.menu}>
                      <img src={menu} alt="menu" />
                  </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar