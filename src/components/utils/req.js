import { SERVER } from './config.js'
import { getToken } from './storage.js'
import { warnToast, shortToast, i18n } from './helper.js'

export function isValidUrl(url) {
    try {
        new URL(url)
    } catch (_) {
        return false
    }
    return true
}

export async function apiReq(path, data) {
    const token = getToken()
    if (!token) {
        return null
    }

    let formData = new FormData();
    for (let key in data) {
        formData.append(key, data[key])
    }

    const rsp = await fetch((new URL(path, SERVER)).href, { 
            method:'POST', 
            body: formData,
            headers: { 'Token': token }
        }
    )
    return await rsp.json()
}

export function handleUnsubscribeFeed(feedId) {
    apiReq('/api/feed/unsubscribe', {feed_id: feedId}).then( rsp => {
        if (rsp.code === 0) {
            shortToast(i18n("unsubscribed"))
        }
    }).catch(err => {
        warnToast(err)
    })
}
