export interface Art {
  title: string
  description: string
  url: string
  user: User
  tags: Tag[]
  thumbnail: string
  createdAt: string
}

export interface User {
  name: string
}

export interface Tag {
  name: string
}
