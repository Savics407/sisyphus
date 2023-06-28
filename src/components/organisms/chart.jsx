import React, { useContext, useEffect, useState } from 'react'
import expand from "../../assets/images/icons/u_expand-alt.svg";
import atom from '../atoms/atoms.module.css'
import styles from './organisms.module.css'
import Subnav from '../molecules/subnav';
import candle from '../../assets/images/icons/Candle Chart 1.svg'
import redo from '../../assets/images/icons/redo.svg'
import undo from '../../assets/images/icons/undo.svg'
import icon from '../../assets/images/icons/u_angle-down.svg'
import CreateChart from '../molecules/createChart';
import { FetchData } from '../../api/fetchApi.js'
import { AppContext } from '../../contexts/AppContext';

function Chart({ style }) {
  const {updateSymbol} = useContext(AppContext) 
  // set the intervals to fetch data dynamically
  const intervals = [
    {
      title: "5m",
      active: false
    },
    {
      title: "15m",
      active: false

    },
    {
      title: "1h",
      active: false

    },
    {
      title: "1d",
      active: false

    },
    {
      title: "1w",
      active: false

    },
    {
      title: "1M",
      active: false

    },
    {
      title: "All",
      active: true
    }
  ]

  const [tabActive, setTabActive] = useState(intervals)

  // set the default interval to 1 minute. 
  const [intervalData, setIntervalData] = useState("1m") 
  const [chartData, setChartData] = useState([])

  // assign fetched data to the candle stick chart
  const data = chartData

  const getChartData = async () => {
    try {
      const data = await FetchData(updateSymbol, intervalData) //passing data props to the fetchApi to fetch dynamically upon user interaction
      const result = data.map(d => {
        return { time: (d[0] / 1000), open: parseFloat(d[1]), high: parseFloat(d[2]), low: parseFloat(d[3]), close: parseFloat(d[4]) }
      })
      setChartData(result)
    } catch (error) {
      console.error(error);
    }
  }

  const handleTabClick = (index) => {
    const updatedList = intervals.map((item, i) => ({
      ...item,
      active: i === index //this sets the tab active to true and sets others to false 
    }))
    setTabActive(updatedList)
    setIntervalData(updatedList[index].title === "All" ? "1m" : updatedList[index].title) //used to check the current tab and handle the interval dynamically
  }


  useEffect(() => {
    getChartData()
  }, [intervalData, updateSymbol])

  
  return (
    <div className="tradingview__chart" style={style}>
      <div className="tradingview__filter scroll">
        <div className={styles.indicators}>
          <h1>Time:</h1>
          <Subnav list={tabActive} handleClick={handleTabClick}/>

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
        <CreateChart data={data} />
      </div>
    </div >
  );
}

export default Chart