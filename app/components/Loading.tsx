import { ArrowPathIcon } from '@heroicons/react/24/solid'

type LoadingProps = {
  text: string
}

const Loading = ({ text }: LoadingProps) => {
  return (
    <div className="m-auto flex flex-col items-center">
      <ArrowPathIcon className="mb-2 size-6 animate-[spin_1.5s_linear_infinite]" />
      <span className="text-sm">{text}</span>
    </div>
  )
}

export default Loading
