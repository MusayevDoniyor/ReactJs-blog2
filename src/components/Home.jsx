import React from "react";
import Feed from "./Feed";

const Home = ({ posts, loading }) => {
  return (
    <main className="Home">
      {loading ? (
        <div className="spinner">
          <div className="spinner-inner"></div>
        </div>
      ) : posts.length ? (
        <Feed posts={posts} />
      ) : (
        <p style={{ marginTop: "5rem", textAlign: "center" }}>
          No posts to display.
        </p>
      )}
    </main>
  );
};

export default Home;
