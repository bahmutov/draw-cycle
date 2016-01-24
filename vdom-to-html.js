function vdomToHtml(node) {
  if (typeof node.text === 'string') {
    return node.text
  }

  var childrenText;
  if (Array.isArray(node.children)) {
    childrenText = node.children.map(vdomToHtml).join('')
  }
  var text = '<' + node.tagName + '>'
  if (childrenText) {
    if (childrenText.length > 10) {
      text += '\n' + childrenText + '\n'
    } else {
      text += childrenText
    }
  }
  text += '</' + node.tagName + '>\n'
  return text
}
