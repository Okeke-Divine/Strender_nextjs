import prisma from "@/db";
import { generateSlug, generateRandomString } from "@/utils/shared/base";
import { redirect } from "next/navigation";

export default async function CreatePost() {
  const categories = await prisma.category.findMany();

  async function addPost(data: FormData) {
    "use server";
    const title = data.get("title")?.toString();
    const img_url = data.get("img_url")?.toString();
    const categoryId = data.get("categoryId")?.toString();
    const summary = data.get("summary")?.toString();
    const content = data.get("content")?.toString();

    if (!title || !img_url || !categoryId || !summary || !content) {
      return;
    }

    const slugBase = generateSlug(title);
    const randomString = generateRandomString(6);
    const slug = `${slugBase}-${randomString}`;

    // const tags = title.split(" ").join(",");

    const post = await prisma.post.create({
      data: {
        categoryId,
        title,
        img_url,
        author: "Admin",
        summary,
        content,
        slug,
        // tags,
      },
    });

    if (post) {
      redirect("/post/" + slug);
    } else {
      redirect("/sdf/qf/qefq9fksd/fasdfasfa");
    }
  }

  return (
    <>
      <div className="mainComponent text-white">
        <form action={addPost}>
          <input required name="title" placeholder="Title" className="input2" />
          <br />
          <input
            required
            name="img_url"
            placeholder="img_url"
            className="input2"
          />
          <br />
          <select required className="input2 text-bal" name="categoryId">
            <option hidden disabled>
              select
            </option>
            {categories.map((category: any, index: number) => (
              <option key={index} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <br />
          <textarea
            required
            placeholder="Summary"
            name="summary"
            className="input2"
            rows={2}
          ></textarea>
          <br />
          <textarea
            required
            placeholder="content"
            name="content"
            className="input2"
            rows={15}
          ></textarea>
          <br />
          <button className="bg-orange-400 text-white py-2 px-3 rounded-lg">
            Add
          </button>
        </form>
      </div>
    </>
  );
}
