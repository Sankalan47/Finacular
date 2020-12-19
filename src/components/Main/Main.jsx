import "./Main.css";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Chart from "../Chart/Chart";
import ChartD from "../Chart/ChartD";
import Darkmode from 'darkmode-js';

const Main = () => {
  const options = {
    autoMatchOsTheme: true,
    label: '🌓',
  };
const darkmode = new Darkmode(options);
 
  return (
    <main>
      <div className="main__container">
      
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
              
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>
            <Chart />
          </div>

          
          
        </div>
        {/* <!-- CHARTS ENDS HERE --> */}
        <div className="main__cards">
        <div className="card">
          <i
            className="fa fa-user-o fa-2x text-lightblue"
            aria-hidden="true"
          ></i>
          <div className="card_header"><p>Asset Balance<span className="tab"><i class="fas fa-ellipsis-h"></i></span></p>
          <br />
          <p>Enter ammount</p>
          <input type="text" placeholder='1,25,000'/>
          <span className="card_iconn fa-stack fa-4x">
          <i class="fas fa-circle fa-stack-2x icon-background"></i>
          <i class="fas fa-dollar-sign fa-stack-1x"></i></span>
          </div>
          <div className="card_inner">
            <p className="text-primary-p">Last Updated: 3 Dec</p>
            <span className="font-bold text-title"></span>
          </div>
        </div>


        <div className="card">
          <i
            className="fa fa-user-o fa-2x text-lightblue"
            aria-hidden="true"
          ></i>
          <div className="card_header"><p>Growth Rate<span className="tab"><i class="fas fa-ellipsis-h"></i></span></p>
          <br />
          <p>Enter Growth Rate</p>
          <input type="text" placeholder='9.03%'/>
          <span className="card_iconn fa-stack fa-4x">
          <i class="fas fa-circle fa-stack-2x icon-background"></i>
          <i class="fas fa-chart-line fa-stack-1x"></i></span>
          </div>
          <div className="card_inner">
            <p className="text-primary-p">Inflation:   6%</p>
            <span className="font-bold text-title"></span>
          </div>
        </div>



        <div className="card">
          <i
            className="fa fa-user-o fa-2x text-lightblue"
            aria-hidden="true"
          ></i>
          <div className="card_header"><p>Major Investments<span className="tab"><i class="fas fa-ellipsis-h"></i></span></p>
         <br/>
          <p>Returns Generated Per month</p>
          <br/>
          <h2>1,25,000
          <span className="card_iconn fa-stack fa-4x">
          <i class="fas fa-circle fa-stack-2x icon-background"></i>
          <i class="fas fa-dollar-sign fa-stack-1x"></i></span>
          </h2>
          
          
          </div>
          <div className="card_inner">
            
            <span className="font-bold text-title"></span>
          </div>
        </div>



        <div className="card">
          <i
            className="fa fa-user-o fa-2x text-lightblue"
            aria-hidden="true"
          ></i>
          <div className="card_header"><p>Financial Independence<span className="tab"><i class="fas fa-ellipsis-h"></i></span></p>
          <br />
          <p>Age</p>
  
          
          <span className="card_iconn fa-stack fa-4x">
          <i class="fas fa-circle fa-stack-2x icon-background"></i>
          <i class="fas fa-trophy fa-stack-1x"></i></span>
          <h2 className='age'>45</h2>
          </div>
          <div className="card_inner">
            <p className="text-primary-p">Optimized: </p>
            <label class="switch">
	<input class="switch-input" type="checkbox" />
	<span class="switch-label" data-on="On" data-off="Off"></span> 
	<span class="switch-handle"></span> 
</label>
            
          </div>
        </div>



        <div className="card">
        <i
          className="fa fa-user-o fa-2x text-lightblue"
          aria-hidden="true"
        ></i>
        <div className="card_header"><p>Average Expenses<span className="tab"><i class="fas fa-ellipsis-h"></i></span></p>
        <br />
        <p>Amount</p>

        
        <span className="card_iconn fa-stack fa-4x">
        <i class="fas fa-circle fa-stack-2x icon-background"></i>
        <i class="fas fa-donate fa-stack-1x"></i></span>
        <h2 className='age'>25,000</h2>
        </div>
        <div className="card_inner">
          <p className="text-primary-p">3 months average: 40,000</p>
          
          
        </div>
      </div>

      {darkmode.showWidget()}

      </div>
      </div>
    </main>
  );
};

export default Main;