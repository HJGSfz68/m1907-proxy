const ORIGIN_URL = 'https://im1907.top'
const PARSE_URL = 'https://jxvip.ccwu.cc'

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'

// MD5 implementation (Web Crypto has no MD5)
function md5(inputString) {
  var hexcase = 0;
  var chrsz = 8;
  function safe_add(x, y) { var lsw = (x & 0xFFFF) + (y & 0xFFFF); var msw = (x >> 16) + (y >> 16) + (lsw >> 16); return (msw << 16) | (lsw & 0xFFFF) }
  function bit_rol(num, cnt) { return (num << cnt) | (num >>> (32 - cnt)) }
  function cmn(q, a, b, x, s, t) { return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b) }
  function ff(a, b, c, d, x, s, t) { return cmn((b & c) | ((~b) & d), a, b, x, s, t) }
  function gg(a, b, c, d, x, s, t) { return cmn((b & d) | (c & (~d)), a, b, x, s, t) }
  function hh(a, b, c, d, x, s, t) { return cmn(b ^ c ^ d, a, b, x, s, t) }
  function ii(a, b, c, d, x, s, t) { return cmn(c ^ (b | (~d)), a, b, x, s, t) }
  function core(x, len) {
    x[len >> 5] |= 0x80 << (len % 32);
    x[(((len + 64) >>> 9) << 4) + 14] = len;
    var a = 1732584193, b = -271733879, c = -1732584194, d = 271733878;
    for (var i = 0; i < x.length; i += 16) {
      var olda = a, oldb = b, oldc = c, oldd = d;
      a = ff(a, b, c, d, x[i + 0], 7, -680876936); d = ff(d, a, b, c, x[i + 1], 12, -389564586); c = ff(c, d, a, b, x[i + 2], 17, 606105819); b = ff(b, c, d, a, x[i + 3], 22, -1044525330);
      a = ff(a, b, c, d, x[i + 4], 7, -176418897); d = ff(d, a, b, c, x[i + 5], 12, 1200080426); c = ff(c, d, a, b, x[i + 6], 17, -1473231341); b = ff(b, c, d, a, x[i + 7], 22, -45705983);
      a = ff(a, b, c, d, x[i + 8], 7, 1770035416); d = ff(d, a, b, c, x[i + 9], 12, -1958414417); c = ff(c, d, a, b, x[i + 10], 17, -42063); b = ff(b, c, d, a, x[i + 11], 22, -1990404162);
      a = ff(a, b, c, d, x[i + 12], 7, 1804603682); d = ff(d, a, b, c, x[i + 13], 12, -40341101); c = ff(c, d, a, b, x[i + 14], 17, -1502002290); b = ff(b, c, d, a, x[i + 15], 22, 1236535329);
      a = gg(a, b, c, d, x[i + 1], 5, -165796510); d = gg(d, a, b, c, x[i + 6], 9, -1069501632); c = gg(c, d, a, b, x[i + 11], 14, 643717713); b = gg(b, c, d, a, x[i + 0], 20, -373897302);
      a = gg(a, b, c, d, x[i + 5], 5, -701558691); d = gg(d, a, b, c, x[i + 10], 9, 38016083); c = gg(c, d, a, b, x[i + 15], 14, -660478335); b = gg(b, c, d, a, x[i + 4], 20, -405537848);
      a = gg(a, b, c, d, x[i + 9], 5, 568446438); d = gg(d, a, b, c, x[i + 14], 9, -1019803690); c = gg(c, d, a, b, x[i + 3], 14, -187363961); b = gg(b, c, d, a, x[i + 8], 20, 1163531501);
      a = gg(a, b, c, d, x[i + 13], 5, -1444681467); d = gg(d, a, b, c, x[i + 2], 9, -51403784); c = gg(c, d, a, b, x[i + 7], 14, 1735328473); b = gg(b, c, d, a, x[i + 12], 20, -1926607734);
      a = hh(a, b, c, d, x[i + 5], 4, -378558); d = hh(d, a, b, c, x[i + 8], 11, -2022574463); c = hh(c, d, a, b, x[i + 11], 16, 1839030562); b = hh(b, c, d, a, x[i + 14], 23, -35309556);
      a = hh(a, b, c, d, x[i + 1], 4, -1530992060); d = hh(d, a, b, c, x[i + 4], 11, 1272893353); c = hh(c, d, a, b, x[i + 7], 16, -155497632); b = hh(b, c, d, a, x[i + 10], 23, -1094730640);
      a = hh(a, b, c, d, x[i + 13], 4, 681279174); d = hh(d, a, b, c, x[i + 0], 11, -358537222); c = hh(c, d, a, b, x[i + 3], 16, -722521979); b = hh(b, c, d, a, x[i + 6], 23, 76029189);
      a = hh(a, b, c, d, x[i + 9], 4, -640364487); d = hh(d, a, b, c, x[i + 12], 11, -421815835); c = hh(c, d, a, b, x[i + 15], 16, 530742520); b = hh(b, c, d, a, x[i + 2], 23, -995338651);
      a = ii(a, b, c, d, x[i + 0], 6, -198630844); d = ii(d, a, b, c, x[i + 7], 10, 1126891415); c = ii(c, d, a, b, x[i + 14], 15, -1416354905); b = ii(b, c, d, a, x[i + 5], 21, -57434055);
      a = ii(a, b, c, d, x[i + 12], 6, 1700485571); d = ii(d, a, b, c, x[i + 3], 10, -1894986606); c = ii(c, d, a, b, x[i + 10], 15, -1051523); b = ii(b, c, d, a, x[i + 1], 21, -2054922799);
      a = ii(a, b, c, d, x[i + 8], 6, 1873313359); d = ii(d, a, b, c, x[i + 15], 10, -30611744); c = ii(c, d, a, b, x[i + 6], 15, -1560198380); b = ii(b, c, d, a, x[i + 13], 21, 1309151649);
      a = ii(a, b, c, d, x[i + 4], 6, -145523070); d = ii(d, a, b, c, x[i + 11], 10, -1120210379); c = ii(c, d, a, b, x[i + 2], 15, 718787259); b = ii(b, c, d, a, x[i + 9], 21, -343485551);
      a = safe_add(a, olda); b = safe_add(b, oldb); c = safe_add(c, oldc); d = safe_add(d, oldd);
    }
    return Array(a, b, c, d);
  }
  function str2binl(str) {
    var bin = Array();
    var mask = (1 << chrsz) - 1;
    for (var i = 0; i < str.length * chrsz; i += chrsz) bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (i % 32);
    return bin;
  }
  function binl2hex(binarray) {
    var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
    var str = "";
    for (var i = 0; i < binarray.length * 32; i += 8) str += hex_tab.charAt((binarray[i >> 5] >> (i % 32 + 4)) & 0x0F) + hex_tab.charAt((binarray[i >> 5] >> (i % 32)) & 0x0F);
    return str;
  }
  var binarray = str2binl(inputString);
  return binl2hex(core(binarray, inputString.length * chrsz));
}

