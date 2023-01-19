import cousedetails from '../details'

const CourseTitleNav = ({ handleCourseCategory, setCourses }: any) => {
    return (
        <div className="flex flex-col md:flex-row  items-start justify-between md:items-end">
            <div className='leading-tight text-left'>
                <h1 className="text-2xl">Find the right</h1>
                <h1 className="text-2xl font-semibold">Online courses for you</h1>
            </div>
            <nav>
                <div className="w-full flex items-center" id="menu">
                    <ul
                        className="
                                    pt-4
                                    text-base text-gray-700
                                    flex
                                    justify-between 
                                    gap-3
                                    "
                    >
                        <li>
                            <button
                                onClick={() => handleCourseCategory('Web Development')}
                                className="md:p-4 py-2 block hover:text-purple-400"
                            >Web Developement
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleCourseCategory('Python')}
                                className="md:p-4 py-2 block hover:text-purple-400"
                            >Python</button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleCourseCategory('c++')}
                                className="md:p-4 py-2 block hover:text-purple-400"
                            >c++</button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleCourseCategory('Rust')}
                                className="md:p-4 py-2 block hover:text-purple-400"
                            >Rust</button>
                        </li>
                        <li>
                            <button
                                onClick={() => setCourses(cousedetails)}
                                className="md:p-4 py-2 block hover:text-purple-400"
                            >All</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default CourseTitleNav;