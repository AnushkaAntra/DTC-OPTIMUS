import React from 'react'

type Props = {}

const SearchButton = (props: Props) => {
  return (
    <div className="flex flex-row justify-between">
    {/* Search Button */}
      <form className="w-64 mx-4">   
          <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-[#999999]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
              </div>
              <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-[#999999] rounded-lg bg-gray-50 dark:placeholder-gray-400 dark:text-white " placeholder="Search" autoComplete='off' required />
          </div>
      </form>
      {/* Filter Button */}
      <div className="flex justify-center items-center w-28 bg-gray-50 rounded-lg mx-4">
          {/* <img src="" alt="" /> */}
          <h3 className="font-inter text-center ">Filters</h3>
      </div>
    </div>
  )
}

export default SearchButton;