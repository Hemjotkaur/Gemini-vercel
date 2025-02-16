import React, { useContext } from 'react'
import './Body.css'
import { assets } from '../assets/assets'
import { Context } from './Context'

const Body = () => {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}= useContext(Context)

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          event.preventDefault(); // Prevent form submission
          onSent();
        }
      };

  return (
   <div className="main">
    <div className="nav">
        <p>Lexi AI</p>
        <img src={assets.usericon} alt='' />
    </div>
    <div className="main-container">
      { !showResult
      ? 
      <>
      <div className="greet">
            <p><span>Hello, Dev.</span></p>
            <p>How can I help you today?</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt=''/>
            </div>
            <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt=''/>
            </div>
            <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt=''/>
            </div>
            <div className="card">
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt=''/>
            </div>
        </div>
        </>
        : <div className="result">
            <div className="result-title">
                <img src={assets.usericon} alt=''/>
                <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
                <img src={assets.gemini_icon} alt=''/>
                {loading
                ?<div className="loader">
                    <hr />
                    <hr />
                    <hr />
                </div> 
                 :      <p dangerouslySetInnerHTML={{__html:resultData}}></p> 
                 }
                {/* <p dangerouslySetInnerHTML={{__html:resultData}}></p> */}
             
            </div>
        </div>
        
        }
        <div className="main-bottom">
            <div className="search-box">
                <input 
                  onChange={(e)=>setInput(e.target.value)} 
                  value={input} 
                  type='text' 
                  placeholder='Enter a prompt here'
                  onKeyDown={handleKeyDown} 
                  />
                <div>
                  {input? <img onClick={()=>onSent()} src={assets.send_icon} alt="" /> :null}
                </div>
            </div>
            <p className="bottom-info">
                Lexi AI may display inaccurate info, including about people,so double-check its responses.
            </p>
        </div>
    </div>
   </div>
  )
}

export default Body
