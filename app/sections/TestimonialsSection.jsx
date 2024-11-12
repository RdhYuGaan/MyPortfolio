import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { testimonials } from "../utils/dataBase";


return function TestimonialsSection() {
  return (
    <section 
        id="testimonials"
        className="my-[3rem] w-full md:my-[6rem] overflow-x-clip">
    
         <h2 className="mb-4 text-3xl font-bold text-center lg:mb-8">
               Testimonimals
         </h2>

            <p className="mb-4 lg:mb-8 text-center mx-auto max-w-[36rem] text-black/60">
                hear what my client have to say about their experience and the value
                 i brought to their projects through creativety and collabaration
            </p>

            <div className="w-screen">
                <InfiniteMovingCards
                     items={testimonials}
                     direction="left"
                     speed="normal"
                />     
            </div>

    </section>
)
  
}
export default TestimonialsSection;