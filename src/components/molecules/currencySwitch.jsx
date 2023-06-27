import React from 'react'
import styles from './molecules.module.css'
import NGN from '../../assets/images/nigeria.svg'
import GBP from '../../assets/images/british.svg'
import USD from '../../assets/images/US.svg'
import EUR from '../../assets/images/europe.svg'

function CurrencySwitch({select}) {
    const currencies = [
        {
            name: "Nigerian Naira",
            ISO_code: 'NGN',
            image_src: NGN
        },
        {
            name: "British Pounds",
            ISO_code: 'GBP',
            image_src: GBP
        },
        {
            name: "US Dollars",
            ISO_code: 'USD',
            image_src: USD
        },
        {
            name: "European euros",
            ISO_code: 'EUR',
            image_src: EUR
        }
    ]

    return (
        <ul class={styles.currencySwitcher}>
            {/* <!-- Currency Switcher --> */}
            {currencies.map((currency, index) => (
                <li key={index} onClick={() => select(currency.ISO_code)}>
                    <img src={currency.image_src} alt="country Flag" />
                    <div class={styles.currencySwitcher__title}>
                        <h1>{currency.name}</h1>
                        <h2>{currency.ISO_code}</h2>
                    </div>
                </li>
            ))}
        </ul>

    )
}

export default CurrencySwitch