function uuidv4() {
  return crypto.randomUUID()
}

function encodeURIqs(s) {
  // mimic JS encodeURI: does not escape ;,/?:@&=+$-#_.!~*'()[]
  return encodeURI(String(s))
}

// MangoTV signature: md5(secret + sortedQS(encodeURI) + secret)
function mgtvSign(q) {
  const secret = 'xHAa3YZflWLogZUOzl'
  const did = uuidv4()
  const ts = new Date().toISOString().replace(/\.\d{3}Z$/, 'Z')
  const nonce = uuidv4().replaceAll('-', '')
  const params = { q, pn: 1, pc: 10, corr: 0, src: 'mgtv', did, timestamp: ts, signVersion: '1', signNonce: nonce }
  const filtered = {}
  for (const [k, v] of Object.entries(params)) {
    if (typeof v === 'string' && !v.trim()) continue
    filtered[k] = v
  }
  const keys = Object.keys(filtered).sort((a, b) => a.localeCompare(b))
  const qs = keys.map((k) => `${encodeURIqs(k)}=${encodeURIqs(filtered[k])}`).join('&')
  const sig = md5(secret + qs + secret)
  filtered.signature = sig
  return filtered
}

function stripTags(s) {
  return String(s).replace(/<[^>]+>/g, '').replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#\d+;/g, '').trim()
}

function normUrl(u) {
  if (!u) return ''
  return u.startsWith('//') ? 'https:' + u : u
}

const SEARCH_PAGE = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>视频搜索 - M1907</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;background:#0f0f0f;color:#e0e0e0;min-height:100vh}
.header{background:linear-gradient(135deg,#1a1a2e,#16213e);padding:1.5em;text-align:center;border-bottom:1px solid #333}
.header h1{font-size:1.4em;color:#e94560;margin-bottom:.5em}
.search-box{max-width:600px;margin:0 auto;display:flex;gap:0}
.search-box input{flex:1;padding:.8em 1em;border:2px solid #333;border-right:none;border-radius:8px 0 0 8px;background:#1a1a2e;color:#fff;font-size:1em;outline:none}
.search-box input:focus{border-color:#e94560}
.search-box button{padding:.8em 1.5em;border:2px solid #e94560;border-radius:0 8px 8px 0;background:#e94560;color:#fff;font-size:1em;cursor:pointer;font-weight:bold}
.search-box button:hover{background:#c73650}
.loading{text-align:center;padding:3em;color:#666;display:none}
.loading.show{display:block}
.results{max-width:900px;margin:1.5em auto;padding:0 1em}
.platform-group{margin-bottom:2em}
.platform-title{font-size:1.1em;font-weight:bold;padding:.5em 0;margin-bottom:.5em;border-bottom:2px solid #333;display:flex;align-items:center;gap:.5em}
.platform-title .badge{display:inline-block;padding:.15em .6em;border-radius:4px;font-size:.7em;color:#fff}
.result-item{display:flex;align-items:center;justify-content:space-between;padding:.7em 1em;margin-bottom:.4em;background:#1a1a2e;border-radius:6px;border:1px solid #2a2a3e;transition:border-color .2s}
.result-item:hover{border-color:#e94560}
.result-item .title{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-right:1em;font-size:.9em}
.result-item .title a{color:#e0e0e0;text-decoration:none}
.result-item .title a:hover{color:#e94560}
.result-item .actions{display:flex;gap:.5em;flex-shrink:0}
.result-item .actions a{display:inline-block;padding:.35em .8em;border-radius:4px;font-size:.8em;text-decoration:none;cursor:pointer}
.btn-view{background:#2a2a3e;color:#aaa;border:1px solid #444}
.btn-view:hover{background:#3a3a4e}
.btn-parse{background:#e94560;color:#fff;border:none}
.btn-parse:hover{background:#c73650}
.empty{text-align:center;padding:3em;color:#666}
.error{text-align:center;padding:2em;color:#e94560}
</style>
</head>
<body>
<div class="header">
<h1>视频搜索</h1>
<div class="search-box">
<input type="text" id="searchInput" placeholder="输入片名搜索 优酷 / 爱奇艺 / 腾讯视频 / 芒果TV" onkeydown="if(event.key==='Enter')search()">
<button onclick="search()">搜索</button>
</div>
</div>
<div class="loading" id="loading">搜索中...</div>
<div class="results" id="results"></div>
<script>
const PARSE_URL = '${PARSE_URL}'
async function search(){
  const q=document.getElementById('searchInput').value.trim()
  if(!q)return
  const el=document.getElementById('results'),ld=document.getElementById('loading')
  el.innerHTML=''
  ld.classList.add('show')
  try{
    const r=await fetch('/api/search?q='+encodeURIComponent(q))
    const d=await r.json()
    ld.classList.remove('show')
    if(!d.platforms||d.platforms.length===0){el.innerHTML='<div class="empty">未找到结果</div>';return}
    let html=''
    for(const p of d.platforms){
      html+='<div class="platform-group">'
      html+='<div class="platform-title"><span class="badge" style="background:'+p.color+'">'+p.name+'</span></div>'
      if(p.error){html+='<div class="error">'+p.error+'</div>';continue}
      if(!p.items||p.items.length===0){html+='<div class="empty">未找到结果</div>';continue}
      for(const item of p.items){
        const url=item.url
        const title=item.title
        html+='<div class="result-item">'
        html+='<div class="title"><a href="'+url+'" target="_blank" rel="noopener">'+title+'</a></div>'
        html+='<div class="actions">'
        html+='<a class="btn-view" href="'+url+'" target="_blank">查看</a>'
        html+='<a class="btn-parse" href="'+PARSE_URL+'/?jx='+encodeURIComponent(url)+'" target="_blank">一键解析</a>'
        html+='</div></div>'
      }
      html+='</div>'
    }
    el.innerHTML=html
  }catch(e){
    ld.classList.remove('show')
    el.innerHTML='<div class="error">搜索失败，请重试</div>'
  }
}
</script>
</body>
</html>`

const PLATFORMS = [
  {
    name: '优酷',
    key: 'youku',
    color: '#2196F3',
    search: async (q) => {
      const url = `https://search.youku.com/search_video?q=${encodeURIComponent(q)}`
      const res = await fetch(url, { headers: { 'User-Agent': UA, Accept: 'text/html,application/xhtml+xml' } })
      if (!res.ok) throw new Error('HTTP ' + res.status)
      const html = await res.text()
      const items = []
      const seen = new Set()
      const regex = /href="(https:\/\/m\.youku\.com[^"]*)"[\s\S]*?&quot;object_title&quot;:&quot;([^&]*)&quot;/g
      let m
      while ((m = regex.exec(html)) !== null) {
        const u = m[1].replace(/\\u002F/g, '/')
        const t = m[2].trim()
        if (!seen.has(u) && t.length > 0) { seen.add(u); items.push({ url: u.startsWith('http') ? u : 'https:' + u, title: t }) }
      }
      return items
    }
  },
  {
    name: '爱奇艺',
    key: 'iqiyi',
    color: '#00C853',
    search: async (q) => {
      const url = `https://search.video.iqiyi.com/o?key=${encodeURIComponent(q)}&if=html5&channel=iqiyi`
      const res = await fetch(url, { headers: { 'User-Agent': UA, Referer: 'https://www.iqiyi.com/' } })
      if (!res.ok) throw new Error('HTTP ' + res.status)
      const data = await res.json()
      const items = []
      const seen = new Set()
      for (const doc of data?.data?.docinfos || []) {
        const al = doc?.albumDocInfo || {}
        const u = al?.albumLink || ''
        const t = stripTags(al?.albumTitle || '')
        if (!u || !t) continue
        if (u.includes('/links/')) continue
        const clean = u.startsWith('http') ? u : 'http:' + u
        if (!seen.has(clean)) { seen.add(clean); items.push({ url: clean, title: t }) }
        if (items.length >= 10) break
      }
      return items
    }
  },
  {
    name: '腾讯视频',
    key: 'tencent',
    color: '#FF5722',
    search: async (q) => {
      const body = {
        version: '26022601',
        clientType: 1,
        filterValue: '',
        uuid: uuidv4(),
        retry: 0,
        query: q,
        queryFrom: 0,
        pagenum: 0,
        count: 20,
        featureList: ['DEFAULT_FEFEATURE', 'PC_SHORT_VIDEOS_WATERFALL', 'PC_WANT_EPISODE_V2', 'PC_WANT_EPISODE']
      }
      const res = await fetch('https://pbaccess.video.qq.com/trpc.videosearch.mobile_search.MultiTerminalSearch/MbSearch?vversion_platform=2', {
        method: 'POST',
        headers: {
          'User-Agent': UA,
          'Referer': 'https://v.qq.com',
          'Origin': 'https://v.qq.com',
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'origin': '.qq.com'
        },
        body: JSON.stringify(body)
      })
      if (!res.ok) throw new Error('HTTP ' + res.status)
      const data = await res.json()
      const items = []
      const seen = new Set()
      for (const it of data?.data?.normalList?.itemList || []) {
        const vi = it?.videoInfo || {}
        const vd = vi?.videoDoc || {}
        const vid = (vd?.dataKey || '').match(/vid=(\w+)/)
        const url = vid ? `https://v.qq.com/x/page/${vid[1]}.html` : ''
        const title = stripTags(vi?.title || '')
        if (!url || !title) continue
        if (!seen.has(url)) { seen.add(url); items.push({ url, title }) }
        if (items.length >= 10) break
      }
      return items
    }
  },
  {
    name: '芒果TV',
    key: 'mgtv',
    color: '#FFC107',
    search: async (q) => {
      const params = mgtvSign(q)
      const qs = Object.entries(params).map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join('&')
      const url = `https://mobileso.bz.mgtv.com/pc/search/v2?${qs}`
      const res = await fetch(url, { headers: { 'User-Agent': UA, Referer: 'https://so.mgtv.com/' } })
      if (!res.ok) throw new Error('HTTP ' + res.status)
      const data = await res.json()
      const items = []
      const seen = new Set()
      for (const c of data?.data?.contents || []) {
        const d = c?.data || {}
        const t = stripTags(d?.title || d?.hitTitle || '')
        const source = (d?.sourceList || []).find((s) => s?.url)
        const u = normUrl(source?.url || d?.url || '')
        if (!u || !t) continue
        if (!seen.has(u)) { seen.add(u); items.push({ url: u, title: t }) }
        if (items.length >= 10) break
      }
      return items
    }
  }
]

async function searchPlatform(platform, query) {
  try {
    const items = await platform.search(query)
    return { name: platform.name, key: platform.key, color: platform.color, items }
  } catch (e) {
    return { name: platform.name, key: platform.key, color: platform.color, error: '搜索失败' }
  }
}

const WRAPPER_PAGE = (iframeSrc) => `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>M1907 云加速播放器</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{height:100%;background:#000}
iframe{display:block;width:100%;height:100%;border:none}
</style>
</head>
<body>
<iframe frameborder="0" allow="autoplay; encrypted-media" allowfullscreen src="${iframeSrc}"></iframe>
</body>
</html>`

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)
    const path = url.pathname

    if (path === '/' && !url.searchParams.has('jx')) {
      return new Response(SEARCH_PAGE, {
        status: 200,
        headers: { 'Content-Type': 'text/html; charset=utf-8' }
      })
    }

    if (path === '/search') {
      return new Response(SEARCH_PAGE, {
        status: 200,
        headers: { 'Content-Type': 'text/html; charset=utf-8' }
      })
    }

    if (path === '/api/search') {
      const q = url.searchParams.get('q')
      if (!q || q.trim().length === 0) {
        return new Response(JSON.stringify({ error: '请输入搜索关键词' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        })
      }
      const results = await Promise.all(PLATFORMS.map(p => searchPlatform(p, q.trim())))
      return new Response(JSON.stringify({ platforms: results }), {
        status: 200,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      })
    }

    if (path !== '/' || !url.searchParams.has('jx')) {
      return new Response('Not Found', { status: 404 })
    }

    const iframeSrc = `${ORIGIN_URL}${url.search}`
    return new Response(WRAPPER_PAGE(iframeSrc), {
      status: 200,
      headers: { 'Content-Type': 'text/html; charset=utf-8' }
    })
  }
}