import React from "react";
import "./css/Card.css";
import { PiWarningCircleBold } from "react-icons/pi";
import { MdOutlineToken } from "react-icons/md";
import { LiaDollarSignSolid } from "react-icons/lia";

export const Card = ({ details }) => {
  function hash(val) {
    return (
      "#" +
      val[val.length - 4] +
      val[val.length - 3] +
      val[val.length - 2] +
      val[val.length - 1]
    );
  }

  return (
    <div id="Container">
      <div>
        <div>
          <table>
            <thead>
              <tr>
                <th colSpan="2">Basic Info</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pair created at</td>
                <td>{new Date(details.pairCreatedAt).toLocaleDateString()}</td>
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
                <td>{hash(details.pairAddress)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="icon">
          <PiWarningCircleBold />
        </div>
      </div>
      <div>
        <div>
          <table>
            <thead>
              <tr>
                <th colSpan="2">Base Token</th>
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
                <td>{hash(details.baseToken.address)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="icon">
          <MdOutlineToken />
        </div>
      </div>
      <div>
        <div>
          <table>
            <thead>
              <tr>
                <th colSpan="2">Quote Token</th>
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
                <td>{hash(details.quoteToken.address)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="icon">
          <MdOutlineToken />
        </div>
      </div>
      <div>
        <div>
          <table>
            <thead>
              <tr>
                <th colSpan="2">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Price Native</td>
                <td>
                  {details.baseToken.symbol} {details.priceNative}
                </td>
              </tr>
              <tr>
                <td>Price USD</td>
                <td>{details.priceUsd}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="icon">
          <LiaDollarSignSolid />
        </div>
      </div>
    </div>
  );
};
