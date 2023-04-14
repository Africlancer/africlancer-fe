import React, { useEffect, useState } from 'react';
import { bgImages } from '../model';
import { Navbar } from '@/src/components/navbar';
import { FormOne } from './form1';
import { FormTwo } from './form2';
import {
  LoadingOutlined, ScheduleFilled
 } from "@ant-design/icons";
import { ApButton } from '@/src/components';
import { CREATE_PROJECT } from '../gql/query';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
 
export const PostProjectPage = () => {
  const [bgImg, setBgImg] = useState<string>();
  const [showFormTwo, setShowFormTwo] = useState(false)
  const router = useRouter()

  const [project, setProject] = useState<any>({})

  useEffect(() => {
      let index = Math.floor(Math.random() * bgImages.length);
      let item = bgImages[index];
      setBgImg(item);
  }, []);

const [createProject] = useMutation(CREATE_PROJECT,{})

    const postProject = () =>
    {
      const presentDate = new Date
      const sevenDaysLater = new Date
      sevenDaysLater.setDate(sevenDaysLater.getDate() + 7) 

      createProject({ variables : {
        project: { ...project, 
          minBudget: parseInt(project.minBudget), 
          maxBudget: parseInt(project.maxBudget),
          startDate: presentDate,
          endDate: sevenDaysLater,
          skills: []
        }
      }})
      .then((val) => 
      {
        console.log(val)
        router.push('/browse/projects')
      })
      .catch((err) => console.log(err)) 
    }

  return (
    <div className='h-full bg-skin-alt'>
        <Navbar/>
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
          <div>
              <div>
                {
                  showFormTwo ? <FormTwo project={project} setProject={setProject} setShowFormTwo={setShowFormTwo}/>
                  : <FormOne project={project} setProject={setProject} setShowFormTwo={setShowFormTwo}/>
                }
              </div>
          </div>
        </div>
        </div>
    </div>
  )
}

