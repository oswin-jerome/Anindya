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
            <Head title="Home" />
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
