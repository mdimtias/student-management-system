import { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import Carousel from 'react-multi-carousel';
import SkillsCard from './SkillsCard';
import { responsive, skillsDa } from './skillsData';

type cataData = {
    id: number;
    cata: string;
    name: string;
    image: string;
    price: number;
    description: string;
}[]

const Skills = () => {
    let categories = skillsDa.map(item => item.cata).filter((item, index, self) => self.indexOf(item) === index);
    const uniqueCataArr = [...categories]
    const [newCata, setNewCata] = useState<cataData>(skillsDa)
    const skillsDataMap = newCata.map(skill => <SkillsCard key={skill.id} skill={skill} />)

    const handleCataLoad = (cata: any) => {
        const filterCata = skillsDa.filter(c => c.cata === cata)
        setNewCata(filterCata)
    }
    return (
        <div className='bg-white p-4'>
            <div className='bg-gradient-to-r from-black via-indigo-900 to-black p-5 text-white font-custom rounded-xl h-full'>
                <div className='mt-8 text-center'>
                    <h1 className="text-3xl mt-4">New Year, New Skill</h1>
                    <h2 className="text-xl my-3">
                        In the New Year, EduManage courses and bundles will be available at even more savings</h2>
                    <div className="flex justify-center items-center mb-8 md:gap-4">
                        <div className="flex justify-center items-center gap-1 md:text-base">
                            <AiFillCheckCircle />
                            <span className="text-xs mr-1">
                                Best teachers
                            </span>
                        </div>
                        <div className="flex justify-center items-center gap-1 ">
                            <AiFillCheckCircle />
                            <span className="text-xs mr-1">
                                Quality content
                            </span>
                        </div>
                        <div className="flex justify-center items-center gap-1 ">
                            <AiFillCheckCircle />
                            <span className="text-xs">
                                10+ courses
                            </span>
                        </div>
                    </div>
                </div>
                <div className='w-[80%] mx-auto'>
                    <Carousel responsive={responsive}>
                        {
                            uniqueCataArr.map(u => (
                                <div className=" mb-4 text-center w-11/12 mx-auto">
                                    <h1
                                        onClick={() => handleCataLoad(u)}
                                        className="bg-purple-700 hover:bg-purple-600 px-2 py-1 rounded-xl cursor-pointer text-xs md:text-base">
                                        {u}
                                    </h1>
                                </div>
                            ))
                        }
                    </Carousel>
                    <Carousel responsive={responsive}>
                        {skillsDataMap}
                    </Carousel>
                </div>
            </div>
        </div >
    );
};

export default Skills;