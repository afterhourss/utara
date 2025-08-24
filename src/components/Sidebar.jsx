import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useState } from "react";

export default function Sidebar() {

  const [sidebar, setSidebar] = useState(true);

  return (
    <>
    {sidebar ?
    <>
    {/* empty div for making block space collide with other element */}
    <div className="lg:w-[30%] lg:h-[100vh]"></div>
    <div className="lg:flex flex-col lg:bg-[#121212] lg:border-r lg:border-[#2C2C2C] lg:w-[30%] lg:h-[100vh] lg:fixed transition-all">
      <MdKeyboardDoubleArrowLeft className="text-[#5B5B5B] hover:text-[#9C9C9C] text-4xl self-end m-3 transition-colors cursor-pointer hidden lg:block" onClick={() => setSidebar(!sidebar)}/>
        <div className="font-bold text-[#E7E7E7] text-2xl lg:text-4xl border-b border-[#2C2C2C] pl-7 pb-10 pt-5"><a href="/">NRTH.</a></div>
        <div className="p-7">
            <ul className="gap-7 flex flex-wrap flex-row text-[#5B5B5B] lg:flex-col text-xl">
                <li><a href="/#about">About me</a></li>
                <li><a href="/#target">Posts</a></li>
            </ul>
        </div>
    </div></> :
    <div className="bg-[#121212] lg:border-r lg:border-[#2C2C2C] w-[60px] h-[100vh] fixed p-2 hover:brightness-150 hover:text-[#9C9C9C] transition-all cursor-pointer hidden lg:block" onClick={() => setSidebar(!sidebar)}>
      <MdKeyboardDoubleArrowRight className="text-[#5B5B5B] mx-auto text-4xl hover:text-[#9C9C9C]"/>
    </div>}
    </>
  )
}
