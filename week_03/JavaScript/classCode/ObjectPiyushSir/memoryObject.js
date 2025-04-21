let frame = "jiturajsharma"
let frame2 = frame

console.log(frame)
frame2 = "jitu"

console.log(frame)

let p2 = p1
p2.frame = 'Priya'

console.log(p2)
console.log(p1)

let p1 = {
    lname: 'Ch',
    address: {
        h: 1,
        s:1
    }
}

let p2 = JSON.parse(p1KaString)
p2.frame = "Raj"
p2.address.h = "hacked"

const p1KaString = JSON.stringify(p1)
console.log(p1KaString)

console.log(p2)
console.log(p1)



