var removeCartItemButton = document.getElementsByClassName('remove')
console.log( removeCartItemButton)
for (var i=0; i<removeCartItemButton.length; i++)
{
    var button = removeCartItemButton[i]
    button.addEventListener('click', function(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.remove()
        updateCartTotal()
    })
}

function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-items')[1]
    var cartRows = cartItemContainer.getElementsByClassName('cart-info')
    for (var i =0; i<cartRows.length; i++){
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('price')[0]
        var quantityElement = cartRow.getElementsByClassName('quantity')[0]
        console.log('priceElement, quantityElement')
    }
}