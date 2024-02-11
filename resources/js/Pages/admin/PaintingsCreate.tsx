import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import PrimaryButton from "@/Components/PrimaryButton";
import { FormEvent } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function PaintingsCreate({ auth }: PageProps) {
    const { data, setData, post, reset } = useForm<{
        title: string;
        description: string;
        short_description: string;
        price: number;
        post: string;
        painting: File | undefined;
    }>({
        description: "",
        post: "",
        price: 0,
        short_description: "",
        title: "",
        painting: undefined,
    });

    const handle = (e: FormEvent) => {
        e.preventDefault();
        post(route("paintings.store"), {
            onError: (e) => {
                console.log(e);
            },
            onSuccess: (e) => {
                alert("added");
                reset();
            },
        });
    };

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
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={handle} className="grid gap-4">
                                <div className="input-box">
                                    <label htmlFor="">Painting</label>
                                    <input
                                        onChange={(e) =>
                                            setData(
                                                "painting",
                                                e.target.files?.[0]
                                            )
                                        }
                                        required
                                        type="file"
                                    />
                                </div>
                                <div className="input-box">
                                    <label htmlFor="">Title</label>
                                    <input
                                        value={data.title}
                                        onChange={(e) =>
                                            setData("title", e.target.value)
                                        }
                                        type="text"
                                    />
                                </div>
                                <div className="input-box">
                                    <label htmlFor="">Short Description</label>
                                    <input
                                        value={data.short_description}
                                        onChange={(e) =>
                                            setData(
                                                "short_description",
                                                e.target.value
                                            )
                                        }
                                        type="text"
                                    />
                                </div>
                                <div className="input-box">
                                    <label htmlFor="">Description</label>
                                    {/* <textarea
                                        value={data.description}
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                    ></textarea> */}
                                    <ReactQuill
                                        theme="snow"
                                        className="block mb-12"
                                        value={data.description}
                                        onChange={(e) =>
                                            setData("description", e)
                                        }
                                    />
                                </div>
                                <div className="input-box">
                                    <label htmlFor="">Post</label>
                                    {/* <textarea
                                        value={data.post}
                                        onChange={(e) =>
                                            setData("post", e.target.value)
                                        }
                                    ></textarea> */}
                                    <ReactQuill
                                        theme="snow"
                                        className="block mb-12"
                                        value={data.post}
                                        onChange={(e) => setData("post", e)}
                                    />
                                </div>
                                <div className="input-box">
                                    <label htmlFor="">Price</label>
                                    <input
                                        value={data.price}
                                        onChange={(e) =>
                                            setData(
                                                "price",
                                                e.target.valueAsNumber
                                            )
                                        }
                                        type="number"
                                    />
                                </div>

                                <div>
                                    <PrimaryButton>Add</PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
