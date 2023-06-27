import React from 'react'
import styles from './organisms.module.css'
import Tabs from '../molecules/tabs'
import Filter from '../molecules/filter'
import Table from '../molecules/table'

function Orderbook() {
    const list = [
        {
            title: "Order Book",
            active: "true"
        },
        {
            title: "Recent Trades",
            active: "false"
        }
    ]
    return (
        <div className={styles.orderbook}>
            <Tabs tabs={list} />
            {/* <!-- filter --> */}
            <Filter />
            {/* <!-- Table --> */}
            <Table />

        </div>
    )
}

export default Orderbook