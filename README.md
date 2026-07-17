# 🏛️ Di Tích Văn Hóa Lạng Sơn — Website Quảng Bá Di Sản

> *"Đồng Đăng có phố Kỳ Lừa, có nàng Tô Thị, có chùa Tam Thanh."*
> — Ca dao Việt Nam

Website giới thiệu và quảng bá các **di tích lịch sử, danh lam thắng cảnh** nổi tiếng của vùng đất biên cương **Lạng Sơn** — nơi thiên nhiên kỳ vĩ giao hòa cùng bề dày lịch sử ngàn năm dựng nước và giữ nước.

Dự án được xây dựng hoàn toàn bằng **HTML · CSS · JavaScript thuần** (Vanilla), không sử dụng bất kỳ framework hay thư viện ngoài nào.

---

## 📸 Các Di Tích Được Giới Thiệu

| # | Di tích | Loại hình | Vị trí |
|---|---------|-----------|--------|
| 1 | **Ải Chi Lăng** | Di tích Quốc gia đặc biệt | Huyện Chi Lăng |
| 2 | **Chùa Tam Thanh** | Di tích Quốc gia | Phường Tam Thanh, TP. Lạng Sơn |
| 3 | **Thành Nhà Mạc** | Di tích lịch sử | Phường Tam Thanh, TP. Lạng Sơn |
| 4 | **Nàng Tô Thị** (Hòn Vọng Phu) | Danh thắng huyền thoại | Phường Tam Thanh, TP. Lạng Sơn |
| 5 | **Động Nhị Thanh** | Danh thắng tự nhiên | Phường Tam Thanh, TP. Lạng Sơn |
| 6 | **Chợ Kỳ Lừa** | Di sản văn hóa phi vật thể | TP. Lạng Sơn |

---

## ✨ Tính Năng Nổi Bật

### 🔮 Liquid Glass Navbar
- Hiệu ứng **Glassmorphism** cao cấp với `backdrop-filter: blur(28px)` và lớp phủ rgba trong suốt
- **Ánh sáng theo chuột** (Mouse-Following Glow) — JavaScript bắt tọa độ `mousemove` tạo vùng hào quang mượt mà trên header
- Active Tab dạng **pill phát sáng** với gradient vàng gold

### 🌊 Scroll Reveal Animations
- Hiệu ứng hiện lên từ từ khi cuộn trang nhờ **Intersection Observer API**
- 4 kiểu animation: `revealUp`, `revealFadeIn`, `revealLeft`, `revealRight`
- **Staggered Delay** — các phần tử xuất hiện lần lượt tạo nhịp điệu sinh động
- Tự động tắt animation nếu người dùng bật `prefers-reduced-motion`

### 🖼️ Interactive Photo Gallery
- Hàm `upDate(previewPic)` — hiển thị ảnh preview khi hover
- Hàm `unDo()` — khôi phục trạng thái mặc định khi rời chuột
- **Event Delegation** — 1 listener duy nhất trên `document`, tự động hoạt động với mọi số lượng ảnh

### ♿ Accessibility (WCAG)
- **Skip Link** — phím Tab nhảy thẳng tới nội dung chính
- **Semantic HTML5** — `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- **Alt text đầy đủ** — mô tả chi tiết cho mọi hình ảnh
- **ARIA labels** — `aria-label`, `aria-labelledby`, `aria-hidden` trên các phần tử tương tác
- **Độ tương phản cao** — tuân thủ chuẩn WCAG AA

### 📱 Responsive Design
- Bố cục **CSS Grid** 2 cột cho danh sách di tích
- **Flexbox** cho header, footer và các thành phần linh hoạt
- Tương thích mọi thiết bị: desktop, tablet, mobile

---

## 📁 Cấu Trúc Dự Án

```text
DiticvanhoaLS/
│
├── images/                     # Hình ảnh chất lượng cao
│   ├── langson-panorama.png    # Toàn cảnh Lạng Sơn (Hero)
│   ├── ai-chi-lang.png         # Ải Chi Lăng
│   ├── chua-tam-thanh.png      # Chùa Tam Thanh
│   ├── thanh-nha-mac.png       # Thành Nhà Mạc
│   ├── nang-to-thi.png         # Nàng Tô Thị
│   ├── dong-nhi-thanh.png      # Động Nhị Thanh
│   ├── cho-dong-dang.png       # Chợ Kỳ Lừa
│   └── langson-contact.png     # Minh họa trang Liên hệ
│
├── index.html                  # Trang Chủ — giới thiệu tổng quan
├── ditich.html                 # Trang Di Tích — chi tiết 6 di tích
├── lienhe.html                 # Trang Liên Hệ — cẩm nang, form, bản đồ
├── style.css                   # CSS Design System (1463 dòng)
├── script.js                   # JavaScript — Interactive Photo Gallery
└── README.md                   # Tài liệu hướng dẫn (file này)
```

---

## 🎨 Design System

### Bảng Màu

| Token | Mã màu | Ý nghĩa |
|-------|--------|---------|
| `--color-primary` | `#1a3a2a` | Xanh rêu cổ kính — núi rừng Đông Bắc |
| `--color-primary-light` | `#2d5e42` | Xanh lá nhạt — phối nền |
| `--color-accent` | `#c9956b` | Nâu đồng ấm áp — điểm nhấn |
| `--color-gold` | `#d4a855` | Vàng gold ánh kim — hào khí lịch sử |
| `--color-gold-light` | `#f0d48a` | Vàng nhạt — hover & highlight |
| `--color-bg` | `#faf8f5` | Kem nhạt — nền sáng |
| `--color-bg-dark` | `#111a14` | Xanh đen — nền tối |

