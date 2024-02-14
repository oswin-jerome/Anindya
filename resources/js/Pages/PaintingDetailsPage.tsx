import SiteLayout from "@/Layouts/SiteLayout";
import { Painting } from "@/types";
import { Head, Link, router } from "@inertiajs/react";

import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useState } from "react";
import Modal from "react-modal";

const PaintingDetailsPage = ({
    painting,
    child_paintings,
}: {
    painting: Painting;
    child_paintings: Painting[];
}) => {
    const additional = [1, 2, 3];

    return (
        <>
            <Head title="Paintings">
                <meta name="title" content={painting.title} />
                <meta name="description" content={painting.short_description} />

                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://anindya.oswinjerome.in/"
                />
                <meta property="og:title" content={painting.title} />
                <meta
                    property="og:description"
                    content={painting.short_description}
                />
                <meta property="og:image" content={painting.painting} />

                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:url"
                    content="https://anindya.oswinjerome.in/"
                />
                <meta property="twitter:title" content={painting.title} />
                <meta
                    property="twitter:description"
                    content={painting.short_description}
                />
                <meta property="twitter:image" content={painting.painting} />

                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <SiteLayout>
                <div className="mt-24 container mx-auto px-4 py-16 ">
                    <section className="grid lg:grid-cols-[3fr,3fr] gap-16">
                        <div>
                            <img
                                className="w-full h-full"
                                src={painting.painting}
                                alt=""
                            />
                        </div>
                        <div>
                            <div className="grid md:grid-cols-[1fr,auto,1fr] gap-4">
                                <h1 className="text-4xl font-bold text-app-primary">
                                    {painting.title}
                                </h1>
                                <div className="w-full md:w-1 bg-app-primary h-1 md:h-full"></div>
                                <div className="description">
                                    <p>Medium: {painting.medium}</p>
                                    <p>Size: {painting.size}</p>
                                    <p>Price: Rs. {painting.price}</p>
                                </div>
                            </div>
                            <div className="mt-6">
                                <div className="description leading-loose text-justify prose max-w-full">
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: painting.description,
                                        }}
                                    ></div>
                                </div>
                                <div className="mt-8 mb-8">
                                    <a
                                        href={`https://wa.me/+919487839640?text=I'm interested to buy this painting "${
                                            painting.title
                                        }"\n ${route(
                                            "paintings.details",
                                            painting.slug
                                        )}`}
                                        className="bg-transparent border border-app-primary mt-2 z-10 relative text-app-primary  px-8 py-2  active:scale-95 rounded-full"
                                    >
                                        Buy Painting
                                    </a>
                                </div>

                                {child_paintings.length > 0 && (
                                    <h4 className="text-xl font-bold">
                                        Related Paintings
                                    </h4>
                                )}
                                {child_paintings.length > 0 && (
                                    <div className="gap-4 mt-4 relative ">
                                        <CarouselProvider
                                            naturalSlideWidth={100}
                                            naturalSlideHeight={100}
                                            totalSlides={child_paintings.length}
                                            visibleSlides={3}
                                            infinite
                                            className="outline-0"
                                        >
                                            <Slider>
                                                {child_paintings.map(
                                                    (paint, i) => {
                                                        return (
                                                            <Slide
                                                                index={i}
                                                                key={i}
                                                                className=""
                                                            >
                                                                <PaintItem
                                                                    paint={
                                                                        paint
                                                                    }
                                                                />
                                                            </Slide>
                                                        );
                                                    }
                                                )}
                                            </Slider>
                                            <ButtonBack className=" hidden md:block absolute md:-left-10 top-[50%] -translate-y-[50%] text-black/50">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-8 h-8"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M15.75 19.5 8.25 12l7.5-7.5"
                                                    />
                                                </svg>
                                            </ButtonBack>
                                            <ButtonNext className=" hidden md:block absolute  md:-right-10 top-[50%] -translate-y-[50%] text-black/50">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-8 h-8"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                                    />
                                                </svg>
                                            </ButtonNext>
                                        </CarouselProvider>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                    <section className="mt-20 description leading-loose text-justify prose max-w-full">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: painting.post,
                            }}
                        ></div>
                    </section>
                </div>
            </SiteLayout>
        </>
    );
};

export default PaintingDetailsPage;

function PaintItem({ paint }: { paint: Painting }) {
    const [modalIsOpen, setIsOpen] = useState(false);
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",

            transform: "translate(-50%, -50%)",
        },
    };
    return (
        <div className="p-2 cursor-pointer ">
            <Modal
                isOpen={modalIsOpen}
                style={customStyles}
                onRequestClose={() => setIsOpen(false)}
                contentLabel="Example Modal"
                shouldCloseOnOverlayClick={true}
                overlayClassName="Overlay"
            >
                <div className="max-h-[90vh] max-w-[90vw] lg:max-w-[70vw] overflow-scroll">
                    <div className="flex justify-end pb-2">
                        <button onClick={() => setIsOpen(false)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18 18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-8">
                        <img src={paint.painting} alt="" />
                        <div>
                            <div className="grid md:grid-cols-[1fr,auto,1fr] gap-4">
                                <h1 className="text-4xl font-bold text-app-primary">
                                    {paint.title}
                                </h1>
                                <div className="w-full md:w-1 bg-app-primary h-1 md:h-full"></div>
                                <div className="description">
                                    <p>Medium: {paint.medium}</p>
                                    <p>Size: {paint.size}</p>
                                    <p>Price: Rs. {paint.price}</p>
                                </div>
                            </div>
                            <p className="description mt-6">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: paint.description,
                                    }}
                                ></div>
                            </p>
                            <div className="mt-10">
                                <Link
                                    href={route("paintings.details", paint.id)}
                                    className="bg-transparent border border-app-primary mt-2 z-10 relative text-app-primary  px-8 py-2  active:scale-95 rounded-full"
                                >
                                    View
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
            <img
                onClick={() => setIsOpen(true)}
                src={paint.painting}
                alt=""
                className="aspect-square "
            />
        </div>
    );
}
