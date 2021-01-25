export const stringUtil = {
  getURLParams: (path: string): any => {
    if (!path) return {}

    const param = path.match(/\?([^?]*)$/)

    if (!param || param[1] === '') return {}

    const tmpParams = param[1].split('&')
    const params = {}

    for (let i = 0, len = tmpParams.length; i < len; i++) {
      const keyValue = tmpParams[i].split('=')
      params[keyValue[0]] = keyValue[1]
    }

    return params
  },
}
