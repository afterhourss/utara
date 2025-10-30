import { siteConfig } from "../config/site";

export default function Footer() {
  return (
    <div className="flex text-[#9C9C9C] gap-10 items-center justify-between mt-20 py-6">
      <div className="hidden md:block">Personal site</div>
      <div className="flex gap-3 items-center">
        <span class="relative flex h-3 w-3">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-green-700"></span>
        </span>
        <div>All system normal</div>
      </div>
      <div className="flex items-center text-3xl gap-5">
        {siteConfig.socials.map(({ link, icon: Icon }, i) => (
          <a
            key={i}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <Icon />
          </a>
        ))}
      </div>
    </div>
  );
}
