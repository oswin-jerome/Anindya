import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Guest from "@/Layouts/GuestLayout";
import SiteLayout from "@/Layouts/SiteLayout";
import { IoLogoWhatsapp, IoMailOutline } from "react-icons/io5";

export default function ContactPage() {
    return (
        <>
            <Head title="Contact" />
            <SiteLayout>
                <section className="container xl:max-w-[80vw] mx-auto px-4 py-16 mt-24">
                    <h3 className="text-center mb-10 md:mb-4 heading-1">
                        Send Us your queries.
                    </h3>

                    <p className="mx-auto text-center max-w-[500px] description">
                        Lorem ipsum dolor sit amet consectetur. Eget blandit
                        gravida purus pharetra. Dis praesent volutpat inter
                    </p>

                    <section className="mt-10 grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6 md:gap-8 ">
                        <div className="grid gap-4 h-[100%]">
                            <div className="flex flex-1 flex-col gap-2">
                                <label htmlFor="name">Name</label>
                                <input
                                    autoComplete="off"
                                    className="input"
                                    id="name"
                                    type="text"
                                />
                            </div>

                            <div className="flex flex-col xl:flex-row gap-4">
                                <div className="flex flex-1 flex-col gap-2">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        className="input "
                                        autoComplete="off"
                                        id="email"
                                        type="text"
                                    />
                                </div>
                                <div className="flex flex-1 flex-col gap-2">
                                    <label htmlFor="phone">Phone</label>
                                    <input
                                        className="input"
                                        autoComplete="off"
                                        id="phone"
                                        type="text"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-1 flex-col gap-2">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    rows={5}
                                    id="message"
                                    autoComplete="off"
                                    className="input"
                                />
                            </div>

                            <div className="flex justify-start ">
                                <Link
                                    href={route("about")}
                                    className="bg-transparent border border-app-primary mt-2 z-10 relative text-app-primary  px-8 py-2  active:scale-95 rounded-full"
                                >
                                    Sent
                                </Link>
                            </div>
                        </div>
                        <div className="flex justify-center items-start mt-10">
                            <div className="flex flex-col items-center gap-4">
                                <span className="flex gap-3  text-md items-center">
                                    <IoMailOutline />
                                    johndoe@gmail.com{" "}
                                </span>
                                <span className="flex gap-3 text-md items-center">
                                    <IoLogoWhatsapp />
                                    +91 9873828388{" "}
                                </span>
                                <a
                                    href="https://wa.me/+919873828388"
                                    className=" xl:mt-5 px-4 py-2 text-white text-sm rounded-sm bg-green-600"
                                >
                                    Connect via Whatsapp
                                </a>
                            </div>
                        </div>
                    </section>
                    <section className="container mt-16">
                        <h3 className="text-center mb-10 heading-1">FAQ</h3>

                        <div className="xl:mt-16 grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6 md:gap-8">
                            <div className="flex flex-col gap-12">
                                <div className="flex flex-1 flex-col gap-2">
                                    <p className="mx-auto max-w-[500px] description">
                                        <p className="text-app-primary font-semibold mb-2">
                                            Lorem ipsum dolor sit amet
                                            consectetur?
                                        </p>
                                        Lorem ipsum dolor sit amet consectetur.
                                        Eget blandit gravida purus pharetra. Dis
                                        praesent volutpat inter Eget blandit
                                        gravida purus pharetra. Dis praesent
                                        volutpat inter
                                    </p>
                                </div>
                                <div className="flex flex-1 flex-col gap-2">
                                    <p className="mx-auto max-w-[500px] description">
                                        <p className="text-app-primary font-semibold mb-2">
                                            Lorem ipsum dolor sit amet
                                            consectetur?
                                        </p>
                                        Lorem ipsum dolor sit amet consectetur.
                                        Eget blandit gravida purus pharetra. Dis
                                        praesent volutpat inter Eget blandit
                                        gravida purus pharetra. Dis praesent
                                        volutpat inter
                                    </p>
                                </div>
                                <div className="flex flex-1 flex-col gap-2">
                                    <p className="mx-auto max-w-[500px] description">
                                        <p className="text-app-primary font-semibold mb-2">
                                            Lorem ipsum dolor sit amet
                                            consectetur?
                                        </p>
                                        Lorem ipsum dolor sit amet consectetur.
                                        Eget blandit gravida purus pharetra. Dis
                                        praesent volutpat inter Eget blandit
                                        gravida purus pharetra. Dis praesent
                                        volutpat inter
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-12">
                                <div className="flex flex-1 flex-col gap-2">
                                    <p className="mx-auto max-w-[500px] description">
                                        <p className="text-app-primary font-semibold mb-2">
                                            Lorem ipsum dolor sit amet
                                            consectetur?
                                        </p>
                                        Lorem ipsum dolor sit amet consectetur.
                                        Eget blandit gravida purus pharetra. Dis
                                        praesent volutpat inter Eget blandit
                                        gravida purus pharetra. Dis praesent
                                        volutpat inter
                                    </p>
                                </div>
                                <div className="flex flex-1 flex-col gap-2">
                                    <p className="mx-auto max-w-[500px] description">
                                        <p className="text-app-primary font-semibold mb-2">
                                            Lorem ipsum dolor sit amet
                                            consectetur?
                                        </p>
                                        Lorem ipsum dolor sit amet consectetur.
                                        Eget blandit gravida purus pharetra. Dis
                                        praesent volutpat inter Eget blandit
                                        gravida purus pharetra. Dis praesent
                                        volutpat inter
                                    </p>
                                </div>

                                <div className="flex flex-1 flex-col gap-2">
                                    <p className="mx-auto max-w-[500px] description">
                                        <p className="text-app-primary font-semibold mb-2">
                                            Lorem ipsum dolor sit amet
                                            consectetur?
                                        </p>
                                        Lorem ipsum dolor sit amet consectetur.
                                        Eget blandit gravida purus pharetra. Dis
                                        praesent volutpat inter Eget blandit
                                        gravida purus pharetra. Dis praesent
                                        volutpat inter
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </SiteLayout>
        </>
    );
}
