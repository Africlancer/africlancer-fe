import React, { useState } from 'react'
import useProjectQuery, {
  NEW_PROJECT_SUBSCRIPTION,
  useCreateProject,
  useFindAllProjects,
  useFindProject,
  useUpdateProject,
} from './gql/query'
import { IProject, IQueryProjectInput, ProjectStatus } from './model'
import { useRouter } from 'next/router'
import { LoadingOutlined } from '@ant-design/icons'
import { useSession } from 'next-auth/react'
import { useLazyQuery, useSubscription } from '@apollo/client'
import { FIND_BOOKMARK } from '../bookmark/gql/query'
import useApNotification from '@/src/hooks/notification'
import { calculateDaysLeft } from '@/src/services'

interface IProjectState {
  openProjects: IProject[]
  project: IProject
  projects: IProject[]
  setProject: React.Dispatch<React.SetStateAction<IProject>>
  hasBiddingEnded: boolean
  status: any
  loading: boolean
  actionLoading: boolean
  loadingText: string
  daysLeft: number
  activeProject: any
  NewProject: () => any
  createProject: (project: IProject) => Promise<any>
  findProjects: (query: IQueryProjectInput, fullSearch?: boolean) => Promise<any>
  findProject: (query: IQueryProjectInput) => Promise<any>
  findUserProjects: (query: IQueryProjectInput) => Promise<any>
  updateProject: (id: string, project: IQueryProjectInput) => Promise<any>
  fetchAllProjects: (query, fullSearch?) => void
  fetchProject: (query, findBookMarkFunc) => void
}

const ProjectContext = React.createContext<IProjectState>({
  openProjects: [],
  project: null,
  hasBiddingEnded: false,
  status: null,
  loading: false,
  actionLoading: false,
  daysLeft: 0,
  loadingText: '',
  projects: [],
  activeProject: {},
  createProject(project) {
    return null as any
  },
  findProjects(query, fullSearch) {
    return null as any
  },
  findProject(query) {
    return null as any
  },
  findUserProjects(query) {
    return null as any
  },
  NewProject() {},
  setProject() {},
  updateProject(id, project) {
    return null as any
  },
  fetchProject(query) {},
  fetchAllProjects(query, fullSearch) {},
} as any)

const useProjectContext = () => {
  const context = React.useContext(ProjectContext)
  if (context === undefined) throw new Error('context doest not exist')
  return context
}

interface IProps {
  children: React.ReactNode
}

const ProjectContextProvider: React.FC<IProps> = ({ children }) => {
  const projectQuery = useProjectQuery();
  const [openProjects, setOpenProjects] = useState<IProject[]>([])
  const [project, setProject] = useState<IProject>()
  const [projects, setProjects] = useState<IProject[]>([])

  const router = useRouter()
  const session: any = useSession()
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

  const createProject = async (project: IProject): Promise<any> => {
    return new Promise<void>((resolve, reject) => {
      projectQuery.createProjectQ[0]({ variables: { project } })
      .then((res) => {
        successMsg('Success', 'Project Created Successfully')
        resolve(res?.data?.createProject)
      }).catch((err) => {
        errorMsg('Error', err)
        reject(err)
      })
    })
  }

  const findUserProjects = async (query: IQueryProjectInput): Promise<any> => {
    return new Promise<void>((resolve, reject) => {
      projectQuery.findProjectsQ[0]({ variables: { query } })
      .then((res) => {
        let openP = res?.data?.findProjects?.filter((item) => 
          item?.status == ProjectStatus[0] && calculateDaysLeft(item?.endDate)
        )
        let workP = res?.data?.findProjects?.filter((item) => item?.status == ProjectStatus[1])
        let completedP = res?.data?.findProjects?.filter((item) => item?.status == ProjectStatus[2])
        
        setOpenProjects(openP)        
        resolve(res?.data?.findProjects)
      }).catch((err) => {
        errorMsg('Error', err)
        reject(err)
      })
    })
  }

  const findProjects = async (query: IQueryProjectInput, fullSearch?: boolean): Promise<any> => {
    return new Promise<void>((resolve, reject) => {
      projectQuery.findProjectsFilterQ[0]({ variables: { query, fullSearch } })
      .then((res) => {
        setProjects(res?.data?.findProjectsFilter)
        resolve(res?.data?.findProjectsFilter)
      }).catch((err) => {
        errorMsg('Error', err)
        reject(err)
      })
    })
  }

  const findProject = async (query: IQueryProjectInput): Promise<any> => {
    return new Promise<void>((resolve, reject) => {
      projectQuery.findProjectQ[0]({ variables: { query } })
      .then((res) => {
        setProject(res?.data?.findOneProject)        
        resolve(res?.data?.findOneProject)
      }).catch((err) => {
        errorMsg('Error', err)
        reject(err)
      })
    })
  }

  const updateProject = async (id: string, project: IQueryProjectInput): Promise<any> => {
    return new Promise<void>((resolve, reject) => {
      projectQuery.updateProjectQ[0]({ variables: { id, project } })
      .then((res) => {
        successMsg('Success', 'Project Updated Successfully')
        findProject({_id: id})
        resolve(res?.data?.updateProject)
      }).catch((err) => {
        errorMsg('Error', err)
        reject(err)
      })  
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
        findUserProjects,
        project,
        setProject,
        openProjects,
        findProjects,
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
        loadingText,
        findProject,
        loading: projectQuery.loading,
        actionLoading: projectQuery.actionLoading
      } as any}
    >
      <>
        {notificationContext}
        {children}
      </>
    </ProjectContext.Provider>
  )
}

export { ProjectContextProvider, useProjectContext }
