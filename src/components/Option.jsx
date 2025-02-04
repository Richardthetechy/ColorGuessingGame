const Option = ({bgColor, isCorrect}) => {
    function handleClick() {
        isCorrect(bgColor)
    }
  return (
    <button onClick={handleClick} key={bgColor} style={{backgroundColor: bgColor,  
        width: "100px",
        height: "100px",
        borderRadius: "10px"}}>
        
    </button>
  )
}

export default Option