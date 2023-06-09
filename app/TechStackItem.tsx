"use client";

import TechStackItem from "@/interfaces/interfaces";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function TechStackItem(props: TechStackItem) {
    return (
        <div
            className={`flex relative m-3 ${
                !props.orientation && "flex-row-reverse"
            }`}
        >
            <Image
                className="filter grayscale hover:grayscale-0 transition-all duration-500 ease-in-out m-3 select-none"
                src={props.icon}
                width={60}
                height={60}
                alt={props.name}
                onMouseEnter={() => props.setIsHovered(props.name)}
            />

            <div
                className={`p-4 absolute ${
                    !props.orientation ? "right-full" : "left-full"
                } -bottom-1/2 bg-slate-800 rounded-md border-2 border-cyan-500 ${
                    props.isHovered === props.name
                        ? "opacity-100 "
                        : "opacity-0"
                } transition-opacity w-96 `}
            >
                <h3 className="text-xl font-medium">{props.name}</h3>
                <p>{props.description}</p>
                {props.projectUrls && (
                    <div className="">
                        <h3 className="text-md font-medium my-2">
                            Projects using {props.name}:
                        </h3>
                        <div>
                            {props.projectUrls.map((url) => (
                                <Link
                                    key={url}
                                    href={url}
                                    className="p-1 bg-cyan-600 rounded-md w-max h-max m-1"
                                >
                                    {url.split("/")[2]}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
