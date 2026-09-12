# 拾味餐厅首页

基于 Vue 3、TypeScript、Vue Router 和 Vite 的响应式餐厅首页，保留原有视觉设计，并将页面区块、数据和交互逻辑拆分为可维护的组件。

## 本地开发

```powershell
npm install
npm run dev
```

浏览器访问终端显示的本地地址，例如 `http://localhost:5173/`。

## 常用命令

```powershell
npm run dev         # 启动开发服务器
npm run type-check  # Vue 与 TypeScript 类型检查
npm run build       # 类型检查并生成生产构建
npm run preview     # 本地预览生产构建
```

## 项目结构

```text
src/
├─ assets/          全局视觉与响应式样式
├─ components/
│  ├─ layout/       顶部导航与页脚
│  ├─ sections/     首页各内容区块
│  └─ ui/           菜品卡片、预订表单和 Toast
├─ composables/     活跃导航与全局 Toast 状态
├─ data/            菜单与食客评价数据
├─ directives/      滚动显现与图片失败回退
├─ router/          首页路由与锚点滚动行为
├─ types/           内容类型定义
└─ views/           HomeView 页面组合
```

## 说明

- 当前餐饮照片使用 Unsplash 演示链接，正式上线前建议替换为餐厅自有图片。
- 预订表单目前为前端成功状态演示，可在 `BookingForm.vue` 中把计时器替换为真实预约 API。
