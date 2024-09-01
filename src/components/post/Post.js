import classes from "./Post.module.css";
import { Link } from "react-router-dom";

function Post(props) {
  return (
    <>
      <Link to={props.id}>
        <div className={classes["post-list__post"]}>
          <p>{props.id}</p>
          <p>{props.title}</p>
          <p>{props.body}</p>
        </div>
      </Link>
    </>
  );
}

export default Post;
