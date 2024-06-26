import prisma from "@/db";
import { redirect } from "next/navigation";

export default async function Comment({ post_id,post_slug }: { post_id: string,post_slug:string }) {
  async function createComment(data: FormData) {
    "use server";
    const content = data.get("content")?.toString();
    if (!content) {
      return;
    }

    const comment = await prisma.comment.create({
      data: {
        postId: post_id,
        content,
      },
    });
    if (comment) {
      redirect("/post/"+post_slug);
    }
    return;
  }

  const comments = await prisma.comment.findMany({
    where: { postId: post_id },
  });

  const c_img_list = [
    "/assets/images/user-icon-1.png",
    "/assets/images/user-icon-2.png",
  ];

  return (
    <>
      <div className="mt-5">
        <form action={createComment}>
          <textarea
            placeholder="What's on your mind? (Anonymous)"
            className="outline-none rounded-lg border-2 p-5 w-full"
            required
            name="content"
          ></textarea>
          <br />
          <button
            className="uppercase py-3 px-10 w-fit bg-blue-500 text-white rounded-lg text-sm font-semibold tracking-[1px]"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      {/* list comments */}
      <div className="mt-2">
        <div className="font-bold mb-2">Comments:</div>
        {comments.length > 0 ? (
          <>
            <div className="">
              {comments.map((comment: any, index: number) => (
                <div
                  key={index}
                  className="mb-2 flex w-full gap-x-3 items-center"
                >
                  <div className="w-[50px]">
                    <img
                      src={
                        c_img_list[
                          Math.floor(Math.random() * c_img_list.length)
                        ]
                      } // Assuming your comment object contains c_img field
                      className="w-[70px] h-[70px]"
                    />
                  </div>
                  <div className="commentTextCont break-words">
                    <div className="font-bold">Anonymous</div>
                    <div>{comment.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="text-center">
              <div className="text-gray-500">No comment here</div>
              <div className="text-black font-bold">
                Be the first to comment
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
