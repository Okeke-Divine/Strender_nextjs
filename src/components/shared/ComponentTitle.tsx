import Link from "next/link";

export default function ComponentTitle({
  title,
  url,
}: {
  title: string;
  url: string;
}) {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold text-white">{title}</div>
        <div>
          {(url != null || url == "") ? (
            <Link
              href={url}
              className="cs-text-yellow-1 opacity-70 hover:opacity-100 duration-300 font-bold"
            >
              See More
            </Link>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
