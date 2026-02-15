# Workshop Template

Template Hugo site theo format [First Cloud Journey (FCJ)](https://cloudjourney.awsstudygroup.com/) workshop. Hỗ trợ đa ngôn ngữ (Tiếng Việt / English), sử dụng hugo-theme-learn với custom CSS và logo AWS Cloud Clubs.

## Cách sử dụng

### 1. Tạo repo mới từ template

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/workshop-template.git my-workshop
cd my-workshop
git submodule update --init --recursive
```

### 2. Cấu hình

Chỉnh sửa `config.toml`:

```toml
baseURL = "https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME/"
title = "Workshop Title"
[params]
  description = "Workshop description"
  author = "Your Name"
```

Chỉnh sửa `layouts/partials/menu-footer.html` với thông tin của bạn.

### 3. Viết nội dung

Cấu trúc content đa ngôn ngữ:

```
content/
  vi/                            # Tiếng Việt
    _index.md
    1-introduction/
    2-preparation/
    3-hands-on/
    4-cleanup/
    5-summary/
  en/                            # English
    _index.md
    1-introduction/
    2-preparation/
    3-hands-on/
    4-cleanup/
    5-summary/
```

Thêm hình ảnh vào `static/images/` và tham chiếu bằng `![Alt](/images/ten-hinh.png)`.

### 4. Chạy local

```bash
hugo server -D
```

### 5. Deploy

Push lên GitHub, workflow GitHub Actions sẽ tự động build và deploy lên GitHub Pages.

Nhớ bật GitHub Pages trong Settings > Pages > Source: **GitHub Actions**.

## Cấu trúc project

```
config.toml              # Cấu hình Hugo (multilingual)
content/vi/              # Nội dung tiếng Việt
content/en/              # Nội dung tiếng Anh
i18n/                    # Translation strings (vi.toml, en.toml)
layouts/partials/        # Custom logo, header, footer, language switcher
static/                  # CSS, fonts, images
themes/                  # hugo-theme-learn (git submodule)
.github/workflows/       # GitHub Actions deploy
```

## License

Template này dành cho mục đích giáo dục.
