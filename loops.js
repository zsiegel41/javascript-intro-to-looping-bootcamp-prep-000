function forLoop(array) {
for (let i = 0; i < 25; i++) {
  if (i === 1) {
    return "I am 1 strange loop."
  }
  else {
    return "I am ${i} strange loops${i === 0 ? '' : 's'}."
  }
}
return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n--)
  }
  return "done"
}

function doWhileLoop(array) {
  return Math.random() >= 0.5
  do {
  array.pop()
  } while (array.length > 0 && maybeTrue());
return array
}
