"use client";
import ComponentTitle from "./ComponentTitle";
import CategoryCardCircle from "./CategoryCardCircle";

export const dynamic = 'force-dynamic'; 

export default function Category(){

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    return (
        <>
          <div className="mt-5">
            <ComponentTitle title="Category" url="/category" />
            {/* list of sports */}
            <div className="flex gap-x-5 overflow-auto whitespace-nowrap mt-2 scroll-bar-track-2">
              {loading ? (
                <>
                  <span className="text-gray-400">Loading...</span>
                </>
              ) : (
                ""
              )}
              {categories.map((category, index) => (
                <CategoryCardCircle
                  title={category.name}
                  url={"/category/" + category.name}
                  key={index}
                />
              ))}
            </div>
          </div>
        </>
      );
}