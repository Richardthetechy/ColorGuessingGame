const predefinedColors = [
    "rgb(255, 0, 0)",       // Red
    "rgb(0, 255, 0)",       // Green
    "rgb(0, 0, 255)",       // Blue
    "rgb(255, 255, 0)",     // Yellow
    "rgb(255, 0, 255)",     // Magenta
    "rgb(0, 255, 255)",     // Cyan
    "rgb(128, 0, 0)",       // Maroon
    "rgb(0, 128, 0)",       // Dark Green
    "rgb(0, 0, 128)",       // Navy
    "rgb(128, 128, 0)",     // Olive
    "rgb(128, 0, 128)",     // Purple
    "rgb(0, 128, 128)",     // Teal
    "rgb(255, 165, 0)",     // Orange
    "rgb(255, 192, 203)",   // Pink
    "rgb(165, 42, 42)",     // Brown
    "rgb(128, 128, 128)",   // Gray
    "rgb(0, 255, 127)",     // Spring Green
    "rgb(75, 0, 130)",      // Indigo
    "rgb(255, 99, 71)",     // Tomato
    "rgb(147, 112, 219)"    // Medium Purple
  ];
const generateRandomColor = () => {
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)
   return (`rgb(${red}, ${green}, ${blue})`) 
  }

  const isColorDifferent = (color1, color2) => {
    const [r1, g1, b1] = color1.match(/\d+/g).map(Number)
    const [r2, g2, b2] = color2.match(/\d+/g).map(Number)
    const diff = Math.sqrt((r1 - r2) ** 2 + (g1 - g2) ** 2 + (b1 - b2) ** 2)
    return diff > 100
  }
const generateRandomColorOptions = (targetColor) => {
  let newOptions = []
  while(newOptions.length < 5) {
    const newColor = generateRandomColor()
    const isDifferentFromAll = newOptions.every(existingColor => 
      isColorDifferent(existingColor, newColor)
    )
    if (isDifferentFromAll && isColorDifferent(newColor, targetColor)) {
      newOptions.push(newColor)
    }
  }
    newOptions = [...newOptions, targetColor]
    newOptions.sort(() => Math.random() - 0.5)
    return newOptions
}


  export {
    predefinedColors,
    generateRandomColor,
    isColorDifferent,
    generateRandomColorOptions
  }