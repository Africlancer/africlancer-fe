import { useMutation, gql } from "@apollo/client";

const ADD_PUBLICATION = gql`
    mutation AddOrUpdatePublications($publication: PublicationsInput!) {
        addOrUpdatePublications(publication: $publication)
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
            publications { title, publisher, summary }
            qualification { title, conferringOrganization, summary, startYear }
            education { country, insitution, degree, startYear, endYear }
            experience { title, company, startMonth, startYear, endMonth, endYear, working, summary }
        }
    }
`

const UPDATE_PROFILE = gql`
    mutation UpdateProfile($profile: QueryProfileInput!){
    updateProfile(profile: $profile)
  }
`

export { ADD_PUBLICATION, ADD_QUALIFICATION, FIND_ONE_PROFILE, UPDATE_PROFILE, ADD_EDUCATION, ADD_EXPERIENCE }