import React from "react";
import Heading from "../extras/Heading";
import BlogMini from "./BlogMini";

const BlogsMini = ({ tagline, heading, blogs }) => {
  return (
    <section className="blogs pb-20">
      <div className="container">
        <Heading tagline={tagline}>{heading}</Heading>
        <div className="flex mt-20 gap-8">
          {blogs.map((blog) => {
            return <BlogMini key={blog.url} {...blog} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogsMini;
