import React, { useState } from 'react'
import { ADD_QUALIFICATION } from '../gql/query'
import { notification } from 'antd';
import { useMutation } from '@apollo/client'
import { ApButton } from '@/src/components/button'
import { PlusOutlined, CloseOutlined, CloseCircleFilled } from '@ant-design/icons'

export const EditQualifications = ({setModal}) => {
  var years = [2023,2022,2021,2020,2019,2018,2017,2016,2015,2014,2013,2012,2011,2010,2009,2008,2007,2006,2005,2004,2003,2002,2001,2000,1999,1998,1997,1996,1995,1994,1993,1992,1991,1990,1989,1988,1987,1986,1985,1984,1983,1982,1981,1980,1979,1978,1977,1976,1975,1974,1973,1972,1971,1970,1969,1968,1967,1966,1965,1964,1963,1962,1961,1960,1959,1958,1957,1956,1955,1954,1953,1952,1951,1950,1949,1948,1947,1946,1945,1944,1943,1942,1941,1940,1939,1938,1937,1936,1935,1934,1933,1932,1931,1930,1929,1928,1927,1926,1925,1924,1923,1922,1921,1920,1919,1918,1917,1916,1915,1914,1913,1912,1911,1910,1909,1908,1907,1906,1905,1904,1903,1902,1901,1900]
  const [addQualification] = useMutation(ADD_QUALIFICATION)
  const [qualification, setQualification] = useState({professionalCertificate: null, conferringOrganization: null, summary: null, startYear: null})
  const [api, contextHolder] = notification.useNotification();

  const addQualificationHandler = () =>
  {
    if(qualification.professionalCertificate !== null && qualification.conferringOrganization !== null && qualification.summary !== null && qualification.startYear !== null)
    {
      addQualification({ variables : {
        qualification: { professionalCertificate: qualification.professionalCertificate, conferringOrganization: qualification.conferringOrganization, summary: qualification.summary, startYear: qualification.startYear }
      }})
    }
    else
    {
        api.info({
          icon: (<CloseCircleFilled className='text-red-500' />),
          message: `Error`,
          description:(<div className='flex gap-3'>
              <p>Please fill all fields before proceeding.</p>
          </div>),
          placement: 'topLeft',
          duration: 2
      }); 
    }
  }

  return (
    <>
    {contextHolder}
    <div>
      <h1 className='font-bold text-xl'>Add Qualification</h1>
      <p className='mb-3'>Fill To Add New Qualification</p>

      <div className="flex w-full gap-5">
      <div className='w-full'>
        <p className='mb-2'>Professional Certificate or Award</p>
        <input type="text" onChange={({target}) =>  setQualification({ ...qualification, professionalCertificate: target.value})} placeholder='Enter Professional Certificate or Award' className='w-full border rounded p-3 h-10' />
      </div>

      <div className='w-full'>
        <p className='mb-2'>Conferring Organization</p>
        <input type="text" onChange={({target}) =>  setQualification({ ...qualification, conferringOrganization: target.value})} placeholder='Enter Conferring Organization' className='w-full border rounded p-3 h-10' />
      </div>
      </div>

      <div className="flex w-full gap-5 mt-5">
      <div className='w-full'>
            <p className='mb-2'>Start Year</p>
            <select onChange={({target}) =>  setQualification({ ...qualification, startYear: target.value})} name="month" id="month" className='w-full border rounded px-3 h-10'>
              <option selected disabled>Select Year</option>
              {
                years.map(year => (
                  <option value={year}>{year}</option>
                ))
              }
            </select>
          </div>
      </div>

      <div>
        <p className='mb-2 mt-5'>Summary</p>
        <textarea onChange={({target}) =>  setQualification({ ...qualification, summary: target.value})} placeholder='Describe Your Qualification' className='border w-full rounded p-3 h-40 resize-none'></textarea>
      </div>

      <div className='gap-4 flex justify-end items-center mt-4'>
          <ApButton
            onClick={addQualificationHandler}
            className='py-2.5 flex bg-skin-accent text-white rounded items-center p-3 justify-center gap-2'
          >
            Add Publication
            <PlusOutlined className='text-lg'/>
          </ApButton>

          <ApButton
            onClick={() => setModal({ open: false })}
            className='mr-3 py-2 border border-green-500 flex text-skin-accent rounded items-center p-3 justify-center gap-2'
          >
            Cancel
            <CloseOutlined className='text-lg'/>
          </ApButton>
        </div>
    </div>
    </>
  )
}
