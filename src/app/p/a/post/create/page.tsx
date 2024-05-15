import prisma from "@/db";

export default async function CreatePost() {
  const categories = await prisma.category.findMany();

    async function addPost(data:FormData){
        "use server"
        const title = data.get("title")?.toString()
        const img_url = data.get("img_url")?.toString()
        const categoryId = data.get("categoryId")?.toString()
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
          <textarea placeholder="Summary" name="summary" className="input2" rows={2}></textarea><br />
          <textarea placeholder="c  ontent" name="content" className="input2" rows={5}></textarea><br />
          <button>Add</button>
        </form>
      </div>
    </>
  );
}
