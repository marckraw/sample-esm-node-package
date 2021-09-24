const asyncFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This is async information!")
    },3000)
  })
}

const syncFunction = () => {
  return "This is sync function"
}

export { syncFunction, asyncFunction }