// import AdsterraAdComponent1 from "@/components/ads/adsterra/AdsterraAdComponent1";
import prisma from "@/db";
import LatestNewsPost from "@/components/shared/LatestNewsPost";
import { incrementTotalViews } from "@/store";

export async function generateMetadata({params:{name}}:{params:{name:string}}){
  const category_name = decodeURIComponent(name);
  const category = await prisma.category.findFirst({
    where: { name: category_name },select:{name:true}
  });
  return {
    title: category?.name + " | Category"
  }
}

export default async function CatergoryByName({
  params,
}: {
  params: { name: string };
}) {
  incrementTotalViews();
  const category_name = decodeURIComponent(params.name);
  const category = await prisma.category.findFirst({
    where: { name: category_name },
  });

  if (!category || category === null) {
    return (
      <>
        <div className="mainComponent">
          <div className="text-4xl font-bold text-white">
            The category does not exist
          </div>
        </div>
      </>
    );
  }

  const posts = await prisma.post.findMany({
    where: {
      categoryId: category.id,
    },
    orderBy: {
      createdAt: 'desc', 
    },
    take: 9,
  });

  return (
    <>
      <div className="mainComponent">
      {/* <AdsterraAdComponent1 /> */}
        <div className="grid grid-cols-1 md:md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {posts.map((post, index) => (
            <LatestNewsPost
              title={post.title}
              previewText={post.summary}
              url={"/post/" + post.slug}
              thumbnail={post.img_url}
              author={post.author}
              key={index}
            />
          ))}
          {posts.length < 1 ? (
            <>
              <div className="text-2xl font-bold text-gray-500">
                No post was found under this category!
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}
