Number.isFinite = Number.isFinite || function (value) {
  return typeof value === 'number' && isFinite(value)
}

export default function round (num, places) {
  if (!Number.isFinite(places)) {
    places = 0
  }
  if (Number.isFinite(num)) {
    const quant = Math.pow(10, places)
    return Math.round(num * quant) / quant
  } else {
    return 0
  }
}
