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
 
export const PostProjectPage = () => {
  const [bgImg, setBgImg] = useState<string>();
  const [showFormTwo, setShowFormTwo] = useState(false)

  const [project, setProject] = useState({
    title: '', details: '', summary: '', minBudget: '', maxBudget: '', type: ''})
  const [projectState, setProjectState] = useState({loading: false, loaded: false})

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
            {
              projectState.loaded ? (
                <div className='py-10 flex justify-center items-center w-[800px] relative overflow-hidden break-words -translate-y-36 bg-skin-base px-8 min-h-[300px] shadow-md rounded-md'>
                      <div className='flex justify-between gap-5'>
                      <ScheduleFilled style={{fontSize: '200px'}} className='text-skin-accent'/>

                        <div className='border-l pl-5'>
                          <h1 className='font-bold text-2xl mb-2'>{project.title}</h1>
                          <p>Payment Type - {project.type}</p>
                          <div className='flex gap-2'>
                            <p>Min Budget - {project.minBudget}</p>
                            <p>Max Budget - {project.maxBudget}</p>
                          </div>
                          
                          <p className='mt-5'>{project.summary}</p>
                          <p className='mt-5'>{project.details}</p>
                        </div>
                      </div>
                      <div className='flex justify-end gap-2 absolute bottom-5 right-5'>
                        <ApButton onClick={() => {}} outline>Cancel</ApButton>
                        <ApButton onClick={postProject}>Post Project</ApButton>
                      </div>
                </div>
              ) : (
                <div>
                  {
                    projectState.loading ? (
                      <div className='w-[800px] flex justify-center items-center -translate-y-36 bg-skin-base px-8 min-h-[300px] shadow-md rounded-md'>
                        <LoadingOutlined 
                            className='text-skin-accent'
                            style={{ fontSize: 100 }}
                            spin
                        />
                      </div>
                    )
                    : (
                      <div>
                        {
                          showFormTwo ? <FormTwo projectState={projectState} setProjectState={setProjectState} project={project} setProject={setProject}/>
                          : <FormOne project={project} setProject={setProject} setShowFormTwo={setShowFormTwo}/>
                        }
                      </div>
                    )
                  }
                </div>
              )
            }
        </div>
        </div>
    </div>
  )
}

