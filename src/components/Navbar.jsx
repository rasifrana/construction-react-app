import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';



const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    const NavItem = ({ title, classProps, id }) => {
        return (
            <li className={'mx-1 cursor-pointer py-1 font-light px-2 rounded hover:text-white transition-all hover:bg-blue-700 ${classProp}'}> <a href={id}>{title}</a> </li>
        );
    }

    return (
        <nav className="sticky top-0 bg-slate-100 ">
            <div className='flex justify-between items-center p-4 container mx-auto'>
                <div className="logo">WEBLY</div>
                <div className="links">
                    <ul className="hidden md:flex justify-between items-center">
                        <NavItem title={'Products'} id={'#products'} />
                        <NavItem title={'Elements'} id={'#elements'} />
                        <NavItem title={'Pricing'} id={'#pricing'} />
                        <NavItem title={'Contact'} id={'#contact'} />


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
                                <NavItem title={'Products'} id={'#products'} />
                                <NavItem title={'Elements'} id={'#elements'} />
                                <NavItem title={'Pricing'} id={'#pricing'} />
                                <NavItem title={'Contact'} id={'#contact'} />
                            </ul>
                        )}


                    </div>


                </div>
            </div>
        </nav>
    );
}

export default Navbar