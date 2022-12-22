export default function () {
  const [initialMovies, setInitialMovies] = useState([])
  const [page, setPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(12)
  const [isShortMeterChecked, setIsShortMeterChecked] = useState(false)
  const [searchRequestText, setSearchRequestText] = useState('')
  const [submittedSearch, setSubmittedSearch] = useState('')

  const getMovies = async () => {
    try {
      const initialMovies = await getInitialMovies()
      setInitialMovies(initialMovies)
    } catch (err) {
      console.log(err)
    }
  }
  const submitSearch = () => {
    if (!initialMovies.length > 0) {
      getMovies()
    }
    setSubmittedSearch(searchRequestText)
  }
  let moviesToShow = initialMovies
    .filter((e) => e.nameRU.includes(submittedSearch))
    .filter((n) => (isShortMeterChecked ? n.duration < 41 : n))
    .slice(0, itemsPerPage * page)
}
