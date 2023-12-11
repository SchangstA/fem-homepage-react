import React from 'react';
import images from './images/index.js';
import './App.css';

function App() {

  return (
  <>

    <div className='container'>
      <div>
        <nav className='even-columns'>
        <img src={images.logo} />
          <ul className='inline-flex'>
            <li><a href="#">Home</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Popular</a></li>
            <li><a href="#">Trending</a></li>
            <li><a href="#">Categories</a></li>
          </ul>
        </nav>
        <div className='grid-images'>
          
          <img className='child-one' src={images.desktop} alt='' />

          <div className='child-two'>
            <h2 id='new-headline'
            style={{color:'var(--clr-primary-600)'}}>
              New
            </h2>
            <h3 
            style={{color:'white'}}>
              Hydrogen VS Electric Cars
            </h3>
            <p>
              Will hydrogen-fueld cars ever catch up <br />
              to EVs?
            </p>
            <hr />
            <br className='break-line'/>

            <h3 
            style={{color:'white'}}>
              The Downsides of AI Artistry
            </h3>
            <p>
              What are the possible adverse effects of  <br />
              on-demand AI image generation?
            </p>
            <hr />
            <br className='break-line'/>

            <h3 style={{color:'white'}}>Is VC Funding Drying Up?</h3>
            <p>
              Private funding by VC firms is down 50% <br />
              YOY. We take a look at what that means
            </p>
            <br className='break-line'/>
          </div>

          <div className='child-three'>
            <h1>
              The Bright <br /> 
              Future of <br />
              Web 3.0?
            </h1>
          </div>

          <div className='child-four'>
            <p>
              We dive into the next evoulution of the web that <br />
              claims to put the power of the platforms back <br />
              into the hands of the people. But is it really <br />
              fulfilling its promise.
            </p>
            <button className='button'>
              READ MORE
            </button>
          </div>
          
          <div className='numbered-div-inline child-five'>
            <div className='numbered-div'>
              <img src={images.retroPcs} alt='' />
              <div className='numbered-font'>
                <h2 
                style={{color:'var(--clr-neutral-500)'}}>
                  01
                </h2>
                <h3>Reviving Retro PCs</h3>
                <p>
                  What happens when old PCs <br />
                  are given modern upgrades?
                </p>
              </div>
            </div>

            <div className='numbered-div'>
              <img src={images.topLaptops} alt='' />
              <div className='numbered-font'>
                <h2 
                style={{color:'var(--clr-neutral-500)'}}>
                  02
                </h2>
                <h3>Top 10 Laptops of 2022</h3>
                <p>
                  Our best picks for various <br />
                  needs and budgets.
                </p>
              </div>
            </div>

            <div className='numbered-div'>
              <img src={images.gamingGrowth} alt='' />
              <div className='numbered-font'>
                <h2 
                style={{color:'var(--clr-neutral-500)'}}>
                  03
                </h2>
                <h3>The Growth of Gaming</h3>
                <p>
                  How the oandemic has sparked <br />
                  fresh opportunities.
                </p>
              </div>
            </div>
          </div>
          

        </div>  
      </div>
    </div>

  </>
  )
}

export default App;
