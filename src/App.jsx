import { useState, useEffect } from 'react'
import './App.css'
import Option from './components/Option'
import { useWindowSize } from "@uidotdev/usehooks";
import Confetti from 'react-confetti'
import { generateRandomColor, isColorDifferent, predefinedColors, generateRandomColorOptions } from './utils'
import GameInstruction from './components/GameInstruction';

function App() {
  const [bgColor, setBgColor] = useState('')
  const [randomOptions, setRandomOptions] = useState([])
  const [targetColorId, setTargetColorId] = useState(Math.floor(Math.random() * predefinedColors.length))
  const [score, setScore] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isLoss, setIsLoss] = useState(false)
  const [attempt, setAttempt] = useState(0)
  const [isDisabled, setIsDisabled] = useState(false)
  const [isIntro, setIsIntro] = useState(true)
  
  function handleScore(color) {
    setIsDisabled(true)
    if (color === predefinedColors[targetColorId]) {
      const newScore = score + 1;
      const newAttempt = attempt + 1;
      setAttempt(newAttempt)
      setScore(newScore)
      setShowConfetti(true)
      setIsSuccess(true)
    } else {
      const newAttempt = attempt + 1;
      setAttempt(newAttempt)
      setIsLoss(true)
    }
    
  }

  useEffect(() => {
    if (showConfetti || isSuccess || isLoss) {
      setTimeout(() => {  
        setIsLoss(false)
        setIsSuccess(false)
        setShowConfetti(false)
        setIsDisabled(false)
      }, 2000)
    }
    const newTargetColorId = Math.floor(Math.random() * predefinedColors.length)
    setTargetColorId(newTargetColorId)
    setRandomOptions(generateRandomColorOptions(predefinedColors[newTargetColorId]))
    setBgColor(generateRandomColor())
  }, [attempt, score])
  
  return (
    <>
      <nav>
        <div className='container'>
          <h1><span style={{fontSize:"3rem"}}>C</span>olor<span style={{fontSize:"3rem"}}>G</span>ame</h1>
          
        </div>
      </nav>
      {}
      <main>
        {isIntro ? (
          <GameInstruction data-testid="gameInstructions" onStartGame={() => setIsIntro(false)} />
        ):(
            
            <div className="container">
            <div className='menu'>
                <h2 data-testid="score">Score: {score}</h2>
                {showConfetti && <Confetti 
                width={useWindowSize.width}
                height={useWindowSize.height}
                gravity={.2}
                numberOfPieces={200}  
                recycle={false}       
                run={showConfetti}/>
                }
                {(isSuccess || isLoss ) && <div className='overlay' />}
                    {isSuccess && <h3 data-testid="gameStatus" className='success'>You are Correct!</h3>}
                    {isLoss && <h3 data-testid="gameStatus" className='loss'>Ohhh!!, Wrong!</h3>}
                <button data-testid="newGameButton" onClick={() => setScore(0)}>RESET</button>
            </div>
            <section style={{pointerEvents: isDisabled ? 'none' : 'auto'}}>
                <div data-testid="colorBox" className="frame" style={{backgroundColor: predefinedColors[targetColorId]}}>

                </div>
                <div className="options">
                  {
                    randomOptions.map(optionBgColor => (
                    <Option data-testid="colorOption" key={optionBgColor} bgColor={optionBgColor} isCorrect={(color) => handleScore(color)} />
                    ))
                  }
                </div>
            </section>
            
            </div>
         )}  
      </main>
    </>
  )
}

export default App
