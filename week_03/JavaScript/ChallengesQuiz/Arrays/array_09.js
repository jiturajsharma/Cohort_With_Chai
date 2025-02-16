
// A new VIP guest arrives at the club and should be at the front a the queue. Add them to the beginning of the list.

// Problem statement: Create a function that adds a VIP guest to the front of the queue and returns the updated lsit.

function addVIP(queue, vipGuest){
    queue.unshift(vipGuest)
    return queue
}

const vipList = addVIP(["Aarav", "Ishaan", "Reyansh"], "Zoya")

console.log(vipList)
