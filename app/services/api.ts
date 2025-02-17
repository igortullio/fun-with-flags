const ApiClient = (baseUrl: string) => ({
  async get(endpoint: string) {
    try {
      const response = await fetch(`${baseUrl}${endpoint}`)

      if (!response.ok) {
        return [null, `HTTP error! Status: ${response.status}`]
      }

      const data = await response.json()
      return [data, null]
    } catch (error) {
      console.error('API request failed:', error)
      return [null, (error as Error).message]
    }
  },
})

const api = ApiClient('https://restcountries.com/v3.1')

const countriesApi = {
  getAll: () => api.get('/all?fields=cca3,flags,name,capital,region,population'),
}

export { countriesApi }
