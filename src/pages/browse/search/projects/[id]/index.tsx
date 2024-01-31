import { MainLayout } from '@/src/modules';
import { useProjectContext } from '@/src/modules/project/context';
import { ProjectDetailsPage } from '@/src/modules/project/detail/page';
import { findProjectAsync } from '@/src/modules/project/gql/query';
import { IProject } from '@/src/modules/project/model';
import { getSession } from 'next-auth/react';
import React, { useEffect } from 'react'

interface IProps {
  project: IProject
}

const ProjectDetail: React.FC<IProps> = ({project}) => {
  const {setProject} = useProjectContext()

  useEffect(() => {
    setProject(project)
  }, [])

  return (
    <MainLayout pageTitle={`Africlancer | ${project?.title}`}>
      <ProjectDetailsPage/>
    </MainLayout>
  )
}

export default ProjectDetail

export async function getServerSideProps({
  req,
  query,
}: {
  req: any;
  query: any;
}) {
  const session: any = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    }
  }

  const project = await findProjectAsync({_id: query?.id}, session?.token);

  if(session?.user?._id == project?.userId){
    return {
      redirect: {
        destination: `/my-projects/${query?.id}`,
        permanent: false,
      },
    }
  }

  return {
    props: {
      project
    },
  };
}