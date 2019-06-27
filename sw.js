/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/11/25/IoC容器浅析及简单实现.html","633df0164d66171f80c552bff2dd20e9"],["/2018/11/27/就决定是你了-为你的终端安装-Pokemon-皮肤.html","1c821ba66700d2b7fc1c7652fe7a68a2"],["/2018/12/10/总结-展望-世界不会因为你的无知而停下脚步.html","61cdbbffb690f8a943a80da5125d0bc0"],["/2018/12/25/大数据学习-初识Hadoop.html","5a1b18c3a23fafad37fea52615826806"],["/2019/01/06/《Algorithms-Part-1》Programming-Assignment-1-Percolation.html","247895357e01d895db58f9c258f1b48e"],["/2019/03/08/使用Forking工作流提交作业.html","cd8eb35348caeb3dcc7500a9ea10c94c"],["/2019/03/12/Assignment-1-Warmups.html","a512d5db2ad7bdaee5fd4fc318a5c56c"],["/2019/03/17/Assignment-2-Breakout.html","67d24bbcb4a63dd63bc9cf615c9965d9"],["/2019/03/26/普林斯顿算法课程Part1-week2.html","c3c37ba04230e0cba9fcf584136ba0f6"],["/2019/04/05/普林斯顿算法课程Part1-week3.html","6eed694cb0130bdb87f8c445cfe1626e"],["/2019/04/12/Assignment-3-Hangman.html","03482d87278201868225344b1d789bbe"],["/2019/04/15/普林斯顿算法课程Part1-week4.html","af3cec7f4bff80908b2a9c7beed599af"],["/2019/04/20/学习道路上的暂歇思考.html","0e2e4c46cd22201869653fa83d1e9459"],["/2019/04/28/普林斯顿算法课程Part1-week5.html","36dd4187def9d535e59f2a70179d1582"],["/2019/04/29/【通天塔之Vue】壹-缘起-乾坤大挪移.html","e2baba77daec7d6a41ba7d3d8bd5a9f3"],["/2019/05/07/普林斯顿算法课程Part1-week6.html","6f473df7e52513f2c3763524d9bceddc"],["/2019/05/08/程序设计语言：PartA-week1-课程信息和配置SML环境.html","8003da48b1e0d612d475a7a940e5494c"],["/2019/05/10/Commit-message-guide.html","39e26b0ff2405b01e4a145aea9a65f61"],["/2019/05/19/《图解HTTP》读书笔记.html","96e4e8c0562ceda6120ff03ba49f13b4"],["/2019/06/16/微信小程序《消灭病毒》抓包修改数据.html","7c1aa2b8bdea1cfe03088be4a0db8c36"],["/2019/06/19/计算机组成原理题目总结.html","c64822229d49e329a637437ca9ff1568"],["/2019/06/27/text.html","09f90ee7f4faffa35f05340063a41594"],["/about/index.html","9fb5b463ef1e03742ebea11d2783f0d0"],["/archives/2018/11/index.html","12acd91562d078816be35fbaf3fcf23c"],["/archives/2018/12/index.html","a1f1293031850ab4d88e14f86a59cac4"],["/archives/2018/index.html","ff11c62a547f4cee2c6819660d83c81c"],["/archives/2019/01/index.html","bab1b58a365fc6cabf484fce3d337619"],["/archives/2019/03/index.html","609b96fffce704380aa59e2266e1a9a2"],["/archives/2019/04/index.html","a736b4cda1d7a8068949e2a48351f99d"],["/archives/2019/05/index.html","0ca89f4dce01b9b77666d4b8badcd6cb"],["/archives/2019/06/index.html","396384abc4ca09554e5dc0a54815b16b"],["/archives/2019/index.html","9e47ed6a1deacb459836f5012d78065d"],["/archives/2019/page/2/index.html","78bc447853ed75bb896b966b341c06ca"],["/archives/index.html","c93fc1a7819e688876ac6feffa176b23"],["/archives/page/2/index.html","9d24d9586e36de6f0e5d099ba80b1621"],["/archives/page/3/index.html","a4d859463e217e79f16024402eb1ebbd"],["/categories/Java-beginner/index.html","52a41f7b3c6acd55690217597ee7538f"],["/categories/Princeton-Algorithms/index.html","a489c603abc0d4a768f839cda1f80e61"],["/categories/Programming-Languages/index.html","7a7d2ac72255dda4914199667d3c54a1"],["/categories/Vue/index.html","acd9692e4140c4404c2025039a14db20"],["/categories/index.html","7d1ef1183707af39fc5f9dd3fdc51623"],["/categories/人生苦旅/index.html","b9def5b0a835b83ae4a72cd45ff38620"],["/categories/折腾/index.html","b158a5d13e5ef3ed9042a61520944450"],["/categories/知识总结/index.html","969ad2d779d1599d5fdb905dd61a461f"],["/categories/破解/index.html","62f8992817862b661037908ef0c508d6"],["/categories/翻译/index.html","d7a78f5f6e5dbb6484bf4d6374d85188"],["/categories/读书笔记/index.html","d64f35b50e95ed8554e878eee7a191ab"],["/categories/课程总结/index.html","dd1030922b740fb63ef78e19354a7309"],["/css/main.css","b56ec41be8ce8ed9f4b09e879c886200"],["/gallery/index.html","c76bec1c0d2274a681a554715c35b325"],["/images/1.svg","88985471c188e5c5a765a8f233c54df5"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/bg-back.jpg","ca957ab7da42ace05909c4101a011727"],["/images/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/favicon-32x32-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wallhaven-248751.png","ae4053a9677ac8d9d5acc21087c7a113"],["/index.html","1bd1297dd4945a04b283051f296637cd"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/js/src/post-details.js","07b418717dae7319dacfb01d75ef2e19"],["/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","83aeab6e8ff6afee2286cfeb02efe9a9"],["/page/3/index.html","d617319d4fc7717d26333f081cc15dfa"],["/page/4/index.html","09b3775f41cc2af3a01dd975a81ee78e"],["/page/5/index.html","7f984c6dad93d646ab84ac223af7ca8f"],["/reading/index.html","d0e1ce2625c8003fb00f852834624cf4"],["/sw-register.js","e1afbad075a83a66b1ac49033e6038c3"],["/tags/Algorithms/index.html","f66f8f8783fbe1ddd5579919bee49bcc"],["/tags/Emacs/index.html","cc83141ddd43704f10a7652eb22e0e58"],["/tags/HTTP/index.html","04cccf0a1d7f1a91404ec22915a7e2dd"],["/tags/Hadoop/index.html","f527c619f920c21431374aca12119f24"],["/tags/Java/index.html","0a90dbed36568734b24acaf5cd0b777a"],["/tags/JavaScript/index.html","a50e510a84c301dbf7467611950b0954"],["/tags/JavaWeb/index.html","7d6ec700c754f442aa12fb86d4f881a2"],["/tags/Java基础/index.html","0ac2f89a6ed3b1890cf82f7ab4dbafe9"],["/tags/Linux/index.html","888fef7583199f434535b2978b85fc98"],["/tags/Programming-Assignment/index.html","6057d58832832984cc092841bca32975"],["/tags/SML/index.html","c58c279cac3ec515c21f7ec12377f3a7"],["/tags/coursera/index.html","03f0b64fd9cbf0faaa539b0dc35b8aa6"],["/tags/git/index.html","71f1db8b5addcb32316cd603c415e641"],["/tags/index.html","06ec65940aff108461952a2a17e8feee"],["/tags/vue/index.html","25240c1812a6530012860b240e678fd8"],["/tags/个人总结/index.html","b3f5bea9fe5de3f91753bdc69edd6a4a"],["/tags/前端/index.html","e16b14f733b633b8b13f447e9c807503"],["/tags/大学生活/index.html","6eaef93c39df3bc3a0f992418b597fce"],["/tags/大数据/index.html","32d0b09043525a3bb6ad540faf7b16b8"],["/tags/总结/index.html","97a2159d1fcb50a0fe0b75dde9682de2"],["/tags/抓包/index.html","6760a669a83e89659bc7112d5ad2b3d1"],["/tags/折腾/index.html","0f0ad32064c5725608079d2181950c1c"],["/tags/数据结构/index.html","346bc17f4f3095da53e2cfa46a475938"],["/tags/算法/index.html","5880323d900bad7d6c808cb286fe8016"],["/tags/终端/index.html","a21572c1581916406a0f40734c905f16"],["/tags/美化/index.html","156ebf2663fbe58734700c091192eb6e"],["/tags/计算机组成原理/index.html","a322580b1f7c363c922b65d6c54cba16"],["/tags/逆向/index.html","169bf8ecb9bfd494d3118648d8c37a8c"],["/tags/通天塔/index.html","9d241a047c13522065197d205b12a086"],["/uploads/a1.jpg","99f504e5be12759c336fc90a084ba898"],["/uploads/a2.png","71acbbe7b6ece8b68b9ded8a777aa026"],["/uploads/a3.png","20897e592eb079e47df3cb35ada71002"],["/uploads/avatar.jpg","348767975a01b05d1a61cfcf8156c67d"],["/uploads/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/uploads/cmg.jpg","a9de4661686a974d3f3bcf77d06a543e"],["/uploads/fork.png","f7a57ef1f7dfa3e1a56bc3713be148c2"],["/uploads/jztm.jpg","9f92fe1db54705ce55c74bd708234fd5"],["/uploads/learn_summary.jpg","d20202c2ff3cad7e9ddf2d60b10ad5a4"],["/uploads/paw2.png","628dde6d49320b541e50a70038379fcb"],["/uploads/paw3.png","ae4053a9677ac8d9d5acc21087c7a113"],["/uploads/paw4.png","3bb1e5cd03edcc6174c48ca58a3d4d03"],["/uploads/paw5.jpg","9a685f65a018d1b3423e3d67d2513ceb"],["/uploads/paw6.png","2d32964ff9846c3c3a0751c7d61ff8bb"],["/uploads/pla1.jpg","de60fa9adcf1dc002db753138da71b78"],["/uploads/tjhttp.jpg","c0a69eacde4148c360d95e68b814518d"],["/uploads/tttvue1.jpg","3011d6a9b768012b829ade13e4fb7d06"],["/uploads/xmbd.jpg","7a96ee5228e141735fa2b5432ae9a576"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
