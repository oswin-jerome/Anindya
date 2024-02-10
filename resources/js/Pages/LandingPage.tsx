import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Guest from "@/Layouts/GuestLayout";
import SiteLayout from "@/Layouts/SiteLayout";

export default function LandingPage() {
    return (
        <>
            <SiteLayout>
                <section className=" h-[50vh] md:h-[100vh] relative">
                    <div className="bg-black/50 absolute inset-0 grid place-items-center p-3">
                        <h1 className="font-bold text-5xl md:text-6xl xl:text-8xl text-white text-center">
                            Anindya Mukherjee
                        </h1>
                    </div>
                    <img
                        src="/images/hero.jpg"
                        className="object-cover h-full w-full"
                        alt=""
                    />
                </section>

                <section className="container mx-auto px-4 py-16">
                    <h3 className="text-center mb-10 md:mb-16 heading-1">
                        About
                    </h3>
                    <div className="">
                        <div className="flex-1 text-slate-600 leading-loose text-center xl:max-w-[70vw] mx-auto font-content">
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Arcu
                                cursus congue viverra nunc non aliquam non magna
                                in. Justo consequat sit malesuada ut condimentum
                                sollicitudin elementum facilisi. Quis vitae
                                tortor faucibus vestibulum adipiscing arcu
                                porttitor non diam. Iaculis eget lectus sed ut
                                nulla. Vitae velit mauris diam feugiat.
                                <br />
                                <br />
                                Orci quam sapien amet vitae sit sagittis turpis.
                                Ut et arcu nisl elementum pretium purus.
                                Volutpat a ornare tincidunt tincidunt. Leo
                                tincidunt quis arcu amet lectus.Iaculis eget
                                lectus sed ut nulla. Vitae velit mauris diam
                                feugiat. Orci quam sapien amet vitae sit
                                sagittis turpis. Ut et arcu nisl elementum
                                pretium purus. Volutpat a ornare tincidunt
                                tincidunt. Leo tincidunt quis arcu amet lectus
                            </p>
                            <div className="flex justify-center">
                                <button className="bg-transparent border border-app-primary z-10 relative text-app-primary mt-16 px-8 py-3  active:scale-95 rounded-full">
                                    Know More
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </SiteLayout>
        </>
    );
}
