interface TechStackItem {
    name: string;
    icon: string;
    description: string;
    orientation: boolean;
    isHovered: String;
    setIsHovered: React.Dispatch<React.SetStateAction<string>>;
    projectUrls?: string[];
}

interface ProjectItem {
    name: string;
    icon?: string;
    description: string;
    techStack: string[];
    github?: string;
    thumbnail?: string;
}

export function getProjectSlug(post: ProjectItem): string {
    return post.name.toLowerCase().replaceAll(" ", "-");
}

export type { ProjectItem, TechStackItem };
