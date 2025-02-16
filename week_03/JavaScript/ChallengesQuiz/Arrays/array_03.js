
// A puppy named Max was playing in the park, but he went to the first position of the queue instead of waiting at the end. You need to add max at the beginning of the queue.

// Problem Satement: Create functionat that adds a puppy to that front of the queue and returns the updated queue.

function addPuppy(queue, puppName){
    queue.unshift(puppName);
    return queue;
}
