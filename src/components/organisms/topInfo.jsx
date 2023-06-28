import React, { useEffect, useState } from 'react'
import Coins from '../molecules/coins'
import styles from './organisms.module.css'
import Rates from '../molecules/rates'
import { FetchTicker } from '../../api/fetchApi'

function TopInfo() {
  
  const [symbol, setSymbol] = useState("BTCUSDT")
  const [pairTicker, setPairTicker] = useState({})
  const getSymbolTicker = async () => {
    try {
      const data = await FetchTicker(symbol)
      // console.log(data)
      setPairTicker(data)
    } catch (error) {console.error(error)}
  }

  useEffect(() => {
    getSymbolTicker()
  }, [symbol])

 
  return (
    <div>
      <div className={styles.topinfo}>
        <Coins symbol={symbol} setSymbol={setSymbol} value={pairTicker.weightedAvgPrice}/>
        <div className={styles.topinfo__info}>
          <Rates pairTicker={pairTicker} />
        </div>
      </div>
    </div>
  )
}

export default TopInfo