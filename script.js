
        function checkStock(product, stock) {
            let qty = document.getElementById(product).value;
            let error = document.getElementById(product + 'Error');
            if (qty > stock) {
                error.textContent = 'No hay suficiente stock';
                document.getElementById(product).value = stock;
            } else {
                error.textContent = '';
                updateCost(product, document.getElementById(product + 'Product').getAttribute('data-price'));
            }
        }

        function updateCost(product, price) {
            let qty = document.getElementById(product).value;
            let cost = price * qty;
            document.getElementById(product + 'Cost').value = cost.toLocaleString('es-CO');
            calculateTotal();
        }

        function calculateTotal() {
            let total = 0;
            let products = document.querySelectorAll('.product');
            products.forEach(product => {
                let qty = parseInt(product.querySelector('input[type="number"]').value);
                if (qty > 0) {
                    let price = parseInt(product.getAttribute('data-price'));
                    total += qty * price;
                }
            });
            document.getElementById('total').textContent = total.toLocaleString('es-CO');
        }

        function searchProduct() {
            let input = document.getElementById('productSearch').value.toLowerCase();
            let products = document.querySelectorAll('.product');
            products.forEach(product => {
                if (product.getAttribute('data-name').includes(input)) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        }
    