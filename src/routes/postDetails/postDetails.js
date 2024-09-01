import { useLoaderData, Link } from "react-router-dom";

import Modal from "../../components/modal/Modal";
import classes from "../postDetails/postDetails.module.css";

function PostDetails() {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.id}>{post.id}</p>
        <p className={classes.title}>{post.title}</p>
        <p className={classes.body}>{post.body}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;

export async function loader({ params }) {
  const endpoint = "http://localhost:8080/posts/" + params.postId;
  const response = await fetch(endpoint);
  const resData = await response.json();
  return resData.post;
  // return { title: "fdsfsf", body: "fdsfsf", id: "5555" };
}
