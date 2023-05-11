import React from 'react'
import { createContext } from 'react'

type CareerType = {
    mastersDegree: boolean
    setMastersDegree: React.Dispatch<React.SetStateAction<boolean>>
    seniority: number
    setSeniority: React.Dispatch<React.SetStateAction<number>>
    salary: number
    setSalary: React.Dispatch<React.SetStateAction<number>>
}

const careerState = {
    mastersDegree: false,
    setMastersDegree: () => {},
    seniority: 0,
    setSeniority: () => {},
    salary: 0,
    setSalary: () => {},
}

const CareerContext = createContext<CareerType>(careerState)

export default CareerContext
