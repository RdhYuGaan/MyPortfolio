import Image from "next/image";

export default function ProjectCard({ imgSrc, altText, title }) {
  return (
    <div className="relative mt-12 group" style={{ width: '100%', height: '100%' }}>
      <Image
        src={imgSrc}
        alt={altText}
        fill={true}
        className="object-cover o bject-center rounded-lg"
      />
      <div className="absolute inset-0 flex items-center justify-center transition-opacity 
      duration-500 bg-black bg-opacity-0 rounded-lg group-hover:bg-opacity-75">
        <div className="text-center transition-opacity duration-500 opacity-0 group-hover:opasity-100">
            <h3 className="text-white text-xl font-semibold">{title}</h3>
            <button className="px-4 py-2 text-sm font-semibold text-white transition duration-500 bg-orange-500
            rounded-md hover:bg-orange-700">
                Preview live Site
            </button>
        </div>
        
      </div>
    </div>
  );
}
