import { useState } from 'react'
import { Link } from 'react-router-dom'

function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <>
      <section className="page-banner">
        <div className="container">
          <span className="eyebrow">MỘC LUÔN Ở ĐÂY</span>
          <h1>Chúng mình lắng nghe.</h1>
          <p>Cần giúp chọn món ngon hay có lời nhắn cho Mộc?</p>
          <div className="breadcrumbs"><Link to="/">Trang chủ</Link><span>/</span><span>Liên hệ</span></div>
        </div>
      </section>
      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-details">
            <span className="eyebrow">KẾT NỐI VỚI MỘC</span>
            <h2>Một lời chào<br />cũng làm ngày vui hơn.</h2>
            <p>Đội ngũ nhà Mộc sẵn sàng hỗ trợ bạn mỗi ngày, từ 7 giờ sáng đến 9 giờ tối.</p>
            <div className="contact-item"><span>☎</span><div><small>Gọi cho Mộc</small><a href="tel:1900636899">1900 636 899</a></div></div>
            <div className="contact-item"><span>✉</span><div><small>Email</small><a href="mailto:hello@mocmarket.vn">hello@mocmarket.vn</a></div></div>
            <div className="contact-item"><span>⌖</span><div><small>Ghé thăm</small><p>28 Nguyễn Thị Minh Khai, Quận 1, TP. Hồ Chí Minh</p></div></div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Gửi lời nhắn cho Mộc</h2>
            <p>Tụi mình sẽ phản hồi bạn sớm nhất có thể.</p>
            <label>Họ và tên<input name="name" placeholder="Tên của bạn" required /></label>
            <label>Email<input name="email" placeholder="ban@email.com" required type="email" /></label>
            <label>Lời nhắn<textarea name="message" placeholder="Bạn cần Mộc hỗ trợ điều gì?" required rows="4" /></label>
            <button className="button button-primary" type="submit">Gửi lời nhắn <span aria-hidden="true">↗</span></button>
            {submitted && <p className="form-success" role="status">Cảm ơn bạn đã nhắn Mộc! Tụi mình sẽ liên hệ sớm nhé.</p>}
          </form>
        </div>
      </section>
    </>
  )
}

export default ContactPage
