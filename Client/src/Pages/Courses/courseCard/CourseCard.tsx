import { AiOutlineBorderlessTable, AiOutlineUser } from "react-icons/ai";

type courseDet = {
    course: {
        id: number;
        category: string;
        title: string;
        lecture: number;
        people: number;
        image: string;
    }
}

const courseCard = ({ course }: courseDet) => {
    const { title,lecture,people ,image} = course
    return (
        <div>
            <div className="overflow-hidden rounded-lg shadow-lg h-96 w-96 transition duration-300 group transform hover:-translate-y-2 ">
                <img alt="Placeholder" className="block w-full h-52" src={image} />
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <p className="ml-2 text-lg">
                       {title}
                    </p>

                </header>
                <hr />
                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <div className="flex items-center justify-center gap-2 text-lg">
                        <AiOutlineBorderlessTable size={20} />
                        <h3 className="no-underline hover:underline text-black">
                         {lecture}
                        </h3>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-lg">
                        <AiOutlineUser size={20} />
                        <h3 className="no-underline hover:underline text-black">
                           {people}
                        </h3>
                    </div>
                </footer>

            </div>
        </div>
    );
};

export default courseCard;