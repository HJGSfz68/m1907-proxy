# m1907-proxy

基于 Cloudflare Workers 的视频搜索与一键解析工具。输入片名，在优酷 / 爱奇艺 / 腾讯视频 / 芒果TV 四个平台搜索官方视频，并通过解析接口一键播放。

## 功能

- **聚合搜索**：同时请求优酷、爱奇艺、腾讯视频、芒果TV 四个平台的官方搜索接口，返回真实视频链接。
- **一键解析**：每个搜索结果附带「一键解析」按钮，跳转至解析接口播放。
- **iframe 包装页**：`/?jx=<url>` 返回 iframe 包装页，加载原始解析站，由原始站自行解析播放。
- **深色搜索界面**：零依赖，纯 HTML/CSS/JS，由 Worker 直接返回。

## 路由

| 路径 | 说明 |
|------|------|
| `/` | 搜索页（无 `jx` 参数时） |
| `/search` | 搜索页（兼容保留） |
| `/api/search?q=<关键词>` | 四平台聚合搜索 JSON API |
| `/?jx=<url>` | iframe 解析包装页 |
| 其他 | 404 |

## 搜索数据源

| 平台 | 接口 | 说明 |
|------|------|------|
| 优酷 | `search.youku.com/search_video` | 解析搜索结果 HTML |
| 爱奇艺 | `search.video.iqiyi.com/o` | 官方搜索 API，`albumLink` 字段 |
| 腾讯视频 | `pbaccess.video.qq.com/trpc.videosearch.mobile_search.MultiTerminalSearch/MbSearch` | POST JSON，`query` 字段 |
| 芒果TV | `mobileso.bz.mgtv.com/pc/search/v2` | 需 MD5 签名（内置实现） |

## 本地开发

```bash
npm install
npm run dev        # 启动 wrangler dev（默认端口 8787）
```

## 部署

```bash
npm run deploy     # wrangler deploy
```

## 配置

`src/index.js` 顶部常量：

- `ORIGIN_URL`：原始解析站地址（iframe 加载目标）
- `PARSE_URL`：一键解析接口地址

## License

[MIT](LICENSE)
