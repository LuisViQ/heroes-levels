import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import * as authRepository from '../repositories/auth.repository.js'

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret'
const DEFAULT_EXPIRES_MINUTES = 30

const getLastName = (name, username) => {
  const base = String(name ?? '').trim()
  if (!base) {
    return String(username ?? '')
  }
  const parts = base.split(/\s+/)
  return parts[parts.length - 1]
}

const comparePassword = async (plain, hash) => {
  if (!hash) {
    return false
  }
  try {
    return await bcrypt.compare(plain, hash)
  } catch {
    return plain === hash
  }
}

export async function login(req, res) {
  try {
    const { username, password, expiresInMins } = req.body ?? {}
    if (!username || !password) {
      return res.status(400).json({ message: 'Dados de login invalidos' })
    }

    const user = await authRepository.findUserByUsername(username)
    if (!user) {
      return res.status(401).json({ message: 'Credenciais invalidas' })
    }

    const isValid = await comparePassword(password, user.password_hash)
    if (!isValid) {
      return res.status(401).json({ message: 'Credenciais invalidas' })
    }

    const expires =
      Number.isFinite(Number(expiresInMins)) && Number(expiresInMins) > 0
        ? Number(expiresInMins)
        : DEFAULT_EXPIRES_MINUTES

    const accessToken = jwt.sign(
      { sub: user.id, username: user.username },
      JWT_SECRET,
      { expiresIn: `${expires}m` }
    )

    const lastName = getLastName(user.name, user.username)

    return res.json({
      token: accessToken,
      accessToken,
      lastName,
      name: user.name,
      username: user.username,
      id: user.id
    })
  } catch (error) {
    console.error('Erro no login:', error)
    return res.status(500).json({ message: 'Erro no login' })
  }
}
