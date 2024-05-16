import formatDate from "@/utils/shared/formatDate";
import __Tag from "@/components/shared/__Tag";
import Comment from "@/components/shared/Comment";
import AdsComponent from "@/components/shared/AdComponent";
import prisma from "@/db";

// export const metadata = {
//   title: "Post",
// };

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
    include: {
      category: true,
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

  const fDate = post != null ? formatDate(post.createdAt) : null;

  return (
    <>
      <main className="mainComponent2 mt-2">
        <div className="relative w-full h-[300px] rounded-3xl overflow-hidden shadow-md shadow-yellow-400">
          <img
            // src="/assets/images/banner/pexels-dom-le-roy-3991976.jpg"
            src={post.img_url}
            className="object-cover w-full h-full"
            alt="Football"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
      </main>
      <main className="mainComponent relative -top-20 mb-[-5rem]">
        <div className="block md:flex bg-white rounded-xl shadow-lg p-5 gap-5">
          <div className="w-full md:w-4/6">
            {/* image */}
            <div className="w-[6rem] h-[6rem] relative -top-[70px] mb-[-60px] rounded-full border-2 border-white">
              <img
                src={post.img_url}
                alt={post.title}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            {/* category */}
            <div>
              <__Tag name={post.category.name} />
            </div>
            {/* post title */}
            <div className="my-3 font-bold text-2xl">{post.title}</div>
            {/* post author, date, views */}
            <div className="flex items-center gap-x-3 font-semibold mt-1">
              <div>{post.author}</div>
              <div className="text-gray-500">{fDate}</div>
              <div>.</div>
              <div className="text-gray-500"> {post.total_views} views</div>
            </div>
            {/* post content */}
            <div
              className="text-gray-500 mt-3 postContentContainer"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{ whiteSpace: "pre-wrap" }}
            />
            {/* google ad */}
            <AdsComponent dataAdSlot="4045176239" />
            {/* post tags */}
            {/* <div className="mt-5">
                  <div className="font-bold mb-2">Tags:</div>
                  <div className="flex gap-2 flex-wrap">
                    {post.tags.split(",").map((tag, index) => (
                      <__Tag key={index} name={tag.trim()} />
                    ))}
                  </div>
                </div> */}
            {/* comments */}
            <Comment post_id={post.id} post_slug={post.slug} />
          </div>
          <div className="mt-5 md:mt-0 w-full md:w-2/6 border-l-2 h-fit p-5">
                {/* email susccribe */}
          </div>
        </div>
      </main>
    </>
  );
}
