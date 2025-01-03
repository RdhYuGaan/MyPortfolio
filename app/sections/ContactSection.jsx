import Button from '../components/Button';

 function ContactSection() {
  return (
    <section 
        id="contact"
        className="max-w-6xl mx-auto my-[3rem] md:my-[6rem]"

    > 
        {''}
        <h2 className="mb-4 text-3xl font-bold text-center lg:mb-8">
               Lets Design Together
         </h2>

            <p className="mb-4 lg:mb-8 text-center mx-auto max-w-[36rem] text-black/60">
            {''}
            i am here to bring your concept to life .lets create something amazing together
                
            </p>
            <div className="flex flex-col items-center justify-center gap-6 
            mt-6 md:flex-row">
                <input
                    placeholder="enter your email"
                    type="text"
                    className="px-4 py-2 border border-gray-400 rounded-lg"
                />
                <Button className="text-white bg-[#10adad] hover:bg-[#0B7474]">
                    {''}
                    Contact me
                </Button>    
            </div>
    </section>
)
  
}
export default ContactSection;