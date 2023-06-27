import React from 'react'
import styles from './organisms.module.css'
import Tabs from '../molecules/tabs'
import Filter from '../molecules/filter'
import Table from '../molecules/table'
import atom from '../atoms/atoms.module.css'

function Orderbook({ style }) {
    const list = [
        {
            title: "Order Book",
            active: true
        },
        {
            title: "Recent Trades",
            active: false
        }
    ]

    // do nothing
    const handle = () => null
    return (
        <div className={styles.orderbook} style={style}>
            <div className={atom.hide}>

            <Tabs tabs={list} handleClick={handle}/>
            </div>
            {/* <!-- filter --> */}
            <Filter />
            {/* <!-- Table --> */}
            <Table />

        </div>
    )
}

export default Orderbook