const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        // Lógica para adicionar o produto ao carrinho
        console.log('Produto adicionado ao carrinho:', productId);
    });
});

const quantityInputs = document.querySelectorAll('.quantity');

quantityInputs.forEach(input => {
    input.addEventListener('change', () => {
        const productId = input.dataset.productId;
        const quantity = parseInt(input.value);
        // Lógica para atualizar a quantidade de itens no carrinho
        console.log('Quantidade atualizada para o produto', productId, ':', quantity);
    });
});

const removeCartItemButtons = document.querySelectorAll('.remove-item');

removeCartItemButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        // Lógica para remover o produto do carrinho
        console.log('Produto removido do carrinho:', productId);
    });
});

function updateCartTotal() {
    const cartItems = document.querySelectorAll('.cart-item');
    let total = 0;
    cartItems.forEach(item => {
        const priceElement = item.querySelector('.price');
        const quantityElement = item.querySelector('.quantity');
        const price = parseFloat(priceElement.innerText.replace('$', ''));
        const quantity = parseInt(quantityElement.value);
        total += price * quantity;
    });
    document.querySelector('.cart-total').innerText = '$' + total.toFixed(2);
}

const checkoutForm = document.querySelector('#checkout-form');

checkoutForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = checkoutForm.querySelector('#name').value;
    const email = checkoutForm.querySelector('#email').value;
    const address = checkoutForm.querySelector('#address').value;
    const paymentMethod = checkoutForm.querySelector('#payment-method').value;
    // Lógica para validar e enviar o formulário
});
document.addEventListener('DOMContentLoaded', function() {
    const itemsContainer = document.getElementById('items-container');
    const cartItems = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total');
    const checkoutBtn = document.getElementById('checkout-btn');

    let cart = [];

    // Exemplo de itens disponíveis para compra
    const items = [
        { id: 1, name: 'Item 1', price: 10 },
        { id: 2, name: 'Item 2', price: 20 },
        { id: 3, name: 'Item 3', price: 15 },
    ];

    // Renderiza os itens disponíveis para compra
    function renderItems() {
        itemsContainer.innerHTML = '';
        items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.innerHTML = `
                <p>${item.name} - $${item.price}</p>
                <button class="add-to-cart" data-id="${item.id}">Adicionar ao Carrinho</button>
            `;
            itemsContainer.appendChild(itemDiv);
        });
    }

    // Adiciona um item ao carrinho
    function addToCart(itemId) {
        const selectedItem = items.find(item => item.id == itemId);
        cart.push(selectedItem);
        renderCart();
    }

    // Renderiza o carrinho
    function renderCart() {
        cartItems.innerHTML = '';
        let totalPrice = 0;
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price}`;
            cartItems.appendChild(li);
            totalPrice += item.price;
        });
        totalDisplay.textContent = `Total: $${totalPrice.toFixed(2)}`;
    }

    // Evento de clique para adicionar item ao carrinho
    itemsContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('add-to-cart')) {
            const itemId = event.target.getAttribute('data-id');
            addToCart(itemId);
        }
    });

    // Evento de clique para finalizar compra
    checkoutBtn.addEventListener('click', function() {
        alert('Compra finalizada! Total: $' + totalDisplay.textContent.split('$')[1]);
        cart = [];
        renderCart();
    });

    // Inicialização
    renderItems();
});