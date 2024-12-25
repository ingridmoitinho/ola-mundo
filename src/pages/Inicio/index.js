import Banner from '../../components/Banner';
import styles from "./Inicio.module.css";
import Post from '../../components/Post';

import posts from '../../json/posts.json';

export default function Inicio() {
    return (

        <main>
        <Banner />

      <ul className={styles.posts}> 
      {posts.map((post) => {
        return (
          <li key={post.id}>
         <Post post={post} />
           </li>
        );
      })}	
      </ul>
   </main>


    );
  }