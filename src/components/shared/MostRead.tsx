"use client";
import { useState, useEffect } from "react";
import ComponentTitle from "./ComponentTitle";
import axios from "axios";
import MostReadPostElem from "./MostReadPostElem";

export default function MostRead() {
  const [mostReadPosts, setMostReadPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    const fetchPost = async () => {
      try {
        const response = await axios.get("/api/posts/most-read");
        setMostReadPosts(response.data.data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching posts:", error);
      }
    };
    fetchPost();
  }, []);

  return (
    <>
      <div className="mt-5">
        <ComponentTitle
          title="Most Read (All Time)"
          url="/discover?sort_by=most-read"
        />
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2">
            {loading ? (
              <>
                <span className="text-gray-400">Loading...</span>
              </>
            ) : (
              ""
            )}
            {mostReadPosts.map((post:any, index) => (
              <MostReadPostElem
                url={"/post/" + post.slug}
                title={post.title}
                author={post.author}
                thumbnail={post.img_url}
                date={post.published_at}
                views={post.total_views}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
