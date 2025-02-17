type CardProps = {
  country: string
  capital: string
  region: string
  population: string
}

const Card = ({ country, capital, region, population }: CardProps) => {
  return (
    <div className="h-full overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="aspect-video w-full">
        <img src="https://placehold.co/600x400" className="h-full w-full object-cover" />
      </div>
      <div className="p-6 text-sm text-gray-600">
        <h2 className="mb-4 text-xl font-semibold">{country}</h2>
        <div className="space-y-2">
          <div className="flex items-center gap-1">
            <span className="font-semibold">Capital:</span>
            <span>{capital}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-semibold">Region:</span>
            <span>{region}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-semibold">Population:</span>
            <span>{population}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
