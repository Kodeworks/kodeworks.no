import React from "react";

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
  enabled?: boolean;
  urlName: string;
  element: React.FC<any> | null
}

export interface SocialUrl {
  name: string;
  url: string;
}
