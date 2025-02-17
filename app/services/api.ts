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

const api = ApiClient(process.env.NEXT_PUBLIC_API_URL as string)

const countriesApi = {
  getAll: () => api.get('/all?fields=cca3,flags,name,capital,region,population'),
  getCountry: (code: string) =>
    api.get(`/alpha/${code}?fields=ca3,flags,name,capital,region,population,languages,currencies,tld,borders`),
}

export { countriesApi }
