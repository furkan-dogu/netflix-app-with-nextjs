const API_KEY = process.env.TMDB_KEY

export const getMovies = async (type) => {
    const url = `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}`

    const res = await fetch(url)
    if(!res.ok){
        throw new Error("Failed to fetch data")
    }
    const { results } = await res.json()
    return results
}

export const getVideoKey = async (movieId) => {
    const videoUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`

    const res = await fetch(videoUrl)
    if(!res.ok){
        throw new Error("Failed to fetch data")
    }
    const data = await res.json()
    return data
}