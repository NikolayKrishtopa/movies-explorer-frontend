class MainApi {
  constructor(config) {
    this._BASE_URL = config
  }

  _getResponseData = (res, message) => {
    if (res.ok) {
      return res.json()
    } else {
      return Promise.reject(`ошибка ${res.status} при ${message}`)
    }
  }
}

const mainApi = new MainApi(config)

export default mainApi
