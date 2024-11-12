import Image from "next/image";

function TestimonialCard({testimonial}) {
  return (
    <div className="flex-none w-[300px] md:w-[600px] md:h-[300px] p-4 bg-[#f8f8f8] 
    rounded-3xl lg:p-12 shadow-md my-6">
        <p className="mt-8 text-black/60">{testimonial.review}</p>
        <div className="flex items-center gap-4 mt-4">
            <Image 
                src={testimonial.imgSrc} 
                alt={testimonial.name}
                width={64}
                height={64}
                className="rounded-full"

            />    
            <h3 className="font-bold">{tesstimonial.name}</h3>
        </div>
    </div>
  )
  
}

export default TestimonialCard;
