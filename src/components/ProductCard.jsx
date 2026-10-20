import { formatPrice } from '../data/products.js'

function ProductCard({ product, addToCart }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img className="product-image" src={product.image} alt={product.name} loading="lazy" />
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <button className="quick-add" type="button" onClick={() => addToCart(product)} aria-label={`Thêm ${product.name} vào giỏ`}>
          +
        </button>
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.detail}</p>
        <strong>{formatPrice(product.price)}</strong>
      </div>
    </article>
  )
}

export default ProductCard
