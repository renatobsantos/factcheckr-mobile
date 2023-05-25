const validateLink = (url: string): boolean => {
  const regex = /^(http|https):\/\/[^ "]+$/
  return regex.test(url)
}

const validateText = (text: string): boolean => {
  return text.length >= 50
}

export { validateLink, validateText }
