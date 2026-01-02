import pool from '../database/pool.js'

export async function findAllUsers() {
  const [rows] = await pool.query('SELECT * FROM users')
  return rows
}

export async function findUserById(id) {
  const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id])
  return rows[0]
}
