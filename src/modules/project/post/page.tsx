import React, { useEffect, useState } from 'react';
import { useProjectState } from '../context';
import { bgImages } from '../model';
import { Navbar } from '@/src/components/navbar';
import { FormOne } from './form1';
import { FormTwo } from './form2';


export const PostProjectPage = () => {
  const { createProject, loading } = useProjectState();
  const [bgImg, setBgImg] = useState<string>();
  const [showFormTwo, setShowFormTwo] = useState(false)

  useEffect(() => {
      let index = Math.floor(Math.random() * bgImages.length);
      let item = bgImages[index];
      setBgImg(item);
  }, []);

//   const handleUpload = (values) => {
//     console.log(fileList)
    
//     console.log(loading);
//     createProject({

//     }).then((val) => {
//       console.log(val);
//     })
//   };

  return (
    <div className='h-full bg-skin-alt'>
        <Navbar avatar=''/>
        <div className='pt-[62px]'>
        <div className='w-full bg-center bg-cover h-[450px]'
        style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div className='text-white h-full w-full bg-overlay2 flex flex-col items-center pt-32'>
            <div className='w-[800px]'>
              <h1 className='font-bold text-5xl mb-3'>Tell us what you need done.</h1>
              <p className='text-lg'>Contact skilled freelancers within minutes. View profiles, ratings, portfolios and chat with them. Pay the freelancer only when you are 100% satisfied with their work.</p>
            </div>
          </div>
        </div>

        <div className='bg-skin-alt w-[full] flex-col flex justify-center items-center'>
          {
            showFormTwo ? <FormTwo/>
            : <FormOne setShowFormTwo={setShowFormTwo}/>
          }
        </div>
        </div>
    </div>
  )
}

