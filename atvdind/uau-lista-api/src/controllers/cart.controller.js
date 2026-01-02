import * as cartRepository from '../repositories/cart.repository.js'
import * as productRepository from '../repositories/product.repository.js'
import * as userRepository from '../repositories/user.repository.js'

const buildThumbnailUrl = id => `https://picsum.photos/seed/${id}/600/600`

const toPositiveInt = value => {
  const parsed = Number(value)
  return Number.isInteger(parsed) && parsed > 0 ? parsed : null
}

const mapCartItem = row => ({
  id: row.product_id,
  title: row.product_name,
  description: row.product_description,
  price: Number(row.product_price ?? 0),
  quantity: Number(row.quantity ?? 0),
  thumbnail: buildThumbnailUrl(row.product_id)
})

const buildCartResponse = (cart, items) => {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )
  const itemsCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return {
    cartId: cart.id,
    userId: cart.user_id,
    items,
    total,
    itemsCount
  }
}

export async function getCart(req, res) {
  try {
    const userId = toPositiveInt(req.params.userId)
    if (!userId) {
      return res.status(400).json({ message: 'Usuario invalido' })
    }

    const user = await userRepository.findUserById(userId)
    if (!user) {
      return res.status(404).json({ message: 'Usuario nao encontrado' })
    }

    const cart = await cartRepository.getOrCreateCartByUserId(userId)
    const rows = await cartRepository.getCartItemsByCartId(cart.id)
    const items = rows.map(mapCartItem)

    return res.json(buildCartResponse(cart, items))
  } catch (error) {
    console.error('Erro ao buscar carrinho:', error)
    return res.status(500).json({ message: 'Erro ao buscar carrinho' })
  }
}

export async function addItem(req, res) {
  try {
    const userId = toPositiveInt(req.params.userId)
    const productId = toPositiveInt(req.body?.productId)
    const quantity = toPositiveInt(req.body?.quantity ?? 1)

    if (!userId) {
      return res.status(400).json({ message: 'Usuario invalido' })
    }
    if (!productId) {
      return res.status(400).json({ message: 'Produto invalido' })
    }
    if (!quantity) {
      return res.status(400).json({ message: 'Quantidade invalida' })
    }

    const user = await userRepository.findUserById(userId)
    if (!user) {
      return res.status(404).json({ message: 'Usuario nao encontrado' })
    }

    const product = await productRepository.findProductById(productId)
    if (!product) {
      return res.status(404).json({ message: 'Produto nao encontrado' })
    }

    const cart = await cartRepository.getOrCreateCartByUserId(userId)
    await cartRepository.addCartItem(cart.id, productId, quantity)

    const rows = await cartRepository.getCartItemsByCartId(cart.id)
    const items = rows.map(mapCartItem)

    return res.status(201).json(buildCartResponse(cart, items))
  } catch (error) {
    console.error('Erro ao adicionar item:', error)
    return res.status(500).json({ message: 'Erro ao adicionar item' })
  }
}

export async function updateItem(req, res) {
  try {
    const userId = toPositiveInt(req.params.userId)
    const productId = toPositiveInt(req.params.productId)
    const quantity = Number(req.body?.quantity)

    if (!userId) {
      return res.status(400).json({ message: 'Usuario invalido' })
    }
    if (!productId) {
      return res.status(400).json({ message: 'Produto invalido' })
    }
    if (!Number.isFinite(quantity) || !Number.isInteger(quantity)) {
      return res.status(400).json({ message: 'Quantidade invalida' })
    }

    const user = await userRepository.findUserById(userId)
    if (!user) {
      return res.status(404).json({ message: 'Usuario nao encontrado' })
    }

    const cart = await cartRepository.getOrCreateCartByUserId(userId)
    if (quantity <= 0) {
      await cartRepository.removeCartItem(cart.id, productId)
    } else {
      await cartRepository.updateCartItemQuantity(cart.id, productId, quantity)
    }

    const rows = await cartRepository.getCartItemsByCartId(cart.id)
    const items = rows.map(mapCartItem)

    return res.json(buildCartResponse(cart, items))
  } catch (error) {
    console.error('Erro ao atualizar item:', error)
    return res.status(500).json({ message: 'Erro ao atualizar item' })
  }
}

export async function removeItem(req, res) {
  try {
    const userId = toPositiveInt(req.params.userId)
    const productId = toPositiveInt(req.params.productId)

    if (!userId) {
      return res.status(400).json({ message: 'Usuario invalido' })
    }
    if (!productId) {
      return res.status(400).json({ message: 'Produto invalido' })
    }

    const user = await userRepository.findUserById(userId)
    if (!user) {
      return res.status(404).json({ message: 'Usuario nao encontrado' })
    }

    const cart = await cartRepository.getOrCreateCartByUserId(userId)
    await cartRepository.removeCartItem(cart.id, productId)

    const rows = await cartRepository.getCartItemsByCartId(cart.id)
    const items = rows.map(mapCartItem)

    return res.json(buildCartResponse(cart, items))
  } catch (error) {
    console.error('Erro ao remover item:', error)
    return res.status(500).json({ message: 'Erro ao remover item' })
  }
}

export async function clearCart(req, res) {
  try {
    const userId = toPositiveInt(req.params.userId)
    if (!userId) {
      return res.status(400).json({ message: 'Usuario invalido' })
    }

    const user = await userRepository.findUserById(userId)
    if (!user) {
      return res.status(404).json({ message: 'Usuario nao encontrado' })
    }

    const cart = await cartRepository.getOrCreateCartByUserId(userId)
    await cartRepository.clearCartItems(cart.id)

    return res.json(buildCartResponse(cart, []))
  } catch (error) {
    console.error('Erro ao limpar carrinho:', error)
    return res.status(500).json({ message: 'Erro ao limpar carrinho' })
  }
}
