import PostBody from "@/components/shared/PostBody";
import formatDate from "@/utils/shared/formatDate";
import axios from "axios";
import __Tag from "@/components/shared/__Tag";
import Comment from "@/components/shared/Comment";
import AdsComponent from "@/components/shared/AdComponent";
import { useEffect, useState } from "react";
import prisma from "@/db";

export const metadata = {
  title: "Post",
};

export default async function Post({ params }: { params: { title: string } }) {
  const slug = params.title;

  if (!slug || slug == "" || slug === null || slug === undefined) {
    return (
      <>
        <main className="mainComponent">
          <div className="text-4xl font-bold text-white">Invalid Post.</div>
        </main>
      </>
    );
  }

  const post = await prisma.post.findFirst({
    where: {
      slug: slug,
    },
  });

  if (post) {
    const total_views: any = post.total_views;
    const post_id = post.id;

    const new_views: any = total_views + 1;

    await prisma.post.update({
      data: {
        total_views: new_views,
      },
      where: { id: post_id },
    });
  } else {
    return (
      <>
        <main className="mainComponent">
          <div className="text-4xl font-bold text-white">Post not found.</div>
        </main>
      </>
    );
  }

  return (
    <>
      <main className="mainComponent">
        <div>{slug}</div>
      </main>
    </>
  );
}
