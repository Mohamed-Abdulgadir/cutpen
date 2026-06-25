import React from 'react'

function Hero() {
  return (
    <div className="flex flex-col flex-1 gap-4  items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-4xl font-bold ">Welcome to Cutpen <span className="text-blue-500">AI</span></h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 flex flex-col items-center justify-center">
        Cutpen leverages advanced AI algorithms to help you generate <span>high-quality content effortlessly</span>.
      </p>
    </div>
  )
}

export default Hero
