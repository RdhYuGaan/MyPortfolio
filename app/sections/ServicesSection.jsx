import ServicesCard from '../components/SrevicesCard';
import {services} from '../utils/dataBase';

function ServicesSection () {
     return (
        <section className="max-w-6xl mx-auto md:my-[6rem]"
          id="services">

          <h2 className="mb-4 text-3xl font-bold text-center lg:mb-8">
            Services
          </h2>

          <p className="mb-4 lg:mb-8 text-center mx-auto max-w-[36rem] text-black/60">
            {''}
             i offer a range of UI/UX design ,user friendly interface and visually stricking design from web app to branding solluition
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {services.map((service, index) => (
                <ServicesCard
                    key={index}
                    imgSrc={service.imgSrc}
                    altText={service.altText}
                    title={service.title}
                    description={service.description}
                />
            ))}
          </div>

        </section>
    
    );    
}

export default ServicesSection;
