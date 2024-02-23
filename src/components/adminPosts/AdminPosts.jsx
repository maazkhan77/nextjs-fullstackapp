import { getPosts } from "@/lib/data"
import styles from "./adminPosts.module.css"
import { deletePost } from "@/lib/action"
import Image from "next/image"

const AdminPosts = async () => {
  const posts = await getPosts()

  const deletePostWithId = (id) => {
    return deletePost.bind(null, id)
  }
  return (
    <div className={styles.container}>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <div className={styles.detail}>
            <Image src={post.img || "noAvatar.png"} alt="" width={50} height={50} />
            <span>{post.title}</span>
          </div>
          <form action={() => deletePostWithId(post.id)}>
          {/* <form action={deletePost}> */}
          <input type="hidden" name="id" value={post.id} />
            <button>Delete</button>
          </form>
        </div>
      ))}
    </div>
  )
}

export default AdminPosts 