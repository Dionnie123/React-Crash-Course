import Modal from "../../components/modal/Modal";
import classes from "./PostForm.module.css";

import { Form, redirect } from "react-router-dom";
import { Link } from "react-router-dom";
function PostForm() {
  return (
    <>
      <Modal>
        <Form method="post" className={classes.form}>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="body">Body</label>
            <textarea id="body" name="body" required rows={3} />
          </p>
          <p className={classes.actions}>
            <Link to=".." type="button">
              Cancel
            </Link>

            <button type="submit">Submit</button>
          </p>
        </Form>
      </Modal>
    </>
  );
}

export default PostForm;

export async function action({ request }) {
  const endpoint = "http://localhost:8080/posts";
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return redirect("/");
}
