import SiteLayout from "@/Layouts/SiteLayout";
import { Painting } from "@/types";
import { Head } from "@inertiajs/react";

const PaintingDetailsPage = ({ painting }: { painting: Painting }) => {
    const additional = [1, 2, 3];

    return (
        <>
            <Head title="Home" />
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
                                <h1 className="text-5xl font-bold text-app-primary">
                                    {painting.title}
                                </h1>
                                <div className="w-full md:w-1 bg-app-primary h-1 md:h-full"></div>
                                <p className="description">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </div>
                            <div className="mt-6">
                                <p className="description leading-loose text-justify prose max-w-full">
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: painting.description,
                                        }}
                                    ></div>
                                </p>
                                <div className="grid grid-cols-3 gap-4 mt-8">
                                    {additional.map((add, i) => {
                                        return (
                                            <div key={i}>
                                                <img
                                                    src={
                                                        "https://picsum.photos/500/500?id=" +
                                                        i
                                                    }
                                                    alt=""
                                                />
                                                <div className="description text-center mt-2 text-sm">
                                                    Lorem ipsum dolor sit amet
                                                    consectetur adipisicing
                                                    elit. Similique, vitae?
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
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
