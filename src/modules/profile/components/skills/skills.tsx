import { ApButton } from '@/src/components/button'
import { EditIcon } from '@/src/components/icons'
import { ApModal } from '@/src/components/modal'
import React, { useState } from 'react'
import EditSkills from './edit'

interface IProps {
  skills: any[]
}

export const Skills: React.FC<IProps> = ({ skills }) => {
  const [modal, setModal] = useState<{ open: boolean }>({ open: false })

  return (
    <>
      <div className="bg-skin-base rounded-xl w-full shadow-xl">
        <div className="border-skin-border border-b px-6 py-2 flex justify-between">
          <div className="flex items-center">
            <h1 className="font-bold text-xl mr-3 text-skin-inverted">Top Skills</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="text-skin-muted"
              viewBox="0 0 24 24"
            >
              <path d="M23.27 19.743l-11.946-11.945c-.557-.557-.842-1.331-.783-2.115.115-1.485-.395-3.009-1.529-4.146-1.03-1.028-2.375-1.537-3.723-1.537-.507 0-1.015.072-1.506.216l3.17 3.17c.344 1.589-1.959 3.918-3.566 3.567l-3.17-3.17c-.145.492-.217 1-.217 1.509 0 1.347.51 2.691 1.537 3.721 1.135 1.136 2.66 1.646 4.146 1.53.783-.06 1.557.226 2.113.783l11.947 11.944c.468.468 1.103.73 1.763.73 1.368 0 2.494-1.108 2.494-2.494 0-.638-.244-1.276-.73-1.763zm-1.77 2.757c-.553 0-1-.448-1-1s.447-1 1-1 1 .448 1 1-.447 1-1 1zm-8.375-15.753l6.723-6.747 4.152 4.128-6.722 6.771-1.012-1.012 5.488-5.533c.165-.165.165-.435-.001-.602-.166-.165-.436-.165-.601 0l-5.489 5.533-.935-.936 5.495-5.539c.166-.166.166-.437 0-.603-.168-.166-.436-.166-.603.001l-5.494 5.539-1.001-1zm-3.187 9.521l-5.308 5.35c-.166.166-.437.166-.603 0-.165-.166-.166-.436 0-.602l5.308-5.351-.936-.935-5.301 5.343c-.165.168-.435.167-.601.001-.166-.167-.166-.436 0-.602l5.3-5.343-1.004-1.004-5.745 5.787-1.048 5.088 5.203-.937 5.743-5.786-1.008-1.009z" />
            </svg>
          </div>

          <ApButton
            onClick={() => setModal({ open: true })}
            className="py-2 flex bg-skin-accent text-white rounded items-center p-3 justify-center gap-2"
          >
            Edit Skills
            <EditIcon />
          </ApButton>
        </div>

        <div className="h-64 flex items-center w-full justify-center flex-col">
          <div className="px-8 flex flex-wrap justify-center gap-5 text-skin-inverted">
            <p className="bg-skin-muted inline-block py-1 px-3 rounded-lg">Web Development</p>
            <p className="bg-skin-muted inline-block py-1 px-3 rounded-lg">React JS</p>
            <p className="bg-skin-muted inline-block py-1 px-3 rounded-lg">Java</p>
            <p className="bg-skin-muted inline-block py-1 px-3 rounded-lg">Mobile Development</p>
            <p className="bg-skin-muted inline-block py-1 px-3 rounded-lg">C++</p>
            <p className="bg-skin-muted inline-block py-1 px-3 rounded-lg">Angular JS</p>
            <p className="bg-skin-muted inline-block py-1 px-3 rounded-lg">Vue JS</p>
            <p className="bg-skin-muted inline-block py-1 px-3 rounded-lg">Nest JS</p>
            <p className="bg-skin-muted inline-block py-1 px-3 rounded-lg">Express JS</p>
            <p className="bg-skin-muted inline-block py-1 px-3 rounded-lg">Solid JS</p>
          </div>
        </div>
      </div>

      <ApModal
        open={modal?.open}
        onDismiss={() =>
          setModal({
            open: false,
          })
        }
        width=""
      >
        <EditSkills skillsArr={skills} />
      </ApModal>
    </>
  )
}
