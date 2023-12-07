import React from 'react'
import "../Pages/Home.css"

const QuoteCard = ({ quote }) => {
  const twitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${quote.content} - ${quote.author}`
    );
  }

  const tags = Array.isArray(quote?.tags) ? quote.tags : [];

  return (
    <>
      <div className="max-w-xs flex flex-col bg-gradient-to-b from-blue-300 to-white border border-t-4 border-t-blue-600 shadow-sm rounded-xl image-wrapper">
        <div className="p-4 md:p-5">
          <svg className="w-8 h-8 text-blue-700 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <h3 className="text-xl font-bold text-gray-800 mb-10 mt-4">
            {quote?.content}
          </h3>
          <p className="mt-2 text-gray-700">
            - {quote?.author}
          </p>
          <div className='flex w-11/12 relative justify-between gap-5 items-center mt-5'>
            <div className='flex flex-wrap gap-y-3'>
              {tags.map((tag, index) => {
                return (
                  <span key={index} className="bg-blue-500 flex flex-col justify-center items-center text-slate-950 text-sm font-medium me-2 py-1 px-3.5 rounded">{tag}</span>
                )
              })}
            </div>
            <button className='w-10 flex justify-center items-center h-10 absolute right-0 bottom-0 rounded-full bg-blue-600 hover:bg-blue-700' onClick={twitter}>
              <svg className='w-6 h-6' version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512" xmlSpace="preserve">
                <g>
                  <path fill='#fff' d="M512,255.995L277.045,65.394v103.574c-17.255,0-36.408,0-57.542,0c-208.59,0-249.35,153.44-201.394,266.128
		c9.586-103.098,142.053-100.701,237.358-100.701c7.247,0,14.446,0,21.578,0v112.211L512,255.995z"/>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuoteCard