import { Suspense } from "react"
import styles from "./admin.module.css"
import AdminPosts from "@/components/adminPosts/adminPosts"
import AdminPostsForm from "@/components/adminPostForm/adminPostForm"
import AdminUsersForm from "@/components/adminUserForm/AdminUsersForm"
import AdminUsers from "@/components/adminUsers/adminUsers"

const AdminPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={styles.col}>
            <AdminPostsForm />
        </div>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className={styles.col}>
            <AdminUsersForm />
        </div>
      </div>
    </div>
  )
}

export default AdminPage