export function formatPrice(num) {
  return `$${num}.00`
}

export function hideTextOverflow(str, length) {
  return str.slice(0, length) + '...'
}
