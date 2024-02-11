import { Link, Head } from "@inertiajs/react";
import { PageProps, Painting } from "@/types";
import Guest from "@/Layouts/GuestLayout";
import SiteLayout from "@/Layouts/SiteLayout";

export default function PaintingsPage({
    paintings,
}: {
    paintings: Painting[];
}) {
    return (
        <>
            <Head title="Paintings" />

            <SiteLayout>
                <div className="mt-24 container max-w-[80ch] mx-auto px-4 py-16">
                    <h3 className="text-center mb-4 heading-1">My Paintings</h3>
                    <p className="mx-auto text-center max-w-[500px] description">
                        Lorem ipsum dolor sit amet consectetur. Eget blandit
                        gravida purus pharetra. Dis praesent volutpat interdum
                        egestas facilisis est cras volutpat nisi. In eu lectus
                        luctus eu. Metus sit risus tincidunt malesuada ornare.
                    </p>

                    <section className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 md:gap-8 ">
                        {paintings.map((painting, i) => {
                            return (
                                <Link
                                    href={route(
                                        "paintings.details",
                                        painting.id
                                    )}
                                    className="cursor-pointer"
                                    key={i}
                                >
                                    <img
                                        src={painting.painting}
                                        alt=" "
                                        className="rounded w-full aspect-[3/4] object-cover hover:shadow-xl hover:scale-[1.03] transition-all"
                                    />
                                    <p className="text-center mt-2 w-[80%] description mx-auto">
                                        {painting.title}
                                    </p>
                                    <p className="mt-2 text-center description">
                                        Rs. {painting.price}
                                    </p>
                                </Link>
                            );
                        })}
                    </section>
                </div>
            </SiteLayout>
        </>
    );
}
