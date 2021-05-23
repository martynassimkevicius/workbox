/*
 * Generated type guards for "types.ts".
 * WARNING: Do not manually change this file.
 */
import { GenerateSWOptions, GetManifestOptions, InjectManifestOptions, WebpackGenerateSWOptions, WebpackInjectManifestOptions } from "./types";

export function isGenerateSWOptions(obj: any, _argumentName?: string): obj is GenerateSWOptions {
    return (
        ((obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
            (typeof obj.globDirectory === "undefined" ||
                obj.globDirectory === null ||
                typeof obj.globDirectory === "string") &&
            (typeof obj.globFollow === "undefined" ||
                obj.globFollow === false ||
                obj.globFollow === true) &&
            Array.isArray(obj.globIgnores) &&
            obj.globIgnores.every((e: any) =>
                typeof e === "string"
            ) &&
            Array.isArray(obj.globPatterns) &&
            obj.globPatterns.every((e: any) =>
                typeof e === "string"
            ) &&
            (typeof obj.globStrict === "undefined" ||
                obj.globStrict === false ||
                obj.globStrict === true) &&
            (obj.templatedURLs !== null &&
                typeof obj.templatedURLs === "object" ||
                typeof obj.templatedURLs === "function") ||
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            (typeof obj.babelPresetEnvTargets === "undefined" ||
                Array.isArray(obj.babelPresetEnvTargets) &&
                obj.babelPresetEnvTargets.every((e: any) =>
                    typeof e === "string"
                )) &&
            (typeof obj.cacheId === "undefined" ||
                obj.cacheId === null ||
                typeof obj.cacheId === "string") &&
            (typeof obj.cleanupOutdatedCaches === "undefined" ||
                obj.cleanupOutdatedCaches === false ||
                obj.cleanupOutdatedCaches === true) &&
            (typeof obj.clientsClaim === "undefined" ||
                obj.clientsClaim === false ||
                obj.clientsClaim === true) &&
            (typeof obj.directoryIndex === "undefined" ||
                obj.directoryIndex === null ||
                typeof obj.directoryIndex === "string") &&
            (typeof obj.disableDevLogs === "undefined" ||
                obj.disableDevLogs === false ||
                obj.disableDevLogs === true) &&
            (typeof obj.ignoreURLParametersMatching === "undefined" ||
                Array.isArray(obj.ignoreURLParametersMatching) &&
                obj.ignoreURLParametersMatching.every((e: any) =>
                    e instanceof RegExp
                )) &&
            (typeof obj.importScripts === "undefined" ||
                Array.isArray(obj.importScripts) &&
                obj.importScripts.every((e: any) =>
                    typeof e === "string"
                )) &&
            (typeof obj.inlineWorkboxRuntime === "undefined" ||
                obj.inlineWorkboxRuntime === false ||
                obj.inlineWorkboxRuntime === true) &&
            (typeof obj.mode === "undefined" ||
                obj.mode === null ||
                typeof obj.mode === "string") &&
            (typeof obj.navigateFallback === "undefined" ||
                obj.navigateFallback === null ||
                typeof obj.navigateFallback === "string") &&
            (typeof obj.navigateFallbackAllowlist === "undefined" ||
                Array.isArray(obj.navigateFallbackAllowlist) &&
                obj.navigateFallbackAllowlist.every((e: any) =>
                    e instanceof RegExp
                )) &&
            (typeof obj.navigateFallbackDenylist === "undefined" ||
                Array.isArray(obj.navigateFallbackDenylist) &&
                obj.navigateFallbackDenylist.every((e: any) =>
                    e instanceof RegExp
                )) &&
            (typeof obj.navigationPreload === "undefined" ||
                obj.navigationPreload === false ||
                obj.navigationPreload === true) &&
            (typeof obj.offlineGoogleAnalytics === "undefined" ||
                obj.offlineGoogleAnalytics === false ||
                obj.offlineGoogleAnalytics === true ||
                (obj.offlineGoogleAnalytics !== null &&
                    typeof obj.offlineGoogleAnalytics === "object" ||
                    typeof obj.offlineGoogleAnalytics === "function") &&
                (typeof obj.offlineGoogleAnalytics.cacheName === "undefined" ||
                    typeof obj.offlineGoogleAnalytics.cacheName === "string") &&
                (typeof obj.offlineGoogleAnalytics.parameterOverrides === "undefined" ||
                    (obj.offlineGoogleAnalytics.parameterOverrides !== null &&
                        typeof obj.offlineGoogleAnalytics.parameterOverrides === "object" ||
                        typeof obj.offlineGoogleAnalytics.parameterOverrides === "function")) &&
                (typeof obj.offlineGoogleAnalytics.hitFilter === "undefined" ||
                    (obj.offlineGoogleAnalytics.hitFilter !== null &&
                        typeof obj.offlineGoogleAnalytics.hitFilter === "object" ||
                        typeof obj.offlineGoogleAnalytics.hitFilter === "function"))) &&
            Array.isArray(obj.runtimeCaching) &&
            obj.runtimeCaching.every((e: any) =>
                (e !== null &&
                    typeof e === "object" ||
                    typeof e === "function") &&
                ((e.handler !== null &&
                    typeof e.handler === "object" ||
                    typeof e.handler === "function") ||
                    (e.handler !== null &&
                        typeof e.handler === "object" ||
                        typeof e.handler === "function") &&
                    (e.handler.handle !== null &&
                        typeof e.handler.handle === "object" ||
                        typeof e.handler.handle === "function") ||
                    e.handler === "CacheFirst" ||
                    e.handler === "CacheOnly" ||
                    e.handler === "NetworkFirst" ||
                    e.handler === "NetworkOnly" ||
                    e.handler === "StaleWhileRevalidate") &&
                (typeof e.method === "undefined" ||
                    e.method === "DELETE" ||
                    e.method === "GET" ||
                    e.method === "HEAD" ||
                    e.method === "PATCH" ||
                    e.method === "POST" ||
                    e.method === "PUT") &&
                (typeof e.options === "undefined" ||
                    (e.options !== null &&
                        typeof e.options === "object" ||
                        typeof e.options === "function") &&
                    (typeof e.options.backgroundSync === "undefined" ||
                        (e.options.backgroundSync !== null &&
                            typeof e.options.backgroundSync === "object" ||
                            typeof e.options.backgroundSync === "function") &&
                        typeof e.options.backgroundSync.name === "string" &&
                        (typeof e.options.backgroundSync.options === "undefined" ||
                            (e.options.backgroundSync.options !== null &&
                                typeof e.options.backgroundSync.options === "object" ||
                                typeof e.options.backgroundSync.options === "function") &&
                            (typeof e.options.backgroundSync.options.onSync === "undefined" ||
                                (e.options.backgroundSync.options.onSync !== null &&
                                    typeof e.options.backgroundSync.options.onSync === "object" ||
                                    typeof e.options.backgroundSync.options.onSync === "function")) &&
                            (typeof e.options.backgroundSync.options.maxRetentionTime === "undefined" ||
                                typeof e.options.backgroundSync.options.maxRetentionTime === "number"))) &&
                    (typeof e.options.broadcastUpdate === "undefined" ||
                        (e.options.broadcastUpdate !== null &&
                            typeof e.options.broadcastUpdate === "object" ||
                            typeof e.options.broadcastUpdate === "function") &&
                        (typeof e.options.broadcastUpdate.channelName === "undefined" ||
                            typeof e.options.broadcastUpdate.channelName === "string") &&
                        (e.options.broadcastUpdate.options !== null &&
                            typeof e.options.broadcastUpdate.options === "object" ||
                            typeof e.options.broadcastUpdate.options === "function") &&
                        (typeof e.options.broadcastUpdate.options.headersToCheck === "undefined" ||
                            Array.isArray(e.options.broadcastUpdate.options.headersToCheck) &&
                            e.options.broadcastUpdate.options.headersToCheck.every((e: any) =>
                                typeof e === "string"
                            )) &&
                        (typeof e.options.broadcastUpdate.options.generatePayload === "undefined" ||
                            (e.options.broadcastUpdate.options.generatePayload !== null &&
                                typeof e.options.broadcastUpdate.options.generatePayload === "object" ||
                                typeof e.options.broadcastUpdate.options.generatePayload === "function"))) &&
                    (typeof e.options.cacheableResponse === "undefined" ||
                        (e.options.cacheableResponse !== null &&
                            typeof e.options.cacheableResponse === "object" ||
                            typeof e.options.cacheableResponse === "function") &&
                        (typeof e.options.cacheableResponse.statuses === "undefined" ||
                            Array.isArray(e.options.cacheableResponse.statuses) &&
                            e.options.cacheableResponse.statuses.every((e: any) =>
                                typeof e === "number"
                            )) &&
                        (typeof e.options.cacheableResponse.headers === "undefined" ||
                            (e.options.cacheableResponse.headers !== null &&
                                typeof e.options.cacheableResponse.headers === "object" ||
                                typeof e.options.cacheableResponse.headers === "function"))) &&
                    (typeof e.options.cacheName === "undefined" ||
                        e.options.cacheName === null ||
                        typeof e.options.cacheName === "string") &&
                    (typeof e.options.expiration === "undefined" ||
                        (e.options.expiration !== null &&
                            typeof e.options.expiration === "object" ||
                            typeof e.options.expiration === "function") &&
                        (typeof e.options.expiration.maxEntries === "undefined" ||
                            typeof e.options.expiration.maxEntries === "number") &&
                        (typeof e.options.expiration.maxAgeSeconds === "undefined" ||
                            typeof e.options.expiration.maxAgeSeconds === "number") &&
                        (typeof e.options.expiration.matchOptions === "undefined" ||
                            (e.options.expiration.matchOptions !== null &&
                                typeof e.options.expiration.matchOptions === "object" ||
                                typeof e.options.expiration.matchOptions === "function") &&
                            (typeof e.options.expiration.matchOptions.ignoreMethod === "undefined" ||
                                e.options.expiration.matchOptions.ignoreMethod === false ||
                                e.options.expiration.matchOptions.ignoreMethod === true) &&
                            (typeof e.options.expiration.matchOptions.ignoreSearch === "undefined" ||
                                e.options.expiration.matchOptions.ignoreSearch === false ||
                                e.options.expiration.matchOptions.ignoreSearch === true) &&
                            (typeof e.options.expiration.matchOptions.ignoreVary === "undefined" ||
                                e.options.expiration.matchOptions.ignoreVary === false ||
                                e.options.expiration.matchOptions.ignoreVary === true)) &&
                        (typeof e.options.expiration.purgeOnQuotaError === "undefined" ||
                            e.options.expiration.purgeOnQuotaError === false ||
                            e.options.expiration.purgeOnQuotaError === true)) &&
                    (typeof e.options.networkTimeoutSeconds === "undefined" ||
                        typeof e.options.networkTimeoutSeconds === "number") &&
                    (typeof e.options.plugins === "undefined" ||
                        Array.isArray(e.options.plugins) &&
                        e.options.plugins.every((e: any) =>
                            (e !== null &&
                                typeof e === "object" ||
                                typeof e === "function") &&
                            (typeof e.cacheDidUpdate === "undefined" ||
                                (e.cacheDidUpdate !== null &&
                                    typeof e.cacheDidUpdate === "object" ||
                                    typeof e.cacheDidUpdate === "function")) &&
                            (typeof e.cachedResponseWillBeUsed === "undefined" ||
                                (e.cachedResponseWillBeUsed !== null &&
                                    typeof e.cachedResponseWillBeUsed === "object" ||
                                    typeof e.cachedResponseWillBeUsed === "function")) &&
                            (typeof e.cacheKeyWillBeUsed === "undefined" ||
                                (e.cacheKeyWillBeUsed !== null &&
                                    typeof e.cacheKeyWillBeUsed === "object" ||
                                    typeof e.cacheKeyWillBeUsed === "function")) &&
                            (typeof e.cacheWillUpdate === "undefined" ||
                                (e.cacheWillUpdate !== null &&
                                    typeof e.cacheWillUpdate === "object" ||
                                    typeof e.cacheWillUpdate === "function")) &&
                            (typeof e.fetchDidFail === "undefined" ||
                                (e.fetchDidFail !== null &&
                                    typeof e.fetchDidFail === "object" ||
                                    typeof e.fetchDidFail === "function")) &&
                            (typeof e.fetchDidSucceed === "undefined" ||
                                (e.fetchDidSucceed !== null &&
                                    typeof e.fetchDidSucceed === "object" ||
                                    typeof e.fetchDidSucceed === "function")) &&
                            (typeof e.handlerDidComplete === "undefined" ||
                                (e.handlerDidComplete !== null &&
                                    typeof e.handlerDidComplete === "object" ||
                                    typeof e.handlerDidComplete === "function")) &&
                            (typeof e.handlerDidError === "undefined" ||
                                (e.handlerDidError !== null &&
                                    typeof e.handlerDidError === "object" ||
                                    typeof e.handlerDidError === "function")) &&
                            (typeof e.handlerDidRespond === "undefined" ||
                                (e.handlerDidRespond !== null &&
                                    typeof e.handlerDidRespond === "object" ||
                                    typeof e.handlerDidRespond === "function")) &&
                            (typeof e.handlerWillRespond === "undefined" ||
                                (e.handlerWillRespond !== null &&
                                    typeof e.handlerWillRespond === "object" ||
                                    typeof e.handlerWillRespond === "function")) &&
                            (typeof e.handlerWillStart === "undefined" ||
                                (e.handlerWillStart !== null &&
                                    typeof e.handlerWillStart === "object" ||
                                    typeof e.handlerWillStart === "function")) &&
                            (typeof e.requestWillFetch === "undefined" ||
                                (e.requestWillFetch !== null &&
                                    typeof e.requestWillFetch === "object" ||
                                    typeof e.requestWillFetch === "function"))
                        )) &&
                    (typeof e.options.precacheFallback === "undefined" ||
                        (e.options.precacheFallback !== null &&
                            typeof e.options.precacheFallback === "object" ||
                            typeof e.options.precacheFallback === "function") &&
                        typeof e.options.precacheFallback.fallbackURL === "string") &&
                    (typeof e.options.fetchOptions === "undefined" ||
                        (e.options.fetchOptions !== null &&
                            typeof e.options.fetchOptions === "object" ||
                            typeof e.options.fetchOptions === "function") &&
                        (typeof e.options.fetchOptions.body === "undefined" ||
                            e.options.fetchOptions.body === null ||
                            typeof e.options.fetchOptions.body === "string" ||
                            e.options.fetchOptions.body instanceof URLSearchParams ||
                            e.options.fetchOptions.body instanceof Blob ||
                            (e.options.fetchOptions.body !== null &&
                                typeof e.options.fetchOptions.body === "object" ||
                                typeof e.options.fetchOptions.body === "function") &&
                            (e.options.fetchOptions.body.buffer instanceof ArrayBuffer ||
                                e.options.fetchOptions.body.buffer instanceof SharedArrayBuffer) &&
                            typeof e.options.fetchOptions.body.byteLength === "number" &&
                            typeof e.options.fetchOptions.body.byteOffset === "number" ||
                            e.options.fetchOptions.body instanceof ArrayBuffer ||
                            e.options.fetchOptions.body instanceof FormData ||
                            e.options.fetchOptions.body instanceof ReadableStream) &&
                        (typeof e.options.fetchOptions.cache === "undefined" ||
                            e.options.fetchOptions.cache === "default" ||
                            e.options.fetchOptions.cache === "force-cache" ||
                            e.options.fetchOptions.cache === "no-cache" ||
                            e.options.fetchOptions.cache === "no-store" ||
                            e.options.fetchOptions.cache === "only-if-cached" ||
                            e.options.fetchOptions.cache === "reload") &&
                        (typeof e.options.fetchOptions.credentials === "undefined" ||
                            e.options.fetchOptions.credentials === "include" ||
                            e.options.fetchOptions.credentials === "omit" ||
                            e.options.fetchOptions.credentials === "same-origin") &&
                        (typeof e.options.fetchOptions.headers === "undefined" ||
                            e.options.fetchOptions.headers instanceof Headers ||
                            Array.isArray(e.options.fetchOptions.headers) &&
                            e.options.fetchOptions.headers.every((e: any) =>
                                Array.isArray(e) &&
                                e.every((e: any) =>
                                    typeof e === "string"
                                )
                            ) ||
                            (e.options.fetchOptions.headers !== null &&
                                typeof e.options.fetchOptions.headers === "object" ||
                                typeof e.options.fetchOptions.headers === "function") &&
                            Object.entries(e.options.fetchOptions.headers)
                                .every(([key, value]) => (typeof value === "string" &&
                                    typeof key === "string"))) &&
                        (typeof e.options.fetchOptions.integrity === "undefined" ||
                            typeof e.options.fetchOptions.integrity === "string") &&
                        (typeof e.options.fetchOptions.keepalive === "undefined" ||
                            e.options.fetchOptions.keepalive === false ||
                            e.options.fetchOptions.keepalive === true) &&
                        (typeof e.options.fetchOptions.method === "undefined" ||
                            typeof e.options.fetchOptions.method === "string") &&
                        (typeof e.options.fetchOptions.mode === "undefined" ||
                            e.options.fetchOptions.mode === "same-origin" ||
                            e.options.fetchOptions.mode === "cors" ||
                            e.options.fetchOptions.mode === "navigate" ||
                            e.options.fetchOptions.mode === "no-cors") &&
                        (typeof e.options.fetchOptions.redirect === "undefined" ||
                            e.options.fetchOptions.redirect === "error" ||
                            e.options.fetchOptions.redirect === "follow" ||
                            e.options.fetchOptions.redirect === "manual") &&
                        (typeof e.options.fetchOptions.referrer === "undefined" ||
                            typeof e.options.fetchOptions.referrer === "string") &&
                        (typeof e.options.fetchOptions.referrerPolicy === "undefined" ||
                            e.options.fetchOptions.referrerPolicy === "" ||
                            e.options.fetchOptions.referrerPolicy === "same-origin" ||
                            e.options.fetchOptions.referrerPolicy === "no-referrer" ||
                            e.options.fetchOptions.referrerPolicy === "no-referrer-when-downgrade" ||
                            e.options.fetchOptions.referrerPolicy === "origin" ||
                            e.options.fetchOptions.referrerPolicy === "origin-when-cross-origin" ||
                            e.options.fetchOptions.referrerPolicy === "strict-origin" ||
                            e.options.fetchOptions.referrerPolicy === "strict-origin-when-cross-origin" ||
                            e.options.fetchOptions.referrerPolicy === "unsafe-url") &&
                        (typeof e.options.fetchOptions.signal === "undefined" ||
                            e.options.fetchOptions.signal === null ||
                            e.options.fetchOptions.signal instanceof AbortSignal)) &&
                    (typeof e.options.matchOptions === "undefined" ||
                        (e.options.matchOptions !== null &&
                            typeof e.options.matchOptions === "object" ||
                            typeof e.options.matchOptions === "function") &&
                        (typeof e.options.matchOptions.ignoreMethod === "undefined" ||
                            e.options.matchOptions.ignoreMethod === false ||
                            e.options.matchOptions.ignoreMethod === true) &&
                        (typeof e.options.matchOptions.ignoreSearch === "undefined" ||
                            e.options.matchOptions.ignoreSearch === false ||
                            e.options.matchOptions.ignoreSearch === true) &&
                        (typeof e.options.matchOptions.ignoreVary === "undefined" ||
                            e.options.matchOptions.ignoreVary === false ||
                            e.options.matchOptions.ignoreVary === true))) &&
                (typeof e.urlPattern === "string" ||
                    e.urlPattern instanceof RegExp ||
                    (e.urlPattern !== null &&
                        typeof e.urlPattern === "object" ||
                        typeof e.urlPattern === "function"))
            ) &&
            (typeof obj.skipWaiting === "undefined" ||
                obj.skipWaiting === false ||
                obj.skipWaiting === true) &&
            (typeof obj.sourcemap === "undefined" ||
                obj.sourcemap === false ||
                obj.sourcemap === true) ||
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            (typeof obj.additionalManifestEntries === "undefined" ||
                Array.isArray(obj.additionalManifestEntries) &&
                obj.additionalManifestEntries.every((e: any) =>
                (typeof e === "string" ||
                    (e !== null &&
                        typeof e === "object" ||
                        typeof e === "function") &&
                    (typeof e.integrity === "undefined" ||
                        typeof e.integrity === "string") &&
                    (e.revision === null ||
                        typeof e.revision === "string") &&
                    typeof e.url === "string")
                )) &&
            (typeof obj.dontCacheBustURLsMatching === "undefined" ||
                obj.dontCacheBustURLsMatching instanceof RegExp) &&
            (typeof obj.manifestTransforms === "undefined" ||
                Array.isArray(obj.manifestTransforms) &&
                obj.manifestTransforms.every((e: any) =>
                (e !== null &&
                    typeof e === "object" ||
                    typeof e === "function")
                )) &&
            (typeof obj.maximumFileSizeToCacheInBytes === "undefined" ||
                typeof obj.maximumFileSizeToCacheInBytes === "number") &&
            (obj.modifyURLPrefix !== null &&
                typeof obj.modifyURLPrefix === "object" ||
                typeof obj.modifyURLPrefix === "function") ||
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            typeof obj.swDest === "string")
    )
}

export function isGetManifestOptions(obj: any, _argumentName?: string): obj is GetManifestOptions {
    return (
        ((obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
            (typeof obj.globDirectory === "undefined" ||
                obj.globDirectory === null ||
                typeof obj.globDirectory === "string") &&
            (typeof obj.globFollow === "undefined" ||
                obj.globFollow === false ||
                obj.globFollow === true) &&
            Array.isArray(obj.globIgnores) &&
            obj.globIgnores.every((e: any) =>
                typeof e === "string"
            ) &&
            Array.isArray(obj.globPatterns) &&
            obj.globPatterns.every((e: any) =>
                typeof e === "string"
            ) &&
            (typeof obj.globStrict === "undefined" ||
                obj.globStrict === false ||
                obj.globStrict === true) &&
            (obj.templatedURLs !== null &&
                typeof obj.templatedURLs === "object" ||
                typeof obj.templatedURLs === "function") ||
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            (typeof obj.additionalManifestEntries === "undefined" ||
                Array.isArray(obj.additionalManifestEntries) &&
                obj.additionalManifestEntries.every((e: any) =>
                (typeof e === "string" ||
                    (e !== null &&
                        typeof e === "object" ||
                        typeof e === "function") &&
                    (typeof e.integrity === "undefined" ||
                        typeof e.integrity === "string") &&
                    (e.revision === null ||
                        typeof e.revision === "string") &&
                    typeof e.url === "string")
                )) &&
            (typeof obj.dontCacheBustURLsMatching === "undefined" ||
                obj.dontCacheBustURLsMatching instanceof RegExp) &&
            (typeof obj.manifestTransforms === "undefined" ||
                Array.isArray(obj.manifestTransforms) &&
                obj.manifestTransforms.every((e: any) =>
                (e !== null &&
                    typeof e === "object" ||
                    typeof e === "function")
                )) &&
            (typeof obj.maximumFileSizeToCacheInBytes === "undefined" ||
                typeof obj.maximumFileSizeToCacheInBytes === "number") &&
            (obj.modifyURLPrefix !== null &&
                typeof obj.modifyURLPrefix === "object" ||
                typeof obj.modifyURLPrefix === "function"))
    )
}

export function isInjectManifestOptions(obj: any, _argumentName?: string): obj is InjectManifestOptions {
    return (
        ((obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
            typeof obj.injectionPoint === "string" &&
            typeof obj.swSrc === "string" ||
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            (typeof obj.globFollow === "undefined" ||
                obj.globFollow === false ||
                obj.globFollow === true) &&
            Array.isArray(obj.globIgnores) &&
            obj.globIgnores.every((e: any) =>
                typeof e === "string"
            ) &&
            Array.isArray(obj.globPatterns) &&
            obj.globPatterns.every((e: any) =>
                typeof e === "string"
            ) &&
            (typeof obj.globStrict === "undefined" ||
                obj.globStrict === false ||
                obj.globStrict === true) &&
            (obj.templatedURLs !== null &&
                typeof obj.templatedURLs === "object" ||
                typeof obj.templatedURLs === "function") ||
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            (typeof obj.additionalManifestEntries === "undefined" ||
                Array.isArray(obj.additionalManifestEntries) &&
                obj.additionalManifestEntries.every((e: any) =>
                (typeof e === "string" ||
                    (e !== null &&
                        typeof e === "object" ||
                        typeof e === "function") &&
                    (typeof e.integrity === "undefined" ||
                        typeof e.integrity === "string") &&
                    (e.revision === null ||
                        typeof e.revision === "string") &&
                    typeof e.url === "string")
                )) &&
            (typeof obj.dontCacheBustURLsMatching === "undefined" ||
                obj.dontCacheBustURLsMatching instanceof RegExp) &&
            (typeof obj.manifestTransforms === "undefined" ||
                Array.isArray(obj.manifestTransforms) &&
                obj.manifestTransforms.every((e: any) =>
                (e !== null &&
                    typeof e === "object" ||
                    typeof e === "function")
                )) &&
            (typeof obj.maximumFileSizeToCacheInBytes === "undefined" ||
                typeof obj.maximumFileSizeToCacheInBytes === "number") &&
            (obj.modifyURLPrefix !== null &&
                typeof obj.modifyURLPrefix === "object" ||
                typeof obj.modifyURLPrefix === "function") ||
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            typeof obj.swDest === "string" ||
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            typeof obj.globDirectory === "string")
    )
}

export function isWebpackGenerateSWOptions(obj: any, _argumentName?: string): obj is WebpackGenerateSWOptions {
    return (
        ((obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
            (typeof obj.chunks === "undefined" ||
                Array.isArray(obj.chunks) &&
                obj.chunks.every((e: any) =>
                    typeof e === "string"
                )) &&
            (typeof obj.exclude === "undefined" ||
                Array.isArray(obj.exclude) &&
                obj.exclude.every((e: any) =>
                (typeof e === "string" ||
                    e instanceof RegExp ||
                    (e !== null &&
                        typeof e === "object" ||
                        typeof e === "function"))
                )) &&
            (typeof obj.excludeChunks === "undefined" ||
                Array.isArray(obj.excludeChunks) &&
                obj.excludeChunks.every((e: any) =>
                    typeof e === "string"
                )) &&
            (typeof obj.include === "undefined" ||
                Array.isArray(obj.include) &&
                obj.include.every((e: any) =>
                (typeof e === "string" ||
                    e instanceof RegExp ||
                    (e !== null &&
                        typeof e === "object" ||
                        typeof e === "function"))
                )) &&
            (typeof obj.mode === "undefined" ||
                obj.mode === null ||
                typeof obj.mode === "string") ||
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            (typeof obj.babelPresetEnvTargets === "undefined" ||
                Array.isArray(obj.babelPresetEnvTargets) &&
                obj.babelPresetEnvTargets.every((e: any) =>
                    typeof e === "string"
                )) &&
            (typeof obj.cacheId === "undefined" ||
                obj.cacheId === null ||
                typeof obj.cacheId === "string") &&
            (typeof obj.cleanupOutdatedCaches === "undefined" ||
                obj.cleanupOutdatedCaches === false ||
                obj.cleanupOutdatedCaches === true) &&
            (typeof obj.clientsClaim === "undefined" ||
                obj.clientsClaim === false ||
                obj.clientsClaim === true) &&
            (typeof obj.directoryIndex === "undefined" ||
                obj.directoryIndex === null ||
                typeof obj.directoryIndex === "string") &&
            (typeof obj.disableDevLogs === "undefined" ||
                obj.disableDevLogs === false ||
                obj.disableDevLogs === true) &&
            (typeof obj.ignoreURLParametersMatching === "undefined" ||
                Array.isArray(obj.ignoreURLParametersMatching) &&
                obj.ignoreURLParametersMatching.every((e: any) =>
                    e instanceof RegExp
                )) &&
            (typeof obj.importScripts === "undefined" ||
                Array.isArray(obj.importScripts) &&
                obj.importScripts.every((e: any) =>
                    typeof e === "string"
                )) &&
            (typeof obj.inlineWorkboxRuntime === "undefined" ||
                obj.inlineWorkboxRuntime === false ||
                obj.inlineWorkboxRuntime === true) &&
            (typeof obj.mode === "undefined" ||
                obj.mode === null ||
                typeof obj.mode === "string") &&
            (typeof obj.navigateFallback === "undefined" ||
                obj.navigateFallback === null ||
                typeof obj.navigateFallback === "string") &&
            (typeof obj.navigateFallbackAllowlist === "undefined" ||
                Array.isArray(obj.navigateFallbackAllowlist) &&
                obj.navigateFallbackAllowlist.every((e: any) =>
                    e instanceof RegExp
                )) &&
            (typeof obj.navigateFallbackDenylist === "undefined" ||
                Array.isArray(obj.navigateFallbackDenylist) &&
                obj.navigateFallbackDenylist.every((e: any) =>
                    e instanceof RegExp
                )) &&
            (typeof obj.navigationPreload === "undefined" ||
                obj.navigationPreload === false ||
                obj.navigationPreload === true) &&
            (typeof obj.offlineGoogleAnalytics === "undefined" ||
                obj.offlineGoogleAnalytics === false ||
                obj.offlineGoogleAnalytics === true ||
                (obj.offlineGoogleAnalytics !== null &&
                    typeof obj.offlineGoogleAnalytics === "object" ||
                    typeof obj.offlineGoogleAnalytics === "function") &&
                (typeof obj.offlineGoogleAnalytics.cacheName === "undefined" ||
                    typeof obj.offlineGoogleAnalytics.cacheName === "string") &&
                (typeof obj.offlineGoogleAnalytics.parameterOverrides === "undefined" ||
                    (obj.offlineGoogleAnalytics.parameterOverrides !== null &&
                        typeof obj.offlineGoogleAnalytics.parameterOverrides === "object" ||
                        typeof obj.offlineGoogleAnalytics.parameterOverrides === "function")) &&
                (typeof obj.offlineGoogleAnalytics.hitFilter === "undefined" ||
                    (obj.offlineGoogleAnalytics.hitFilter !== null &&
                        typeof obj.offlineGoogleAnalytics.hitFilter === "object" ||
                        typeof obj.offlineGoogleAnalytics.hitFilter === "function"))) &&
            Array.isArray(obj.runtimeCaching) &&
            obj.runtimeCaching.every((e: any) =>
                (e !== null &&
                    typeof e === "object" ||
                    typeof e === "function") &&
                ((e.handler !== null &&
                    typeof e.handler === "object" ||
                    typeof e.handler === "function") ||
                    (e.handler !== null &&
                        typeof e.handler === "object" ||
                        typeof e.handler === "function") &&
                    (e.handler.handle !== null &&
                        typeof e.handler.handle === "object" ||
                        typeof e.handler.handle === "function") ||
                    e.handler === "CacheFirst" ||
                    e.handler === "CacheOnly" ||
                    e.handler === "NetworkFirst" ||
                    e.handler === "NetworkOnly" ||
                    e.handler === "StaleWhileRevalidate") &&
                (typeof e.method === "undefined" ||
                    e.method === "DELETE" ||
                    e.method === "GET" ||
                    e.method === "HEAD" ||
                    e.method === "PATCH" ||
                    e.method === "POST" ||
                    e.method === "PUT") &&
                (typeof e.options === "undefined" ||
                    (e.options !== null &&
                        typeof e.options === "object" ||
                        typeof e.options === "function") &&
                    (typeof e.options.backgroundSync === "undefined" ||
                        (e.options.backgroundSync !== null &&
                            typeof e.options.backgroundSync === "object" ||
                            typeof e.options.backgroundSync === "function") &&
                        typeof e.options.backgroundSync.name === "string" &&
                        (typeof e.options.backgroundSync.options === "undefined" ||
                            (e.options.backgroundSync.options !== null &&
                                typeof e.options.backgroundSync.options === "object" ||
                                typeof e.options.backgroundSync.options === "function") &&
                            (typeof e.options.backgroundSync.options.onSync === "undefined" ||
                                (e.options.backgroundSync.options.onSync !== null &&
                                    typeof e.options.backgroundSync.options.onSync === "object" ||
                                    typeof e.options.backgroundSync.options.onSync === "function")) &&
                            (typeof e.options.backgroundSync.options.maxRetentionTime === "undefined" ||
                                typeof e.options.backgroundSync.options.maxRetentionTime === "number"))) &&
                    (typeof e.options.broadcastUpdate === "undefined" ||
                        (e.options.broadcastUpdate !== null &&
                            typeof e.options.broadcastUpdate === "object" ||
                            typeof e.options.broadcastUpdate === "function") &&
                        (typeof e.options.broadcastUpdate.channelName === "undefined" ||
                            typeof e.options.broadcastUpdate.channelName === "string") &&
                        (e.options.broadcastUpdate.options !== null &&
                            typeof e.options.broadcastUpdate.options === "object" ||
                            typeof e.options.broadcastUpdate.options === "function") &&
                        (typeof e.options.broadcastUpdate.options.headersToCheck === "undefined" ||
                            Array.isArray(e.options.broadcastUpdate.options.headersToCheck) &&
                            e.options.broadcastUpdate.options.headersToCheck.every((e: any) =>
                                typeof e === "string"
                            )) &&
                        (typeof e.options.broadcastUpdate.options.generatePayload === "undefined" ||
                            (e.options.broadcastUpdate.options.generatePayload !== null &&
                                typeof e.options.broadcastUpdate.options.generatePayload === "object" ||
                                typeof e.options.broadcastUpdate.options.generatePayload === "function"))) &&
                    (typeof e.options.cacheableResponse === "undefined" ||
                        (e.options.cacheableResponse !== null &&
                            typeof e.options.cacheableResponse === "object" ||
                            typeof e.options.cacheableResponse === "function") &&
                        (typeof e.options.cacheableResponse.statuses === "undefined" ||
                            Array.isArray(e.options.cacheableResponse.statuses) &&
                            e.options.cacheableResponse.statuses.every((e: any) =>
                                typeof e === "number"
                            )) &&
                        (typeof e.options.cacheableResponse.headers === "undefined" ||
                            (e.options.cacheableResponse.headers !== null &&
                                typeof e.options.cacheableResponse.headers === "object" ||
                                typeof e.options.cacheableResponse.headers === "function"))) &&
                    (typeof e.options.cacheName === "undefined" ||
                        e.options.cacheName === null ||
                        typeof e.options.cacheName === "string") &&
                    (typeof e.options.expiration === "undefined" ||
                        (e.options.expiration !== null &&
                            typeof e.options.expiration === "object" ||
                            typeof e.options.expiration === "function") &&
                        (typeof e.options.expiration.maxEntries === "undefined" ||
                            typeof e.options.expiration.maxEntries === "number") &&
                        (typeof e.options.expiration.maxAgeSeconds === "undefined" ||
                            typeof e.options.expiration.maxAgeSeconds === "number") &&
                        (typeof e.options.expiration.matchOptions === "undefined" ||
                            (e.options.expiration.matchOptions !== null &&
                                typeof e.options.expiration.matchOptions === "object" ||
                                typeof e.options.expiration.matchOptions === "function") &&
                            (typeof e.options.expiration.matchOptions.ignoreMethod === "undefined" ||
                                e.options.expiration.matchOptions.ignoreMethod === false ||
                                e.options.expiration.matchOptions.ignoreMethod === true) &&
                            (typeof e.options.expiration.matchOptions.ignoreSearch === "undefined" ||
                                e.options.expiration.matchOptions.ignoreSearch === false ||
                                e.options.expiration.matchOptions.ignoreSearch === true) &&
                            (typeof e.options.expiration.matchOptions.ignoreVary === "undefined" ||
                                e.options.expiration.matchOptions.ignoreVary === false ||
                                e.options.expiration.matchOptions.ignoreVary === true)) &&
                        (typeof e.options.expiration.purgeOnQuotaError === "undefined" ||
                            e.options.expiration.purgeOnQuotaError === false ||
                            e.options.expiration.purgeOnQuotaError === true)) &&
                    (typeof e.options.networkTimeoutSeconds === "undefined" ||
                        typeof e.options.networkTimeoutSeconds === "number") &&
                    (typeof e.options.plugins === "undefined" ||
                        Array.isArray(e.options.plugins) &&
                        e.options.plugins.every((e: any) =>
                            (e !== null &&
                                typeof e === "object" ||
                                typeof e === "function") &&
                            (typeof e.cacheDidUpdate === "undefined" ||
                                (e.cacheDidUpdate !== null &&
                                    typeof e.cacheDidUpdate === "object" ||
                                    typeof e.cacheDidUpdate === "function")) &&
                            (typeof e.cachedResponseWillBeUsed === "undefined" ||
                                (e.cachedResponseWillBeUsed !== null &&
                                    typeof e.cachedResponseWillBeUsed === "object" ||
                                    typeof e.cachedResponseWillBeUsed === "function")) &&
                            (typeof e.cacheKeyWillBeUsed === "undefined" ||
                                (e.cacheKeyWillBeUsed !== null &&
                                    typeof e.cacheKeyWillBeUsed === "object" ||
                                    typeof e.cacheKeyWillBeUsed === "function")) &&
                            (typeof e.cacheWillUpdate === "undefined" ||
                                (e.cacheWillUpdate !== null &&
                                    typeof e.cacheWillUpdate === "object" ||
                                    typeof e.cacheWillUpdate === "function")) &&
                            (typeof e.fetchDidFail === "undefined" ||
                                (e.fetchDidFail !== null &&
                                    typeof e.fetchDidFail === "object" ||
                                    typeof e.fetchDidFail === "function")) &&
                            (typeof e.fetchDidSucceed === "undefined" ||
                                (e.fetchDidSucceed !== null &&
                                    typeof e.fetchDidSucceed === "object" ||
                                    typeof e.fetchDidSucceed === "function")) &&
                            (typeof e.handlerDidComplete === "undefined" ||
                                (e.handlerDidComplete !== null &&
                                    typeof e.handlerDidComplete === "object" ||
                                    typeof e.handlerDidComplete === "function")) &&
                            (typeof e.handlerDidError === "undefined" ||
                                (e.handlerDidError !== null &&
                                    typeof e.handlerDidError === "object" ||
                                    typeof e.handlerDidError === "function")) &&
                            (typeof e.handlerDidRespond === "undefined" ||
                                (e.handlerDidRespond !== null &&
                                    typeof e.handlerDidRespond === "object" ||
                                    typeof e.handlerDidRespond === "function")) &&
                            (typeof e.handlerWillRespond === "undefined" ||
                                (e.handlerWillRespond !== null &&
                                    typeof e.handlerWillRespond === "object" ||
                                    typeof e.handlerWillRespond === "function")) &&
                            (typeof e.handlerWillStart === "undefined" ||
                                (e.handlerWillStart !== null &&
                                    typeof e.handlerWillStart === "object" ||
                                    typeof e.handlerWillStart === "function")) &&
                            (typeof e.requestWillFetch === "undefined" ||
                                (e.requestWillFetch !== null &&
                                    typeof e.requestWillFetch === "object" ||
                                    typeof e.requestWillFetch === "function"))
                        )) &&
                    (typeof e.options.precacheFallback === "undefined" ||
                        (e.options.precacheFallback !== null &&
                            typeof e.options.precacheFallback === "object" ||
                            typeof e.options.precacheFallback === "function") &&
                        typeof e.options.precacheFallback.fallbackURL === "string") &&
                    (typeof e.options.fetchOptions === "undefined" ||
                        (e.options.fetchOptions !== null &&
                            typeof e.options.fetchOptions === "object" ||
                            typeof e.options.fetchOptions === "function") &&
                        (typeof e.options.fetchOptions.body === "undefined" ||
                            e.options.fetchOptions.body === null ||
                            typeof e.options.fetchOptions.body === "string" ||
                            e.options.fetchOptions.body instanceof URLSearchParams ||
                            e.options.fetchOptions.body instanceof Blob ||
                            (e.options.fetchOptions.body !== null &&
                                typeof e.options.fetchOptions.body === "object" ||
                                typeof e.options.fetchOptions.body === "function") &&
                            (e.options.fetchOptions.body.buffer instanceof ArrayBuffer ||
                                e.options.fetchOptions.body.buffer instanceof SharedArrayBuffer) &&
                            typeof e.options.fetchOptions.body.byteLength === "number" &&
                            typeof e.options.fetchOptions.body.byteOffset === "number" ||
                            e.options.fetchOptions.body instanceof ArrayBuffer ||
                            e.options.fetchOptions.body instanceof FormData ||
                            e.options.fetchOptions.body instanceof ReadableStream) &&
                        (typeof e.options.fetchOptions.cache === "undefined" ||
                            e.options.fetchOptions.cache === "default" ||
                            e.options.fetchOptions.cache === "force-cache" ||
                            e.options.fetchOptions.cache === "no-cache" ||
                            e.options.fetchOptions.cache === "no-store" ||
                            e.options.fetchOptions.cache === "only-if-cached" ||
                            e.options.fetchOptions.cache === "reload") &&
                        (typeof e.options.fetchOptions.credentials === "undefined" ||
                            e.options.fetchOptions.credentials === "include" ||
                            e.options.fetchOptions.credentials === "omit" ||
                            e.options.fetchOptions.credentials === "same-origin") &&
                        (typeof e.options.fetchOptions.headers === "undefined" ||
                            e.options.fetchOptions.headers instanceof Headers ||
                            Array.isArray(e.options.fetchOptions.headers) &&
                            e.options.fetchOptions.headers.every((e: any) =>
                                Array.isArray(e) &&
                                e.every((e: any) =>
                                    typeof e === "string"
                                )
                            ) ||
                            (e.options.fetchOptions.headers !== null &&
                                typeof e.options.fetchOptions.headers === "object" ||
                                typeof e.options.fetchOptions.headers === "function") &&
                            Object.entries(e.options.fetchOptions.headers)
                                .every(([key, value]) => (typeof value === "string" &&
                                    typeof key === "string"))) &&
                        (typeof e.options.fetchOptions.integrity === "undefined" ||
                            typeof e.options.fetchOptions.integrity === "string") &&
                        (typeof e.options.fetchOptions.keepalive === "undefined" ||
                            e.options.fetchOptions.keepalive === false ||
                            e.options.fetchOptions.keepalive === true) &&
                        (typeof e.options.fetchOptions.method === "undefined" ||
                            typeof e.options.fetchOptions.method === "string") &&
                        (typeof e.options.fetchOptions.mode === "undefined" ||
                            e.options.fetchOptions.mode === "same-origin" ||
                            e.options.fetchOptions.mode === "cors" ||
                            e.options.fetchOptions.mode === "navigate" ||
                            e.options.fetchOptions.mode === "no-cors") &&
                        (typeof e.options.fetchOptions.redirect === "undefined" ||
                            e.options.fetchOptions.redirect === "error" ||
                            e.options.fetchOptions.redirect === "follow" ||
                            e.options.fetchOptions.redirect === "manual") &&
                        (typeof e.options.fetchOptions.referrer === "undefined" ||
                            typeof e.options.fetchOptions.referrer === "string") &&
                        (typeof e.options.fetchOptions.referrerPolicy === "undefined" ||
                            e.options.fetchOptions.referrerPolicy === "" ||
                            e.options.fetchOptions.referrerPolicy === "same-origin" ||
                            e.options.fetchOptions.referrerPolicy === "no-referrer" ||
                            e.options.fetchOptions.referrerPolicy === "no-referrer-when-downgrade" ||
                            e.options.fetchOptions.referrerPolicy === "origin" ||
                            e.options.fetchOptions.referrerPolicy === "origin-when-cross-origin" ||
                            e.options.fetchOptions.referrerPolicy === "strict-origin" ||
                            e.options.fetchOptions.referrerPolicy === "strict-origin-when-cross-origin" ||
                            e.options.fetchOptions.referrerPolicy === "unsafe-url") &&
                        (typeof e.options.fetchOptions.signal === "undefined" ||
                            e.options.fetchOptions.signal === null ||
                            e.options.fetchOptions.signal instanceof AbortSignal)) &&
                    (typeof e.options.matchOptions === "undefined" ||
                        (e.options.matchOptions !== null &&
                            typeof e.options.matchOptions === "object" ||
                            typeof e.options.matchOptions === "function") &&
                        (typeof e.options.matchOptions.ignoreMethod === "undefined" ||
                            e.options.matchOptions.ignoreMethod === false ||
                            e.options.matchOptions.ignoreMethod === true) &&
                        (typeof e.options.matchOptions.ignoreSearch === "undefined" ||
                            e.options.matchOptions.ignoreSearch === false ||
                            e.options.matchOptions.ignoreSearch === true) &&
                        (typeof e.options.matchOptions.ignoreVary === "undefined" ||
                            e.options.matchOptions.ignoreVary === false ||
                            e.options.matchOptions.ignoreVary === true))) &&
                (typeof e.urlPattern === "string" ||
                    e.urlPattern instanceof RegExp ||
                    (e.urlPattern !== null &&
                        typeof e.urlPattern === "object" ||
                        typeof e.urlPattern === "function"))
            ) &&
            (typeof obj.skipWaiting === "undefined" ||
                obj.skipWaiting === false ||
                obj.skipWaiting === true) &&
            (typeof obj.sourcemap === "undefined" ||
                obj.sourcemap === false ||
                obj.sourcemap === true) ||
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            (typeof obj.additionalManifestEntries === "undefined" ||
                Array.isArray(obj.additionalManifestEntries) &&
                obj.additionalManifestEntries.every((e: any) =>
                (typeof e === "string" ||
                    (e !== null &&
                        typeof e === "object" ||
                        typeof e === "function") &&
                    (typeof e.integrity === "undefined" ||
                        typeof e.integrity === "string") &&
                    (e.revision === null ||
                        typeof e.revision === "string") &&
                    typeof e.url === "string")
                )) &&
            (typeof obj.dontCacheBustURLsMatching === "undefined" ||
                obj.dontCacheBustURLsMatching instanceof RegExp) &&
            (typeof obj.manifestTransforms === "undefined" ||
                Array.isArray(obj.manifestTransforms) &&
                obj.manifestTransforms.every((e: any) =>
                (e !== null &&
                    typeof e === "object" ||
                    typeof e === "function")
                )) &&
            (typeof obj.maximumFileSizeToCacheInBytes === "undefined" ||
                typeof obj.maximumFileSizeToCacheInBytes === "number") &&
            (obj.modifyURLPrefix !== null &&
                typeof obj.modifyURLPrefix === "object" ||
                typeof obj.modifyURLPrefix === "function") ||
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            typeof obj.swDest === "string" ||
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            Array.isArray(obj.importScriptsViaChunks) &&
            obj.importScriptsViaChunks.every((e: any) =>
                typeof e === "string"
            ))
    )
}

export function isWebpackInjectManifestOptions(obj: any, _argumentName?: string): obj is WebpackInjectManifestOptions {
    return (
        ((obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
            (typeof obj.chunks === "undefined" ||
                Array.isArray(obj.chunks) &&
                obj.chunks.every((e: any) =>
                    typeof e === "string"
                )) &&
            (typeof obj.exclude === "undefined" ||
                Array.isArray(obj.exclude) &&
                obj.exclude.every((e: any) =>
                (typeof e === "string" ||
                    e instanceof RegExp ||
                    (e !== null &&
                        typeof e === "object" ||
                        typeof e === "function"))
                )) &&
            (typeof obj.excludeChunks === "undefined" ||
                Array.isArray(obj.excludeChunks) &&
                obj.excludeChunks.every((e: any) =>
                    typeof e === "string"
                )) &&
            (typeof obj.include === "undefined" ||
                Array.isArray(obj.include) &&
                obj.include.every((e: any) =>
                (typeof e === "string" ||
                    e instanceof RegExp ||
                    (e !== null &&
                        typeof e === "object" ||
                        typeof e === "function"))
                )) &&
            (typeof obj.mode === "undefined" ||
                obj.mode === null ||
                typeof obj.mode === "string") ||
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            typeof obj.injectionPoint === "string" &&
            typeof obj.swSrc === "string" ||
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            (typeof obj.additionalManifestEntries === "undefined" ||
                Array.isArray(obj.additionalManifestEntries) &&
                obj.additionalManifestEntries.every((e: any) =>
                (typeof e === "string" ||
                    (e !== null &&
                        typeof e === "object" ||
                        typeof e === "function") &&
                    (typeof e.integrity === "undefined" ||
                        typeof e.integrity === "string") &&
                    (e.revision === null ||
                        typeof e.revision === "string") &&
                    typeof e.url === "string")
                )) &&
            (typeof obj.dontCacheBustURLsMatching === "undefined" ||
                obj.dontCacheBustURLsMatching instanceof RegExp) &&
            (typeof obj.manifestTransforms === "undefined" ||
                Array.isArray(obj.manifestTransforms) &&
                obj.manifestTransforms.every((e: any) =>
                (e !== null &&
                    typeof e === "object" ||
                    typeof e === "function")
                )) &&
            (typeof obj.maximumFileSizeToCacheInBytes === "undefined" ||
                typeof obj.maximumFileSizeToCacheInBytes === "number") &&
            (obj.modifyURLPrefix !== null &&
                typeof obj.modifyURLPrefix === "object" ||
                typeof obj.modifyURLPrefix === "function") ||
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            typeof obj.swDest === "string" ||
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            (typeof obj.compileSrc === "undefined" ||
                obj.compileSrc === false ||
                obj.compileSrc === true) &&
            (typeof obj.webpackCompilationPlugins === "undefined" ||
                Array.isArray(obj.webpackCompilationPlugins)))
    )
}