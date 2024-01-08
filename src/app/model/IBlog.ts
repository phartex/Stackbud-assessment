export interface IBlogResponse {
    data: IBlogResponseData[]
    total: number
    page: number
    limit: number
  }
  
  export interface IBlogResponseData {
    id: string
    title: string
    firstName: string
    lastName: string
    picture: string
  }

  export interface IBlog {
    id: string
    title: string
    firstName: string
    lastName: string
    picture: string
    gender: string
    email: string
    dateOfBirth: string
    phone: string
    location: Location
    registerDate: string
    updatedDate: string
  }
  
  export interface Location {
    street: string
    city: string
    state: string
    country: string
    timezone: string
  }
  