export interface Art {
  title: string
  description: string
  url: string
  tags: Tag[]
  thumbnail: string
  createdAt: string
}

export interface Tag {
  name: string
}
