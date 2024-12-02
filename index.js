function increment() {
    const quantity = document.getElementById('quantity');
    quantity.value = parseInt(quantity.value) + 1;
  }
  
  function decrement() {
    const quantity = document.getElementById('quantity');
    if (quantity.value > 1) {
      quantity.value = parseInt(quantity.value) - 1;
    }
  }
  