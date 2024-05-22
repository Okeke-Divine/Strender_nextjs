// "use client";
// import { useState, useEffect } from "react";
import ComponentTitle from "./ComponentTitle";
import config from "@/data/config.json";
import prisma from "@/db";
import LatestNewsPost from "./LatestNewsPost";
import AdsterraAdIframe1 from "../ads/adsterra/AdsterraAdIframe1";
// import axios from "axios";

export default async function RelatedNews() {

  const randomPick = (array: any) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const _orderBy: any = randomPick(["id", "title","categoryId","img_url","slug","author","summary","content","createdAt","tags","total_views"]);
  const _orderDir = randomPick(["asc", "desc"]);

  const lastestNewsDesc = config.lastes_news_description;

  const lastestNews:any = await prisma.post.findMany({
    orderBy: { [_orderBy]: _orderDir },
    take: 6,
  });



  // const [lastestNews, setLatestNews] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(function () {
  //   const fetchNews = async () => {
  //     try {
  //       const response = await axios.get("/api/posts/random");
  //       setLatestNews(response.data.data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching news:", error);
  //     }
  //   };
  //   fetchNews();
  // }, []);

  return (
    <>
      <div className="mt-5">
        <ComponentTitle title="Related News" url="" />
        <div className="mt-1 text-gray-400 font-semibold">
          {lastestNewsDesc}
        </div>
        <div className="mt-5">
          <div className="grid grid-cols-1 md:md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* {loading ? (
              <>
                <span className="text-gray-400">Loading...</span>
              </>
            ) : (
              ""
            )} */}
            {lastestNews.map((news: any, index: number) => (
              <LatestNewsPost
                title={news.title}
                previewText={news.summary}
                url={"/post/" + news.slug}
                thumbnail={news.img_url}
                author={news.author}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
      <AdsterraAdIframe1 />
    </>
  );
}
