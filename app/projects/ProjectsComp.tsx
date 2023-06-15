import React from "react";
import Image from "next/image";
import { ProjectItem, getProjectSlug } from "@/interfaces/interfaces";
import Link from "next/link";

export default function ProjectsComp(props: ProjectItem) {
    return (
        <div
            className={`bg-slate-800 drop-shadow-lg rounded m-5 p-2 bg-cover bg-center backdrop-blur-3xl min-h-[300px]  backdrop-opacity-30 flex justify-center items-center`}
        >
            {props.icon && (
                <Image
                    src={
                        props.thumbnail
                            ? "/" + props.thumbnail
                            : "/" + props.icon
                    }
                    width={300}
                    height={300}
                    alt={props.name}
                    className={`m-3 rounded-md `}
                />
            )}

            <div className="">
                <h2 className="text-lg inline-block bg-slate-600 p-5 rounded absolute top-2">
                    {props.name}
                </h2>
                <p className="my-4 rounded-md p-5 bg-slate-900 shadow-inner text-ellipsis overflow-hidden ">
                    {props.description}
                </p>
                <Link
                    className="px-5 py-2 rounded-full bg-slate-900 shadow-inner hover:bg-sky-500 transition-all duration-300 ease-in-out self-end mr-10 absolute bottom-6 right-0"
                    href={"/projects/" + getProjectSlug(props)}
                >
                    See
                </Link>
            </div>
        </div>
    );
}
