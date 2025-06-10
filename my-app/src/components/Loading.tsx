import React from 'react'

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-white">
      <div className="animate-spin rounded-full h-20 w-20 border-4 border-gray-500 border-t-transparent"></div>
    </div>
  )
}

