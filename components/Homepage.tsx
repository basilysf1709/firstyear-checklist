'use client'

import { Header } from "@/components/Header"
import { Dropdown } from "@/components/Dropdown"
import { coop_firstSemester, coop_secondSemester, coop_thirdSemester } from "@/utils/utils";
import { useState } from "react";

export const Homepage = () => {
    const [programType, setProgramType] = useState("Co-op");

    const handleProgramChange = (event: any) => {
        setProgramType(event.target.value);
    };

    return (
        <div className="flex flex-col w-full gap-y-10">
            <Header />
            <div className="w-full items-center px-16">
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
            <h1 className="ml-16 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl">For {programType.toLowerCase()} students: </h1>
            {programType === "Co-op" ? (
                <>
                    <Dropdown headTitle="First Semester" items={coop_firstSemester} />
                    <Dropdown headTitle="Second Semester" items={coop_secondSemester} />
                    <Dropdown headTitle="Third Semester" items={coop_thirdSemester} /></>) :
                (<>
                    <Dropdown headTitle="Second Semester" items={coop_secondSemester} />
                    <Dropdown headTitle="Second Semester" items={coop_secondSemester} />
                    <Dropdown headTitle="Second Semester" items={coop_secondSemester} />
                    <Dropdown headTitle="Second Semester" items={coop_secondSemester} />
                    <Dropdown headTitle="Second Semester" items={coop_secondSemester} />
                    <Dropdown headTitle="Second Semester" items={coop_secondSemester} />
                    <Dropdown headTitle="Second Semester" items={coop_secondSemester} /></>)}
        </div>
    )
}