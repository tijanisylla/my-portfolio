// Interface for data
export interface TypeMyData {
  id: number;
  title: string;
  link: string;
  description: string;
  img_url: string;
}
export interface TypeNavbar {
  id: number;
  item: string;
  href: string;
  icon: string;
}

export interface darkModeType {
  IsdarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  toggleIsDarkMode: () => void;
}

export interface TypeSkills {
  skill: string;
}

export interface TypeLinks {
  icon: string;
  link: string;
}

export interface TypeExperience {
  title: string;
  date: string;
  content: string;
}

export interface TypeLanguages {
  title: string;
  color: string;
  width: string;
  valuenow: number;
  valuemin: number;
  valuemax: number;
}
