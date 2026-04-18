import MiniCreatePost from '@/components/MiniCreatePost'
import PostFeed from '@/components/PostFeed'

interface PageProps {
  params: {
    slug: string
  }
}

const page = ({ params }: PageProps) => {
  const { slug } = params

  return (
    <>
      <h1 className='font-bold text-3xl md:text-4xl h-14'>
        r/{slug}
      </h1>
      <MiniCreatePost session={null} />
      <PostFeed initialPosts={[]} subredditName={slug} />
    </>
  )
}

export default page
