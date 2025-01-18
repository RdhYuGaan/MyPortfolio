import Image from "next/image";


export default function ProjectCard({ imgSrc, altText, title, description }) {
  return (
    <div className="relative mt-12 group w-full max-w-sm mx-auto">
      {/* Image */}
      <Image
        src={imgSrc}
        alt={altText}
        width={500}
        height={300}
        className="object-cover object-center rounded-lg"
      />
      
      {/* Overlay for title and description */}
      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 bg-black bg-opacity-0 rounded-lg group-hover:bg-opacity-75">
        <div className="text-center transition-opacity duration-500 opacity-0 group-hover:opacity-100">
          <h3 className="text-white text-xl font-semibold">{title}</h3>
          <p className="text-white mt-2 text-sm">{description}</p>
          <button className="px-4 py-2 text-sm font-semibold text-white transition duration-500 bg-[#B7474] rounded-md hover:bg-[#0B7474] mt-4">
            Preview live Site
          </button>
        </div>
      </div>
    </div>
  );
}
