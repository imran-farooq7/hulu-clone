const API_KEY = '2659b2c8dc39d83f4e93b74bcee5a73a'

export default {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchLatest: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US`,

}