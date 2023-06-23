import React from 'react';
import { createContext } from 'react';

type CareerType = {
  seniority: number;
  setSeniority: React.Dispatch<React.SetStateAction<number>>;
  education: number;
  setEducation: React.Dispatch<React.SetStateAction<number>>;
  salary: number;
  setSalary: React.Dispatch<React.SetStateAction<number>>;
  pension: number;
  setPension: React.Dispatch<React.SetStateAction<number>>;
};

const careerState = {
  education: 0,
  setEducation: () => {},
  seniority: 0,
  setSeniority: () => {},
  salary: 0,
  setSalary: () => {},
  pension: 0,
  setPension: () => {},
};

const CareerContext = createContext<CareerType>(careerState);

export default CareerContext;
