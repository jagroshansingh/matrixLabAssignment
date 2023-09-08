import React from 'react'
import './css/Card.css'

export const Card = ({details}) => {
  return (
    <div id='Container'>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Basic Info</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Pair created at</td>
                        <td>{details.pairCreatedAt}</td>
                    </tr>
                    <tr>
                        <td>Symbol</td>
                        <td>{details.baseToken.symbol}</td>
                    </tr>
                    <tr>
                        <td>Dex ID</td>
                        <td>{details.dexId}</td>
                    </tr>
                    <tr>
                        <td>Pair Address</td>
                        <td>{details.pairAddress}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>
        <table>
                <thead>
                    <tr>
                        <th>Base Token</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{details.baseToken.name}</td>
                    </tr>
                    <tr>
                        <td>Symbol</td>
                        <td>{details.baseToken.symbol}</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>{details.baseToken.address}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>
        <table>
                <thead>
                    <tr>
                        <th>Quote Token</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{details.quoteToken.name}</td>
                    </tr>
                    <tr>
                        <td>Symbol</td>
                        <td>{details.quoteToken.symbol}</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>{details.quoteToken.address}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>
        <table>
                <thead>
                    <tr>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Price Native</td>
                        <td>{details.baseToken.symbol} {details.priceNative}</td>
                    </tr>
                    <tr>
                        <td>Price USD</td>
                        <td>{details.priceUsd}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}
