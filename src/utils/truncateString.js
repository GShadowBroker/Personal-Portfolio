export default (text, maxLength = 40) => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + "[...]"
}
