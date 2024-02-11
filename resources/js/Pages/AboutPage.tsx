import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Guest from "@/Layouts/GuestLayout";
import SiteLayout from "@/Layouts/SiteLayout";

export default function AboutPage() {
    return (
        <>
            <Head title="About" />

            <SiteLayout>
                <section className=" h-[50vh] md:h-[100vh] relative">
                    {/* <div className="bg-black/50 absolute inset-0 grid place-items-center p-3">
                        <h1 className="font-bold text-5xl md:text-6xl xl:text-8xl text-white text-center">
                            Anindya Mukherjee
                        </h1>
                    </div> */}
                    {/* <img
                        src="/images/hero.jpg"
                        className="object-cover h-full w-full"
                        alt=""
                    /> */}
                    <video
                        autoPlay
                        muted
                        playsInline
                        controls
                        className="object-cover h-full w-full"
                        src="/videos/intro.mp4"
                    ></video>
                </section>

                <section className="container mx-auto px-4 py-16">
                    <h3 className="text-center mb-10 md:mb-16 heading-1">
                        About
                    </h3>
                    <div className="grid lg:grid-cols-[450px,auto] gap-10">
                        <div className="row-start-2 lg:row-start-1">
                            <img
                                className="w-[300px] lg:w-full mx-auto"
                                src="/images/grid.png"
                                alt=""
                            />
                        </div>
                        <div className="flex-1 text-slate-600 leading-loose text-justify  mx-auto font-content">
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Arcu
                                cursus congue viverra nunc non aliquam non magna
                                in. Justo consequat sit malesuada ut condimentum
                                sollicitudin elementum facilisi. Quis vitae
                                tortor faucibus vestibulum adipiscing arcu
                                porttitor non diam.
                                <br />
                                <br />
                                Iaculis eget lectus sed ut nulla. Vitae velit
                                mauris diam feugiat. Orci quam sapien amet vitae
                                sit sagittis turpis. Ut et arcu nisl elementum
                                pretium purus. Volutpat a ornare tincidunt
                                tincidunt. Leo tincidunt quis arcu amet
                                lectus.Iaculis eget lectus sed ut nulla. Vitae
                                velit mauris diam feugiat. Orci quam sapien amet
                                vitae sit sagittis turpis. Ut et arcu nisl
                                elementum pretium purus. Volutpat a ornare
                                tincidunt tincidunt. Leo tincidunt quis arcu
                                amet lectus
                            </p>
                        </div>
                    </div>
                </section>
                <div className="bg-white">
                    <section className="container mx-auto px-4 py-16">
                        <h3 className="text-center mb-10 md:mb-16 heading-1">
                            Story Behind
                        </h3>
                        <div className="">
                            <div className="flex-1 text-slate-600 leading-loose text-justify font-content max-w-[75ch] mx-auto">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur. Arcu
                                    cursus congue viverra nunc non aliquam non
                                    magna in. Justo consequat sit malesuada ut
                                    condimentum sollicitudin elementum facilisi.
                                    Quis vitae tortor faucibus vestibulum
                                    adipiscing arcu porttitor non diam.
                                    <br />
                                    <br />
                                    Iaculis eget lectus sed ut nulla. Vitae
                                    velit mauris diam feugiat. Orci quam sapien
                                    amet vitae sit sagittis turpis. Ut et arcu
                                    nisl elementum pretium purus. Volutpat a
                                    ornare tincidunt tincidunt. Leo tincidunt
                                    quis arcu amet lectus.Iaculis eget lectus
                                    sed ut nulla. Vitae velit mauris diam
                                    feugiat. Orci quam sapien amet vitae sit
                                    sagittis turpis. Ut et arcu nisl elementum
                                    pretium purus. Volutpat a ornare tincidunt
                                    tincidunt. Leo tincidunt quis arcu amet
                                    lectus
                                    <br />
                                    <br />
                                    Iaculis eget lectus sed ut nulla. Vitae
                                    velit mauris diam feugiat. Orci quam sapien
                                    amet vitae sit sagittis turpis. Ut et arcu
                                    nisl elementum pretium purus. Volutpat a
                                    ornare tincidunt tincidunt. Leo tincidunt
                                    quis arcu amet lectus.Iaculis eget lectus
                                    sed ut nulla. Vitae velit mauris diam
                                    feugiat. Orci quam sapien amet vitae sit
                                    sagittis turpis. Ut et arcu nisl elementum
                                    pretium purus. Volutpat a ornare tincidunt
                                    tincidunt. Leo tincidunt quis arcu amet
                                    lectus Iaculis eget lectus sed ut nulla.
                                    Vitae velit mauris diam feugiat. Orci quam
                                    sapien amet vitae sit sagittis turpis. Ut et
                                    arcu nisl elementum pretium purus. Volutpat
                                    a ornare tincidunt tincidunt. Leo tincidunt
                                    quis arcu amet lectus.Iaculis eget lectu
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </SiteLayout>
        </>
    );
}
