import request from 'superagent'

const rootUrl = '/api/v1'

export function getWeathers(): Promise<string[]> {
  return request.get(rootUrl + '/weathers').then((res) => {
    return res.body.weathers
  })
}
