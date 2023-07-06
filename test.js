// spread
const arr = ['V', 'D']
console.log(['C', ...arr])

// rest
const log = (...rest) => {
   console.log(rest)
}

log('V', 'D', 'C')