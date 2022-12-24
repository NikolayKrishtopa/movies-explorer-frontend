import { MAIN_API_CONFIG } from './config'

class MainApi {
  constructor(config) {
    this._baseUrl = config.API_DATA.BASE_URL
    this._headers = config.API_DATA.HEADERS
  }

  _getResponseData = (res, message) => {
    return res.ok
      ? res.json()
      : Promise.reject(`ошибка ${res.status} при ${message}`)
  }

  handleRegister = async (newUserData) => {
    const res = await fetch(`${this._baseUrl}/signup`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify(newUserData),
    })
    return this._getResponseData(res, 'попытке регистрации пользователя')
  }

  handleLogin = async (userData) => {
    const res = await fetch(`${this._baseUrl}/signin`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify(userData),
      credentials: 'include',
    })
    return this._getResponseData(res, 'попытке входа в систему')
  }
  handleLogout = async () => {
    const res = await fetch(`${this._baseUrl}/signout`, {
      headers: this._headers,
      method: 'DELETE',
      credentials: 'include',
    })
    return this._getResponseData(res, 'попытке выхода из аккаунта')
  }

  getUserMovies = async () => {
    const res = await fetch(`${this._baseUrl}/movies`, {
      headers: this._headers,
      method: 'GET',
      credentials: 'include',
    })
    return this._getResponseData(res, 'попытке получения фильмов пользователя')
  }

  addMovie = async (movieData) => {
    const res = await fetch(`${this._baseUrl}/movies`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify(movieData),
      credentials: 'include',
    })
    return this._getResponseData(res, 'попытке добавления фильма в коллекцию')
  }

  deleteMovie = async (movieId) => {
    const res = await fetch(`${this._baseUrl}/movies/${movieId}`, {
      headers: this._headers,
      method: 'DELETE',
      body: JSON.stringify(movieId),
      credentials: 'include',
    })
    return this._getResponseData(res, 'попытке удаления фильма из коллекции')
  }

  getMyProfile = async () => {
    const res = await fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      method: 'GET',
      credentials: 'include',
    })
    return this._getResponseData(res, 'получении данных пользователя')
  }

  updateMyProfile = async (newUserData) => {
    const res = await fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      method: 'PATCH',
      credentials: 'include',
      body: JSON.stringify(newUserData),
    })
    return this._getResponseData(res, 'обновлении данных пользователя')
  }
}
const mainApi = new MainApi(MAIN_API_CONFIG)

export default mainApi
