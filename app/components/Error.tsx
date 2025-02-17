import { ExclamationCircleIcon } from '@heroicons/react/24/outline'

type ErrorProps = {
  text: string
}

const Error = ({ text }: ErrorProps) => {
  return (
    <div className="m-auto flex flex-col items-center">
      <ExclamationCircleIcon className="mb-2 size-6" />
      <span className="mb-1 text-sm">Ops, something went wrong!</span>
      <span className="text-sm">{text}</span>
    </div>
  )
}

export default Error
