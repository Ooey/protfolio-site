import React from "react";
import { projects } from "../projects";
import { getProjectSlug } from "@/interfaces/interfaces";

export interface Props {
    params: { slug: string };
}

export default function Page({ params }: Props) {
    const project = projects.find(
        (post) => getProjectSlug(post) === params.slug
    )!;
    console.log(project);
    return (
        <main className="flex w-10/12 min-h-screen flex-col items-center  justify-center py-6 m-auto">
            <div className="w-10/12 py-10 bg-gray-900 rounded-md  mt-20">
                <h2 className="mb-5 text-center text-2xl">{params.slug}</h2>
            </div>
        </main>
    );
}
