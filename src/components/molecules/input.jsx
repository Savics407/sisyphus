import React, { useState } from 'react'
import styles from './molecules.module.css'
import angle from '../../assets/images/icons/u_angle-down.svg'
import info from '../../assets/images/icons/u_info-circle.svg'

function Input({ title, value, onchange, type }) {
    return (
        <>
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
                    <input type={type} placeholder="0.00" id="limit_price" value={value} onChange={onchange} />
                    <span>USD</span>
                </div>
            </div>


        </>
    )
}

export const Type = () => {
    // Setting the type as an array of objects
    const typeSelect = [
        {
            type: 'Fill or Kill',
        },
        {
            type: 'Good till canceled',
        },
        {
            type: 'Good till date',
        },
        {
            type: 'Immediate or cancel',
        }
    ] 

    const [type, setType] = useState(typeSelect[1].type)
    const [isClicked, setIsClicked] = useState(false)

    return (
        <>
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
                        onClick={() => setIsClicked(!isClicked)}>{type}</span
                    >
                    <span>
                        <img
                            src={angle}
                            alt="angle-down"
                        />
                    </span>
                </div>
                {isClicked &&
                    <ul class={styles['inputField__dropdown--items']}>
                        {/* The types are being mapped here for easy selection */}
                        {typeSelect.map((type, index) => (
                            <li key={index} onClick={() => {
                                setType(type.type)
                                setIsClicked(!isClicked)
                            }}>{type.type}</li>

                        ))}
                    </ul>
                }

            </div>
        </>
    )
}

export default Input