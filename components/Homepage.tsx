'use client'

import { Header } from "@/components/Header"
import { Dropdown } from "@/components/Dropdown"
import { programData } from "@/utils/utils";
import { useState } from "react";

export const Homepage = () => {
    const [programType, setProgramType] = useState("Co-op");

    const handleProgramChange = (event: any) => {
        setProgramType(event.target.value);
    };

    return (
        <div className="flex flex-col w-full gap-y-10">
            <Header />
            <div className="flex flex-col items-center justify-center w-full">
                <div className="w-11/12">
                    <div className="sm:hidden">
                        <label htmlFor="tabs" className="sr-only">Select your program</label>
                        <select id="tabs" className="text-white bg-gray-900 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" onChange={handleProgramChange}>
                            <option>Co-op</option>
                            <option>Non Co-op</option>
                        </select>
                    </div>
                    <ul className="hidden text-sm font-medium text-center text-white rounded-lg shadow sm:flex">
                        <li className="w-full">
                            <a href="#" className={`inline-block w-full p-4 bg-gray-800 border-r border-gray-200 hover:bg-gray-600 ${programType === "Co-op" ? "bg-gray-600" : ""}`} onClick={() => setProgramType("Co-op")} aria-current={programType === "Co-op" ? "page" : undefined}>Co-op</a>
                        </li>
                        <li className="w-full">
                            <a href="#" className={`inline-block w-full p-4 bg-gray-800 border-r border-gray-200 hover:bg-gray-600 ${programType === "Non Co-op" ? "bg-gray-600" : ""}`} onClick={() => setProgramType("Non Co-op")}>Non Co-op</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col items-start w-full">
                <h1 className="ml-16 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl">For {programType.toLowerCase()} students: </h1>
            </div>
            {programType === "Co-op" ? (
                <>
                    <Dropdown headTitle="First Semester" items={programData.coop.firstSemester} />
                    <Dropdown headTitle="Second Semester" items={programData.coop.secondSemester} />
                    <Dropdown headTitle="Third Semester" items={programData.coop.thirdSemester} />
                    <Dropdown headTitle="Fourth Semester" items={programData.coop.fourthSemester} /></>) :
                (<>
                    <Dropdown headTitle="First Semester" items={programData.noncoop.firstSemester} />
                    <Dropdown headTitle="Second Semester" items={programData.noncoop.secondSemester} />
                    <Dropdown headTitle="Third Semester" items={programData.noncoop.thirdSemester} />
                    <Dropdown headTitle="Fourth Semester" items={programData.noncoop.fourthSemester} /></>)}
        </div>
    )
}