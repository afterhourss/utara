import clsx from "clsx"
export default function Button({title, bg}) {
  return (
    <button className={clsx(
        "px-3 py-2 rounded-md hover:cursor-pointer",
        {
            "bg-[#E6E6E6] text-black": bg,
            "bg-none text-[#E6E6E6] border border-gray-400": !bg,
        }
        )}>{title}</button>
  )
}
