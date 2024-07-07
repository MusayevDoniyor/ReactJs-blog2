import { useParams, Link, useNavigate } from "react-router-dom";

const PostPage = ({ posts, handleDelete, deleting }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  const navigate = useNavigate();

  return (
    <main className="PostPage">
      <article className="post">
        {post ? (
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <button disabled={deleting} onClick={() => handleDelete(post.id)}>
              {deleting ? "In progress..." : "Delete Post"}
            </button>
            <button
              style={{ marginLeft: "10px", backgroundColor: "#777" }}
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <h2>Post Not Found</h2>
            <p>Well, that's disappointing.</p>
            <p>
              <Link to="/">Visit Our Homepage</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;
