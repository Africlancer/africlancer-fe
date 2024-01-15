import { useMutation, gql, useLazyQuery } from '@apollo/client'

const ADD_OR_UPDATE_PUBLICATION = gql`
  mutation AddOrUpdatePublication($publication: PublicationInput!) {
    addOrUpdatePublication(publication: $publication)
  }
`
const ADD_OR_UPDATE_QUALIFICATION = gql`
  mutation AddOrUpdateQualification($qualification: QualificationInput!) {
    addOrUpdateQualification(qualification: $qualification)
  }
`
const ADD_OR_UPDATE_EDUCATION = gql`
  mutation AddOrUpdateEducation($education: EducationInput!) {
    addOrUpdateEducation(education: $education)
  }
`
const ADD_OR_UPDATE_EXPERIENCE = gql`
  mutation AddOrUpdateExperience($experience: ExperienceInput!) {
    addOrUpdateExperience(experience: $experience)
  }
`
const FIND_ONE_PROFILE = gql`
  query FindOneProfile {
    findOneProfile {
      location
      # flagURL
      avatar
      skills
      banner
      hourlyRate
      professionalHeadline
      summary
      recommendations
      publication {
        title
        publisher
        summary
        _id
      }
      qualification {
        title
        conferringOrganization
        summary
        startYear
        _id
      }
      education {
        country
        insitution
        degree
        startYear
        endYear
        _id
      }
      experience {
        title
        company
        startMonth
        startYear
        endMonth
        endYear
        working
        summary
        _id
      }
    }
  }
`
const FIND_USER_AVATAR = gql`
  query FindOneProfile {
    findOneProfile {
      avatar
    }
  }
`
const FIND_PROFILES = gql`
  query FindProfiles($query: QueryProfileInput!) {
    findProfiles(query: $query) {
      avatar
      hourlyRate
      professionalHeadline
      summary
    }
  }
`
const FIND_USERS = gql`
  query FindUsers($query: QueryUserInput!) {
    findUsers(query: $query) {
      firstName
      lastName
      email
      username
    }
  }
`
const UPDATE_PROFILE = gql`
  mutation UpdateProfile($profile: QueryProfileInput!) {
    updateProfile(profile: $profile)
  }
`
const DELETE_EDUCATION = gql`
  mutation DeleteEducation($educationID: String!) {
    deleteEducation(educationID: $educationID)
  }
`
const DELETE_EXPERIENCE = gql`
  mutation DeleteExperience($experienceID: String!) {
    deleteExperience(experienceID: $experienceID)
  }
`
const DELETE_PUBLICATION = gql`
  mutation DeletePublication($publicationID: String!) {
    deletePublication(publicationID: $publicationID)
  }
`
const DELETE_QUALIFICATION = gql`
  mutation DeleteQualification($qualificationID: String!) {
    deleteQualification(qualificationID: $qualificationID)
  }
`

export default function useProfileQuery () {
  const findOneProfileQ = useLazyQuery(FIND_ONE_PROFILE, {fetchPolicy: "no-cache"});
  const findOneProfileQ2 = useLazyQuery(FIND_ONE_PROFILE, {fetchPolicy: "no-cache"});
  const updateProfileQ = useMutation(UPDATE_PROFILE)
  const addOrUpdateQualificationQ = useMutation(ADD_OR_UPDATE_QUALIFICATION)
  const addOrUpdatePublicationQ = useMutation(ADD_OR_UPDATE_PUBLICATION)
  const addOrUpdateEducationQ = useMutation(ADD_OR_UPDATE_EDUCATION)
  const addOrUpdateExperienceQ = useMutation(ADD_OR_UPDATE_EXPERIENCE)
  const deleteEducationQ = useMutation(DELETE_EDUCATION)
  const deleteExperienceQ = useMutation(DELETE_EXPERIENCE)
  const deletePublicationQ = useMutation(DELETE_PUBLICATION)
  const deleteQualificationQ = useMutation(DELETE_QUALIFICATION)

  return {
    findOneProfileQ,
    updateProfileQ,
    addOrUpdateQualificationQ,
    addOrUpdatePublicationQ,
    addOrUpdateEducationQ,
    addOrUpdateExperienceQ,
    deleteEducationQ,
    deleteExperienceQ,
    deletePublicationQ,
    deleteQualificationQ,

    loading: findOneProfileQ[1].loading,
    actionLoading: 
      updateProfileQ[1].loading || 
      addOrUpdateQualificationQ[1].loading ||
      addOrUpdatePublicationQ[1].loading ||
      addOrUpdateEducationQ[1].loading ||
      addOrUpdateExperienceQ[1].loading ||
      deleteEducationQ[1].loading ||
      deleteExperienceQ[1].loading ||
      deletePublicationQ[1].loading ||
      deleteQualificationQ[1].loading
  }
}

export const useUpdateProfile = (callback: (rs: any) => void) => {
  return useMutation(UPDATE_PROFILE, {
    onCompleted: (rs) => {
      if (rs?.updateProfile) {
        callback(rs?.updateProfile)
      }
    },
    onError: (error: any) => {
      console.log(error)
    },
  })
}

export {
  DELETE_EXPERIENCE,
  DELETE_EDUCATION,
  FIND_ONE_PROFILE,
  FIND_USER_AVATAR,
  FIND_USERS,
  UPDATE_PROFILE,
  DELETE_PUBLICATION,
  DELETE_QUALIFICATION,
  FIND_PROFILES,
}