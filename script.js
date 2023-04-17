let generateRandomNumber = (num) => {
    // Gets num within length of array to return 
    return Math.floor(Math.random() * num)
  }
  
  const threeData = {
    yourSign: ['star', 'moon', 'sun', 'comet'],
    currentStatus: ['Good','bad','ok','Great','Too Bad'],
    advice: ['Learn Music','Donate','Learn Hobby']
  }
  
  // Store the 'wisdom' in an array
  let messageArray = []
  
  // Iterate over the object
  for(let data in threeData) {
    let option = generateRandomNumber(threeData[data].length)
  
    // use the object's properties to customize the message being added to personalWisdom  
    switch(data) {
      case 'yourSign':
        messageArray.push(`Your sign is a "${threeData[data][option]}".`)
        break
      case 'currentStatus':
        messageArray.push(`You are having Current status : "${threeData[data][option]}".`)
        break
      case 'advice':
        messageArray.push(`You should try: "${threeData[data][option]}".`)
        break
      default:
        messageArray.push('There is not enough info.')
    }
  }
    
  console.log(messageArray.join('\n'));