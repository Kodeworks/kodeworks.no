import React from "react";

export interface Person {
  name: string;
  image: string;
  email: string;
  urls?: SocialUrl[];
  projects: Project[];
}

export interface Project {
  name: string;
  description: string;
  image: string;
  urlName: string;
  element: React.FC<any> | null;

  technologies?: string[];
  highlighted?: boolean;
}

export interface SocialUrl {
  name: string;
  url: string;
}
