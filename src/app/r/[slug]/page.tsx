import MiniCreatePost from '@/components/MiniCreatePost'
import PostFeed from '@/components/PostFeed'

interface PageProps {
  params: Promise<{ slug: string }>
}

const page = async ({ params }: PageProps) => {
  const { slug } = await params

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
