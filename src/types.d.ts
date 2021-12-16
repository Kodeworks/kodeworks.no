export interface Person {
  name: string;
  image: string;
  email: string;
  urls?: Array<SocialUrl>;
  projects: Array<Project>;
}

export interface Project {
  name: string;
  description: string;
  image: string;
  highlighted?: boolean;
}

export interface SocialUrl {
  name: string;
  url: string;
}
