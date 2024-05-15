export default function __Tag({ name }:{name:string}) {
    return (
      <>
        <div className="py-2 px-3 bg-blue-100 text-blue-500 w-fit font-semibold tracking-[1px]">{name}</div>
      </>
    );
  }