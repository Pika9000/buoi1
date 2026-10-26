const products = [
  { id: 1, icon: '🥬', color: 'green', category: 'Rau củ', name: 'Rau xà lách tươi', desc: 'Gói 300g · Đà Lạt', price: '25.000đ' },
  { id: 2, icon: '🍊', color: 'orange', category: 'Trái cây', name: 'Cam vàng mọng nước', desc: 'Túi 1kg · Vị ngọt thanh', price: '49.000đ' },
  { id: 3, icon: '🥚', color: 'yellow', category: 'Thực phẩm', name: 'Trứng gà tươi', desc: 'Hộp 10 quả · Gà thả vườn', price: '35.000đ' },
  { id: 4, icon: '🍓', color: 'pink', category: 'Trái cây', name: 'Dâu tây Đà Lạt', desc: 'Hộp 250g · Tươi mỗi ngày', price: '69.000đ' },
]

export default function ProductsPage() {
  return (
    <section className="container section" id="products">
      <div className="section-heading">
        <div>
          <p className="eyebrow">MUA SẮM HẰNG NGÀY</p>
          <h2>Sản phẩm nổi bật</h2>
        </div>
      </div>
      <div className="product-grid">
        {products.map((item) => (
          <article className="product-card" key={item.id}>
            <div className={`product-picture ${item.color}`}>{item.icon}</div>
            <p className="product-category">{item.category}</p>
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <div className="product-bottom">
              <strong>{item.price}</strong>
              <button type="button" aria-label={`Thêm ${item.name}`}>+</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
