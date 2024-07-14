type Project = {
    id: number;
    title: string;
    subtitle: string;
    description: string;     
    imageSource: string;
    imageAlt: string;
    link: string;
    keywords: string[];
    isOnline: boolean;
}

export type { Project }