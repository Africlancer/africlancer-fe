import React from 'react'

export const EditExperience = () => {

  var months = ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
  var years = [2023,2022,2021,2020,2019,2018,2017,2016,2015,2014,2013,2012,2011,2010,2009,2008,2007,2006,2005,2004,2003,2002,2001,2000,1999,1998,1997,1996,1995,1994,1993,1992,1991,1990,1989,1988,1987,1986,1985,1984,1983,1982,1981,1980,1979,1978,1977,1976,1975,1974,1973,1972,1971,1970,1969,1968,1967,1966,1965,1964,1963,1962,1961,1960,1959,1958,1957,1956,1955,1954,1953,1952,1951,1950,1949,1948,1947,1946,1945,1944,1943,1942,1941,1940,1939,1938,1937,1936,1935,1934,1933,1932,1931,1930,1929,1928,1927,1926,1925,1924,1923,1922,1921,1920,1919,1918,1917,1916,1915,1914,1913,1912,1911,1910,1909,1908,1907,1906,1905,1904,1903,1902,1901,1900]

  return (
    <div>
      <h1 className='font-bold text-xl'>Add Experience</h1>
      <p className='mb-3'>Fill To Add New Experience</p>

      <div className="flex w-full gap-5">
      <div className='w-full'>
        <p className='mb-2'>Title</p>
        <input type="text" placeholder='Enter Your Position or Title' className='w-full border rounded p-3 h-10' />
      </div>

      <div className='w-full'>
        <p className='mb-2'>Company</p>
        <input type="text" placeholder='Enter Company Name' className='w-full border rounded p-3 h-10' />
      </div>
      </div>

      <div className="flex w-full gap-5 mt-5">
        <div className="flex w-full items-center gap-5">
          <div className='w-full'>
            <p className='mb-2'>Start</p>
            <select name="month" id="month" className='w-full border rounded px-3 h-10'>
              <option selected disabled>Select Month</option>
              {
                months.map(month => (
                  <option value={month}>{month}</option>
                ))
              }
            </select>
          </div>

          <div className='w-full pt-0.5'>
            <select name="month" id="month" className='w-full border rounded px-3 h-10 mt-7'>
              <option selected disabled>Select Year</option>
              {
                years.map(year => (
                  <option value={year}>{year}</option>
                ))
              }
            </select>
          </div>         
          </div>

        <div className="flex w-full items-center gap-5">
        <div className='w-full'>
            <p className='mb-2'>End</p>
            <select name="month" id="month" className='w-full border rounded px-3 h-10'>
              <option selected disabled>Select Month</option>
              {
                months.map(month => (
                  <option value={month}>{month}</option>
                ))
              }
            </select>
          </div>

          <div className='w-full pt-0.5'>
            <select name="month" id="month" className='w-full border rounded px-3 h-10 mt-7'>
              <option selected disabled>Select Year</option>
              {
                years.map(year => (
                  <option value={year}>{year}</option>
                ))
              }
            </select>
          </div>            
        </div>
      </div>

      <div className='flex gap-2 mt-5'>
        <input type="checkbox"/>
        <p>I'm Currently Working Here</p>
      </div>

      <div>
        <p className='mb-2 mt-5'>Summary</p>
        <textarea placeholder='Describe Your Working Experience' className='border w-full rounded p-3 h-40 resize-none'></textarea>
      </div>

      <div className='flex justify-end items-center mt-4'>
      <div>
      <button className="text-white px-5 py-2 rounded bg-green-500 mr-3">
        Upload Photo
      </button>
      <button className="text-green-500 px-4 py-2 rounded border-green-500 border-2">
        Cancel
      </button>
      </div>
      </div>
    </div>
  )
}

  // function generateArrayOfYears() {
  //   var max = new Date().getFullYear()
  //   var min = max - 123
  //   var years = []
  
  //   for (var i = max; i >= min; i--) {
  //     years.push(i)
  //   }
  //   return years
  // }
  
  // var years = generateArrayOfYears()