import { FC, useEffect, useState } from "react";
import Image from 'next/image';

import TopNavItem from "../TopNavItem";
import logo from '../../../public/images/logo.png'

const TopNav:FC = () => {
    const [openedNav, setOpenedNav] = useState(false);

    function handleClick() {
        setOpenedNav(!openedNav);
    }

    return (
        <div className="flex flex-row p-1 md:p-3">
            <Image src={logo} width={64} height={64} alt="logo"/>
        </div>
    )
}

export default TopNav;