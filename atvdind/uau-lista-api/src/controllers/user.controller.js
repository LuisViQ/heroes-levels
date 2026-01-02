import * as userRepository from '../repositories/user.repository.js'

export async function getUsers(req, res) {
  const users = await userRepository.findAllUsers()
  return res.json(users)
}

export async function getUserById(req, res) {
  const user = await userRepository.findUserById(req.params.id)

  if (!user) {
    return res.status(404).json({ message: 'User not found' })
  }

  return res.json(user)
}
