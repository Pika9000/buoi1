import { NavLink, Outlet } from 'react-router-dom'

const navigation = [
  { to: '/', label: 'Trang chủ', end: true },
  { to: '/products', label: 'Sản phẩm' },
  { to: '/about-us', label: 'Về chúng tôi' },
  { to: '/contact', label: 'Liên hệ' },
]

function SiteLayout({ cartCount, notice, setNotice }) {
  return (
    <>
      <div className="announcement">
        <div className="container announcement-inner">
          <span>Rau ngon mỗi ngày, giao nhanh tận cửa</span>
          <span className="announcement-note">Miễn phí giao hàng cho đơn từ 299.000đ</span>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <NavLink className="brand" to="/" aria-label="Mộc Market - Trang chủ">
            <span className="brand-mark" aria-hidden="true">m</span>
            <span className="brand-name">mộc<span>market</span></span>
          </NavLink>
          <nav className="main-nav" aria-label="Điều hướng chính">
            {navigation.map(({ to, label, end }) => (
              <NavLink
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                end={end}
                key={to}
                to={to}
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <div className="header-actions">
            <a className="header-phone" href="tel:1900636899">
              <span className="phone-icon" aria-hidden="true">☎</span>
              <span><small>Hotline</small><strong>1900 636 899</strong></span>
            </a>
            <NavLink className="cart-button" to="/products" aria-label={`Giỏ hàng, ${cartCount} sản phẩm`}>
              <span aria-hidden="true">♧</span>
              <span>Giỏ hàng</span>
              <b>{cartCount}</b>
            </NavLink>
          </div>
        </div>
      </header>
      <main>
        <Outlet context={{ cartCount: { notice, setNotice } }} />
      </main>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <NavLink className="brand brand-light" to="/">
              <span className="brand-mark" aria-hidden="true">m</span>
              <span className="brand-name">mộc<span>market</span></span>
            </NavLink>
            <p>Thực phẩm tươi ngon, tử tế mỗi ngày.<br />Chọn lành mạnh, sống an vui.</p>
          </div>
          <div>
            <h3>Khám phá</h3>
            <NavLink to="/products">Sản phẩm</NavLink>
            <NavLink to="/about-us">Về chúng tôi</NavLink>
          </div>
          <div>
            <h3>Hỗ trợ</h3>
            <NavLink to="/contact">Liên hệ</NavLink>
            <a href="tel:1900636899">1900 636 899</a>
          </div>
          <div>
            <h3>Giờ mở cửa</h3>
            <p>Thứ 2 – Chủ nhật<br />07:00 – 21:00</p>
          </div>
        </div>
        <div className="container footer-bottom">© 2026 Mộc Market. Tươi ngon từ những điều tử tế.</div>
      </footer>
    </>
  )
}

export default SiteLayout
