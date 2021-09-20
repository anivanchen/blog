import DefaultLayout from '@layouts/default'
import Link from 'next/link'
import { getConfig, getAllPosts } from '@api'

export default function Blog(props) {
  return (
    <DefaultLayout title={props.title} description={props.description}>
      <h2>Posts</h2>
      {props.posts.map(function(post, idx){
        return (
          <Link href={'/posts/'+post.slug}>
            <a><p>{post.title}</p></a>
          </Link>
        )
      })}
    </DefaultLayout>
    )
} 

export async function getStaticProps(){
  const config = await getConfig()
  const allPosts = await getAllPosts()

  return {
    props: {
      posts: allPosts,
      title: config.title,
      description: config.description
    }
  }
}
