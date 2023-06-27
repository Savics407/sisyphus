import React from 'react'
import Subnav from '../molecules/subnav'
import styles from "./organisms.module.css"
import atom from '../atoms/atoms.module.css'
import molecule from "../molecules/molecules.module.css"
import Input from '../molecules/input'
import angle from '../../assets/images/icons/u_angle-down.svg'

function BuyAndSell() {
    const list = [
        {
            title: "Limit",
            active: "true"
        },
        {
            title: "Market",
            active: "false"
        },
        {
            title: "Stop-Limit",
            active: "false"
        },
    ]

    return (
        <div>
            <div className="buyMobile deskhide">
                <button className="buy">Buy</button>
                <button className="sell">Sell</button>

            </div>
            <div className={`${styles.overlay} ${atom.hide}`}></div>
            <div className={styles.buyAndSell}>
                <div className={styles.buyAndSell__content}>
                    <ul className={molecule.segmentedTabs}>
                        <li className={`${molecule.segmentedTabs__links} ${molecule.active}`}>Buy</li>
                        <li className={molecule.segmentedTabs__links}>Sell</li>
                    </ul>
                    {/* <!-- Sub-nav item --> */}
                    <Subnav list={list} />
                    {/* <!-- Input field --> */}
                    <Input title="Limit Price" />
                    <Input title="Amount" />
                    {/* <!-- Type Dropdown --> */}

                    <Input type="type" />

                   
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <label className={molecule.inputField__label}>Total</label>
                        <h1 className={molecule['inputField__dropdown--text']} id="total">0.00</h1>
                    </div>

                    <div>
                        <button>Buy BTC</button>
                    </div>
                </div>

                <div className={styles.buyAndSell__content2}>
                    <div className={molecule.total}>
                        <div className={molecule.total__content}>
                            <h2>Total account value</h2>
                            <h1>0.00</h1>
                        </div>
                        <div className={molecule.total__currency}>
                            <h1>NGN</h1>
                            <img src={angle} alt="angle" />
                        </div>
                    </div>

                    <div className={molecule.total}>
                        <div className={molecule.total__content}>
                            <h2>Open Orders</h2>
                            <h1>0.00</h1>
                        </div>
                        <div className={molecule.total__content}>
                            <h2>Available</h2>
                            <h1>0.00</h1>
                        </div>
                    </div>

                    <div className={molecule.total__deposit}>
                        <button>Deposit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyAndSell