import { FC } from 'react'

const Footer: FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center text-sm text-gray-400 border-t dark:border-slate-700 max-md:mb-20">
      <span className="pt-4">Released under the MIT license</span>
      <span>Copyright © 2023-present Ludvig Lundh</span>
    </div>
  )
}

export default Footer
