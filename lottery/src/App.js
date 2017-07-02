import React, { Component } from 'react';
import './css/main.css';
import headerImg from "./img/header.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <img src={headerImg} alt="免费投注双色球" />
        </header>
        <section className="jackpot">
          <div className="lottery">
            <p className="issueno"><i className="iconfont">&#xe6a3;</i>第14134期 周二21:30开奖</p>
            <div className="recommand">
              <p><em><i>荐</i></em>复式投注幸运号码:</p>
              <ul>
                <li className="ball red">01</li>
                <li className="ball red">01</li>
                <li className="ball red">01</li>
                <li className="ball red">01</li>
                <li className="ball red">01</li>
                <li className="ball red">01</li>
                <li className="ball blue">04</li>
                <li className="ball refresh">&nbsp;
                        <i className="iconfont">&#xe62e;</i>
                </li>
              </ul>
            </div>
            <div className="bet">
              <i className="iconfont">&#xe649;</i>
              <select name="money" className="money-select" id="money">
                <option value="10">10元</option>
                <option value="10">50元</option>
                <option value="10">100元</option>
                <option value="10">500元</option>
                <option value="10">1000元</option>
                <option value="10">5000元</option>
              </select>
              <div className="btnWrap">
                <button className="btn red">立即投注</button>
              </div>

            </div>
          </div>


          <div className="lottery">
            <p className="issueno"><i className="iconfont">&#xe6a3;</i>第14134期 周二21:30开奖</p>
            <div className="recommand">
              <p>粤11选5任二幸运号:</p>
              <ul>
                <li className="ball red">01</li>
                <li className="ball red">01</li>
                <li className="ball refresh">&nbsp;
                        <i className="iconfont">&#xe62e;</i>
                </li>
              </ul>

            </div>
            <div className="bet">
              <i className="iconfont">&#xe649;</i>
              <select name="money" className="money-select" id="money">
                <option value="10">10元</option>
                <option value="10">50元</option>
                <option value="10">100元</option>
                <option value="10">500元</option>
                <option value="10">1000元</option>
                <option value="10">5000元</option>
              </select>
              <div className="btnWrap">
                <button className="btn red">立即投注</button>
              </div>

            </div>
          </div>

          <div className="lottery">
            <p className="issueno"><i className="iconfont">&#xe6a3;</i>第14134期 周二21:30开奖</p>
            <div className="recommand">
              <p>福彩3D直选幸运号:</p>
              <ul className="has-place">
                <li className="ball red"><i className="place">百</i>01</li>
                <li className="ball red"><i className="place">十</i>01</li>
                <li className="ball red"><i className="place">个</i>01</li>
                <li className="ball refresh">&nbsp;
                        <i className="iconfont">&#xe62e;</i>
                </li>
              </ul>
            </div>
            <div className="bet">
              <i className="iconfont">&#xe649;</i>
              <select name="money" className="money-select" id="money">
                <option value="10">10元</option>
                <option value="10">50元</option>
                <option value="10">100元</option>
                <option value="10">500元</option>
                <option value="10">1000元</option>
                <option value="10">5000元</option>
              </select>
              <div className="btnWrap">
                <button className="btn red">立即投注</button>
              </div>

            </div>
          </div>

          <div className="lottery">
            <p className="issueno"><i className="iconfont">&#xe6a3;</i>第14134期 周二21:30开奖</p>
            <div className="recommand">
              <p>排5直选:</p>
              <ul className="has-place">
                <li className="ball red"><i className="place">万</i>01</li>
                <li className="ball red"><i className="place">千</i>01</li>
                <li className="ball red"><i className="place">百</i>01</li>
                <li className="ball red"><i className="place">十</i>01</li>
                <li className="ball red"><i className="place">个</i>01</li>
                <li className="ball refresh">&nbsp;
                        <i className="iconfont">&#xe62e;</i>
                </li>
              </ul>

            </div>
            <div className="bet">
              <i className="iconfont">&#xe649;</i>
              <select name="money" className="money-select" id="money">
                <option value="10">10元</option>
                <option value="10">50元</option>
                <option value="10">100元</option>
                <option value="10">500元</option>
                <option value="10">1000元</option>
                <option value="10">5000元</option>
              </select>
              <div className="btnWrap">
                <button className="btn red">立即投注</button>
              </div>

            </div>
          </div>

          <div className="lottery">
            <p className="issueno"><i className="iconfont">&#xe6a3;</i>第14134期 周二21:30开奖</p>
            <div className="recommand">
              <p><em><i>荐</i></em>复式投注幸运号码:</p>
              <ul>
                <li className="ball red">01</li>
                <li className="ball red">01</li>
                <li className="ball red">01</li>
                <li className="ball red">01</li>
                <li className="ball red">01</li>
                <li className="ball red">01</li>
                <li className="ball blue">04</li>
                <li className="ball blue">04</li>
                <li className="ball red">01</li>
                <li className="ball red">01</li>
                <li className="ball red">01</li>
                <li className="ball refresh">&nbsp;
                        <i className="iconfont">&#xe62e;</i>
                </li>
              </ul>

            </div>
            <div className="bet">
              <i className="iconfont">&#xe649;</i>
              <select name="money" className="money-select" id="money">
                <option value="10">10元</option>
                <option value="10">50元</option>
                <option value="10">100元</option>
                <option value="10">500元</option>
                <option value="10">1000元</option>
                <option value="10">5000元</option>
              </select>
              <div className="btnWrap">
                <button className="btn red">立即投注</button>
              </div>

            </div>
          </div>
          <p className="total"><i className="iconfont">&#xe612;</i>奖池<em className="round-num red">1</em><em className="round-num red">1</em>亿<em className="round-num red">7</em>
            <em className="round-num red">6</em><em className="round-num red">8</em> 万
        </p>
        </section>
        <footer>
          <h1>规则说明</h1>
          <p>规则说明规则说明规则说明规则说明规则说明规则则说明规则说明规则说明规则说明规则</p>
        </footer>
      </div>
      // <div className="App">
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h2>Welcome to React</h2>
      //   </div>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
