# 🏛️ Website Giới Thiệu Di Tích Lịch Sử Văn Hóa Lạng Sơn

Chào mừng bạn đến với dự án website quảng bá và giới thiệu các di tích lịch sử, danh lam thắng cảnh nổi tiếng của vùng đất biên cương **Lạng Sơn** (Ải Chi Lăng, Chùa Tam Thanh, Thành Nhà Mạc, Nàng Tô Thị, Động Nhị Thanh, Chợ Kỳ Lừa). 

Website được thiết kế với giao diện hiện đại, sang trọng, mang phong cách thơ mộng cổ kính pha lẫn các công nghệ Front-end tiên tiến nhất, đáp ứng các tiêu chuẩn nghiêm ngặt về kỹ thuật lập trình và khả năng tiếp cận (Accessibility).

---

## ✨ Điểm Nổi Bật & Tính Năng Công Nghệ

### 1. 💧 Liquid Glass Navbar (Thanh Điều Hướng Kính Lỏng)
*   **Hiệu ứng Thủy Tinh Lỏng (Glassmorphism cao cấp):** Sử dụng các thuộc tính `backdrop-filter: blur(28px)`, `rgba()` trong suốt và viền phản xạ ánh sáng tinh tế tạo cảm giác chiều sâu như kính.
*   **Hiệu ứng Ánh Sáng Theo Chuột (Mouse-Following Glow):** Sử dụng JavaScript bắt tọa độ chuột (`mousemove`) để di chuyển một vùng hào quang sáng mượt mà (`header-glow`) chạy theo con trỏ chuột của người dùng trên thanh điều hướng.
*   **Active Tab dạng Pill phát sáng:** Liên kết của trang hiện tại tự động chuyển thành dạng thẻ bo tròn (pill-style) rực rỡ với dải màu gradient vàng gold.

### 2. 🌀 Scroll Reveal Animations (Hiệu Ứng Hiện Lên Từ Từ)
*   **Cuộn tới đâu, hiện tới đó:** Khi người dùng vuốt màn hình xuống, các khối nội dung chính sẽ tự động dịch chuyển và hiện lên nhẹ nhàng nhờ sự kết hợp giữa **Intersection Observer API** và CSS Keyframes (`revealUp`, `revealFadeIn`, `revealLeft`, `revealRight`).
*   **Staggered Delay:** Các danh sách di tích hoặc mẹo du lịch được thiết lập thời gian trễ tăng dần (`reveal-stagger`), giúp các phần tử lần lượt xuất hiện tạo nhịp điệu trực quan sinh động.
*   **Tối ưu hóa hiệu năng:** Hỗ trợ tính năng `prefers-reduced-motion` giúp tự động tắt hiệu ứng chuyển động nếu người dùng cấu hình hệ điều hành ưu tiên giảm tải hoạt họa (tránh gây chóng mặt hoặc giật lag trên thiết bị yếu).

### 3. ♿ Tiêu Chuẩn Tiếp Cận WAVE & WCAG
*   **Skip Link (Liên kết bỏ qua):** Tích hợp đường dẫn ẩn ở đầu trang giúp người dùng sử dụng phím `Tab` để di chuyển nhanh tới nội dung chính mà không cần lướt qua Menu.
*   **Độ tương phản màu sắc cao:** Màu chữ và màu nền được tính toán kỹ lưỡng theo thang chuẩn WCAG giúp người dùng thị lực kém dễ dàng đọc thông tin.
*   **Semantic HTML5:** Toàn bộ cấu trúc được phân chia rành mạch bằng các thẻ ngữ nghĩa: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
*   **Thuộc tính Alt đầy đủ:** Tất cả hình ảnh đều có mô tả chi tiết giúp các công cụ đọc màn hình (Screen Readers) hoạt động chuẩn xác.

---

## 📁 Cấu Trúc Thư Mục Dự Án

```text
DiticvanhoaLS/
├── images/                   # Thư mục chứa hình ảnh chất lượng cao
│   ├── langson-panorama.png  # Ảnh toàn cảnh anh hùng của Lạng Sơn
│   ├── ai-chi-lang.png       # Di tích Quốc gia đặc biệt Ải Chi Lăng
│   ├── chua-tam-thanh.png    # Chùa cổ Tam Thanh trong hang đá vôi
│   ├── thanh-nha-mac.png     # Thành đá cổ kính triều nhà Mạc
│   ├── nang-to-thi.png       # Tượng đá Tô Thị ngóng chồng huyền thoại
│   ├── dong-nhi-thanh.png    # Động Nhị Thanh - danh thắng kỳ vĩ
│   ├── cho-dong-dang.png     # Không khí sầm uất tại phiên chợ vùng cao
│   └── langson-contact.png   # Hình ảnh minh họa trang Liên hệ
├── index.html                # Trang chủ - Giới thiệu tổng quan & Bản sắc
├── ditich.html               # Trang chi tiết - 5 di tích và danh thắng trọng điểm
├── lienhe.html               # Trang cẩm nang du lịch, biểu mẫu & Bản đồ vị trí
├── style.css                 # Tệp CSS dùng chung (Design System & Animations)
└── README.md                 # Tệp hướng dẫn này
```

---

## 🛠️ Hướng Dẫn Khởi Chạy

Vì dự án sử dụng hoàn toàn mã nguồn gốc (Vanilla HTML/CSS/JS), bạn không cần cài đặt bất kỳ thư viện hay công cụ phức tạp nào:

1.  **Cách chạy trực tiếp:** Tải thư mục dự án về máy tính của bạn, nhấp đúp chuột vào file `index.html` để mở trên trình duyệt.
2.  **Cách chạy môi trường Dev:** Nếu bạn sử dụng VS Code, khuyên dùng extension **Live Server** để mở dự án dưới dạng máy chủ local ảo, giúp các hiệu ứng mượt mà và cập nhật thay đổi tức thì khi chỉnh sửa code.

---

## 🎨 Design Tokens (Bảng màu & Kiểu chữ)

*   **Màu chủ đạo (Primary):** Xanh rêu cổ kính (`#1a3a2a`, `#2d5e42`, `#0d1f16`) tượng trưng cho núi rừng Đông Bắc hiểm trở nhưng đầy chất thơ.
*   **Màu điểm nhấn (Accent/Gold):** Màu vàng Gold ánh kim (`#d4a855`, `#f0d48a`) tượng trưng cho hào khí lịch sử chói lọi và nét sang trọng tôn nghiêm của di tích tâm linh.
*   **Font chữ:**
    *   *Tiêu đề chính:* `Playfair Display` (Phông chữ có chân sang trọng, cổ điển tạo chiều sâu lịch sử).
    *   *Nội dung:* `Inter` (Phông chữ không chân hiện đại, tối giản giúp đọc thông tin cực kỳ rõ nét).
    *   *Chữ nghệ thuật:* `Dancing Script` (Tạo nét chữ mềm mại, bay bổng chất thơ).

---
*Chúc bạn có những trải nghiệm tuyệt vời cùng không gian di sản văn hóa Xứ Lạng!*
