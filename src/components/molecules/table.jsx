import React from 'react'
import styles from './molecules.module.css'
import arrow from '../../assets/images/icons/icons/Arrow Up 2/greenArrow.svg'

function Table() {
  return (
    <div>
          <div className={styles.table}>
              <table>
                  <thead>
                      <tr>
                          <th>Price <br />(USDT)</th>
                          <th>Amount <br />(BTC)</th>
                          <th>Total</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr className={styles.after1}>
                          <td>36920.12</td>
                          <td>0.758965</td>
                          <td>28,020.98</td>
                      </tr>
                      <tr className={styles.after2}>
                          <td>36920.12</td>
                          <td>0.758965</td>
                          <td>28,020.98</td>
                      </tr>
                      <tr className={styles.after3}>
                          <td>36920.12</td>
                          <td>0.758965</td>
                          <td>28,020.98</td>
                      </tr>
                      <tr className={styles.after2}>
                          <td>36920.12</td>
                          <td>0.758965</td>
                          <td>28,020.98</td>
                      </tr>
                      <tr className={styles.after5}>
                          <td>36920.12</td>
                          <td>0.758965</td>
                          <td>28,020.98</td>
                      </tr>
                  </tbody>
              </table>
          </div>

          <div className={styles.summaryDem}>
              <h1 className="">36,641.20</h1>
              <img
                  src={arrow}
              />
              <h1>36,641.20</h1>
          </div>
          <div className={styles.table2}>
              <table>
                  <tbody>
                      <tr className={styles.before1}>
                          <td>36920.12</td>
                          <td>0.758965</td>
                          <td>28,020.98</td>
                      </tr>
                      <tr className={styles.before2}>
                          <td>36920.12</td>
                          <td>0.758965</td>
                          <td>28,020.98</td>
                      </tr>
                      <tr className={styles.before3}>
                          <td>36920.12</td>
                          <td>0.758965</td>
                          <td>28,020.98</td>
                      </tr>
                      <tr className={styles.before}>
                          <td>36920.12</td>
                          <td>0.758965</td>
                          <td>28,020.98</td>
                      </tr>
                      <tr className={styles.before2}>
                          <td>36920.12</td>
                          <td>0.758965</td>
                          <td>28,020.98</td>
                      </tr>
                      <tr className={styles.before2}>
                          <td>36920.12</td>
                          <td>0.758965</td>
                          <td>28,020.98</td>
                      </tr>
                  </tbody>
              </table>
          </div>
    </div>
  )
}

export default Table