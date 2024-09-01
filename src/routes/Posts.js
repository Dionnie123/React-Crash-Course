import PostList from "../components/postList/PostList";
import { Outlet } from "react-router-dom";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const endpoint = "http://localhost:8080/posts";
  const response = await fetch(endpoint);
  const resData = await response.json();
  return resData.posts;
}
