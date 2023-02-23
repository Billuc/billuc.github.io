export enum Proficiency {
    None = 0,
    Basic = 1,
    Intermediate = 2,
    Proficient = 3,
    Master = 4
};

export const MAXIMUM_PROFICIENCY = 4;

export const Proficiencies: { [key: number]: string } = {
    [Proficiency.None]: "None",
    [Proficiency.Basic]: "Basic knowledge",
    [Proficiency.Intermediate]: "Some experience",
    [Proficiency.Proficient]: "Proficient",
    [Proficiency.Master]: "Excellent knowledge"
};