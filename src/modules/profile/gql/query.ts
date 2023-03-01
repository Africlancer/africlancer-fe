import { useMutation, gql } from "@apollo/client";

const ADD_PUBLICATION = gql`
    mutation AddOrUpdatePublication($publication: PublicationInput!) {
        addOrUpdatePublication(publication: $publication)
}
`

const ADD_QUALIFICATION = gql`
    mutation AddOrUpdateQualifications($qualification: QualificationInput!) {
        addOrUpdateQualification(qualification: $qualification)
}
`
const ADD_EDUCATION = gql`
    mutation AddOrUpdateEducation($education: EducationInput!) {
        addOrUpdateEducation(education: $education)
}
`
const ADD_EXPERIENCE = gql`
    mutation AddOrUpdateExperience($experience: ExperienceInput!) {
        addOrUpdateExperience(experience: $experience)
}
`

const FIND_ONE_PROFILE = gql`
    query FindOneProfile {
        findOneProfile {
            avatar,
            banner,
            hourlyRate,
            professionalHeadline,
            summary,
            recommendations,
            publication { title, publisher, summary, _id  }
            qualification { title, conferringOrganization, summary, startYear, _id  }
            education { country, insitution, degree, startYear, endYear, _id }
            experience { title, company, startMonth, startYear, endMonth, endYear, working, summary, _id  }
        }
    }
`

const UPDATE_PROFILE = gql`
    mutation UpdateProfile($profile: QueryProfileInput!){
    updateProfile(profile: $profile)
  }
`
const DELETE_EDUCATION = gql`
    mutation DeleteEducation($educationID: String!){
        deleteEducation(educationID: $educationID)
  }
`
const DELETE_EXPERIENCE = gql`
    mutation DeleteExperience($experienceID: String!){
        deleteExperience(experienceID: $experienceID)
  }
`  
const DELETE_PUBLICATION = gql`
    mutation DeletePublication($publicationID: String!){
        deletePublication(publicationID: $publicationID)
  }
`
const DELETE_QUALIFICATION = gql`
    mutation DeleteQualification($qualificationID: String!){
        deleteQualification(qualificationID: $qualificationID)
  }
`

export { DELETE_EXPERIENCE, DELETE_EDUCATION, ADD_PUBLICATION, ADD_QUALIFICATION, FIND_ONE_PROFILE, 
    UPDATE_PROFILE, ADD_EDUCATION, ADD_EXPERIENCE, DELETE_PUBLICATION, DELETE_QUALIFICATION }