import MasinaSvg from "@/app/components/MasinaSvg";
import { qaData } from "@/app/data/qaData";
import QAItem from "@/app/components/QAItem";
import { galleryData } from "@/app/data/galleryData";
import GalleryItem from "@/app/components/GalleryItem";
import PhoneSvg from "@/app/components/PhoneSvg";
import ViberSvg from "@/app/components/ViberSvg";
import FacebookSvg from "@/app/components/FacebookSvg";


export default function Page(){
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Glazure Čubak",
        "description": "Mašinska izrada podnih glazura sa preko 20 godina iskustva.",
        "telephone": "+38765921847",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Trebinje",
            "addressCountry": "BA"
        },
        "url": "https://glazurecubak.com"
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <section id="hero" className="max-w-7xl mx-auto w-full flex flex-col justify-center items-center px-4 py-8 md:py-16">

                <div className="w-full flex flex-row md:flex-row justify-between items-center gap-1 md:gap-6 mb-12">
                    <p className='text-[16px] md:text-4xl text-spaceIndigo font-bold'>Glazure Cubak</p>
                    <a href="tel:+38765921847" className='text-[16px] md:text-2xl text-mintGrand bg-granite rounded-lg p-3 md:p-4 hover:bg-opacity-90 transition-all cursor-pointer'>
                        Pozovi nas
                    </a>
                </div>

                <div className='flex flex-col md:flex-row justify-between items-center gap-8 mt-4 md:mt-8'>
                    <div className="flex gap-4 flex-col items-center md:items-start justify-center max-w-2xl">
                        <h1 className="text-4xl md:text-6xl font-bold text-center md:text-left text-spaceIndigo leading-tight">Vaš Partner za Savršeno Ravne Podove</h1>
                        <p className="text-2xl md:text-3xl text-center md:text-left text-bronze">Mašinska izrada podnih glazura</p>
                    </div>

                    <div className="w-[286px] h-[209px] md:w-full md:h-auto max-w-md md:max-w-xl">
                        <MasinaSvg className="w-full h-full" />
                    </div>
                </div>

                <a href='#contact' className='mt-12 text-[16px] md:text-2xl text-mintGrand bg-granite rounded-lg p-3 md:p-4 hover:bg-opacity-90 transition-all cursor-pointer'>
                    Kontaktiraj nas
                </a>

            </section>
            <section id="about" className="mt-12 md:mt-24 max-w-5xl mx-auto w-full flex flex-col justify-center items-center px-4">

                <div className='w-full'>
                    <h2 className='text-spaceIndigo text-2xl md:text-4xl text-center leading-relaxed font-bold'>
                        Izrada podnih glazura ili estrich-a sa vise od 20 godina iskustva u tom polju
                    </h2>
                </div>

            </section>



            <section id="qa" className="mt-20 md:mt-32 max-w-4xl w-full mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-spaceIndigo mb-10 md:mb-16">Često postavljana pitanja</h2>
                <div className="flex flex-col gap-2">
                    {qaData.map((item) => (
                        <QAItem key={item.id} item={item} />
                    ))}
                </div>
            </section>

            <section id="gallery" className="mt-24 md:mt-40 w-full py-16 md:py-24 bg-[#F7FCF7]">
                <div className="max-w-7xl mx-auto px-4 overflow-hidden">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-spaceIndigo mb-4">
                        Galerija završenih projekata
                    </h2>
                    <p className="text-lg md:text-xl text-center text-bronze mb-12 md:mb-16 font-bold max-w-2xl mx-auto">
                        Jedan od većih projekata je i Nova Bolnica u Trebinju
                    </p>

                    <div className="flex overflow-x-auto gap-4 md:gap-8 pb-8 scroll-smooth no-scrollbar snap-x snap-mandatory px-2">
                        {galleryData.map((image) => (
                            <div key={image.id} className="snap-center">
                                <GalleryItem item={image} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id='contact' className='mt-24 md:mt-40 w-full py-16 md:py-24'>
                <div className='flex flex-col justify-center items-center mt-3 gap-8 max-w-7xl'>

                    <div className='text-center flex flex-col justify-between gap-4'>
                        <h2 className='text-3xl text-bronze font-bold'>
                            Kontaktirajte Nas
                        </h2>

                        <p className='text-2xl text-spaceIndigo'>
                            Za besplatnu procenu ili dodatne informacije, slobodno nas kontaktirajte putem telefona .
                        </p>

                    </div>

                    <div className='flex flex-col gap-6 items-start justify-center max-w-[350px]'>

                        <div>
                            <a href="tel:+38765921847" className='flex flex-row items-center justify-start gap-3 w-fit'>
                                <PhoneSvg className="w-8 h-8 md:w-10 md:h-10" />
                                <p className='text-xl md:text-2xl text-spaceIndigo'>065 921 847</p>
                            </a>
                        </div>

                        <div>
                            <a href="viber://chat?number=38765921847" className='flex flex-row items-center justify-start gap-3 w-fit'>
                                <ViberSvg className="w-8 h-8 md:w-10 md:h-10" />
                                <p className='text-xl md:text-2xl text-spaceIndigo'>065 921 847</p>
                            </a>
                        </div>

                        <div>
                            <a href="https://www.facebook.com/glazureestrih.cubak/" className='flex flex-row items-center justify-start gap-3 w-fit'>
                                <FacebookSvg className="w-8 h-8 md:w-10 md:h-10" />
                                <p className='text-xl md:text-2xl text-spaceIndigo'>Glazure Estrich Cubak</p>
                            </a>
                        </div>


                    </div>

                </div>
            </section>

        </>
    )
}