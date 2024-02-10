import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Guest from "@/Layouts/GuestLayout";
import SiteLayout from "@/Layouts/SiteLayout";

export default function PaintingsPage() {
    const paintings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    return (
        <>
            <SiteLayout>
                <div className="mt-24 container mx-auto px-4 py-16">
                    <h3 className="text-center mb-4 heading-1">My Paintings</h3>
                    <p className="mx-auto text-center max-w-[500px] description">
                        Lorem ipsum dolor sit amet consectetur. Eget blandit
                        gravida purus pharetra. Dis praesent volutpat interdum
                        egestas facilisis est cras volutpat nisi. In eu lectus
                        luctus eu. Metus sit risus tincidunt malesuada ornare.
                    </p>

                    <section className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 gap-6 md:gap-8 ">
                        {paintings.map((painting, i) => {
                            return (
                                <div className="cursor-pointer" key={i}>
                                    <img
                                        src={
                                            "https://picsum.photos/500/500?id=" +
                                            i
                                        }
                                        alt=" "
                                        className="rounded w-full aspect-[3/4] object-cover hover:shadow-xl hover:scale-[1.03] transition-all"
                                    />
                                    <p className="text-center mt-2 w-[80%] description mx-auto">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Facilisis lorem tristique viverra sed.
                                    </p>
                                    <p className="mt-2 text-center description">
                                        Rs. 500
                                    </p>
                                </div>
                            );
                        })}
                    </section>
                </div>
            </SiteLayout>
        </>
    );
}
