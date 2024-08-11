import logo from './logo.svg';
import { Parallax, ParallaxLayer } from '@react-spring/parallax' 
import './App.css';
import { useRef, useState } from 'react';
import botimg from './Assets/bot-img.png'
import background from './Assets/background.jpeg'
import background2 from './Assets/background2.jpeg'
import person from './Assets/person.png'

function App() {
  const ref = useRef();

  return (
    <>
      <link rel="icon" href="path/to/your/favicon.ico" />
      <title>United Warriors Bot</title>
      <div className="App">
        {/* static navbar */}
        <Parallax pages={1.3} ref={ref}>
          <ParallaxLayer offset={0} speed={2}>
            <div
              className="absolute top-0 left-0 z-0 w-full h-full bg-center bg-cover"
              style={{ backgroundImage: `url(${background})` }}
            ></div>
          </ParallaxLayer>
          
          <ParallaxLayer offset={0.5} speed={5}>
            <div className="w-full h-full text-white mt-96 -z-30">
              {/* add a box to the left and one to the right, transparent */}
              <div className="float-left w-1/3 py-3 bg-slate-900 bg-opacity-70 rounded-r-2xl h-fit">
                <p className="text-3xl leading-loose text-white">
                  💪 Get your sh*t together
                </p>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0.99} speed={2.3}>
            <div
              className="absolute top-0 left-0 z-0 w-full h-full bg-center bg-cover"
              style={{ backgroundImage: `url(${background2})` }}
            ></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0.99} speed={2.85}>
            <div className="fixed z-40 w-full bg-red-800 h-52"/>
          </ParallaxLayer>
          <ParallaxLayer sticky={{ start: 0, end: 2 }}>
            <div className="fixed flex flex-col items-center justify-center w-full h-full -z-30">
              <div className="bg-black bg-opacity-20 h-[25rem] w-[40rem] rounded-xl item">
                <p className="mt-5 text-4xl text-center text-white">𝕌ℕ𝕀𝕋𝔼𝔻 𝕎𝔸ℝℝ𝕀𝕆ℝ𝕊</p>
                <p className="text-lg text-center text-white">Daily Accountability bot</p>
                <img src={botimg} className="mx-auto mt-5 w-44 h-44" alt="" draggable="false"/>
                <div className='flex flex-row justify-around mt-12 align-middle'>
                  <div className="text-white">
                    <a
                      href="https://discord.com/oauth2/authorize?client_id=1267506594472525938&permissions=582185300913266&integration_type=0&scope=bot"
                      target="_blank" rel="noreferrer"
                      className="px-4 py-3 text-2xl text-center duration-500 bg-red-600 rounded-md hover:bg-red-400">Add To Server</a>
                  </div>
                  <div className="text-white ">
                    <a
                      href="https://discord.gg/jfNQCYma6q"
                      target="_blank" rel="noreferrer"
                      className="px-4 py-3 text-2xl text-center duration-500 bg-red-600 rounded-md hover:bg-red-400">Support Guild</a>
                    </div>
                </div>
                <a href="https://github.com/MORGANlTE/United-Warriors/blob/main/README.md" className='text-white' target="_blank" rel="noreferrer">Privacy policy</a>
              </div>
            </div>
          </ParallaxLayer>
          
          <ParallaxLayer offset={0.99} speed={2}>
            <div className="z-30 w-full h-full mt-64 text-white">
              {/* add a box to the left and one to the right, transparent */}
              <div className="float-right w-1/3 py-3 bg-slate-900 bg-opacity-70 rounded-l-2xl h-fit">
                <p className="text-3xl leading-loose text-white">
                  📝 Log relapses
                  <br/>
                  👟 Track progress
                  <br/>
                  🤖 Manage streaks
                  <br/>
                  💪 Stay accountable
                  <br />
                  👾 Interact with others
                  <br/>
                  💫 Check leaderboards
                  <br/>
                  🐦‍🔥 And so much more...
                </p>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer speed={0.01} offset={0.99}>
            <div className="w-full h-full bg-red-900 rounded-t-full -z-20 mt-52">
              {/* add a box to the left and one to the right, transparent */}
                <p className="text-4xl leading-loose text-white mt-80">
                  Made by the community, for the community
                </p>
            </div>
          </ParallaxLayer>
        </Parallax>
        </div>
      </>
  );
}

export default App;
