var colors = ['red', 'green', 'yellow', 'brown', 'black', 'white', 'blue']

console.log(typeof(colors))
console.log(colors)
console.log(colors[0])
console.log(colors[1])
console.log(colors[2])
console.log(colors[3])
console.log(colors[4])
console.log(colors[5])

//update a value
colors[0] = 'dark blue'
console.log(colors)

//add more colors
colors[7] = "light green"
console.log(colors)

colors[10] = "light blue"
console.log(colors)

colors[colors.length] = 'neon'
console.log(colors)

colors.push('Pink')
console.log(colors)

//delete a value
var delcolors = colors.pop()
console.log(colors)
console.log(delcolors)

var colors = ['yellow', 'green', 'blue', 'red', 'dark green']

colors.splice(1, 4, 'black', 'white')

//1st one tells where to start
//2nd tells how many items need to deleted
//3rd and 4th so on tells what items to be added

console.log(colors)
colors.splice(0, 1, 'dark pink')

console.log(colors)

//delete at specified position
colors.splice(3, 4)

console.log(colors)

//concatenation
var colors1 = ['purple', "light pink"]

var colors = colors.concat(colors1)

console.log(colors)

//sort
colors1.sort() //asc
console.log(colors1)

colors1.reverse() //desc
console.log(colors1)