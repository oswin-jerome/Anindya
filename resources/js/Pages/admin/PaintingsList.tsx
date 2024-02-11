import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { PageProps, Painting } from "@/types";

type Prop = PageProps & {
    paintings: Painting[];
};

export default function PaintingsList({ auth, paintings }: Prop) {
    console.log(paintings);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Paintings
                </h2>
            }
        >
            <Head title="Paintings" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className=" overflow-hidden  sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <Link href={route("paintings.create")}>Create</Link>
                            <div className="grid grid-cols-4 gap-4 mt-5">
                                {paintings.map((paint, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className="bg-white rounded shadow-lg grid relative"
                                        >
                                            <Link
                                                className="absolute right-4 top-4 bg-white p-2 shadow-lg rounded-full"
                                                href={route(
                                                    "paintings.edit",
                                                    paint.id
                                                )}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-5 h-5"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                                                    />
                                                </svg>
                                            </Link>

                                            <img
                                                src={paint.painting}
                                                alt="sd"
                                                className="rounded aspect-[4/3]"
                                            />
                                            <div className="p-2  ">
                                                <div className="flex justify-between items-center">
                                                    <p className="flex-1 ">
                                                        {paint.title}
                                                    </p>
                                                    <input
                                                        onChange={(e) => {
                                                            router.put(
                                                                route(
                                                                    "paintings.update",
                                                                    paint.id
                                                                ),
                                                                {
                                                                    active: e
                                                                        .target
                                                                        .checked,
                                                                }
                                                            );
                                                        }}
                                                        type="checkbox"
                                                        checked={
                                                            paint.active === 1
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
