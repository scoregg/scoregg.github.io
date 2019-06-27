/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/11/25/IoC容器浅析及简单实现.html","4b59d13518b3221f0d2abed36a3f05b4"],["/2018/11/27/就决定是你了-为你的终端安装-Pokemon-皮肤.html","21f0533f9835e01817c5d1edb37db123"],["/2018/12/10/总结-展望-世界不会因为你的无知而停下脚步.html","47ddc7b416ed8dcff3208992e71895a3"],["/2018/12/25/大数据学习-初识Hadoop.html","c390da682f2257141d1439582d0fb7bc"],["/2019/01/06/《Algorithms-Part-1》Programming-Assignment-1-Percolation.html","8bce6928136b3214479c8ecba98dd9c6"],["/2019/03/08/使用Forking工作流提交作业.html","3332ed1c762551c2998488e15ff498d3"],["/2019/03/12/Assignment-1-Warmups.html","42683de6c02c105de115482f2e0e2c7e"],["/2019/03/17/Assignment-2-Breakout.html","92eaade3592fa61ee1d0c0ce872cd4aa"],["/2019/03/26/普林斯顿算法课程Part1-week2.html","8e79571725edfc42e317cd43b8d5b086"],["/2019/04/05/普林斯顿算法课程Part1-week3.html","98a22ce1a579d2d5ccf762494fb03224"],["/2019/04/12/Assignment-3-Hangman.html","9cfba6505d90a445117f159858b9c35a"],["/2019/04/15/普林斯顿算法课程Part1-week4.html","4a9d7f26264d5a7b000c77db30ffb3a4"],["/2019/04/20/学习道路上的暂歇思考.html","a7b11c4c14a3eb981ad9a2ae03505d52"],["/2019/04/28/普林斯顿算法课程Part1-week5.html","7c1f5491b2bc97bbf3e5613bf6508fe2"],["/2019/04/29/【通天塔之Vue】壹-缘起-乾坤大挪移.html","aa238b7b474bef63f0a8a4fa3fd807be"],["/2019/05/07/普林斯顿算法课程Part1-week6.html","bf4e857b65c0ad6e21bba82cf4a7e3d2"],["/2019/05/08/程序设计语言：PartA-week1-课程信息和配置SML环境.html","8a44cbe365ba159d5d7834ea30ddff0d"],["/2019/05/10/Commit-message-guide.html","7c064837330f0950baeab77c1adac3e8"],["/2019/05/19/《图解HTTP》读书笔记.html","6b17f32f75690dad24dcff0356fa4d17"],["/2019/06/16/微信小程序《消灭病毒》抓包修改数据.html","7989690799b5a321eac09b84dd48288d"],["/2019/06/19/计算机组成原理题目总结.html","95c8680e5b08b4807f5d5b93267acd1d"],["/about/index.html","6ef74cf214757a1a202990ee7f08e5ec"],["/archives/2018/11/index.html","c3e69b8fa4becc1bf1ccde0a98d64a3b"],["/archives/2018/12/index.html","e0a3b3557c56751c99e489377b09f3d4"],["/archives/2018/index.html","01a2ab4eaaa6821770a456b7ee8f9f48"],["/archives/2019/01/index.html","61abc8684fc11bf7db09f2652116d190"],["/archives/2019/03/index.html","193d58440ed93612be41a48151a64db7"],["/archives/2019/04/index.html","6da4cdb13d18464a3471280c171cdaf7"],["/archives/2019/05/index.html","4a365117475f3a267a60f93cf6990b84"],["/archives/2019/06/index.html","4fc08a8817f7b6e6648a8068fe9b96ae"],["/archives/2019/index.html","78f358db784135d69eb6d983b5e16bf4"],["/archives/2019/page/2/index.html","01b71eeebc344d901ff3bf226e9a4292"],["/archives/index.html","dee093094f2f465627a01c9245a79cff"],["/archives/page/2/index.html","01ad2284a5beae383c92541749d073bc"],["/archives/page/3/index.html","4db23c273c3b6332f7c2e9b683765a4a"],["/categories/Java-beginner/index.html","6a17e735f6742d3c3869d532dc4f5c9f"],["/categories/Princeton-Algorithms/index.html","25e94d396118bfc3466ef87224acc674"],["/categories/Programming-Languages/index.html","ebefdfa27e85e5e306237c7ab7bdac41"],["/categories/Vue/index.html","4a7f53a780664870e38ec1f45c455902"],["/categories/index.html","235e620bce97a6df1b2f4440d219bf38"],["/categories/人生苦旅/index.html","0851c971df05fe1d6eb0b77ffe47042f"],["/categories/折腾/index.html","df402c44896301a69428fea23135fabb"],["/categories/知识总结/index.html","ad256f5f82ad6a5d9d49d6b38642a83d"],["/categories/破解/index.html","2d1ebd39c1c87b3c0c3f3f78d8f8f838"],["/categories/翻译/index.html","c2e9cbced9617580f137ad29e771efe1"],["/categories/读书笔记/index.html","4061d1be8d3d381fd104384768dd1e63"],["/categories/课程总结/index.html","b1745ae6413ed286d82495bec4fa3956"],["/css/main.css","79745cb0c59de1e054badd1eb0798617"],["/gallery/index.html","abb50c798d00bca4d759062898d51150"],["/images/1.svg","88985471c188e5c5a765a8f233c54df5"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/bg-back.jpg","ca957ab7da42ace05909c4101a011727"],["/images/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/favicon-32x32-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wallhaven-248751.png","ae4053a9677ac8d9d5acc21087c7a113"],["/index.html","b36047524dd65f1e989be830d64145e4"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/js/src/post-details.js","07b418717dae7319dacfb01d75ef2e19"],["/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","70ca402c6a1c175d9f298ebebe204b2b"],["/page/3/index.html","fe776614da9c90176345c3d9bf9aa958"],["/page/4/index.html","28bd8fc1f85e2c00c36fe095aa9b1e61"],["/page/5/index.html","ee1cd21df54985729784da98e6485a1b"],["/reading/index.html","561a583ebb2ef9beb0b5abcfa219e4fe"],["/sw-register.js","89d252ad7af407459d017056f495e8ea"],["/tags/Algorithms/index.html","b4f8f11e795a1014b6569eaa11adc0a5"],["/tags/Emacs/index.html","1af5611cd74e96658139146116a6c61a"],["/tags/HTTP/index.html","94cc7d5690534ef90d71b1b2512a80e2"],["/tags/Hadoop/index.html","eb20523383b216b694e434054e1e41d1"],["/tags/Java/index.html","e757d7de613cee6150a43de2eb5022eb"],["/tags/JavaScript/index.html","9704077d7b9e41d71de7e07cc0b7df2d"],["/tags/JavaWeb/index.html","10d29f5ab4614cb923ae51afc90439e7"],["/tags/Java基础/index.html","fb7557449a759617eb797e954d308349"],["/tags/Linux/index.html","dbdfe72de2d70aa2ac06aa1cfb85c941"],["/tags/Programming-Assignment/index.html","34056d86a2ad4ce416bdea0d9e28428d"],["/tags/SML/index.html","6f6efc51757b6b258d059f6fe8287c3b"],["/tags/coursera/index.html","fa786c00412577d2d6bc835478114722"],["/tags/git/index.html","c075e7eed6122e75b52894d03c0f1a0d"],["/tags/index.html","befe0b2343c14bed733ebb1f47b149ea"],["/tags/vue/index.html","7ae8646100ec0310f2729135ace3da17"],["/tags/个人总结/index.html","cf9a778215c96616e6a6b6c0f6399cdf"],["/tags/前端/index.html","f8835868df4b2bdef69794ebfdaf57a5"],["/tags/大学生活/index.html","c0933a624717ec0d73f73adbda75f04a"],["/tags/大数据/index.html","e598b7e2466aae4a16437e49686d4031"],["/tags/总结/index.html","6168a3ec7d0c229a76a0c0bb1b9e079b"],["/tags/抓包/index.html","0197535ed06670b042d9642e67d19b1f"],["/tags/折腾/index.html","1bf14d06576fc884a0b84607038523d0"],["/tags/数据结构/index.html","d84d0767a946c0769324243b30f34746"],["/tags/算法/index.html","84152daf63ba55c8b48c4576f8c0ff45"],["/tags/终端/index.html","a1b6763744d1a9696d810179cad434aa"],["/tags/美化/index.html","24f1446ec73e4c28a861573ef8eea948"],["/tags/计算机组成原理/index.html","9cf5e59353bfa6caee28ea813906b28f"],["/tags/逆向/index.html","30125a0048828d306ca265cacabfc046"],["/tags/通天塔/index.html","3f19e00c1ddf94231571fa8788371b22"],["/uploads/a1.jpg","99f504e5be12759c336fc90a084ba898"],["/uploads/a2.png","71acbbe7b6ece8b68b9ded8a777aa026"],["/uploads/a3.png","20897e592eb079e47df3cb35ada71002"],["/uploads/avatar.jpg","348767975a01b05d1a61cfcf8156c67d"],["/uploads/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/uploads/cmg.jpg","a9de4661686a974d3f3bcf77d06a543e"],["/uploads/fork.png","f7a57ef1f7dfa3e1a56bc3713be148c2"],["/uploads/jztm.jpg","9f92fe1db54705ce55c74bd708234fd5"],["/uploads/learn_summary.jpg","d20202c2ff3cad7e9ddf2d60b10ad5a4"],["/uploads/paw2.png","628dde6d49320b541e50a70038379fcb"],["/uploads/paw3.png","ae4053a9677ac8d9d5acc21087c7a113"],["/uploads/paw4.png","3bb1e5cd03edcc6174c48ca58a3d4d03"],["/uploads/paw5.jpg","9a685f65a018d1b3423e3d67d2513ceb"],["/uploads/paw6.png","2d32964ff9846c3c3a0751c7d61ff8bb"],["/uploads/pla1.jpg","de60fa9adcf1dc002db753138da71b78"],["/uploads/tjhttp.jpg","c0a69eacde4148c360d95e68b814518d"],["/uploads/tttvue1.jpg","3011d6a9b768012b829ade13e4fb7d06"],["/uploads/xmbd.jpg","7a96ee5228e141735fa2b5432ae9a576"]];
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
