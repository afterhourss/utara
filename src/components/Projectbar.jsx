import { MdOutlineArrowOutward } from "react-icons/md";
import Tag from "./Tag";
function limitWords(str, limit) {
  if (str.length <= limit) return str; // kalau kurang dari limit, kembalikan utuh
  
  return str.slice(0, limit) + "..."; // ambil limit kata + "..."
}

export default function Projectbar({projectName, image, desc, source, link}) {
  return (
    <div className="text-white xl:h-[250px] flex flex-col xl:flex-row bg-[#141414] border border-[#292929] brightness-75 hover:brightness-100 transition-all box-border">
      <img src={image} alt="" className="object-cover xl:rounded-l-md h-full"/>
      <div className="p-8 flex flex-col justify-between">
        <div>
          <div className="text-[#9C9C9C]">{projectName}</div>
          <div className="text-[#5B5B5B] text-justify">{limitWords(desc, 100)}</div>
        </div>
          
          <MdOutlineArrowOutward className="text-[#5B5B5B] hover:text-[#9C9C9C] transiton-colors text-3xl cursor-pointer self-end"/>
          
      </div>
      <a href={`/posts/${link}`} className="absolute inset-0 z-10 indent-[-9999px]">

      </a>
    </div>
  )
}
