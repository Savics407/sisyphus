import React from 'react'
import styles from './molecules.module.css'


function Subnav({list, handleClick}) {

    const activeStyle = {
        borderRadius: '100px',
        background: '#353945',
        color: "#fff"
    }
  return (
    <ul className={styles.subnav}>
        {list.map((list, index) => (
            <li key={index} className={styles.subnav__items} style={list.active ? activeStyle : null} onClick={() => handleClick(index)}>
                {list.title}
            </li>
        ))}
          
    </ul>
  )
}

export default Subnav