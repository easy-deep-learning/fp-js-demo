const getFunctionBody = functionCode => {
  const entire = functionCode.toString()
  return entire.slice(entire.indexOf('{') + 1, entire.lastIndexOf('}'))
}

export default getFunctionBody
