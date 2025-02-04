import "./intro.css";
const GameInstruction = ({onStartGame}) => {
  return (
    <div className="intro">
        <h1>Welcome to the Color Game!</h1>
        <p>Here are the rules:</p>
        <ul>
            <li>Guess the correct color displayed in the box.</li>
            <li>You have 6 color options to choose from.</li>
            <li>Each correct guess increases your score.</li>
            <li>Click the "RESET" button to start a new game.</li>
        </ul>
        <button onClick={onStartGame}>Understood, Let's Play!</button>
  </div>
  )
}

export default GameInstruction