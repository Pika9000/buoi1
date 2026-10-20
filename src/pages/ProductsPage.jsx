import { useMemo, useState } from 'react'
import { Link, useOutletContext, useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import { products } from '../data/products.js'

const categories = ['Tất cả', 'Rau củ', 'Trái cây', 'Thực phẩm']

function ProductsPage({ addToCart }) {
  const { cartCount } = useOutletContext()
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedCategory = searchParams.get('category') || 'Tất cả'
  const [query, setQuery] = useState('')
  const filteredProducts = useMemo(() => products.filter((product) => {
    const matchesCategory = selectedCategory === 'Tất cả' || product.category === selectedCategory
    const matchesQuery = `${product.name} ${product.category}`.toLocaleLowerCase('vi').includes(query.trim().toLocaleLowerCase('vi'))
    return matchesCategory && matchesQuery
  }), [query, selectedCategory])
  const handleCategory = (category) => {
    if (category === 'Tất cả') {
      setSearchParams({})
    } else {
      setSearchParams({ category })
    }
  }
  const handleAddToCart = (product) => {
    addToCart(product)
    cartCount.setNotice(`${product.name} đã được thêm vào giỏ hàng`)
  }

  return (
    <section className="catalog-page">
      <div className="page-banner">
        <div className="container">
          <span className="eyebrow">TƯƠI SẠCH MỖI NGÀY</span>
          <h1>Sản phẩm nhà Mộc</h1>
          <p>Chọn thực phẩm ngon lành, có nguồn gốc rõ ràng cho cả gia đình.</p>
          <div className="breadcrumbs"><Link to="/">Trang chủ</Link><span>/</span><span>Sản phẩm</span></div>
        </div>
      </div>
      <div className="container catalog-content">
        <div className="catalog-toolbar">
          <div className="category-filters" aria-label="Lọc theo danh mục">
            {categories.map((category) => (
              <button className={`filter-button${selectedCategory === category ? ' selected' : ''}`} key={category} onClick={() => handleCategory(category)} type="button">
                {category}
              </button>
            ))}
          </div>
          <label className="search-box">
            <span aria-hidden="true">⌕</span>
            <input aria-label="Tìm sản phẩm" onChange={(event) => setQuery(event.target.value)} placeholder="Tìm sản phẩm..." value={query} />
          </label>
        </div>
        <p className="results-count">Hiển thị <strong>{filteredProducts.length}</strong> sản phẩm</p>
        {filteredProducts.length > 0 ? (
          <div className="product-grid catalog-grid">
            {filteredProducts.map((product) => <ProductCard addToCart={handleAddToCart} key={product.id} product={product} />)}
          </div>
        ) : (
          <div className="empty-state"><span aria-hidden="true">⌕</span><h2>Chưa tìm thấy sản phẩm phù hợp</h2><p>Thử tìm với tên khác hoặc chọn danh mục khác nhé.</p><button className="button button-primary" onClick={() => { setQuery(''); handleCategory('Tất cả') }} type="button">Xem tất cả sản phẩm</button></div>
        )}
      </div>
      {cartCount.notice && <div className="toast" role="status">{cartCount.notice}</div>}
    </section>
  )
}

export default ProductsPage
