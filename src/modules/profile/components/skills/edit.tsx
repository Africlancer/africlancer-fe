import { ApButton, ApRegSelect } from '@/src/components'
import { ApSelect } from '@/src/components/input/selectinput'
import { Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useProfileContext } from '../../context'

const skills = [
  { value: 'React JS', label: 'React JS' },
  { value: 'Vue JS', label: 'Vue JS' },
  { value: 'Angular', label: 'Angular' },
  { value: 'Javascript', label: 'Javascript' },
  { value: 'Typescript', label: 'Typescript' },
  { value: 'Ghost Writing', label: 'Ghost Writing' },
  { value: 'UI/UX Design', label: 'UI/UX Design' },
]

interface IProps {
  skillsArr: any[]
}

const EditSkills: React.FC<IProps> = ({ skillsArr }) => {
  const [selectedSkills, setSelectedSkills] = useState<any[]>()
  const { updateProfile } = useProfileContext()

  useEffect(() => {
    setSelectedSkills(skillsArr)
  })

  console.log(skillsArr)

  const setSkills = (val) => {
    // const skills: any[] = []
    // val.forEach(item => {
    //     if(selectedSkills.includes(item?.value)){}
    //     else{
    //         skills.push(item?.value)
    //     }
    // })
    // setSelectedSkills([...selectedSkills, ...skills])
  }

  const saveSkills = () => {
    const profile: any = { skills: selectedSkills }
    updateProfile(profile)
  }

  return (
    <div className="w-[800px]">
      <h1 className="font-bold text-2xl mb-10">Select your skills and expertise</h1>

      <ApRegSelect
        onChange={setSkills}
        isMulti
        isSearchable
        options={skills}
        name="skills"
        placeholder="Search or select a skill"
      />

      <p className="mt-10 mb-5 font-bold text-lg">{skillsArr?.length} out of 20 Skills Added</p>
      <div className="border-t pt-5">
        {skillsArr?.length > 0 ? (
          skillsArr?.map((item, i) => (
            <p key={i} className="bg-skin-muted inline-block py-1 px-3 rounded-lg mr-5">
              {item}
            </p>
          ))
        ) : (
          <p className="text-center">You have no skills selected.</p>
        )}
      </div>

      <div className="flex justify-end mt-5">
        <ApButton onClick={() => saveSkills()}>Save Skills</ApButton>
      </div>
      {/* <div className='flex items-center gap-5 mt-5'>
        <div className='h-0.5 bg-gray-200 w-full'></div>
            <p className='font-bold'>OR</p>
        <div className='h-0.5 bg-gray-200 w-full'></div>
      </div> */}
    </div>
  )
}

export default EditSkills
