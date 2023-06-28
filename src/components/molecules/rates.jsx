import React from 'react'
import Hour from '../atoms/hour'
import clock from "../../assets/images/icons/clock.svg"
import high from "../../assets/images/icons/arrow-up.svg"
import low from '../../assets/images/icons/arrow-down.svg'
import chart from '../../assets/images/icons/chartBar.svg'
import styles from './molecules.module.css'

function Rates({ pairTicker }) {
  const main = {
    color: "#00C076"
  }
// using pairTicker as a prop to assign its data to their corresponding props for the  
  return (
    <div>
      <div className={`${styles.rates} scroll"`}>
        <div className="divider hide"></div>
        <Hour
          title={"24h change"}
          icon={clock}
          main={main}
          price={parseFloat(pairTicker?.priceChange).toFixed(2)}
          percentage={pairTicker?.priceChangePercent && (pairTicker?.priceChangePercent).includes("-") ? parseFloat(pairTicker.priceChangePercent) : "+" + parseFloat(pairTicker.priceChangePercent)} />

        <div className="divider"></div>

        <Hour
          title={"24h high"}
          icon={high}
          alt={"arrow-up"}
          price={parseFloat(pairTicker?.highPrice).toFixed(2)}
          percentage={pairTicker?.priceChangePercent && (pairTicker?.priceChangePercent).includes("-") ? parseFloat(pairTicker.priceChangePercent) : "+" + parseFloat(pairTicker.priceChangePercent)} />

        <div className="divider"></div>

        <Hour title={"24h low"}
          icon={low}
          alt={"arrow-down"}
          price={parseFloat(pairTicker?.lowPrice).toFixed(2)}
          percentage={pairTicker?.priceChangePercent && (pairTicker?.priceChangePercent).includes("-") ? parseFloat(pairTicker.priceChangePercent) : "+" + parseFloat(pairTicker.priceChangePercent)} />

        <div className="divider"></div>

        <Hour title={"24h volume"}
          icon={chart}
          alt={"arrow-down"}
          price={parseFloat(pairTicker?.volume).toFixed(2)}
          percentage={pairTicker?.priceChangePercent && (pairTicker?.priceChangePercent).includes("-") ? parseFloat(pairTicker.priceChangePercent) : "+" + parseFloat(pairTicker.priceChangePercent)} />
      </div>
    </div>
  )
}

export default Rates