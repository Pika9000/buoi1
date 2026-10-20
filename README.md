# Mộc Market

Website cửa hàng thực phẩm tươi sạch được xây dựng bằng React và Vite. Giao diện hỗ trợ các trang chủ, sản phẩm, giới thiệu và liên hệ.

## Chạy project

```bash
npm install
npm run dev
```

Mở địa chỉ Vite hiển thị trong terminal (mặc định `http://localhost:5173`).

## Các trang

- `/` — Trang chủ
- `/products` — Danh sách sản phẩm, tìm kiếm và lọc danh mục
- `/about-us` — Giới thiệu Mộc Market
- `/contact` — Thông tin liên hệ và biểu mẫu gửi lời nhắn

Điều hướng được cấu hình bằng React Router. Vite phục vụ ứng dụng SPA nên có thể mở trực tiếp các đường dẫn trên trong môi trường phát triển.

## Build và kiểm tra

```bash
npm run lint
npm run build
```

## Đẩy mã nguồn lên GitHub

Repository remote được cấu hình là `https://github.com/Pika9000/buoi1`. Sau khi đăng nhập GitHub bằng Git Credential Manager hoặc SSH:

```bash
git add .
git commit -m "Build Mộc Market React storefront"
git push -u origin main
```
