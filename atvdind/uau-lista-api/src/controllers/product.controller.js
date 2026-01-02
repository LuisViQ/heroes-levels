import * as productRepository from '../repositories/product.repository.js'


const mapProduct = row => ({
  id: row.id,
  title: row.product_name,
  description: row.product_description,
  price: Number(row.product_price ?? 0),
  stock: Number(row.product_stock_quantity ?? 0),
  thumbnail: row.thumb_url
})

export async function getProducts(req, res) {
  try {
    const rows = await productRepository.findAllProducts()
    const products = rows.map(mapProduct)
    return res.json({ products })
  } catch (error) {
    console.error('Erro ao buscar produtos:', error)
    return res.status(500).json({ message: 'Erro ao buscar produtos' })
  }
}

export async function getProductById(req, res) {
  try {
    const id = Number(req.params.id)
    if (!Number.isInteger(id)) {
      return res.status(400).json({ message: 'Produto invalido' })
    }

    const row = await productRepository.findProductById(id)
    if (!row) {
      return res.status(404).json({ message: 'Produto nao encontrado' })
    }

    return res.json(mapProduct(row))
  } catch (error) {
    console.error('Erro ao buscar produto:', error)
    return res.status(500).json({ message: 'Erro ao buscar produto' })
  }
}
