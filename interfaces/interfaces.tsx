export default interface TechStackItem {
    name: string;
    icon: string;
    description: string;
    orientation: boolean;
    isHovered: String;
    setIsHovered: React.Dispatch<React.SetStateAction<string>>;
    projectUrls?: string[];
}
