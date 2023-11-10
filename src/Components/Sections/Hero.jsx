import React from 'react'

const Hero = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 className="text-4xl font-bold leadi sm:text-5xl">Lalalalalala 
          <span className="dark:text-violet-400"> chumu chumu </span> olebabale
        </h1>
        <p className="px-8 mt-8 mb-12 text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero aut maiores vero quas animi ullam veritatis dicta ducimus neque eligendi distinctio consequatur recusandae itaque dolorem repellat, perspiciatis commodi fuga ea.</p>
        <div className="flex flex-wrap justify-center">
          <button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Get started</button>
          <button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700">Learn more</button>
        </div>
      </div>
    </section>
  )
}

export default Hero