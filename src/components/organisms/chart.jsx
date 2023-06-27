import React from 'react'
import expand from "../../assets/images/icons/u_expand-alt.svg";
import atom from '../atoms/atoms.module.css'
import styles from './organisms.module.css'
import Subnav from '../molecules/subnav';
import candle from '../../assets/images/icons/Candle Chart 1.svg'
import redo from '../../assets/images/icons/redo.svg'
import undo from '../../assets/images/icons/undo.svg'
import icon from '../../assets/images/icons/u_angle-down.svg'
function Chart() {
  const intervals = [
    {
      title: "5M"
    },
    {
      title: "15M"
    },
    {
      title: "1H"
    },
    {
      title: "1D"
    },
    {
      title: "1W"
    },
    {
      title: "1M"
    },
    {
      title: "All"
    }
  ]
  return (
    <div>
      <div className="tradingview__filter scroll">
        <div className={styles.indicators}>
          <h1>Time</h1>
          <Subnav list={intervals} />
          
          <img
            src={icon}
            alt="icon"
            className={atom.hide}
          />

          <div className={`${styles.indicators__extras} ${atom.hide}`}>
            <div className={atom.divider2}></div>
            <img
              src={candle}
              alt="candle chart icon"
            />
            <div className={atom.divider2}></div>

            <h1>Fx indicators</h1>
            <div className={atom.divider2}></div>

            <img src={undo} alt="undo" />
            <img src={redo} alt="redo" />
            <div className={atom.divider2}></div>
          </div>
        </div>
        <div className={atom.hide} style={{ cursor: "pointer" }}>
          <img src={expand} alt="expand" id="expand" />
        </div>
      </div>
      <div className={styles.chartHolder}>
        <div
          id="container"
          style={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
            margin: "auto",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Chart