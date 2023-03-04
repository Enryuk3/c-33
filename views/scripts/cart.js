async function deleteItemHandler(itemID, cartID) {
  const data = await fetch(`/carts/${cartID}/${itemID}`, {
    method: "DELETE",
  }).then((response) => response.json())
  data.message === "Query successfully resolved" &&
    alertify.success("Item eliminado del carrito")
  setTimeout(() => window.location.reload(), 1000)
}

async function cleanCartHandler(cartID) {
  const data = await fetch(`/carts/${cartID}`, { method: "DELETE" }).then(
    (response) => response.json()
  )
  data.message === "Query successfully resolved" && window.location.reload()
  alertify.success("Carrito vaciado de forma exitosa")
}

async function checkoutHandler() {
  await fetch(`/carts/checkout`, { method: "POST" })
  alertify.success("Procesando compra")
  window.location.href = `/carts/success`
}
