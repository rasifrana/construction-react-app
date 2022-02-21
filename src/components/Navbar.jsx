import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';



const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    const NavItem = ({ title, classItem }) => {
        return (
            <li className={'mx-1 cursor-pointer py-1 font-light px-2 rounded hover:text-white transition-all hover:bg-pink-800 ${classProp}'}>{title}</li>
        );
    }

    return (
        <nav className="flex justify-between items-center p-4 container mx-auto">
            <div className="ogo">NAVRBAR</div>
            <div className="links">
                <ul className="hidden md:flex justify-between items-center">
                    {['Home', 'About', 'Service', 'Contact'].map((item, index) => (
                        <NavItem key={item + index} title={item} />
                    ))}


                </ul>
                <div>
                    {toggle ? <AiOutlineClose className='cursor-pointer md:hidden' onClick={() => setToggle(false)} /> :

                        <HiMenuAlt4 className='cursor-pointer md:hidden ' onClick={() => setToggle(true)} />

                    }
                    {toggle && (
                        <ul className=' fixed top-0 -right-2 p-3 text-white w-[70vw] h-screen shadow-2xl md:hiden list-none
                    flex flex-col justify-start items-end rounded-md blue-glassmorphism animate-slide-in'>
                            <li className='text-xl  my-2'>
                                <AiOutlineClose onClick={() => setToggle(false)} />
                            </li>
                            {['Home', 'About', 'Service', 'Contact'].map((item, index) => (
                                <NavItem key={item + index} title={item} classProps="my-2 text-lg" />
                            ))}
                        </ul>
                    )}


                </div>


            </div>
        </nav>
    );
}

export default Navbar