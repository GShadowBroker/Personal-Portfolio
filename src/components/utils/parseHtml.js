// Adds rel='noopener' to anchor tags
const _addNoopener = html => {
  const openingAnchor = new RegExp(/<a\s/, "ig")
  return html.replace(openingAnchor, `<a rel="noopener" `)
}

const _removeHeading1 = html => {
  return html.replace(/<h1/gi, "<h2").replace(/<\/h1/gi, "</h2")
}

module.exports = html => {
  if (!html) return
  html = _addNoopener(html)
  html = _removeHeading1(html)
  return html
}
