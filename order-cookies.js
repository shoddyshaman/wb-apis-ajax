import axios from 'axios';

async function orderCookies(evt) {
  evt.preventDefault();  // prevent 'submit' event from reloading the page
  let qty = document.querySelector('#qty-field')
  let cookieType = document.querySelector('#cookie-type-field')
  
  const body = {
    qty : qty.value,
    cookieType : cookieType.value
  }

  const response = await axios.post('/order-cookies',body)

  document.querySelector('#order-status').innerText = response.data.msg
  document.querySelector('#order-total').innerText = response.data.total

}

document.querySelector('#order-form').addEventListener('submit', orderCookies);