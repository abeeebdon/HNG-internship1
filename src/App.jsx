import { useState, useEffect } from 'react'

const COLORS = [
  '#FF5733',
  '#33FF57',
  '#3357FF',
  '#F1C40F',
  '#8E44AD',
  '#1ABC9C',
  '#E74C3C',
  '#2ECC71',
  '#3498DB',
  '#9B59B6',
  '#34495E',
  '#16A085',
  '#27AE60',
  '#2980B9',
  '#D35400',
  '#C0392B',
  '#7F8C8D',
  '#BDC3C7',
  '#E67E22',
  '#95A5A6',
  '#F39C12',
  '#6C5CE7',
  '#00B894',
  '#D63031',
  '#0984E3',
]

const App = () => {
  const [targetColor, setTargetColor] = useState('#D63031')
  const [score, setScore] = useState(0)
  const [gameStatus, setGameStatus] = useState('')
  const [options, setOptions] = useState([])
  useEffect(() => {
    const optionColors = COLORS.filter((color) => color !== targetColor)
    const fiveOptionColors = optionColors.filter((_, index) => index < 5)
    const optionArray = [...fiveOptionColors, targetColor]
    const shuffleArray = (array) => {
      return array.sort(() => Math.random() - 0.5)
    }
    const optionArrays = shuffleArray(optionArray)

    setOptions(optionArrays)
  }, [targetColor])

  const changeColor = () => {
    const newColor = COLORS[Math.floor(Math.random() * COLORS.length)]

    setTargetColor(newColor)
    return newColor
  }

  const startNewGame = () => {
    const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)]
    setTargetColor(randomColor)
    setGameStatus('')
  }

  const shuffleColors = () => {
    const newColor = changeColor()
    if (newColor == targetColor) {
      changeColor()
    }
  }

  const handleColorGuess = (selectedColor) => {
    if (selectedColor === targetColor) {
      setScore(score + 1)
      setGameStatus('Correct!')
      shuffleColors()
    } else {
      setGameStatus('Wrong! Try again.')
    }
  }

  return (
    <div className="container">
      <main className="game-container">
        <div>
          <h1 className="game-header">Color Game</h1>
          <p data-testid="gameInstructions" className="gameInstructions">
            Using the color show in the box above, Guess the Correct Color and
            win
          </p>
          <h2
            data-testid="gameStatus"
            className="game-status"
            style={{
              color: gameStatus == 'Wrong! Try again.' && 'red',
            }}
          >
            {gameStatus}
          </h2>
        </div>
        <div
          data-testid="colorBox"
          className="color-box"
          style={{ backgroundColor: targetColor }}
        ></div>
        <div className="color-options">
          {options.map((color, index) => (
            <button
              key={index}
              data-testid="colorOption"
              style={{ backgroundColor: color }}
              onClick={() => handleColorGuess(color)}
              className="color-button"
            ></button>
          ))}
        </div>
        <p data-testid="score" className="game-score">
          Score: {score}
        </p>
        <button
          onClick={startNewGame}
          data-testid="newGameButton"
          className="new-game-button"
        >
          New Game
        </button>
      </main>
    </div>
  )
}

export default App
