import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Guest from "@/Layouts/GuestLayout";
import SiteLayout from "@/Layouts/SiteLayout";

export default function ContactPage() {
    return (
        <>
            <Head title="Contact" />
            <SiteLayout>
                <section className="container mx-auto px-4 py-16 mt-16">
                    <h3 className="text-center mb-10 md:mb-16 heading-1">
                        About
                    </h3>
                </section>
            </SiteLayout>
        </>
    );
}
