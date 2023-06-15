"use client";
import React from "react";
import TechStackItem from "./TechStackItem";
import { techStack, techStack2 } from "./techstack";

export default function TechStackComp() {
    const [isHovered, setIsHovered] = React.useState("");
    return (
        <>
            <div>
                {techStack.map((item) => (
                    <TechStackItem
                        key={item.name}
                        name={item.name}
                        icon={item.icon}
                        description={item.description}
                        orientation
                        isHovered={isHovered}
                        setIsHovered={setIsHovered}
                        projectUrls={item.projectUrls}
                    />
                ))}
            </div>
            <div>
                {techStack2.map((item) => (
                    <TechStackItem
                        key={item.name}
                        name={item.name}
                        icon={item.icon}
                        description={item.description}
                        orientation={false}
                        isHovered={isHovered}
                        setIsHovered={setIsHovered}
                        projectUrls={item.projectUrls}
                    />
                ))}
            </div>
        </>
    );
}
