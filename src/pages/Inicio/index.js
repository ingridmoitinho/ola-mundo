import styles from "./Inicio.module.css";
import PostCard from "../../components/PostCard";

import posts from "../../json/posts.json";

export default function Inicio() {
  return (
    <main>
      <ul className={styles.posts}>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <PostCard post={post} />
            </li>
          );
        })}
      </ul>
    </main>
  );
}
