import Link from "next/link"

export default function CategoryCardCircle({
  title,
  url,
}: {
  title: string;
  url: string;
}) {
  return (
    <>
      <Link href={url}>
        <div className="w-fit cursor-pointer duration-300 hover:opacity-70">
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-blue-200"></div>
          </div>
          <div className="text-center text-gray-400 mt-1">{title}</div>
        </div>
      </Link>
    </>
  );
}
