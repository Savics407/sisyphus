import React from 'react'
import styles from './atoms.module.css'

function Amount({value}) {
    return (
        <div>
            <div className={styles.amount}>
                <h1 className="">${value}</h1>
            </div>
        </div>
    )
}

export default Amount