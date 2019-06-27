/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/11/25/IoC容器浅析及简单实现.html","2670313cd808d383c1335485eb79c711"],["/2018/11/27/就决定是你了-为你的终端安装-Pokemon-皮肤.html","045bd019f32e5041bd259ae975be7f89"],["/2018/12/10/总结-展望-世界不会因为你的无知而停下脚步.html","5da520065ddbbb7688295cd20190eb58"],["/2018/12/25/大数据学习-初识Hadoop.html","2c0692f7f0b4f152dc2af2a29b63e61d"],["/2019/01/06/《Algorithms-Part-1》Programming-Assignment-1-Percolation.html","90eb3cad94738303d92bacd41715fe8d"],["/2019/03/08/使用Forking工作流提交作业.html","200fe77de3db6cae7a285c0d4d044e3a"],["/2019/03/12/Assignment-1-Warmups.html","d357965e2820c1e551b70197e53b4fd0"],["/2019/03/17/Assignment-2-Breakout.html","456ef5f127e6a9cc77c2b6920c7f3bcc"],["/2019/03/26/普林斯顿算法课程Part1-week2.html","ea2d10e3c80c74db1490bbd47dcc58c7"],["/2019/04/05/普林斯顿算法课程Part1-week3.html","f117c6b60fce7f67d365edd131533910"],["/2019/04/12/Assignment-3-Hangman.html","b440f3a5089c38c908aa07ac59d01885"],["/2019/04/15/普林斯顿算法课程Part1-week4.html","a0930f27d224a63dcbf488619e866bd9"],["/2019/04/20/学习道路上的暂歇思考.html","fcd324e6d064731034b83d64e6279401"],["/2019/04/28/普林斯顿算法课程Part1-week5.html","bac013640075f43b5491a27a939a51bf"],["/2019/04/29/【通天塔之Vue】壹-缘起-乾坤大挪移.html","df4c2d12f488011415f435a3a37ed326"],["/2019/05/07/普林斯顿算法课程Part1-week6.html","6bb0809988ba51bcfe896a740c921ce5"],["/2019/05/08/程序设计语言：PartA-week1-课程信息和配置SML环境.html","86d840a301856bcba678a3bf037d2be7"],["/2019/05/10/Commit-message-guide.html","59213a80ca4426a68ef7ffd9a9ee63f7"],["/2019/05/19/《图解HTTP》读书笔记.html","18f90e4c9a5785a66dc46cab8ac3c36a"],["/2019/06/16/微信小程序《消灭病毒》抓包修改数据.html","c3c67afc451444d83f78946045d2e3d5"],["/2019/06/19/计算机组成原理题目总结.html","bbe0b3358c4f1b5893f9c38608a4d29f"],["/2019/06/27/text.html","d08e36a0d0ae203f078b537b6af504c3"],["/about/index.html","e4c7e8555e7f77521441d429c79b41bb"],["/archives/2018/11/index.html","5ba3d4d8545ef93685157d3c879645f4"],["/archives/2018/12/index.html","a9344e14c3c7dc5d6f9eb4a593dfae26"],["/archives/2018/index.html","6d3cb7220e80099337f3a8351fbabfa1"],["/archives/2019/01/index.html","c01a6695be98d1bb492a08b9699281cf"],["/archives/2019/03/index.html","54c5d48c8167377903d52ab62a70b805"],["/archives/2019/04/index.html","4172512d24cdeaeae9b09ea96a14ce45"],["/archives/2019/05/index.html","afa232fd63970026639ff0e83743a388"],["/archives/2019/06/index.html","d341654cbd0c06f00ef5c38dadb5f0c1"],["/archives/2019/index.html","d8758ca39d09598e5eb5ad0589eef015"],["/archives/2019/page/2/index.html","bc40c2e573131f03e7532ff38819aa50"],["/archives/index.html","6c6f9dbe863958f2bc105eceb4d1bcd2"],["/archives/page/2/index.html","a4d937d6966605f0a433bb375685fe93"],["/archives/page/3/index.html","3dd36a1a56cbeb317b333c0894a60584"],["/categories/Java-beginner/index.html","a5689d7b56e08b99d955772392eb7b14"],["/categories/Princeton-Algorithms/index.html","c72ce83beb0f26f1496184fa05ae9aee"],["/categories/Programming-Languages/index.html","f42d5d4357051f81696fb2a6b5b83240"],["/categories/Vue/index.html","28c042ad341dd866dc0184d7eb346a67"],["/categories/index.html","97307e49de124ec29867a33b23ee4fb5"],["/categories/人生苦旅/index.html","3baf8b52b63b894b7e43523cc3957dfe"],["/categories/折腾/index.html","b903ea40ff89cfc8c12dddecf4b28cc3"],["/categories/知识总结/index.html","fb5244906d41d71f77928af400ee51f2"],["/categories/破解/index.html","6c06b030419e3f5afeaefbe7723e2d07"],["/categories/翻译/index.html","98e9bc0ff6698a44821118a39e2bada2"],["/categories/读书笔记/index.html","a58dca5fbc312878bb20cab0c6e8e81b"],["/categories/课程总结/index.html","058e00c7da194e433f08cc22ce0fc576"],["/css/main.css","b56ec41be8ce8ed9f4b09e879c886200"],["/gallery/index.html","1ac84c91d6212b66bdc8538b00655968"],["/images/1.svg","88985471c188e5c5a765a8f233c54df5"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/bg-back.jpg","ca957ab7da42ace05909c4101a011727"],["/images/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/favicon-32x32-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wallhaven-248751.png","ae4053a9677ac8d9d5acc21087c7a113"],["/index.html","6c3d988a7fcfcd90b1652d54fbd497e5"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/js/src/post-details.js","07b418717dae7319dacfb01d75ef2e19"],["/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","5387d2fdbb098cfe1decc043b3cb5763"],["/page/3/index.html","cfbbb7c37a472aeb908f98304626687d"],["/page/4/index.html","098a1841d9ff7291ba19b2c40525040b"],["/page/5/index.html","53ec43e644ce7d63b4b3060c246a45f4"],["/reading/index.html","3bb87c769c52ff4d32afd47aaf34f797"],["/sw-register.js","82507748f7952e4ab4f6620aa0238ad9"],["/tags/Algorithms/index.html","5307984eb0f3220dcdeb24ff91f7f631"],["/tags/Emacs/index.html","6efb1fe43613f315166a7a1ab1b895e7"],["/tags/HTTP/index.html","93d5d8b87c1127779d8152ea8311fe3c"],["/tags/Hadoop/index.html","59d50f5109c5b31abe1214a1cd5f045e"],["/tags/Java/index.html","c212ad574256723e8baebf99109440ce"],["/tags/JavaScript/index.html","a7a106946d286f66342a0efddfce1fb6"],["/tags/JavaWeb/index.html","6a6a5f3d67781a3b20d115bf7fe95fe4"],["/tags/Java基础/index.html","43c9d8d503c02c17da5b0f317fccf0b5"],["/tags/Linux/index.html","8d07d9f622c998d36b040b2c278158d7"],["/tags/Programming-Assignment/index.html","d0c85ca96f15efe3f61bfb1111c75d36"],["/tags/SML/index.html","a73b9fbb307f515ba93575a5bfaeda09"],["/tags/coursera/index.html","38ea806c13c5c177926f8e898e30a40f"],["/tags/git/index.html","a9148b5b1383c29eb849040a40633000"],["/tags/index.html","6e553026a140940d9087b978e294635a"],["/tags/vue/index.html","ef94058d7a67db5b136905980848c798"],["/tags/个人总结/index.html","c29f86bfdba4fe8376b749c08b3772c3"],["/tags/前端/index.html","38b11ca8396d5041a90cdfcd8966a584"],["/tags/大学生活/index.html","8b141987e5c0e51417a45d274a5be715"],["/tags/大数据/index.html","6ff89d038fec355dd6c2d645f060e2b2"],["/tags/总结/index.html","8cc3507c6de077ac4217e9f9aeb21b0e"],["/tags/抓包/index.html","7063f644cb0cdfcff9e7ce84c8c0ba77"],["/tags/折腾/index.html","cf8983f1a19caf94c8b9ef551ada8b2b"],["/tags/数据结构/index.html","ace557f40fd90906ccac2c60ac701a28"],["/tags/算法/index.html","4fce104bfc4f40ab9e34e0605589af15"],["/tags/终端/index.html","75f1e6cb0d639fc6f6a65802b0f7909e"],["/tags/美化/index.html","72f69ee62ef94309baa0cd0222fb59b4"],["/tags/计算机组成原理/index.html","4cdfe17d5cfdbddc62a55305d225c01e"],["/tags/逆向/index.html","246045a3582382759e499537606dc0d3"],["/tags/通天塔/index.html","f0cedcc71da45c0176b53e3a2412400f"],["/uploads/a1.jpg","99f504e5be12759c336fc90a084ba898"],["/uploads/a2.png","71acbbe7b6ece8b68b9ded8a777aa026"],["/uploads/a3.png","20897e592eb079e47df3cb35ada71002"],["/uploads/avatar.jpg","348767975a01b05d1a61cfcf8156c67d"],["/uploads/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/uploads/cmg.jpg","a9de4661686a974d3f3bcf77d06a543e"],["/uploads/fork.png","f7a57ef1f7dfa3e1a56bc3713be148c2"],["/uploads/jztm.jpg","9f92fe1db54705ce55c74bd708234fd5"],["/uploads/learn_summary.jpg","d20202c2ff3cad7e9ddf2d60b10ad5a4"],["/uploads/paw2.png","628dde6d49320b541e50a70038379fcb"],["/uploads/paw3.png","ae4053a9677ac8d9d5acc21087c7a113"],["/uploads/paw4.png","3bb1e5cd03edcc6174c48ca58a3d4d03"],["/uploads/paw5.jpg","9a685f65a018d1b3423e3d67d2513ceb"],["/uploads/paw6.png","2d32964ff9846c3c3a0751c7d61ff8bb"],["/uploads/pla1.jpg","de60fa9adcf1dc002db753138da71b78"],["/uploads/tjhttp.jpg","c0a69eacde4148c360d95e68b814518d"],["/uploads/tttvue1.jpg","3011d6a9b768012b829ade13e4fb7d06"],["/uploads/xmbd.jpg","7a96ee5228e141735fa2b5432ae9a576"]];
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
