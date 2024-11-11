import Image from '/next/image';
function SrevicesCard ({imgSrc, altText,title,description}) {
  return (
    <div className='p-6 mg-[#f8f8f8] hover:cursor-pointer
    hover:bg-orange-100 transition duration-500 rounded-lg
    shadow-md'>
        <Image
            src={imgSrc}
            width={49}
            height={48}
            alt={altText}
            className='mb-4'
        />
        <h3 className='mb-2 text-xl font-bold'>{title}</h3>
        <p className='text-black/60'>hii anndqjhhj gergehejhrh grhethh gerenhih bdthtrhtrhd</p>

    </div>
  );
  
}

export default SrevicesCard;
