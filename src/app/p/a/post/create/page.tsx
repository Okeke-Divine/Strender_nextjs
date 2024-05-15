import prisma from "@/db";

export default async function CreatePost() {
  const categories = await prisma.category.findMany();

  return (
    <>
      <div className="mainComponent text-white">
        <form>
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
          <button>Add</button>
        </form>
      </div>
    </>
  );
}
