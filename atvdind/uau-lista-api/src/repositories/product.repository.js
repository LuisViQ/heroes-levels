import pool from '../database/pool.js'

export async function findAllProducts() {
  const [rows] = await pool.query(
    `SELECT id, product_name, product_description, product_price, product_stock_quantity
     FROM products`
  )
  return rows
}

export async function findProductById(id) {
  const [rows] = await pool.query(
    `SELECT id, product_name, product_description, product_price, product_stock_quantity
     FROM products
     WHERE id = ?
     LIMIT 1`,
    [id]
  )
  return rows[0]
}
