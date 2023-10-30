import { ProjectDetailsPage } from '@/src/modules/projects/details/page';
import React from 'react'

const edit = ({id, edit }) => {
  return <ProjectDetailsPage id={id} />
}

export default edit

export const getServerSideProps = async ({
  query,
  req,
}: {
  query: any;
  req: any;
}) => {
  // const session = await getSession({ req: req });
  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permenant: false,
  //     },
  //   };
  // }

 // console.log(query);
  
  const { id , edit } = query

//   const res = await UseGetCourseDetail(_id);

  // const course = null

  // if (!course) {
  //   return {
  //     notFound: true,
  //   };
  // }

  return {
    props: { id, edit }, // will be passed to the page component as props
  };
};
