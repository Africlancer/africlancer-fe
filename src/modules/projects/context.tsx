import React, { useState } from 'react'
import {
  NEW_PROJECT_SUBSCRIPTION,
  useCreateProject,
  useFindAllProjects,
  useFindProject,
  useUpdateProject,
} from './gql/query'
import { IProject } from './model'
import { useRouter } from 'next/router'
import { LoadingOutlined } from '@ant-design/icons'
import { useSession } from 'next-auth/react'
import { useLazyQuery, useSubscription } from '@apollo/client'
import { FIND_BOOKMARK } from '../bookmark/gql/query'
import useApNotification from '@/src/hooks/notification'

interface IProjectState {
  hasBiddingEnded: boolean
  status: any
  loading: boolean
  loadingText: string
  daysLeft: number
  projects: any
  activeProject: any
  NewProject: () => any
  createProject: (project: IProject) => Promise<void>
  updateProject: (id: string, project: IProject) => Promise<void>
  fetchAllProjects: (query, fullSearch?) => void
  fetchProject: (query, findBookMarkFunc) => void
}

const ProjectContext = React.createContext<IProjectState>({
  hasBiddingEnded: false,
  status: null,
  loading: false,
  daysLeft: 0,
  loadingText: '',
  projects: null,
  activeProject: {},
  createProject(project) {
    return null as any
  },
  NewProject() {},
  updateProject(id, project) {
    return null as any
  },
  fetchProject(query) {},
  fetchAllProjects(query, fullSearch) {},
})

const useProjectContext = () => {
  const context = React.useContext(ProjectContext)
  if (context === undefined) throw new Error('context doest not exist')
  return context
}

interface IProps {
  children: React.ReactNode
}

const ProjectContextProvider: React.FC<IProps> = ({ children }) => {
  const router = useRouter()
  const session: any = useSession()
  const [projects, setProjects] = useState(null)
  const [activeProject, setActiveProject] = useState([])
  const [hasBiddingEnded, setHasBiddingEnded] = useState<boolean>(false)
  const [daysLeft, setDaysLeft] = useState<number>(0)
  const [status, setStatus] = useState<string>('')

  const fetchAllProjectsQuery = useFindAllProjects()
  const fetchProjectQuery = useFindProject()
  const createProjectQuery = useCreateProject((rs) => {})
  const updateProjectQuery = useUpdateProject((rs) => {})
  const [loading, setLoading] = useState(false)
  const [loadingText, setLoadingText] = useState('Loading...')
  const [findBookM, {}] = useLazyQuery(FIND_BOOKMARK)
  const { errorMsg, notificationContext, successMsg } = useApNotification()

  const fetchAllProjects = async (query, fullSearch) => {
    return fetchAllProjectsQuery[0]({
      variables: {
        query: query,
        fullSearch: fullSearch,
      },
    })
      .then((res) => {
        setProjects(res.data.findProjectsFilter)
        //console.log(res.data)
      })
      .catch((err) => console.log(err))
  }

  const fetchProject = (query, findBookMarkFunc?) => {
    return fetchProjectQuery[0]({
      variables: {
        query: query,
      },
    })
      .then((res) => {
        setActiveProject(res.data.findOneProject)
        // findBookM({ variables: {} })

        let date = new Date()
        let newDate = new Date(date)
        // let newDateStr = newDate.getFullYear() + " - " + (newDate.getMonth() + 1) + " - " +
        // newDate.getDate()

        let endDate = new Date(res.data.findOneProject.endDate)
        // let endDateStr = endDate.getFullYear() + " - " + (endDate.getMonth() + 1) + " - " +
        // endDate.getDate()

        const dateInPast = (firstDate, secondDate) => {
          if (firstDate.setHours(0, 0, 0, 0) <= secondDate.setHours(0, 0, 0, 0)) {
            setHasBiddingEnded(true)
            setStatus('CLOSED')
          } else {
            let difference = firstDate.getTime() - secondDate.getTime()
            let totalDays = Math.ceil(difference / (1000 * 3600 * 24))
            setHasBiddingEnded(false)
            setStatus('OPEN')
            setDaysLeft(totalDays)
          }
        }
        dateInPast(endDate, newDate)
        //console.log(dateInPast(endDate, newDate))
        //console.log(newDateStr)

        findBookMarkFunc &&
          findBookMarkFunc({
            userID: session?.data?.user?._id,
            projectID: res.data.findOneProject?._id,
          })
      })
      .catch((err) => console.log(err))
  }

  const createProject = async (project: IProject): Promise<void> => {
    setLoading(true)
    await createProjectQuery[0]({ variables: { project } })
      .then((rs) => {
        if (rs.data?.createProject) {
          setLoadingText('Redirecting...')
           successMsg(
            'Success',
            <>
              <p className="mb-1">Your project has been created.</p>
              <p className="flex items-center gap-3">
                Redirecting, please wait.
                <LoadingOutlined style={{ fontSize: 14 }} spin />
              </p>
            </>,
          )
          setTimeout(() => {
            router.push('/browse/projects')
            setLoading(false)
          }, 8000)
        }
      })
      .catch((err) => {
         errorMsg('Error', err.message)
        setLoading(false)
      })
  }

  const updateProject = async (id: string, project: IProject): Promise<void> => {
    await updateProjectQuery[0]({ variables: { id, project } })
      .then((rs) => {
        fetchProject({ _id: id })
         successMsg('Success', 'Your project has been updated.')
        setLoading(false)
      })
      .catch((err) => {
         errorMsg('Error', err.message)
        setLoading(false)
      })
  }

  const NewProject = () => {
    const { data, loading } = useSubscription(NEW_PROJECT_SUBSCRIPTION, {
      onSubscriptionData: (data) => {
        console.log('project created')
      },
    })

    return <p>New Project</p>
  }

  return (
    <ProjectContext.Provider
      value={{
        NewProject,
        projects,
        createProject,
        fetchAllProjects,
        activeProject,
        fetchProject,
        hasBiddingEnded,
        daysLeft,
        updateProject,
        status,
        loading,
        loadingText,
      }}
    >
      <>
        {notificationContext}
        {children}
      </>
    </ProjectContext.Provider>
  )
}

export { ProjectContextProvider, useProjectContext }
