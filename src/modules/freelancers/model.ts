export interface IQueryFreelancerInput {
    _id?: string
    userID?: string
    avatar?: string
    banner?: string
    location?: string
    hourlyRate?: number
    professionalHeadline?: string
    summary?: string
    recommendations?: number
    skills?: any[]
    clientRating?: number
    freelancerRating?: number
    flagURL?: string
    fullName?: string
    minRate?: number
    maxRate?: number
  }