### Typography

| Vai trò | Font | Phong cách |
|---------|------|------------|
| Tiêu đề | `Playfair Display` | Serif cổ điển, sang trọng |
| Nội dung | `Inter` | Sans-serif hiện đại, dễ đọc |
| Chữ nghệ thuật | `Dancing Script` | Script bay bổng, chất thơ |

---

## 🛠️ Hướng Dẫn Khởi Chạy

### Cách 1 — Mở trực tiếp
Nhấp đúp vào `index.html` → mở trên trình duyệt.

### Cách 2 — Live Server (khuyên dùng)
1. Cài extension **Live Server** trong VS Code
2. Chuột phải vào `index.html` → **Open with Live Server**
3. Trình duyệt tự động mở và cập nhật khi chỉnh sửa code

> **Không cần** cài đặt Node.js, npm, hay bất kỳ thư viện nào.

---

## 📄 Các Trang

### 🏠 Trang Chủ (`index.html`)
- Hero section với ảnh toàn cảnh Lạng Sơn
- Giới thiệu tổng quan vùng đất biên cương
- Số liệu nổi bật (600+ năm, 130+ di tích, 7 di tích Quốc gia đặc biệt)
- 5 điểm đến nổi bật dạng card
- Timeline lịch sử từ năm 981 → 1979
- Văn hóa & con người (Hát Then, Lễ hội Lồng Tồng, Ẩm thực, Trang phục)
- Giới thiệu Chợ Kỳ Lừa

### 🏛️ Trang Di Tích (`ditich.html`)
- Hero section riêng
- Phần nổi bật: Ải Chi Lăng (featured layout)
- Grid 2 cột: Chùa Tam Thanh, Thành Nhà Mạc, Nàng Tô Thị, Động Nhị Thanh
- Phần bổ sung: Chợ Kỳ Lừa
- Trích dẫn sử liệu Đại Việt

### 📞 Trang Liên Hệ (`lienhe.html`)
- 6 mẹo du lịch hữu ích (thời điểm, di chuyển, ẩm thực, hành trang, chụp ảnh, lưu trú)
- Thông tin liên hệ Trung tâm Du lịch Lạng Sơn
- Form gửi thắc mắc (họ tên, email, SĐT, chủ đề, nội dung)
- Bản đồ Google Maps nhúng

---

## 🧰 Công Nghệ Sử Dụng

| Công nghệ | Phiên bản | Mục đích |
|------------|-----------|----------|
| HTML5 | — | Cấu trúc ngữ nghĩa |
| CSS3 | — | Giao diện, animation, responsive |
| JavaScript | ES6+ | Tương tác, Gallery, Scroll Reveal |
| Google Fonts | — | Playfair Display, Inter, Dancing Script |
| Google Maps Embed | — | Bản đồ vị trí trang Liên hệ |

---

## 📜 Giấy Phép

Dự án phục vụ mục đích **học tập và quảng bá du lịch**. Hình ảnh được tạo bằng AI cho mục đích minh họa.

---

*© 2026 Di Tích Văn Hóa Lạng Sơn. Thiết kế với ❤️ cho vùng đất Xứ Lạng.*
