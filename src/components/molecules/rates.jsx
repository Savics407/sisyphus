import React from 'react'
import Hour from '../atoms/hour'
import clock from "../../assets/images/icons/clock.svg"
import high from "../../assets/images/icons/arrow-up.svg"
import low from '../../assets/images/icons/arrow-down.svg'
import chart from '../../assets/images/icons/chartBar.svg'
import styles from './molecules.module.css'

function Rates() {
    const main = {
        color: "#00C076"
    }
  return (
    <div>
          <div className={`${styles.rates} scroll"`}>
              <div className="divider hide"></div>
              <Hour title={"24h change"} icon={clock} main={main} />
              <div className="divider"></div>
              <Hour title={"24h high"} icon={high} alt={"arrow-up"} />
              <div className="divider"></div>
              <Hour title={"24h low"} icon={low} alt={"arrow-down"} />
              <div className="divider"></div>
              <Hour title={"24h volume"} icon={chart} alt={"arrow-down"} />
          </div>
    </div>
  )
}

export default Rates