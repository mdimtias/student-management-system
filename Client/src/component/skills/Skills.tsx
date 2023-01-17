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
    console.log(newCata);
    const skillsDataMap = newCata.map(skill => <SkillsCard skill={skill} />)

    const handleCataLoad = (cata: any) =>{
        const filterCata = skillsDa.filter(c => c.cata === cata)
        setNewCata(filterCata)
        console.log(filterCata);
    }
    return (
        <div className='bg-white p-4'>
            <div className='bg-gradient-to-r from-black via-indigo-500 to-black p-5 text-white font-custom rounded-xl h-[90vh]'>
                <div className='mt-8 text-center'>
                    <h1 className="text-4xl mt-4">New Year, New Skill</h1>
                    <h2 className="text-xl my-3">
                        In the New Year, EduManage courses and bundles will be available at even more savings</h2>
                    <div className="flex justify-center items-center mb-8 gap-4">
                        <div className="flex justify-center items-center md:gap-1 text-xs md:text-base flex-nowrap">
                            <AiFillCheckCircle />
                            <div className="">
                                Best teachers
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-1 ">
                            <AiFillCheckCircle />
                            <div className="">
                                Quality courses
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-1 ">
                            <AiFillCheckCircle />
                            <div className="">
                                10+ courses
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[80%] mx-auto'>
                    <div className="flex gap-3 text-center justify-center mb-4">
                        {
                            uniqueCataArr.map(u => (
                                <div className="flex gap-3">
                                    <h1
                                    onClick={() => handleCataLoad(u)}
                                     className="bg-purple-700 px-2 py-1 rounded-xl cursor-pointer">
                                        {u}
                                    </h1>
                                </div>
                            ))
                        }
                    </div>
                    <Carousel responsive={responsive}>
                        {skillsDataMap}
                    </Carousel>
                </div>
            </div>
        </div >
    );
};

export default Skills;