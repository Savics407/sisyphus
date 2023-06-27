import React, { useState } from 'react'
import styles from './molecules.module.css'
import atom from '../atoms/atoms.module.css'


function Tabs({ tabs, handleClick }) {
    const activeTab = {
        borderRadius: '8px',
        color: ' #FFF',
        background: '#21262C',
        boxShadow: '0px 3px 1px 0px rgba(0, 0, 0, 0.04), 0px 3px 8px 0px rgba(0, 0, 0, 0.12)'
    }
    return (
        <ul className={`${styles.tabs}`}>
            {tabs?.map((tab, index) => (
                <li key={index} className={`${styles.tabs__links}`} style={tab.active ? activeTab : null} onClick={() => handleClick(index)}>{tab.title}</li>
            ))}
        </ul>
    )
}

export default Tabs