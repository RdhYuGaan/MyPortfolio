import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ imgSrc, altText, title, link, description }) {
  return (
    <div className="relative mt-12 group w-full max-w-sm mx-auto">
      <Image
        src={imgSrc}
        alt={altText}
        width={500}
        height={300}
        className="object-cover object-center rounded-lg"
      />

      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 bg-black bg-opacity-0 rounded-lg group-hover:bg-opacity-75">
        <div className="text-center transition-opacity duration-500 opacity-0 group-hover:opacity-100 px-4">
          <h3 className="text-white text-xl font-semibold">{title}</h3>
          <p className="text-white mt-2 text-sm">{description}</p>
          <button
            onClick={link}
            className="px-4 py-2 text-sm font-semibold text-white transition duration-500 bg-[#0B7474] rounded-2xl hover:bg-[#095f5f] mt-8"
          >
            Preview Live Site
          </button>
        </div>
      </div>
    </div>
  );
}