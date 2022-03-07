export function captalizeText(text : string) : string{
  const formatedText = text.charAt(0).toUpperCase() + text.substr(1)

  return formatedText
}