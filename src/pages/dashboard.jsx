import React, { useState } from 'react'
import Navbar from '../components/organisms/navbar'
import TopInfo from '../components/organisms/topInfo'
import Orderbook from '../components/organisms/orderbook'
import Chart from '../components/organisms/chart'
import BuyAndSell from '../components/organisms/buyAndSell'
import Tabs from '../components/molecules/tabs'
import Footer from '../components/organisms/footer';

function Dashboard() {
    const tabs = [
        { title: "Chart", active: true },
        { title: "Order book", active: false },
        { title: "Recent Trades", active: false }
    ]
    
    const [activeTab, setActiveTab] = useState(tabs)
    const [tabContent, setTabContent] = useState(tabs[0].title)
    const orderLinks = [
        {
            title: "Open Orders",
            active: "true"
        },
        {
            title: "Positions",
            active: "false"
        },
        {
            title: "Order History",
            active: "false"
        },
        {
            title: "Trade History",
            active: "false"
        },

    ]

     const handleClick = (index) => {
        const updatedList = tabs.map((item, i) => ({
            ...item,
            active: i === index //this sets the tab active to true and sets others to false 
        }))
        setActiveTab(updatedList)
        setTabContent(updatedList[index].title)
    }

    const showContent = {
        display: 'flex'
    }
    const HideContent = {
        display: 'none'
    }
    return (
        <div>
            <Navbar />
            <section className="section">
                <TopInfo />
                <div className="section__extended">
                    <div className="extended">
                        <div className="tradingview">
                            {/* <!-- chart session --> */}
                            <div className='deskhide'>
                                <Tabs tabs={activeTab} handleClick={handleClick}/>
                            </div>
                            <Chart style={tabContent === tabs[1].title || tabContent === tabs[2].title ? HideContent : null} />
                            <Orderbook style={tabContent === tabs[1].title || tabContent === tabs[2].title ? showContent : null}/>
                        </div>
                        <div className="orders">
                            <ul className="orders__tabs">
                                {orderLinks?.map((order, index) => (
                                    <li key={index} className={`orders__tabs--links ${order.active === "true" && "active"}`}>{order.title}</li>
                                ))}
                            </ul>
                            <div className="orders__content">
                                <div className="">
                                    <h1>No Open Orders</h1>
                                    <h2>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                                        pulvinar nullam sit imperdiet pulvinar.
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <BuyAndSell />

                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Dashboard