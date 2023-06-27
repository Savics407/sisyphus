import React, { useContext, useEffect, useState } from 'react'
import styles from './molecules.module.css'
import caret from '../../assets/images/icons/angle-down-white.svg'
import currency from '../../assets/images/icons/btc_dollar.svg'
import Amount from '../atoms/amount'
import symbols from '../../assets/images/tokens.svg'
import search from '../../assets/images/icons/Search.svg'
import { AppContext } from '../../contexts/AppContext'

function Coins() {
    const { searchQuery, returnSearchQuery } = useContext(AppContext)
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
    const [fetchedPairs, setFetchedPairs] = useState(pairs)
    const [data, setData] = useState("")

    const [dropdown, setDropDown] = useState(false)

    useEffect(() => {
        if (searchQuery) {
            const filteredPairs = pairs.filter(pair => pair.title.toLowerCase().includes(searchQuery.toLowerCase()))
            setFetchedPairs(filteredPairs)
            setDropDown(true)
        } else {
            setFetchedPairs(pairs)
            setDropDown(false)
        }
    }, [searchQuery])


    const handleChange = (e) => {
        const searchData = e.target.value;
        setData(searchData);
        const filteredPairs = searchData !== "" ? pairs.filter(pair => pair.title.toLowerCase().includes(searchData.toLowerCase())) : pairs;
        setFetchedPairs(filteredPairs);
    }

    return (
        <div>
            <div className={styles.coindropdown}>
                <img
                    src={currency}
                    alt="currency-symbol"
                />
                <h1 className="dropnow" onClick={() => setDropDown(!dropdown)}>BTC/USDT</h1>
                <span>
                    <img
                        src={caret}
                        alt="caret-angle"
                    />
                </span>
                <Amount />
                {/* <!-- DropDown for coins --> */}
                {dropdown && <div className={styles.DropdownForCoins}>
                    <h1 className={styles.DropdownForCoins__heading}>Select Market</h1>

                    <div className={styles.DropdownForCoins__searchbar}>
                        <img src={search} alt="search icon" />
                        <input type="search" placeholder="Search" id="coinSearch" onChange={handleChange} />
                    </div>

                    <ul className={styles.DropdownForCoins__tabs}>
                        <li className="active">All</li>
                        <li>USD</li>
                        <li>BTC</li>
                    </ul>


                    <div className={`${styles.coins} scroll`}>
                        {fetchedPairs?.map((pairs, index) => (
                            <div key={index} className={styles.DropdownForCoins__coins}>
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
                }

            </div>
        </div>
    )
}

export default Coins