export interface Profile {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  appUserRole: string,
  locked: boolean,
  enabled: boolean,
  role: null,
  userProfile: {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    team: string | null,
    skills: [],
    certifications: [],
    profilePic: null,
    jobTitle: string | null,
    username: string
  },
  username: string,
  authorities: [],
  accountNonExpired: boolean,
  accountNonLocked: boolean,
  credentialsNonExpired: boolean
}
