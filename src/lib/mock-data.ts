import type {
  Comment,
  ExtendedPost,
  Subreddit,
  User,
} from '@/types/db'

export const mockUser: User = {
  id: 'mock-user-id',
  name: 'Guest',
  username: 'guest',
  image: null,
  email: 'guest@example.com',
}

export const mockSubreddit: Subreddit = {
  id: 'mock-subreddit-id',
  name: 'breadit',
  createdAt: new Date(),
  creatorId: mockUser.id,
}

export const mockPosts: ExtendedPost[] = [
  {
    id: 'mock-post-1',
    title: 'Welcome to Breadit',
    content: {
      time: 0,
      blocks: [
        {
          type: 'paragraph',
          data: {
            text: 'This is a static shell of Breadit with no backend.',
          },
        },
      ],
      version: '2.27.0',
    },
    createdAt: new Date(),
    subredditId: mockSubreddit.id,
    authorId: mockUser.id,
    subreddit: mockSubreddit,
    votes: [],
    author: mockUser,
    comments: [],
  },
  {
    id: 'mock-post-2',
    title: 'Static example post',
    content: {
      time: 0,
      blocks: [
        {
          type: 'paragraph',
          data: { text: 'Another sample post with no data source.' },
        },
      ],
      version: '2.27.0',
    },
    createdAt: new Date(),
    subredditId: mockSubreddit.id,
    authorId: mockUser.id,
    subreddit: mockSubreddit,
    votes: [],
    author: mockUser,
    comments: [],
  },
]

export const mockComments: Comment[] = []
