import React, { useState } from 'react'
import Subnav from '../molecules/subnav'
import styles from "./organisms.module.css"
import atom from '../atoms/atoms.module.css'
import molecule from "../molecules/molecules.module.css"
import Input, { Type } from '../molecules/input'
import angle from '../../assets/images/icons/u_angle-down.svg'
import CurrencySwitch from '../molecules/currencySwitch'

function BuyAndSell() {
    const flex = {
        padding: '10px 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
    }
    const list = [
        {
            title: "Limit",
            active: true
        },
        {
            title: "Market",
            active: false
        },
        {
            title: "Stop-Limit",
            active: false
        },
    ]

    const [tabActive, setTabActive] = useState(list)
    const [tabContent, setTabContent] = useState(list[0].title)
    const [currency, setCurrency] = useState(false)

    const [limitPrice, setLimitPrice] = useState()
    const [triggerPrice, setTriggerPrice] = useState()
    const [amount, setAmount] = useState()
    const total = limitPrice * amount //This is updating the total amount the user will buy at the limitPrice set

    const handleLimitPriceChange = (e) => {
        setLimitPrice(e.target.value)
    }

    const handleAmountChange = (e) => {
        setAmount(e.target.value)
    }


    const handleTrigger = (e) => {
        setTriggerPrice(e.target.value)
    }

    const handleTabClick = (index) => {
        const updatedList = list.map((item, i) => ({
            ...item,
            active: i === index //this sets the tab active to true and sets others to false 
        }))
        setTabActive(updatedList)
        setTabContent(updatedList[index].title)
    }

    // select currency 
    const [currencyISO, setCurrencyISO] = useState("NGN")
    const selectCurrency = (data) => {
        setCurrencyISO(data)
        setCurrency(false)
    }

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
                    <Subnav list={tabActive} handleClick={handleTabClick} />
                    {/* <!-- Input field --> */}
                    {tabContent === list[0].title ?
                        <div style={flex}>
                            <Input type="number" title="Limit Price" value={limitPrice} onchange={handleLimitPriceChange} />
                            <Input type="number" title="Amount" value={amount} onchange={handleAmountChange} />
                            {/* <!-- Type Dropdown --> */}

                            <Type />
                        </div> :
                        tabContent === list[1].title ?
                            <div style={flex}>
                                <Input type="number" title="Amount" value={amount} onchange={handleAmountChange} />
                            </div> :
                            tabContent === list[2].title ?
                                <div style={flex}>
                                    <Input type="number" title="Trigger Price" value={triggerPrice} onchange={handleTrigger} />
                                    <Input type="number" title="Limit Price" value={limitPrice} onchange={handleLimitPriceChange} />
                                    <Input type="number" title="Amount" value={amount} onchange={handleAmountChange} />
                                    {/* <!-- Type Dropdown --> */}

                                    <Type />
                                </div> : null}




                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <label className={molecule.inputField__label}>Total</label>
                        <h1 className={molecule['inputField__dropdown--text']} id="total">{total ? total.toFixed(2) : "0.00"}</h1>
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
                        <div className={molecule.total__currency} onClick={() => setCurrency(!currency)}>
                            <h1>{currencyISO}</h1>
                            <img src={angle} alt="angle" />
                        </div>
                        {currency &&
                            <CurrencySwitch select={selectCurrency} />
                        }
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