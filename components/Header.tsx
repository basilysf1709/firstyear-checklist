import Link from "next/link";

export const Header = () => {
    return (
        <div className="ml-4 mt-12 sm:mt-12 flex flex-col w-full items-center">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Supercharge your University life</h1>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">Hand curated list to-dos for each semester for Computer Science and Software Engineering Students</p>
        </div>
    )
}
