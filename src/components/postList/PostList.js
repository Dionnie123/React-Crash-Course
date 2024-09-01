import classes from "./PostList.module.css";
import Post from "../post/Post";

import { useLoaderData } from "react-router-dom";

function PostList() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <div className={classes["post-list"]}>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          ))}
        </div>
      )}

      {posts.length === 0 && (
        <div style={{ textAlign: "center" }}>
          <h2>No Items added.</h2>
        </div>
      )}
    </>
  );
}
export default PostList;
