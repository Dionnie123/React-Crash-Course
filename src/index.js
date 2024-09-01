import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Posts, { loader as postsLoader } from "./routes/Posts";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import PostForm, { action as newPostForm } from "./routes/postForm/PostForm";

import RootLayout from "./routes/RootLayout";
import PostDetails, {
  loader as postDetailsLoader,
} from "./routes/postDetails/postDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsLoader,
        children: [
          { path: "/create-post", element: <PostForm />, action: newPostForm },
          {
            path: "/:postId",
            element: <PostDetails />,
            loader: postDetailsLoader,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
