function deleteProductItem(item, productList) {
  item.parentElement.remove();
  toggleSendOrderButton(productList);
}

function toggleSendOrderButton(productList) {
  const sendOrderButton = document.getElementById('send-order-button');
  productList.children.length > 0
    ? (sendOrderButton.disabled = false)
    : (sendOrderButton.disabled = true);
}

function addProduct(e) {
  //   e.preventDefault();
  if (!this.checkValidity()) {
    return;
  }
  e.preventDefault();
  const productList = document.getElementById('product-list'),
    productName = document.getElementById('product-name').value,
    productQuantity = document.getElementById('product-quantity').value;

  const productElem = document.createElement('li'),
    productInfo = document.createElement('span'),
    productQuantityElem = document.createElement('span'),
    trashElem = document.createElement('i');

  productElem.className =
    'list-group-item px-5 d-flex justify-content-between align-items-center';
  productQuantityElem.className = 'badge badge-primary badge-pill ml-5';
  productQuantityElem.innerText = productQuantity;
  productInfo.innerText = productName;
  productInfo.appendChild(productQuantityElem);
  trashElem.className = 'fas fa-trash delete-product-btn text-danger';
  trashElem.title = 'Eliminar Producto';
  productElem.appendChild(productInfo);
  productElem.appendChild(trashElem);
  productList.appendChild(productElem);
  trashElem.addEventListener('click', (e) =>
    deleteProductItem(e.target, productList)
  );
  toggleSendOrderButton(productList);
}

(function () {
  'use strict';
  window.addEventListener(
    'load',
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          'submit',
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          },
          false
        );
      });
    },
    false
  );
  const productForm = document.getElementById('product-form');
  if (productForm) {
    productForm.addEventListener('submit', addProduct);
  }
})();
