import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { PageProps, Painting } from "@/types";
import PrimaryButton from "@/Components/PrimaryButton";
import { FormEvent } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import InputError from "@/Components/InputError";

export default function PaintingsCreate({
    auth,
    paintings,
}: PageProps & {
    paintings: Painting[];
}) {
    const { data, setData, post, reset, errors } = useForm<{
        title: string;
        description: string;
        short_description: string;
        price: number;
        post: string;
        medium: string;
        size: string;
        painting: File | undefined;
        painting_id: string;
    }>({
        description: "",
        post: "",
        price: 0,
        short_description: "",
        title: "",
        medium: "",
        size: "",
        painting: undefined,
        painting_id: "",
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
                                    <label htmlFor="">Parent Painting</label>
                                    <select
                                        value={data.painting_id}
                                        onChange={(e) =>
                                            setData(
                                                "painting_id",
                                                e.target.value
                                            )
                                        }
                                        name=""
                                        id=""
                                    >
                                        <option value="">None</option>
                                        {paintings.map((paint) => {
                                            return (
                                                <option value={paint.id}>
                                                    <span> {paint.title} </span>
                                                </option>
                                            );
                                        })}
                                    </select>
                                    <InputError
                                        message={errors.painting_id}
                                        className="mt-2"
                                    />
                                </div>

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
                                    <InputError
                                        message={errors.painting}
                                        className="mt-2"
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
                                    <InputError
                                        message={errors.title}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="input-box">
                                    <label htmlFor="">Medium</label>

                                    <select
                                        value={data.medium}
                                        onChange={(e) =>
                                            setData("medium", e.target.value)
                                        }
                                        name=""
                                        id=""
                                    >
                                        <option value="Charcoal">
                                            Charcoal
                                        </option>
                                        <option value="Paint">Paint</option>
                                        <option value="Pen">Pen</option>
                                    </select>
                                    <InputError
                                        message={errors.medium}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="input-box">
                                    <label htmlFor="">Size</label>
                                    <input
                                        value={data.size}
                                        onChange={(e) =>
                                            setData("size", e.target.value)
                                        }
                                        type="text"
                                    />
                                    <InputError
                                        message={errors.size}
                                        className="mt-2"
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
                                    <InputError
                                        message={errors.short_description}
                                        className="mt-2"
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
                                    <InputError
                                        message={errors.description}
                                        className="mt-2"
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
                                    <InputError
                                        message={errors.post}
                                        className="mt-2"
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
                                    <InputError
                                        message={errors.price}
                                        className="mt-2"
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
