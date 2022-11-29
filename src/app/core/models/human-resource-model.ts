export interface Skill {
    id: number;
    name: string;
}

export interface Profession {
    id: number;
    name: string;
    skills: Skill[];
}