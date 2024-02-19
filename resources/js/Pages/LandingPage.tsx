import { Link, Head } from "@inertiajs/react";
import { PageProps, Painting } from "@/types";
import Guest from "@/Layouts/GuestLayout";
import SiteLayout from "@/Layouts/SiteLayout";
import PaintingAutoGrid from "@/Components/PaintingAutoGrid";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import {
    AnimationHandler,
    AnimationHandlerResponse,
} from "react-responsive-carousel/lib/ts/components/Carousel/types";

export default function LandingPage({ paintings }: { paintings: Painting[] }) {
    const fadeAnimationHandler: AnimationHandler = (
        props,
        state
    ): AnimationHandlerResponse => {
        const transitionTime = props.transitionTime + "ms";
        const transitionTimingFunction = "ease-in-out";

        let slideStyle: React.CSSProperties = {
            position: "absolute",
            display: "block",
            zIndex: 0,
            minHeight: "100%",
            opacity: 0,
            top: 0,
            right: 0,
            left: 0,
            scale: 1,
            bottom: 0,
            transition: "all",

            transitionTimingFunction: transitionTimingFunction,
            msTransitionTimingFunction: transitionTimingFunction,
            MozTransitionTimingFunction: transitionTimingFunction,
            WebkitTransitionTimingFunction: transitionTimingFunction,
            OTransitionTimingFunction: transitionTimingFunction,
        };

        if (!state.swiping) {
            slideStyle = {
                ...slideStyle,
                scale: 1.5,
                WebkitTransitionDuration: transitionTime,
                MozTransitionDuration: transitionTime,
                OTransitionDuration: transitionTime,
                transitionDuration: transitionTime,
                msTransitionDuration: transitionTime,
            };
        }

        return {
            slideStyle,
            selectedStyle: {
                ...slideStyle,
                opacity: 1,
                scale: 1.5,
                position: "relative",
            },
            prevStyle: { ...slideStyle },
        };
    };
    return (
        <>
            <Head title="Home">
                <meta name="title" content="Anindya Mukherjee" />
                <meta
                    name="description"
                    content="My art is a celebration of the unique interplay between colors, textures, and forms, reflecting my personal interpretation of the world. Each painting is a canvas where I pour my heart and soul, creating visual narratives that resonate with both the subtle and profound aspects of existence."
                />

                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://www.anindyamukherjee.in/"
                />
                <meta property="og:title" content="Anindya Mukherjee" />
                <meta
                    property="og:description"
                    content="My art is a celebration of the unique interplay between colors, textures, and forms, reflecting my personal interpretation of the world. Each painting is a canvas where I pour my heart and soul, creating visual narratives that resonate with both the subtle and profound aspects of existence."
                />
                <meta
                    property="og:image"
                    content="https://www.anindyamukherjee.in/images/artist2.jpeg"
                />

                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:url"
                    content="https://www.anindyamukherjee.in/"
                />
                <meta property="twitter:title" content="Anindya Mukherjee" />
                <meta
                    property="twitter:description"
                    content="My art is a celebration of the unique interplay between colors, textures, and forms, reflecting my personal interpretation of the world. Each painting is a canvas where I pour my heart and soul, creating visual narratives that resonate with both the subtle and profound aspects of existence."
                />
                <meta
                    property="twitter:image"
                    content="https://www.anindyamukherjee.in/images/artist2.jpeg"
                />

                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <SiteLayout>
                <section className=" h-[50vh] md:h-[100vh] relative mt-16 md:mt-auto">
                    <Carousel
                        centerMode={false}
                        showThumbs={false}
                        autoPlay
                        transitionTime={1300}
                        className=" h-[50vh] md:h-[100vh] relative "
                        animationHandler={fadeAnimationHandler}
                    >
                        <img
                            src="/images/hero.jpg"
                            className="object-cover h-[50vh] md:h-[100vh] w-full"
                            alt=""
                        />
                        <img
                            src="/images/artist.jpg"
                            className="object-cover h-[50vh] md:h-[100vh] w-full"
                            alt=""
                        />
                        <img
                            src="/images/artist2.jpeg"
                            className="object-cover h-[50vh] md:h-[100vh] w-full"
                            alt=""
                        />
                    </Carousel>
                    <div className="bg-black/50 0 absolute inset-0 grid place-items-center p-3">
                        <h1 className="text-3xl md:text-[4em] xl:text-[5em] text-white/90 text-center name capitalize tracking-widest">
                            ANINDYA MUKHERJEE
                        </h1>
                    </div>
                </section>

                <section className="container mx-auto px-4 py-16">
                    <h3 className="text-center mb-8 md:mb-10 heading-1">
                        About
                    </h3>
                    <div className="">
                        <div className="flex-1 text-slate-600 max-w-[80ch] leading-loose text-justify  mx-auto font-content">
                            <p>
                                Welcome to my world of artistry! I'm Anindya
                                Mukherjee, a passionate artist hailing from the
                                picturesque landscapes of India. My art revolves
                                around the profound cycles of life and death,
                                delving into the intricate relationship between
                                humanity and nature.
                                <br />
                                <br />
                                My journey into the realm of art began amidst
                                the serene surroundings of Kurseong hill
                                station, where I spent my childhood . Surrounded
                                by nature's boundless beauty, I found my muse
                                and embarked on a creative exploration that
                                continues to shape my existence. Despite facing
                                economic hurdles and initial rejections from art
                                colleges, my determination fueled my pursuit of
                                artistic expression. Battling periods of
                                depression and frustration, I found solace and
                                inspiration in the ever-evolving canvas of
                                nature. Tragically, the loss of my mother served
                                as a poignant reminder of life's transient
                                nature, igniting a profound introspection into
                                the essence of existence.
                            </p>
                            <div className="flex justify-center">
                                <Link
                                    href={route("about")}
                                    className="bg-transparent border border-app-primary z-10 relative text-app-primary mt-16 px-8 py-3  active:scale-95 rounded-full"
                                >
                                    Know More
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="bg-white">
                    <PaintingAutoGrid paintings={paintings} />
                </div>
            </SiteLayout>
        </>
    );
}
