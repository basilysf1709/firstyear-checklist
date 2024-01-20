'use client'

import { useState } from "react";

interface CheckboxItem {
  title: string;
  description: string;
}

interface DropdownProps {
  headTitle: string;
  items: CheckboxItem[];
}

export const Dropdown: React.FC<DropdownProps> = ({headTitle, items}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="flex flex-col w-full items-center">
      <button
        id="dropdownHelperButton"
        onClick={toggleDropdown}
        className="w-11/12 text-white bg-gray-900 hover:bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center"
        type="button"
      >
        {headTitle}{" "}
        <svg
          className="w-2.5 h-2.5 ms-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <div
        id="dropdownHelper"
        className={`z-10 w-11/12 ${isDropdownOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow`}
      >
        <ul
          className="p-3 space-y-1 text-sm text-gray-900"
          aria-labelledby="dropdownHelperButton"
        >
          {items.map((item, index) => (
            <li key={index}>
              <div className="flex p-2 rounded hover:bg-gray-100">
                <div className="flex items-center h-5">
                  <input
                    id={`helper-checkbox-${index}`}
                    aria-describedby={`helper-checkbox-text-${index}`}
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded"
                  />
                </div>
                <div className="ms-2 text-sm">
                  <label
                    htmlFor={`helper-checkbox-${index}`}
                    className="font-medium text-gray-900"
                  >
                    <div>{item.title}</div>
                    <p
                      id={`helper-checkbox-text-${index}`}
                      className="text-xs font-normal text-gray-500"
                    >
                      {item.description}
                    </p>
                  </label>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
