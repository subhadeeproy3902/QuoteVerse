import React from "react";

const About = () => {
  return (
    <section className="py-20 lg:pt-28 lg:pb-0 font-poppins bg-slate-900 min-h-screen">
      <div className="max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div className="flex flex-wrap ">
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
            <div className="w-full">
              <div className="px-4 pl-4 mb-6 border-l-4 border-blue-500">
                <span className="text-sm  uppercase text-gray-400">
                  Who we are?
                </span>
                <h1 className="mt-2 text-3xl font-black md:text-5xl text-gray-300">
                  About Us
                </h1>
              </div>
              <p className="px-4 mb-10 text-base leading-7 text-gray-400">
                Welcome to Quoteverse, where wisdom, inspiration, and thought-provoking words converge to illuminate the tapestry of human experience. At Quoteverse, we believe in the transformative power of words, recognizing their ability to evoke emotions, spark introspection, and connect us across the vast spectrum of human existence.
              </p>
              <div className="flex flex-wrap items-center">
                <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div className="p-6 bg-gray-700 rounded-md">
                    <span className="text-blue-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        className="w-10 h-10"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                        <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                      </svg>
                    </span>
                    <p className="mt-4 mb-2 text-3xl font-bold text-gray-400">
                      2000+
                    </p>
                    <h2 className="text-sm text-gray-400">Number of quotes</h2>
                  </div>
                </div>
                <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div className="p-6 bg-gray-700 rounded-md">
                    <span className="text-blue-400">
                      <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        className="w-10 h-10"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2.12264 12.816C2.41018 13.8186 3.18295 14.5914 4.72848 16.1369L6.55812 17.9665C9.24711 20.6555 10.5916 22 12.2623 22C13.933 22 15.2775 20.6555 17.9665 17.9665C20.6555 15.2775 22 13.933 22 12.2623C22 10.5916 20.6555 9.24711 17.9665 6.55812L16.1369 4.72848C14.5914 3.18295 13.8186 2.41018 12.816 2.12264C11.8134 1.83509 10.7485 2.08083 8.61875 2.57231L7.39057 2.85574C5.5988 3.26922 4.70292 3.47597 4.08944 4.08944C3.47597 4.70292 3.26922 5.59881 2.85574 7.39057L2.57231 8.61875C2.08083 10.7485 1.83509 11.8134 2.12264 12.816ZM10.1234 7.27098C10.911 8.05856 10.911 9.33549 10.1234 10.1231C9.33581 10.9107 8.05888 10.9107 7.27129 10.1231C6.48371 9.33549 6.48371 8.05856 7.27129 7.27098C8.05888 6.48339 9.33581 6.48339 10.1234 7.27098ZM19.0511 12.0511L12.0721 19.0303C11.7792 19.3232 11.3043 19.3232 11.0114 19.0303C10.7185 18.7375 10.7185 18.2626 11.0114 17.9697L17.9904 10.9904C18.2833 10.6975 18.7582 10.6975 19.0511 10.9904C19.344 11.2833 19.344 11.7582 19.0511 12.0511Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <p className="mt-4 mb-2 text-3xl font-bold text-gray-400">
                      60+
                    </p>
                    <h2 className="text-sm text-gray-400">Categories</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <img
              src="https://i.postimg.cc/59Tn5NbX/Sigma-grindset-patrick-bateman.webp"
              alt=""
              className="relative z-40 object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
