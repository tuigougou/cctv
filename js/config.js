// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
// 注意：PASSWORD 环境变量是必需的，所有部署都必须设置密码以确保安全
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000  // 验证有效期（90天，约3个月）
};

// 网站信息配置
const SITE_CONFIG = {
    name: '啾啾TV',
    url: 'https://cctv-csu.pages.dev/',
    description: '啾啾之家',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// API站点配置
const API_SITES = {
  // =========================
  // 您原有的配置 (保持不变)
  // =========================
  dyttzy: {
    api: 'http://caiji.dyttzyapi.com',
    name: '电影天堂资源',
    detail: 'http://caiji.dyttzyapi.com',
  },
  ruyi: {
    api: 'https://cj.rycjapi.com',
    name: '如意资源',
  },
  bfzy: {
    api: 'https://bfzyapi.com',
    name: '暴风资源',
  },
  tyyszy: {
    api: 'https://tyyszy.com',
    name: '天涯资源',
  },
  xiaomaomi: {
    api: 'https://zy.xiaomaomi.cc',
    name: '小猫咪资源',
  },
  ffzy: {
    api: 'http://ffzy5.tv',
    name: '非凡影视',
    detail: 'http://ffzy5.tv',
  },
  heimuer: {
    api: 'https://json.heimuer.xyz',
    name: '黑木耳',
    detail: 'https://heimuer.tv',
  },
  zy360: {
    api: 'https://360zy.com',
    name: '360资源',
  },
  wolong: {
    api: 'https://wolongzyw.com',
    name: '卧龙资源',
  },
  hwba: {
    api: 'https://cjhwba.com',
    name: '华为吧资源',
  },
  jisu: {
    api: 'https://jszyapi.com',
    name: '极速资源',
    detail: 'https://jszyapi.com'
  },
  dbzy: {
    api: 'https://dbzy.com',
    name: '豆瓣资源',
  },
  mozhua: {
    api: 'https://mozhuazy.com',
    name: '魔爪资源',
  },
  mdzy: {
    api: 'https://www.mdzyapi.com',
    name: '魔都资源',
  },
  zuid: {
    api: 'https://api.zuidapi.com',
    name: '最大资源'
  },
  yinghua: {
    api: 'https://m3u8.apiyhzy.com',
    name: '樱花资源'
  },
  baidu: {
    api: 'https://api.apibdzy.com',
    name: '百度云资源'
  },
  wujin: {
    api: 'https://api.wujinapi.me',
    name: '无尽资源'
  },
  wwzy: {
    api: 'https://wwzy.tv',
    name: '旺旺短剧'
  },
  ikun: {
    api: 'https://ikunzyapi.com',
    name: 'iKun资源'
  },


  // =========================
  // 新增：HTTPS 优质源 (推荐)
  // =========================
  qiqi_res: {
    api: 'https://www.qiqidys.com/api.php/provide/vod',
    name: '七七资源'
  },
  haiwaikan_res: {
    api: 'https://haiwaikan.com/api.php/provide/vod/',
    name: '海外看|点播🪜'
  },
  zy360_res: { // 注意：可能与上方重复，但API地址格式略有不同，保留备用
    api: 'https://360zy.com/api.php/provide/vod/',
    name: '360|点播'
  },
  heimuer_res: {
    api: 'https://www.heimuer.tv/api.php/provide/vod',
    name: '黑木耳|点播'
  },
  yeyu_res: {
    api: 'https://yyff.540734621.xyz/api.php/provide/vod/',
    name: '业余|点播'
  },
  huaweiba_res: {
    api: 'https://hw8.live/api.php/provide/vod/',
    name: '华为吧|点播'
  },
  xiaohuangren_res: {
    api: 'https://iqyi.xiaohuangrentv.com/api.php/provide/vod/',
    name: '小黄人|点播'
  },
  niuniu_res: {
    api: 'https://api.niuniuzy.me/api.php/provide/vod/',
    name: '牛牛|点播'
  },
  yaya_res: {
    api: 'https://cj.yayazy.net/api.php/provide/vod/',
    name: '丫丫|点播'
  },
  uku_res: {
    api: 'https://api.ukuapi.com/api.php/provide/vod/',
    name: 'U酷|点播'
  },
  haohua_res: {
    api: 'https://hhzyapi.com/api.php/provide/vod',
    name: '豪华|点播'
  },
  // jisu_res (上方已有极速，跳过)
  sijiu_res: {
    api: 'https://49zyw.com/api.php/provide/vod/',
    name: '四九|点播'
  },
  suoni_res: {
    api: 'https://suoniapi.com/api.php/provide/vod/',
    name: '索尼|点播'
  },
  // ikun_res (上方已有，跳过)
  liangzi_res: {
    api: 'https://cj.lziapi.com/api.php/provide/vod/',
    name: '量子|点播'
  },
  // baofeng_res (上方已有，跳过)
  hongniu_res: {
    api: 'https://www.hongniuzy2.com/api.php/provide/vod/',
    name: '红牛|点播'
  },
  feisu_res: {
    api: 'https://www.feisuzyapi.com/api.php/provide/vod/',
    name: '飞速|点播'
  },
  kuaikan_res: {
    api: 'https://www.kuaikan-api.com/api.php/provide/vod/',
    name: '快看|点播'
  },
  xiongzhang_res: {
    api: 'https://xzcjz.com/api.php/provide/vod/',
    name: '熊掌|点播'
  },
  kuache_res: {
    api: 'https://caiji.kczyapi.com/api.php/provide/vod/from/kcm3u8/',
    name: '快车|点播'
  },
  // yinghua_res (上方已有，跳过)
  // wolong_res (上方已有，跳过)
  tianyi_res: {
    api: 'https://www.911ysw.top/tianyi.php/provide/vod/',
    name: '天翼|点播'
  },
  huya_res: {
    api: 'https://www.huyaapi.com/api.php/provide/vod/',
    name: '虎牙|点播'
  },
  // baidu_res (上方已有，跳过)
  piaoling_res: {
    api: 'https://p2100.net/api.php/provide/vod/',
    name: '飘零|点播'
  },
  // wujin_res (上方已有，跳过)
  subo_res: {
    api: 'https://subocaiji.com/api.php/provide/vod/',
    name: '速博|点播'
  },
  // modu_res (上方已有，跳过)
  qihu_res: {
    api: 'https://caiji.qhzyapi.com/api.php/provide/vod/',
    name: '奇虎|点播'
  },
  huohu_res: {
    api: 'https://hhzyapi.com/api.php/provide/vod/',
    name: '火狐|点播'
  },
  xinlang_res: {
    api: 'https://api.xinlangapi.com/xinlangapi.php/provide/vod/',
    name: '新浪|点播'
  },
  kuaiyun_res: {
    api: 'https://www.kuaiyunzy.com/api.php/provide/vod/',
    name: '快云|点播'
  },

  // =========================
  // 新增：HTTP 源 (需注意混合内容问题)
  // =========================
  hongniu_http: {
    api: 'http://hongniuzy2.com/api.php/provide/vod/from/hnm3u8',
    name: '红牛资源(HTTP)'
  },
  liangzi_http: {
    api: 'http://cj.lziapi.com/api.php/provide/vod/from/lzm3u8',
    name: '量子资源(HTTP)'
  },
  kaifang_res: {
    api: 'http://vod-demo.onrender.com/pubdovod.php',
    name: '开放电影'
  },
  youzhi_res: {
    api: 'http://api.1080zyku.com/inc/api.php/provide/vod',
    name: '优质资源库'
  },
  kan39_res: {
    api: 'http://39kan.com/api.php/provide/vod',
    name: '39影视'
  },
  tiantang_res: {
    api: 'http://vipmv.cc/api.php/provide/vod',
    name: '天堂资源'
  },
  lehuo_res: {
    api: 'http://lehootv.com/api.php/provide/vod',
    name: '乐活影视'
  },
  tangrenjie_res: {
    api: 'http://tangrenjie.tv/api.php/provide/vod',
    name: '唐人街'
  },
  kudian_res: {
    api: 'http://api.kuapi.cc/api.php/provide/vod',
    name: '酷点资源'
  },
  senlin_res: {
    api: 'http://slapibf.com/api.php/provide/vod',
    name: '森林资源'
  },
  yingku_res: {
    api: 'http://api.ykapi.net/api.php/provide/vod',
    name: '影库资源网'
  },
  tantan_res: {
    api: 'http://apittzy.com/api.php/provide/vod',
    name: '探探资源'
  },
  shandian_m3u8: {
    api: 'http://sdzyapi.com/api.php/provide/vod/from/sdm3u8',
    name: '闪电资源 (m3u8)'
  },
  shandian_common: {
    api: 'http://sdzyapi.com/api.php/provide/vod/',
    name: '闪电资源 (通用)'
  },
  jinying_res: {
    api: 'http://jyzyapi.com/provide/vod/from/jinyingm3u8',
    name: '金鹰资源'
  },
  guangsu_res: {
    api: 'http://api.guangsuapi.com/api.php/provide/vod/from/gsm3u8',
    name: '光速资源'
  },
  aosika_res: {
    api: 'http://aosikazy.com/api.php/provide/vod',
    name: '奥斯卡资源网'
  },
  laoya_res: {
    api: 'http://api.apilyzy.com/api.php/provide/vod',
    name: '老鸭资源采集'
  },
  uku_http: {
    api: 'http://api.ukuapi.com/api.php/provide/vod',
    name: 'U酷资源(HTTP)'
  },
  beidouxing_res: {
    api: 'http://m3u8.bdxzyapi.com/api.php/provide/vod',
    name: '北斗星资源'
  },
  kuaibo_res: {
    api: 'http://www.kuaibozy.com/api.php/provide/vod',
    name: '快资源播'
  },
  aidan_res: {
    api: 'http://lovedan.net/api.php/provide/vod',
    name: '艾旦影视'
  },
  piaohua_res: {
    api: 'http://www.zzrhgg.com/api.php/provide/vod',
    name: '飘花电影'
  },
  piaohua_json: {
    api: 'http://www.ahjiuman.com/api.php/provide/vod/at/json',
    name: '飘花|点播 (JSON)'
  },
  wangmin_res: {
    api: 'http://prinevillesda.org/api.php/provide/vod',
    name: '网民电影'
  },
  siwa_res: {
    api: 'http://siwazyw.cc/api.php/provide/vod',
    name: '袜丝资源'
  },
  tiankong_res: {
    api: 'http://m3u8.tiankongapi.com/api.php/provide/vod/from/tkm3u8',
    name: '天空资源'
  },
  haiwaikan_http: {
    api: 'http://haiwaikan.com/api.php/provide/vod',
    name: '海外看资源(HTTP)'
  },
  citong_res: {
    api: 'http://ys9.cttv.vip/api.php/provide/vod/',
    name: '刺桐|点播'
  },
  guanwang_res: {
    api: 'http://gwcms.cttv.vip/api.php/provide/vod/',
    name: '官网|点播'
  },
  // ffzy_http (上方已有，跳过)
  // zuida_http (上方已有，跳过)
};

// 定义合并方法
function extendAPISites(newSites) {
    Object.assign(API_SITES, newSites);
}

// 暴露到全局
window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;


// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 只拼接参数部分，不再包含 /api.php/provide/vod/
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50, // 最大获取页数
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 只拼接参数部分
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    // allowedApiDomains 不再需要，因为所有请求都通过内部代理
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 隐藏内置黄色采集站API的变量
const HIDE_BUILTIN_ADULT_APIS = false;
