export interface Art {
  id: number
  title: string
  description: string
  url: string
  user: User
  thumbnail: string
  createdAt: string
}

export interface User {
  name: string
}
