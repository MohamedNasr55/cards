const ArrayChallenge = (nums) => {
  const pairs = []

  // Get the first and remove it from the array
  const first = nums.splice(0, 1)[0]

  nums.reduce((all, curr) => {
    all.forEach((a) => {
      // Check if we have a match
      if (curr + a === first) {
        // check if it's already in the array
        // we don't want duplicates
        if (pairs.indexOf(`${a},${curr}`) === -1 && pairs.indexOf(`${curr},${a}`) === -1) {
          // push the pair to the array separated by a space
          pairs.push(`${curr},${a}`)
        }
      }
    })

    return all
  }, nums) // we pass in nums as the starting point
  
  // If there are no pairs then return -1
  if (pairs.length === 0) {
    return -1
  } else {
    // Join the pairs together with a space
    const result = pairs.join(' ')
    // Replace each digit (\d) with hyphens before and after 
    const parsed = result.replace(/(\d)/g, '--$1--')

    return parsed
  }
}



const result1 = ArrayChallenge([17, 4, 5, 6, 10, 11, 4, -3, -5, 3, 15, 2, 7])
console.log(result1)
const result2 = ArrayChallenge([7, 6, 4, 1, 7, -2, 3, 12])
console.log(result2)