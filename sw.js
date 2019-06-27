/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/11/25/IoC容器浅析及简单实现.html","85f3d0e99fe95dcd84cc18b53b4f94d7"],["/2018/11/27/就决定是你了-为你的终端安装-Pokemon-皮肤.html","515f96e45c1bbbbe28e97ab9e7682887"],["/2018/12/10/总结-展望-世界不会因为你的无知而停下脚步.html","f2dd27770bcf9f23e9f12769d167fedf"],["/2018/12/25/大数据学习-初识Hadoop.html","6117c5a85653780c43bdbecf270b01dc"],["/2019/01/06/《Algorithms-Part-1》Programming-Assignment-1-Percolation.html","cf73ce11ac1d03e64b731eedbbdcb670"],["/2019/03/08/使用Forking工作流提交作业.html","6683bee102002a05961bd6f5d1baa011"],["/2019/03/12/Assignment-1-Warmups.html","60a1cc314b3514cacb6f57d225ddfc4b"],["/2019/03/17/Assignment-2-Breakout.html","4b7368b403c7e6968078ad8b026b8e78"],["/2019/03/26/普林斯顿算法课程Part1-week2.html","ad8affc9fb1593246fc1d6acf19af7b2"],["/2019/04/05/普林斯顿算法课程Part1-week3.html","6d2dcad57788ad75d17c5a2f20deefe2"],["/2019/04/12/Assignment-3-Hangman.html","1459dd2a36bbaa92342a953d56da5cb1"],["/2019/04/15/普林斯顿算法课程Part1-week4.html","435d457fe025d775836093efeab870d1"],["/2019/04/20/学习道路上的暂歇思考.html","155eda16bba6f15866c9fb7de57cad26"],["/2019/04/28/普林斯顿算法课程Part1-week5.html","cc3f850d5eabb2a7413e83b7a9c85dc2"],["/2019/04/29/【通天塔之Vue】壹-缘起-乾坤大挪移.html","5fcb13c623f069ec78bd52aaa8ee8c9e"],["/2019/05/07/普林斯顿算法课程Part1-week6.html","4a643ba2fa8f0102e5a66468b6d240ea"],["/2019/05/08/程序设计语言：PartA-week1-课程信息和配置SML环境.html","74ab58316945465e319c75c7747a393d"],["/2019/05/10/Commit-message-guide.html","b124d3e7b597e9fa18a0b7ada05d5176"],["/2019/05/19/《图解HTTP》读书笔记.html","a6edeefbfb0c6d4b091ba1e176166868"],["/2019/06/16/微信小程序《消灭病毒》抓包修改数据.html","766bdf31eb6d0101ec5b5777fa9a3a64"],["/2019/06/19/计算机组成原理题目总结.html","1d8acf3ee874f7be36ec578a24a55a75"],["/about/index.html","cc833e5987be36353a25d501d49ec84c"],["/archives/2018/11/index.html","62488151355a768bddfd3f225d52fa6e"],["/archives/2018/12/index.html","340db47d3f917d38cb9a460965074323"],["/archives/2018/index.html","79b7d18ce068f488b3c23d6fce793097"],["/archives/2019/01/index.html","f1c1f88e954c95de7880598e20a1b5b9"],["/archives/2019/03/index.html","12e2845e15cb63ac08db692002fe7168"],["/archives/2019/04/index.html","ce91ede060fb77d6f33dd32f4c5e113f"],["/archives/2019/05/index.html","40317cfb95f7e0534013ed09abe3c063"],["/archives/2019/06/index.html","8e15e2cd8630749448f39882a5d2642f"],["/archives/2019/index.html","17543c6a8f31eba9528a5fa514ed8dee"],["/archives/2019/page/2/index.html","79ad067b463fe59543bd2710b2b729a0"],["/archives/index.html","d9de7928da2823069888ab0f46b2f44d"],["/archives/page/2/index.html","dcf5409cebea1cb87c1f0b61a0f5a266"],["/archives/page/3/index.html","7c873b216bb71e0fcf8bf3376143263a"],["/categories/Java-beginner/index.html","6f63169d05e9757a1ab1088b615a5634"],["/categories/Princeton-Algorithms/index.html","296f098efd46e2c2979ef1e2a1117f99"],["/categories/Programming-Languages/index.html","cb11510e4a8a99fae6878ac0e754f14b"],["/categories/Vue/index.html","731aee70369aec6d0729c01cca4ce4fb"],["/categories/index.html","5df4a726121c758adb8f9ab9d2687d41"],["/categories/人生苦旅/index.html","a5555e8126a4297ef4851e1898c76557"],["/categories/折腾/index.html","7758b758363622c6344071cb3f003e65"],["/categories/知识总结/index.html","f64672efcf69461550a8a2d05ccb3e36"],["/categories/破解/index.html","f59cb0888b9cdb01ca60ddc7c65ea1cb"],["/categories/翻译/index.html","ab9a7b74c965b65b7eee4e2a3cf975b4"],["/categories/读书笔记/index.html","78101458af23af5237e6f0ca5613a14f"],["/categories/课程总结/index.html","552358dd16eee86ec7e4f190922d8611"],["/css/main.css","79745cb0c59de1e054badd1eb0798617"],["/gallery/index.html","74714359c72f1bb704afcde19508cd94"],["/images/1.svg","88985471c188e5c5a765a8f233c54df5"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/bg-back.jpg","ca957ab7da42ace05909c4101a011727"],["/images/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/favicon-32x32-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wallhaven-248751.png","ae4053a9677ac8d9d5acc21087c7a113"],["/index.html","1021034f2ef2aa456d2c4725a8a685f9"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/js/src/post-details.js","07b418717dae7319dacfb01d75ef2e19"],["/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","89f75caf853552c3b21a0f384ec14c74"],["/page/3/index.html","ebcbc7da11af32991d0288b4ce17c179"],["/page/4/index.html","2ffc1e71f1e0bc9cfa9b7a09b2f112b1"],["/page/5/index.html","5af1ad9e7173c5d3d786879e37b9137f"],["/reading/index.html","ffd9aa81eb6063a32a519b36ce67472c"],["/sw-register.js","be5a3cd46ba5030b77da9db522cf90e3"],["/tags/Algorithms/index.html","08b717f2185a49e69f47dc54ed7af83a"],["/tags/Emacs/index.html","5bf37729bb057afc17fd3f7183064381"],["/tags/HTTP/index.html","79d5f6061a85f27ad8493369774077a3"],["/tags/Hadoop/index.html","d08a34d0e41a7c127356764d5a24ba60"],["/tags/Java/index.html","4cd429f08c6142e6123e5d1f4a8498b7"],["/tags/JavaScript/index.html","d730980acc1a9648dea3f563ea94e380"],["/tags/JavaWeb/index.html","0fca7650c330eb077cd6a96eeefc99e9"],["/tags/Java基础/index.html","bb9f93614167064dc4430a4471ae6df9"],["/tags/Linux/index.html","f276d86ef5e8b6d81816849ed446b588"],["/tags/Programming-Assignment/index.html","3467e9077e30dc2352bc0f5b83b8ce5a"],["/tags/SML/index.html","9eb353581e4cfa34edcf6f97734cb0df"],["/tags/coursera/index.html","38ddaaa4e0fd7d5b063647cf790ff526"],["/tags/git/index.html","1fc0e9d87f1cf71cf012cece1156460f"],["/tags/index.html","04097c0f50230ddf809f51b106b14fe2"],["/tags/vue/index.html","a95185a937b88b378034e353935f9043"],["/tags/个人总结/index.html","955bdb7cb2df2eb221bb0385a1a0ad6b"],["/tags/前端/index.html","d1d5386f4f55de7071c4c07214c9579e"],["/tags/大学生活/index.html","038f5cc07e932aa77c49047a5e6b9bfe"],["/tags/大数据/index.html","fd92d8a6405f5e9846d3d6f6ff17c722"],["/tags/总结/index.html","84d61f29dc8bff77b84a2d42c2bdc543"],["/tags/抓包/index.html","829fd9dc6976d7cc4402d5b90e7cbcb7"],["/tags/折腾/index.html","344790b98b771930a8d1723730406342"],["/tags/数据结构/index.html","fd432dc08f4dda41af6043aa7f0834e8"],["/tags/算法/index.html","be64ca76b2098262938d6cd6475911c4"],["/tags/终端/index.html","ba4c1fda7c4f0f9ea336ff3e4957d1c0"],["/tags/美化/index.html","97c35462e679fdcbd70af0b036f8e001"],["/tags/计算机组成原理/index.html","43f65a187e3df89b7a3c9695118cb853"],["/tags/逆向/index.html","55d89d9c57d78ec016bb6739586a80a5"],["/tags/通天塔/index.html","097787e0e6305fcd5310e063e0d8b2a6"],["/uploads/a1.jpg","99f504e5be12759c336fc90a084ba898"],["/uploads/a2.png","71acbbe7b6ece8b68b9ded8a777aa026"],["/uploads/a3.png","20897e592eb079e47df3cb35ada71002"],["/uploads/avatar.jpg","348767975a01b05d1a61cfcf8156c67d"],["/uploads/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/uploads/cmg.jpg","a9de4661686a974d3f3bcf77d06a543e"],["/uploads/fork.png","f7a57ef1f7dfa3e1a56bc3713be148c2"],["/uploads/jztm.jpg","9f92fe1db54705ce55c74bd708234fd5"],["/uploads/learn_summary.jpg","d20202c2ff3cad7e9ddf2d60b10ad5a4"],["/uploads/paw2.png","628dde6d49320b541e50a70038379fcb"],["/uploads/paw3.png","ae4053a9677ac8d9d5acc21087c7a113"],["/uploads/paw4.png","3bb1e5cd03edcc6174c48ca58a3d4d03"],["/uploads/paw5.jpg","9a685f65a018d1b3423e3d67d2513ceb"],["/uploads/paw6.png","2d32964ff9846c3c3a0751c7d61ff8bb"],["/uploads/pla1.jpg","de60fa9adcf1dc002db753138da71b78"],["/uploads/tjhttp.jpg","c0a69eacde4148c360d95e68b814518d"],["/uploads/tttvue1.jpg","3011d6a9b768012b829ade13e4fb7d06"],["/uploads/xmbd.jpg","7a96ee5228e141735fa2b5432ae9a576"]];
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
