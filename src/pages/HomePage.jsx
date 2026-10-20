import { Link, useOutletContext } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import { products } from '../data/products.js'

const categories = [
  { name: 'Rau xanh', description: 'Tươi mát mỗi ngày', icon: '🥬', tone: 'green', filter: 'Rau củ' },
  { name: 'Trái cây', description: 'Ngọt lành tự nhiên', icon: '🍊', tone: 'orange', filter: 'Trái cây' },
  { name: 'Thực phẩm', description: 'Chọn lọc an tâm', icon: '🥚', tone: 'yellow', filter: 'Thực phẩm' },
  { name: 'Đồ uống', description: 'Mát lành sảng khoái', icon: '🥛', tone: 'blue', filter: 'Thực phẩm' },
]

function HomePage({ addToCart }) {
  const { cartCount } = useOutletContext()
  const handleAddToCart = (product) => {
    addToCart(product)
    cartCount.setNotice(`${product.name} đã được thêm vào giỏ hàng`)
  }

  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><span className="eyebrow-dot" /> TỪ NÔNG TRẠI ĐẾN BÀN ĂN</span>
            <h1>Tươi ngon mỗi ngày,<br /><em>lành mạnh mỗi nhà.</em></h1>
            <p>Chọn thực phẩm sạch, rõ nguồn gốc từ những nông trại Việt Nam. Mộc mang vị tươi lành đến tận căn bếp nhà bạn.</p>
            <div className="hero-buttons">
              <Link className="button button-primary" to="/products">Khám phá sản phẩm <span aria-hidden="true">↗</span></Link>
              <Link className="button button-quiet" to="/about-us"><span className="play-icon">▶</span> Câu chuyện của Mộc</Link>
            </div>
            <div className="hero-proof">
              <div className="avatar-stack" aria-hidden="true"><span>🌿</span><span>🥕</span><span>🍋</span></div>
              <div><strong>2.000+</strong><span>gia đình tin chọn</span></div>
              <span className="proof-divider" />
              <div className="rating"><span>★★★★★</span><small>4.9/5 đánh giá</small></div>
            </div>
          </div>
          <div className="hero-visual">
            <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1250&q=90" alt="Giỏ rau củ quả tươi ngon tại Mộc Market" />
            <div className="floating-note"><span className="note-icon">✓</span><span><strong>Tươi mỗi sáng</strong><small>Giao trong ngày</small></span></div>
            <div className="hero-sticker"><span>100%</span><small>TƯƠI SẠCH</small></div>
            <span className="visual-sparkle sparkle-one">✳</span>
            <span className="visual-sparkle sparkle-two">✳</span>
          </div>
        </div>
      </section>

      <section className="benefits-strip">
        <div className="container benefits-grid">
          <div className="benefit"><span>🌱</span><div><strong>Nguồn gốc rõ ràng</strong><small>Chọn lọc nông trại uy tín</small></div></div>
          <div className="benefit"><span>🚚</span><div><strong>Giao nhanh 2 giờ</strong><small>Tươi ngon đến tận nhà</small></div></div>
          <div className="benefit"><span>♧</span><div><strong>Tươi mới mỗi ngày</strong><small>Thu hoạch trong ngày</small></div></div>
          <div className="benefit"><span>♡</span><div><strong>Đổi trả dễ dàng</strong><small>An tâm mua sắm</small></div></div>
        </div>
      </section>

      <section className="section category-section">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">MUA SẮM THEO DANH MỤC</span><h2>Lành mạnh bắt đầu từ đây</h2></div>
            <Link className="text-link" to="/products">Xem tất cả <span aria-hidden="true">→</span></Link>
          </div>
          <div className="category-grid">
            {categories.map((category) => (
              <Link className={`category-card ${category.tone}`} key={category.name} to={`/products?category=${encodeURIComponent(category.filter)}`}>
                <span className="category-icon" aria-hidden="true">{category.icon}</span>
                <span className="category-text"><strong>{category.name}</strong><small>{category.description}</small></span>
                <span className="category-arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section featured-section">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">ĐƯỢC YÊU THÍCH NHẤT</span><h2>Tươi ngon nhà Mộc</h2><p className="section-description">Những món ngon được khách hàng chọn nhiều nhất tuần này.</p></div>
            <Link className="text-link" to="/products">Khám phá tất cả <span aria-hidden="true">→</span></Link>
          </div>
          <div className="product-grid">
            {products.slice(0, 4).map((product) => <ProductCard addToCart={handleAddToCart} key={product.id} product={product} />)}
          </div>
        </div>
      </section>

      <section className="story-banner">
        <div className="container story-content">
          <span className="eyebrow">MỘC MARKET · TỪ 2020</span>
          <h2>Ăn lành, sống xanh.<br /><em>Chọn Mộc mỗi ngày.</em></h2>
          <p>Tụi mình tin rằng bữa ăn ngon bắt đầu từ những điều tử tế: đất lành, người trồng tâm huyết và thực phẩm thật tươi.</p>
          <Link className="button button-light" to="/about-us">Tìm hiểu về Mộc <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      {cartCount.notice && <div className="toast" role="status">{cartCount.notice}</div>}
    </>
  )
}

export default HomePage
