import Link from "next/link";

export default function SocialIconComp1({
  iconClass,
  url,
}: {
  iconClass: string;
  url: string;
}) {
  return (
    <>
      <Link href={url} target={"_blank"} className="site_postLinks">
        <div className="rounded-full bg-gray-600 w-10 h-10 text-white flex justify-center items-center">
          <i className={`${iconClass} relative top-[0.1rem]`}></i>
        </div>
      </Link>
    </>
  );
}
