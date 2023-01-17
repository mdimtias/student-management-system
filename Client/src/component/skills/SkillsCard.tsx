import React from 'react';

type skillType = {
    skill: {
        id: number;
        name: string;
        image: string;
        price: number;
        description: string;
    }
}

const SkillsCard = ({ skill }: skillType) => {
    const { name, image, price } = skill
    return (
        <div className="bg-white rounded-lg  p-2 transform hover:translate-y-1 hover:shadow-xl transition duration-300 ml-2 mx-auto">
            <figure className="mb-2">
                <img src={image} alt="" className="h-64 ml-auto mr-auto" />
            </figure>
            <div className="rounded-lg p-2 bg-purple-700 flex flex-col">
                <div className="flex items-center justify-between flex-nowrap">
                    <div className="text-lg text-white ">
                        {name}
                    </div>
                    <div className="text-lg text-white font-light">
                        ${price}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsCard;