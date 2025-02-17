'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { countriesApi } from '../../services'
import { Error, Loading } from '@/components'

type Params = {
  id: string
}

type DetailedCountry = {
  cca3: string
  flags: {
    svg: string
  }
  name: {
    common: string
  }
  capital: string[]
  region: string
  population: number
  languages: Record<string, string>
  currencies: Record<string, { name: string; symbol: string }>
  tld: string[]
  borders: string[]
}

export default function Country() {
  const params = useParams<Params>()
  const [id, setId] = useState<string | null>(null)
  const [country, setCountry] = useState<DetailedCountry>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (params?.id && params.id !== id) {
      setId(params.id)
    }
  }, [params, id])

  useEffect(() => {
    const fetchCountries = async (id: string) => {
      const [response, error] = await countriesApi.getCountry(id)
      setLoading(false)

      if (error) {
        setError(error)
        return
      }

      setCountry(response)
    }

    if (id) {
      fetchCountries(id)
    }
  }, [id])

  if (loading) return <Loading text="Visiting country..." />
  if (error) return <Error text={error} />

  const { flags, name, capital, region, population, languages, currencies, tld, borders } = country ?? {}

  const { svg: flag } = flags ?? {}
  const { common: countryName } = name ?? {}
  const [capitalName] = capital ?? []
  const languagesNames = Object.values(languages ?? {}).join(', ')
  const currenciesNames = Object.values(currencies ?? {})
    .map(({ name, symbol }) => `${name} (${symbol})`)
    .join(', ')
  const [topLevelDomain] = tld ?? []
  const bordersIds = borders ?? []

  return (
    <>
      <Link href="/">
        <button className="mb-4 cursor-pointer rounded bg-gray-500 px-4 py-2 font-semibold hover:bg-gray-700">
          Back
        </button>
      </Link>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[auto_1fr]">
        <div className="flex items-center md:max-w-[400px]">
          <Image
            src={flag || '/flag-placeholder.svg'}
            alt={`Flag of ${countryName}`}
            className="max-h-80 rounded-lg object-cover"
            width={500}
            height={300}
            priority
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-sm text-white">
          <h2 className="mb-4 text-xl font-semibold">
            {countryName} ({id})
          </h2>
          <div className="space-y-2">
            <div>
              <span className="font-semibold">Capital:</span> {capitalName}
            </div>
            <div>
              <span className="font-semibold">Region:</span> {region}
            </div>
            <div>
              <span className="font-semibold">Population:</span> {population}
            </div>
            <div>
              <span className="font-semibold">Languages:</span> {languagesNames}
            </div>
            <div>
              <span className="font-semibold">Currencies:</span> {currenciesNames}
            </div>
            <div>
              <span className="font-semibold">Top Level Domain:</span> {topLevelDomain}
            </div>
            {bordersIds.length > 0 && (
              <div className="flex gap-1 md:max-w-80">
                <span className="font-semibold">Borders:</span>{' '}
                <div className="flex gap-1">
                  {bordersIds.map(borderId => (
                    <Link key={borderId} href={`/country/${borderId}`}>
                      <button className="text-foreground cursor-pointer rounded bg-white px-[6px] py-[1.5px] text-xs hover:bg-gray-200">
                        {borderId}
                      </button>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
