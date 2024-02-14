import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Guest from "@/Layouts/GuestLayout";
import SiteLayout from "@/Layouts/SiteLayout";

export default function AboutPage() {
    return (
        <>
            <Head title="About">
                <meta name="title" content="About - Anindya Mukherjee" />
                <meta
                    name="description"
                    content="My art is a celebration of the unique interplay between colors, textures, and forms, reflecting my personal interpretation of the world. Each painting is a canvas where I pour my heart and soul, creating visual narratives that resonate with both the subtle and profound aspects of existence."
                />

                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://anindya.oswinjerome.in/"
                />
                <meta property="og:title" content="Anindya Mukherjee" />
                <meta
                    property="og:description"
                    content="My art is a celebration of the unique interplay between colors, textures, and forms, reflecting my personal interpretation of the world. Each painting is a canvas where I pour my heart and soul, creating visual narratives that resonate with both the subtle and profound aspects of existence."
                />
                <meta
                    property="og:image"
                    content="https://anindya.oswinjerome.in/images/artist2.jpeg"
                />

                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:url"
                    content="https://anindya.oswinjerome.in/"
                />
                <meta property="twitter:title" content="Anindya Mukherjee" />
                <meta
                    property="twitter:description"
                    content="My art is a celebration of the unique interplay between colors, textures, and forms, reflecting my personal interpretation of the world. Each painting is a canvas where I pour my heart and soul, creating visual narratives that resonate with both the subtle and profound aspects of existence."
                />
                <meta
                    property="twitter:image"
                    content="https://anindya.oswinjerome.in/images/artist2.jpeg"
                />

                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap"
                    rel="stylesheet"
                />
            </Head>

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
