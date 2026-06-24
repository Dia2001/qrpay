# 💳 QR Thanh Toán · Nguyen Van Dia

Trang web tĩnh hiển thị mã QR chuyển khoản cá nhân — không cần mở album ảnh, quét thẳng từ trình duyệt.

---

## Tính năng

- **3 mã QR** — QR tổng hợp đa ngân hàng, Vietcombank, Ví MoMo
- **Xem to** — Click vào ảnh QR để mở lightbox full-size
- **Tải xuống** — Lưu ảnh QR về máy chỉ 1 click
- **Copy tên** — Copy tên chủ tài khoản vào clipboard
- **Responsive** — Dùng tốt trên cả điện thoại và máy tính
- **Dark UI** — Giao diện tối hiện đại với glassmorphism

---

## Cấu trúc

```
QrCode/
├── index.html          # Cấu trúc HTML chính
├── css/
│   └── style.css       # Toàn bộ giao diện & animation
├── js/
│   └── app.js          # Logic: lightbox, download, copy
└── access/             # Ảnh QR & logo ngân hàng
    ├── qr.jpg          # QR tổng hợp
    ├── qr_bank.jpg     # QR Vietcombank
    ├── qr_momo.jpg     # QR MoMo
    ├── vietcombank.png # Logo Vietcombank
    └── momo.png        # Logo MoMo
```

---

## Cách dùng

Mở thẳng file `index.html` trên trình duyệt — không cần server, không cần cài đặt gì thêm.

```bash
# Hoặc dùng Live Server (VS Code)
# Chuột phải vào index.html → Open with Live Server
```

---

## Thông tin tài khoản

| Kênh | Chủ tài khoản |
|------|--------------|
| Vietcombank | NGUYEN VAN DIA |
| MoMo | NGUYEN VAN DIA |

---

## Tech stack

- HTML5 · CSS3 · Vanilla JavaScript
- Glassmorphism + CSS custom properties
- Không phụ thuộc framework hay thư viện ngoài

---

*© 2025 · Nguyen Van Dia*
