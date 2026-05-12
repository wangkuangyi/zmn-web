# 赵梦妮作品集静态网页

这是一个可直接部署到 GitHub Pages 的纯静态网页。

## 文件

- `index.html`：页面结构与占位内容
- `styles.css`：视觉样式与响应式布局
- `script.js`：次级作品视频放大弹窗
- `.nojekyll`：让 GitHub Pages 按普通静态站点发布

## 替换内容

1. 将 `index.html` 中的姓名、邮箱、电话、链接改成真实信息。
2. 将 `.photo-placeholder` 替换成真实照片，例如：

```html
<img src="assets/profile.jpg" alt="赵梦妮照片" />
```

3. 将视频占位的 `data-bvid="BV1xx411c7mD"` 和 iframe 里的 `bvid=BV1xx411c7mD` 替换成真实 Bilibili BV 号。
4. 主体作品是一行一个大视频，次级作品是一行三个卡片，点击后会弹窗放大播放。

## GitHub Pages 部署

把这些文件推送到 GitHub 仓库后，在仓库设置里开启：

`Settings` → `Pages` → `Deploy from a branch` → 选择 `main` 分支和 `/root` 目录。
