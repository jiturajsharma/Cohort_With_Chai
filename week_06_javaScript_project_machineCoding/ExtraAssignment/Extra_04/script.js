function addItem(){
    const itemInput = document.getElementById('input')
    const itemName = itemInput.value.trim();


    if(itemName === ''){
        alert('Please enter an item!')
        return;
    }

    // Get the list of items in the cart

    const cartList = document.getElementById('cartList');
    const cartItems = cartList.getElementsByClassName('li');

    for(let i = 0; i<cartItems.length;i++){
        if(cartItems[i].innerText === itemName){
            alert('This items is already in your cart!');
            itemInput.value = ''; // clear the input field
            return;
        }
    }

    const li = document.createElement('li')
    li.textContent = itemName;
    cartList.appendChild(li)
    itemInput.value = '';


}

addItem()