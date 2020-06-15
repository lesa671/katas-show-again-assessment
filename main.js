///Contributors Lesa Ducksworth, Patricia Simons, Kedersen Blaizin//
const mainElement = document.querySelector('main')
const kata1Heading = document.createElement('h1')
kata1Heading.append('Kata 1')
mainElement.append(kata1Heading)

let counter1 = 1
while (counter1 <= 20) {
    //   console.log(counter1)
    const newElement = document.createElement('p')
    newElement.append(counter1)
    mainElement.append(newElement)
    counter1 += 1
}

const kata2Heading = document.createElement('h1')
kata2Heading.append('Kata 2')
mainElement.append(kata2Heading)
let counter2 = 2
while (counter2 <= 20) {
    // console.log(counter2)
    const newElement = document.createElement('p')
    newElement.append(counter2)
    mainElement.append(newElement)
    counter2 += 2
}

const kata3Heading = document.createElement('h1')
kata3Heading.append('Kata 3')
mainElement.append(kata3Heading)
let counter3 = 1
while (counter3 <= 20) {
    //   console.log(counter3)
    const newElement = document.createElement('p')
    newElement.append(counter3)
    mainElement.append(newElement)
    counter3 += 2
}

const kata4Heading = document.createElement('h1')
kata4Heading.append('Kata 4')
mainElement.append(kata4Heading)
let counter4 = 5
while (counter4 <= 100) {
    //   console.log(counter4)
    const newElement = document.createElement('p')
    newElement.append(counter4)
    mainElement.append(newElement)
    counter4 += 5
}

const kata5Heading = document.createElement('h1')
kata5Heading.append('Kata 5')
mainElement.append(kata5Heading)
for (let counter5 = 1; counter5 <= 10; counter5++) {
    const counterSqr = counter5 * counter5
    // console.log(counterSqr)
    const newElement = document.createElement('p')
    newElement.append(counterSqr)
    mainElement.append(newElement)
}

const kata6Heading = document.createElement('h1')
kata6Heading.append('Kata 6')
mainElement.append(kata6Heading)
let counter6 = 20
while (counter6 >= 1) {
    console.log(counter6)
    const newElement = document.createElement('p')
    newElement.append(counter6)
    mainElement.append(newElement)
    counter6 -= 1
}

const kata7Heading = document.createElement('h1')
kata7Heading.append('Kata 7')
mainElement.append(kata7Heading)
let counter7 = 20
while (counter7 >= 2) {
    console.log(counter7)
    const newElement = document.createElement('p')
    newElement.append(counter7)
    mainElement.append(newElement)
    counter7 -= 2
}

const kata8Heading = document.createElement('h1')
kata8Heading.append('Kata 8')
mainElement.append(kata8Heading)
let counter8 = 19
while (counter8 >= 1) {
    const newElement = document.createElement('p')
    newElement.append(counter8)
    console.log(counter8)
    mainElement.append(newElement)
    counter8 -= 2
}

const kata9Heading = document.createElement('h1')
kata9Heading.append('Kata 9')
mainElement.append(kata9Heading)
let counter9 = 100
while (counter9 >= 0) {
    console.log(counter9)
    const newElement = document.createElement('p')
    newElement.append(counter9)
    mainElement.append(newElement)
    counter9 -= 5
}

const kata10Heading = document.createElement('h1')
kata10Heading.append('Kata 10')
mainElement.append(kata10Heading)
let counter10 = 10
while (counter10 >= 0) {
    const counterSqr2 = counter10 * counter10
    console.log(counterSqr2)
    const newElement = document.createElement('p')
    newElement.append(counterSqr2)
    mainElement.append(newElement)
    counter10 -= 1
}

const kata11Heading = document.createElement('h1')
kata11Heading.append('Kata 11')
mainElement.append(kata11Heading)
const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71,
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
]
for (let index = 0; index < sampleArray.length; index++) {
    const newElement = document.createElement('p')
    newElement.append(sampleArray[index])
    mainElement.append(newElement)
    // const element = array[index];
}

const kata12Heading = document.createElement('h1')
kata12Heading.append('Kata 12')
mainElement.append(kata12Heading)
for (let index = 0; index < sampleArray.length; index++) {
    if (sampleArray[index] % 2 === 0) {
        const newElement = document.createElement('p')
        newElement.append(sampleArray[index])
        mainElement.append(newElement)
    }
}

const kata13Heading = document.createElement('h1')
kata13Heading.append('Kata 13')
mainElement.append(kata13Heading)
for (let index = 0; index < sampleArray.length; index++) {
    if (sampleArray[index] % 2 === 1) {
        const newElement = document.createElement('p')
        newElement.append(sampleArray[index])
        mainElement.append(newElement)
    }
}

const kata14Heading = document.createElement('h1')
kata14Heading.append('Kata 14')
mainElement.append(kata14Heading)
for (let index = 0; index < sampleArray.length; index++) {
    const counterSqr = sampleArray[index] * sampleArray[index]
    const newElement = document.createElement('p')
    newElement.append(counterSqr)
    mainElement.append(newElement)
}



const kata15Heading = document.createElement('h1')
kata15Heading.append('Kata 15')
mainElement.append(kata15Heading)

let counter = 1
let result = 0
while (counter <= 20) {
    result = result + counter

    counter++
}
const newElement = document.createElement('p')
newElement.append(result)
mainElement.append(newElement)


const kata16Heading = document.createElement('h1')
kata16Heading.append('Kata 16')
mainElement.append(kata16Heading)
result = sampleArray.reduce(myFunc)
function myFunc(total, num) {
    return total + num;
}


let newKata16 = document.createElement('p')
newKata16.append(result)
mainElement.append(newKata16)



const kata17Heading = document.createElement('h1')


kata17Heading.append('Kata 17')


mainElement.append(kata17Heading)

let smallest = Math.min(...sampleArray)


// let smallest = Math.min(sampleArray)
newKata17 = document.createElement('p')
newKata17.append(smallest)
mainElement.append(newKata17)


const kata18Heading = document.createElement('h1')
kata18Heading.append('Kata 18')
mainElement.append(kata18Heading)

let largest = Math.max(...sampleArray)


// let smallest = Math.min(sampleArray)
newKata18 = document.createElement('p')
newKata18.append(largest)
mainElement.append(newKata18)