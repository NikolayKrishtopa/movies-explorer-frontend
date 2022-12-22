import { BASE_URL_ALL_MOVIES } from './config'

export default async function getInitialMovies() {
  const res = await fetch(BASE_URL_ALL_MOVIES)
  return res.ok
    ? res.json()
    : Promise.reject(`Ошибка ${res.status} при попытке получить список фильмов`)
}
