
// You wrote a love letter, you want to insert your partner's name at the beginning of the message.

// Problem Statement: Create a function that inserts the partner's name at the start of the messages and returns the updated message.

function writeLoveLetter(message, name){
    message.unshift(name);
    return message
}

const messageList  = writeLoveLetter(["I", "Love", "You"], "Jitu")

console.log(messageList)

