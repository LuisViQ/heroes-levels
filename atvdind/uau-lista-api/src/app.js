import express from 'express'
import authRoutes from './routes/auth.routes.js'
import cartRoutes from './routes/cart.routes.js'
import productRoutes from './routes/product.routes.js'
import userRoutes from './routes/user.routes.js'

const app = express()

app.use(express.json())
app.use('/auth', authRoutes)
app.use('/cart', cartRoutes)
app.use('/products', productRoutes)
app.use(userRoutes)

export default app
