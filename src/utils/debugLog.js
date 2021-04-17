const isDebug = process.env.DEBUG === 'TRUE'
console.log('isDebug', isDebug)

const debugLog = isDebug
  /* eslint-disable no-undef -- receiving arguments */
  ? (...args) => console.log(...args)
  /* eslint-enable no-undef */
  : () => null

export default debugLog
