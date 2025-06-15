import { Loader } from 'lucide-react'
import React from 'react'

const PageLoader = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
        <Loader className='animate-spin size-10 text-primary' />
    </div>
  )
}

export default PageLoader