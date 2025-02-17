import Image from 'next/image'

type CardProps = {
  index: number
  flag: string
  name: string
  capital: string
  region: string
  population: number
}

const Card = ({ index, flag, name, capital, region, population }: CardProps) => {
  return (
    <div className="h-full transform overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-video w-full">
        <Image
          src={flag || '/flag-placeholder.svg'}
          alt={`Flag of ${name}`}
          className="h-full w-full object-cover"
          width={500}
          height={300}
          priority={index < 12}
        />
      </div>
      <div className="p-6 text-sm text-gray-600">
        <h2 className="mb-4 text-xl font-semibold">{name}</h2>
        <div className="space-y-2">
          <div>
            <span className="font-semibold">Capital:</span> {capital}
          </div>
          <div>
            <span className="font-semibold">Region:</span> {region}
          </div>
          <div>
            <span className="font-semibold">Population:</span> {population}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
