import React from 'react'
import styles from './molecules.module.css'
import angle from '../../assets/images/icons/u_angle-down.svg'
import info from '../../assets/images/icons/u_info-circle.svg'

function Input({ title, value, setValue, type }) {
    return (
        <>
            {type !== "type" ?
                <div className={styles.inputField}>
                    <label className={styles.inputField__label}>
                        <h1>{title}</h1>
                        <span>
                            <img
                                src={info}
                                alt="info-icon"
                            />
                        </span>
                    </label>
                    <div className={styles.inputField__input}>
                        <input type="number" placeholder="0.00" id="limit_price" value={value} onChange={(e) => {
                            setValue(e.target.value)
                        }} />
                        <span>USD</span>
                    </div>
                </div>
                :
                <div className={styles.inputField}>
                    <label className={styles.inputField__label}>
                        <h1>Type</h1>
                        <span>
                            <img
                                src={info}
                                alt="info-icon"
                            />
                        </span>
                    </label>
                    <div className={styles.inputField__dropdown}>
                        <span className={styles['inputField__dropdown--text']}
                        >Good till cancelled</span
                        >
                        <span>
                            <img
                                src={angle}
                                alt="angle-down"
                            />
                        </span>
                    </div>
                </div>
            }
        </>
    )
}

export default Input