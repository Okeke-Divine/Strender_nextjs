"use client";
import ComponentTitle from "./ComponentTitle";
import axios from "axios";
import CategoryCardCircle from "./CategoryCardCircle";
import { useState,useEffect } from "react";

export const dynamic = 'force-dynamic'; 

export default function Category(){
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
          try {
            const response = await axios.get("/api/categories/");
            setCategories(response.data.data);
            setLoading(false);
          } catch (error) {
            console.error("Error fetching categories:", error);
          }
        };
    
        fetchCategories();
      }, []);

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
              {categories.map((category:any, index) => (
                <CategoryCardCircle
                  title={category.name}
                  thumbnail={category.img_url}
                  url={"/category/" + category.name}
                  key={index}
                />
              ))}
            </div>
          </div>
        </>
      );
}