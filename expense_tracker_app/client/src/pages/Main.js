import React from 'react'
import Navbar from '../components/Navbar';
import '../resources/Main.css';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
const Main = () => {
  const navigate = useNavigate();
  return (
    <div className="all">
    <div className='container' id='con_1'>
                    <div className="box">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>

                    </div>
                    <dotlottie-player src="https://lottie.host/d6e908c1-ee1b-4d1a-a248-c09e42684ab5/WMDULNdInp.json" 
                    background="transparent" 
                    speed="1"
                    /*style=" width: 300px; height: 300px;"*/ 
                    loop 
                    autoplay></dotlottie-player>
                    <div className='solagan'>
                        <h1>Do Money <br/>Differently.</h1>
                        <p>Enjoy guilt-free spending and effortless saving with a <br/>friendly, flexible method for managing your finances.</p>
                    </div>
    </div>
      <div className="section2">

            <div className='cards'>
              <div>
              <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Have
              <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;perfect control</h5>
              <p>over all your cash expenses, bank <br/>
              accounts, E-Wallets and crypto <br/>
              wallets.</p>
              </div>
              <div>
              <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Get<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a quick overview</h5>
              <p>about your total incomes and<br/> expenses at a glance and in one<br/>place.</p>
              </div>
              <div>
              <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Use our smart budgets</h5>
              <p>to save money for a new car,<br/>dreamy
              vacation or top <br/>university.</p>
              </div>

      </div>
      </div>
        <div className="homepage" id='ser'>
          <div className="section section-1">
            <div className="content-main-left">
              <h2 className="title">Step 1</h2>
              <h3>Track your cash flow</h3>
              <p className="content-main">
              Managing your finances effectively starts with a clear understanding of your cash flow. By tracking your cash flow, you gain valuable insights into your income and expenses, enabling you to make informed financial decisions. Monitoring cash flow helps you identify spending patterns, predict future financial needs, and spot potential issues before they become significant problems</p>
            </div>
            <div className="animation-right">
            <dotlottie-player src="https://lottie.host/99500bfb-c70c-43c9-898c-8d2c3fb85bef/qVKpyEQQix.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
            </div>
          </div>
          
          <div className="section section-2">
            <div className="animation-left">
              {/* Facilitate Lottie animation here later */}
              <dotlottie-player src="https://lottie.host/9934aba2-be84-48d3-a79d-6bdbf569eeb8/FHwZUPPi1Q.json" background="transparent" speed="1"  loop autoplay></dotlottie-player>
            </div>
            <div className="content-main-right">
              <h2 className="title">Step 2</h2>
              <h3>Understand your financial habits</h3>
              <p className="content-main">
                Analyze your finance with beautiful, simple and easy to understand graphic. No need for complicated Excel sheets.<br/>
                See where your money goes and where they come from every month.<br/>
                See whether you spend less than you earn in one place.
              </p>
            </div>
          </div>
          
          <div className="section section-3">
            <div className="content-main-left">
              <h2 className="title">Step 3</h2>
              <h3>Make your spending stress–free</h3>
              <p className="content-main">
                Set smart budgets to help you not to overspend in chosen category.<br/>
                Know how much you can spend daily in order to stick to your budget.<br/>
                Save money for your future dreams.
              </p>
            </div>
            <div className="animation-right">
              {/* Facilitate Lottie animation here later */}
              <dotlottie-player src="https://lottie.host/013aca6e-1a09-4dcf-a4be-906068d1234b/fH7IBniS7s.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
            </div>
          </div>
          </div>
          <div className='con' id='cont'>
                <h1>Contact</h1>
                <Contact/>
          </div>
          {/*<div className="footer">
            </div>
            */}
            <Footer/>
            <Navbar/>
            <div className="wave wave1"></div>
            <div className="wave wave2"></div>
            <div className="wave wave3"></div>
            <div className="wave wave4"></div>
    </div>
  );
}

export default Main;