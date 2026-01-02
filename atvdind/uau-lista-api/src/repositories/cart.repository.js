import pool from '../database/pool.js'

export async function getOrCreateCartByUserId(userId) {
  await pool.query('INSERT IGNORE INTO carts (user_id) VALUES (?)', [userId])

  const [rows] = await pool.query(
    'SELECT id, user_id FROM carts WHERE user_id = ? LIMIT 1',
    [userId]
  )

  return rows[0]
}

export async function getCartItemsByCartId(cartId) {
  const [rows] = await pool.query(
    `SELECT
      ci.product_id,
      ci.quantity,
      p.product_name,
      p.product_description,
      p.product_price
     FROM cart_items ci
     INNER JOIN products p ON p.id = ci.product_id
     WHERE ci.cart_id = ?
     ORDER BY ci.id`,
    [cartId]
  )
  return rows
}

export async function addCartItem(cartId, productId, quantity) {
  await pool.query(
    `INSERT INTO cart_items (cart_id, product_id, quantity)
     VALUES (?, ?, ?)
     ON DUPLICATE KEY UPDATE quantity = quantity + ?`,
    [cartId, productId, quantity, quantity]
  )
}

export async function updateCartItemQuantity(cartId, productId, quantity) {
  await pool.query(
    `UPDATE cart_items
     SET quantity = ?
     WHERE cart_id = ? AND product_id = ?`,
    [quantity, cartId, productId]
  )
}

export async function removeCartItem(cartId, productId) {
  await pool.query(
    'DELETE FROM cart_items WHERE cart_id = ? AND product_id = ?',
    [cartId, productId]
  )
}

export async function clearCartItems(cartId) {
  await pool.query('DELETE FROM cart_items WHERE cart_id = ?', [cartId])
}
