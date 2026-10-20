import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="not-found">
      <span>404</span>
      <h1>Ôi, lạc lối mất rồi!</h1>
      <p>Trang bạn đang tìm có thể đã được chuyển đi hoặc không tồn tại.</p>
      <Link className="button button-primary" to="/">Về trang chủ <span aria-hidden="true">↗</span></Link>
    </section>
  )
}

export default NotFoundPage
