const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '04660dfee09f883b9277ea4da0b36248',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;