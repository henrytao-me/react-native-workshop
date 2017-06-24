import { ThemeUtils as Utils } from 'react-native-mdcore'

const API_ENDPOINT = 'http://jsonstub.com'
const JSONSTUB_USER_KEY = '0cf388c2-769e-4c45-8422-8f3362e3e1f1'
const JSONSTUB_PROJECT_KEY = '54dfbf10-7cc7-4e78-a885-1bcd4bf16c42'

export const buildUrl = (baseUrl, { path, query, hash }) => {
  query = Object.keys(query).map(key => `${key}=${encodeURIComponent(query[key])}`).join('&')
  return `${baseUrl || ''}${path || ''}${query ? '?' + query : ''}${hash ? '#' + hash : ''}`
}

export default class HttpService {

  constructor() {
  }

  buildHeaders(headers) {
    return Object.assign({
      'Content-Type': 'application/json',
      'JsonStub-User-Key': JSONSTUB_USER_KEY,
      'JsonStub-Project-Key': JSONSTUB_PROJECT_KEY
    }, headers || {})
  }

  get(path, query, headers) {
    return this
      .request({
        method: 'GET',
        path, query, headers
      })
      .then(res => {
        const object = Utils.idx(res, res => res.object)
        const objects = Utils.idx(res, res => res.objects)
        if (object) {
          return object
        }
        if (objects) {
          return objects
        }
        return null
      })
  }

  post(path, body, headers) {
    return this
      .request({
        method: 'POST',
        path, body, headers
      })
      .then(res => Utils.idx(res, res => res.results.object))
  }

  request({ method, path, query = {}, headers = {}, body = {} }) {
    headers = Object.assign({}, this.buildHeaders(), headers || {})
    const url = /^(http|https):\/\//.test(path) ? path : buildUrl(API_ENDPOINT, { path, query })
    const payload = {
      method: method,
      headers: this.buildHeaders(headers)
    }
    if (method !== 'GET' && method !== 'HEAD') {
      payload.body = JSON.stringify(body)
    }
    return fetch(url, payload)
      .then(res => {
        if (res.status !== 200) {
          return res
            .json()
            .catch(() => {
              return {
                code: res.status,
                message: res['_bodyText']
              }
            })
        }
        return res
      })
      .then(res => Utils.idx(res, res => res.json().catch(() => null)))
  }
}
