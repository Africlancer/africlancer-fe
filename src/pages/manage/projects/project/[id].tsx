import { EditProjectPage } from '@/src/modules/projects/details/edit'
import React from 'react'

const EditProject = ({ id }) => {
  return <EditProjectPage id={id} edit={false} />
}

export default EditProject

export const getServerSideProps = async ({ query, req }: { query: any; req: any }) => {
  // const session = await getSession({ req: req });
  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permenant: false,
  //     },
  //   };
  // }

  const { id } = query

  //   const res = await UseGetCourseDetail(_id);

  // const course = null

  // if (!course) {
  //   return {
  //     notFound: true,
  //   };
  // }

  return {
    props: { id }, // will be passed to the page component as props
  }
}
