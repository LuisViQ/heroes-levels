import pool from '../database/pool.js'

export async function findUserByUsername(username) {
  const [rows] = await pool.query(
    `SELECT id, name, username, password_hash
     FROM users
     WHERE username = ?
     LIMIT 1`,
    [username]
  )
  return rows[0]
}
