import React from 'react'
import styles from './molecules.module.css'
import caret from '../../assets/images/icons/angle-down-white.svg'
import currency from '../../assets/images/icons/btc_dollar.svg'
import Amount from '../atoms/amount'
import symbols from '../../assets/images/tokens.svg'
import search from '../../assets/images/icons/Search.svg'

function Coins() {
    const pairs = [
        {
            title: "BTC/USDT",
            amount: "$23,234.6",
            percentage: '+0.005%',
            src: symbols
        },
        {
            title: "ETH/USDT",
            amount: "$23,234.6",
            percentage: '+0.005%',
            src: symbols
        },
        {
            title: "LTC/USDT",
            amount: "$23,234.6",
            percentage: '+0.005%',
            src: symbols
        },
        {
            title: "DOGE/USDT",
            amount: "$23,234.6",
            percentage: '+0.005%',
            src: symbols
        },
        {
            title: "ADA/USDT",
            amount: "$23,234.6",
            percentage: '+0.005%',
            src: symbols
        }, 
        {
            title: "XLM/USDT",
            amount: "$23,234.6",
            percentage: '+0.005%',
            src: symbols
        }
    ]

    return (
        <div>
            <div className={styles.coindropdown}>
                <img
                    src={currency}
                    alt="currency-symbol"
                />
                <h1 className="dropnow">BTC/USDT</h1>
                <span>
                    <img
                        src={caret}
                        alt="caret-angle"
                    />
                </span>
                <Amount />
                {/* <!-- DropDown for coins --> */}
                <div className={styles.DropdownForCoins} hidden>
                    <h1 className={styles.DropdownForCoins__heading}>Select Market</h1>

                    <div className={styles.DropdownForCoins__searchbar}>
                        <img src={search} alt="search icon" />
                        <input type="search" placeholder="Search" id="coinSearch" />
                    </div>

                    <ul className={styles.DropdownForCoins__tabs}>
                        <li className="active">All</li>
                        <li>USD</li>
                        <li>BTC</li>
                    </ul>


                    <div className={`${styles.coins} scroll`}>
                        {pairs.map(pairs => (
                            <div className={styles.DropdownForCoins__coins}>
                                <div className={styles.left}>
                                    <img src={pairs.src} alt="coin symbols" />
                                    <h1>{pairs.title}</h1>
                                </div>
                                <div className={styles.right}>
                                    <h1>{pairs.amount}</h1>
                                    <h1 className="percentage">{pairs.percentage}</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coins