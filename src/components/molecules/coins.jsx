import React, { useContext, useEffect, useState } from 'react'
import styles from './molecules.module.css'
import caret from '../../assets/images/icons/angle-down-white.svg'
import currency from '../../assets/images/icons/btc_dollar.svg'
import Amount from '../atoms/amount'
import symbols from '../../assets/images/tokens.svg'
import search from '../../assets/images/icons/Search.svg'
import { AppContext } from '../../contexts/AppContext'
import { FetchTradingTicker } from '../../api/fetchApi'

function Coins({symbol, setSymbol, value}) {
    const { searchQuery, returnSearchQuery } = useContext(AppContext)
    const [pairs, setPairs] = useState([])
    const [fetchedPairs, setFetchedPairs] = useState([])

    const [data, setData] = useState("")

    // fetch the ticker data
    const getPairs = async () => {
        try {
            const data = await FetchTradingTicker()
            setFetchedPairs(data.slice(0, 50)) //limited the number of data fetched to just 50 
        } catch (error) {
            console.error();
        }
    }


    // set the default pair
    const [pairVariable, setPairVariable] = useState(symbol)

    const [dropdown, setDropDown] = useState(false)

    // search and filter out the trading pairs from the navbar search input field
    useEffect(() => {
        if (searchQuery) {
            const filteredPairs = pairs.filter(pair => pair.symbol.toLowerCase().includes(searchQuery.toLowerCase()))
            setFetchedPairs(filteredPairs)
            setDropDown(true)
        } else {
            setFetchedPairs(pairs)
            setDropDown(false)
        }
    }, [searchQuery])

    useEffect(() => {
        getPairs()
    }, [])

// search and filter out the trading pairs
    const handleChange = (e) => {
        const searchData = e.target.value;
        setData(searchData);
        const filteredPairs = searchData !== "" ? pairs.filter(pair => pair.symbol.toLowerCase().includes(searchData.toLowerCase())) : pairs;
        setFetchedPairs(filteredPairs);
    }

    return (
        <div>
            <div className={styles.coindropdown}>
                <img
                    src={currency}
                    alt="currency-symbol"
                />
                <h1 className="dropnow" onClick={() => setDropDown(!dropdown)}>{pairVariable}</h1>
                <span>
                    <img
                        src={caret}
                        alt="caret-angle"
                    />
                </span>
                <Amount value={parseFloat(value).toFixed(2)} />
                {/* <!-- DropDown for coins --> */}
                {dropdown && <div className={styles.DropdownForCoins}>
                    <h1 className={styles.DropdownForCoins__heading}>Select Market</h1>

                    <div className={styles.DropdownForCoins__searchbar}>
                        <img src={search} alt="search icon" />
                        <input type="search" placeholder="Search" id="coinSearch" onChange={handleChange} />
                    </div>

                    <ul className={styles.DropdownForCoins__tabs}>
                        <li className={styles.active}>All</li>
                        <li>USD</li>
                        <li>BTC</li>
                    </ul>


                    <div className={`${styles.coins} scroll`}>
                        {fetchedPairs?.map((pairs, index) => (
                            <div key={index} className={styles.DropdownForCoins__coins} onClick={() => {
                                setPairVariable(pairs.symbol)
                                setSymbol(pairs.symbol)
                                setDropDown(false)
                            }}>
                                <div className={styles.left}>
                                    <img src={symbols} alt="coin symbols" />
                                    <h1>{pairs.symbol}</h1>
                                </div>
                                <div className={styles.right}>
                                    <h1>${pairs.weightedAvgPrice}</h1>
                                    <h1 className={styles.percentage} style={pairs.priceChangePercent.includes("-") ? { color: 'red' } : {}}>{pairs.priceChangePercent}%</h1>
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