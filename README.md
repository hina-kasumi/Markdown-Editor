# 📝 Markdown Editor

Một ứng dụng web đơn giản cho phép người dùng **tải lên và xem nội dung của các tệp `.md` (Markdown)** dưới dạng HTML dễ đọc.

## ⚡Truy cập trang web

Truy cập ứng dụng tại đây 🚀: [Markdown Editor](https://hina-kasumi.github.io/Markdown-Editor/)

## 🚀 Tính năng chính

- 📂 **Upload file `.md`** từ máy tính và hiển thị nội dung ngay lập tức.
- 🧾 Hiển thị cú pháp Markdown đầy đủ (tiêu đề, danh sách, bảng, code...).
- 💡 Giao diện trực quan, linh hoạt, dễ sử dụng.
- 🎨 Hỗ trợ highlight mã nguồn.
- ⚡ Live preview khi chỉnh sửa Markdown.

## ⚙️ Yêu cầu hệ thống

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en) (v22.12.0 trở lên)
- Trình duyệt hiện đại (Chrome, Firefox, Edge…)
- [Docker](https://www.docker.com/) (Nếu không muốn cài Git và Node.js)

## 📦 Cài đặt & chạy thử với Nodejs

Sau khi chạy hết lệnh bên dưới hãy truy cập tại đây: 
[Markdown Editor](http://localhost:3000/).

```bash
# Clone project
git clone https://github.com/hina-kasumi/markdown-editor.git

# Di chuyển vào thư mục
cd markdown-editor

# Cài đặt dependencies
npm install

# Chạy ứng dụng
npm run dev
```

## 📦 Cài đặt & chạy thử với Docker

### 📦Với image của dev

Sau khi chạy 1 trong 2 lệnh bên dưới hãy truy cập tại đây: 
[Markdown Editor](http://localhost:3000/).

```bash
# Dev (Phát triển)
docker run -d -p 3000:3000 hinakasumi/markdown-editor

# Production (Sản phẩm)
docker run -d -p 3000:80 hinakasumi/markdown-editor-production
```