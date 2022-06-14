export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
      .then(response => response.json())
}

export const submitOrder = (orderName, orderIngredients) => {
  return fetch('http://localhost:3001/api/v1/orders', {
    method: 'POST',
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify({name: orderName, ingredients: orderIngredients})
  })
  .then(response => response.json())
}