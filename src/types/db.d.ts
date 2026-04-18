export interface User {
  id: string
  name: string | null
  username: string | null
  image: string | null
  email: string | null
}

export interface Subreddit {
  id: string
  name: string
  createdAt: Date
  creatorId: string | null
}

export interface Vote {
  userId: string
  type: 'UP' | 'DOWN'
}

export interface Comment {
  id: string
  postId: string
  replyToId: string | null
  text: string
  createdAt: Date
  author: User
}

export interface Post {
  id: string
  title: string
  content: any
  createdAt: Date
  subredditId: string
  authorId: string
}

export type ExtendedPost = Post & {
  subreddit: Subreddit
  votes: Vote[]
  author: User
  comments: Comment[]
}
