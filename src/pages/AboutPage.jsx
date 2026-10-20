import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <>
      <section className="page-banner">
        <div className="container">
          <span className="eyebrow">CÂU CHUYỆN CỦA MỘC</span>
          <h1>Tử tế từ đất lành.</h1>
          <p>Thực phẩm sạch hơn, bữa ăn vui hơn, mỗi ngày.</p>
          <div className="breadcrumbs"><Link to="/">Trang chủ</Link><span>/</span><span>Về chúng tôi</span></div>
        </div>
      </section>
      <section className="section about-story">
        <div className="container about-grid">
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1100&q=85" alt="Cánh đồng xanh tại nông trại đối tác của Mộc" />
            <div className="about-image-note"><strong>4 năm</strong><span>đồng hành cùng<br />nông trại Việt</span></div>
          </div>
          <div className="about-copy">
            <span className="eyebrow">MỘC MARKET · 2020</span>
            <h2>Một lựa chọn nhỏ,<br /><em>một thay đổi lành.</em></h2>
            <p>Mộc bắt đầu từ một câu hỏi giản dị: làm sao để mỗi gia đình có thể yên tâm hơn với những gì đặt lên bàn ăn?</p>
            <p>Tụi mình kết nối trực tiếp với những nông trại canh tác tử tế, chọn lọc thực phẩm theo mùa và mang đến bạn sự tươi ngon có thể cảm nhận trong từng bữa cơm.</p>
            <Link className="button button-primary" to="/products">Chọn thực phẩm tươi <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
      <section className="values-section">
        <div className="container">
          <div className="section-heading centered-heading"><div><span className="eyebrow">ĐIỀU MỘC TIN</span><h2>Tươi lành, từ gốc rễ</h2></div></div>
          <div className="values-grid">
            <article><span>🌿</span><h3>Trồng tử tế</h3><p>Ưu tiên nông trại canh tác bền vững, tôn trọng đất và mùa vụ tự nhiên.</p></article>
            <article><span>🔎</span><h3>Rõ nguồn gốc</h3><p>Mỗi sản phẩm đều được chọn lọc kỹ và minh bạch về nơi trồng, cách nuôi.</p></article>
            <article><span>🤝</span><h3>Gần gũi cộng đồng</h3><p>Đồng hành lâu dài cùng người nông dân và những gia đình yêu bữa ăn lành.</p></article>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
