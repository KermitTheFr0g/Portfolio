import { FC, useEffect, useState } from "react";
import TopNavItem from "../TopNavItem";

const TopNav:FC = () => {
    const [openedNav, setOpenedNav] = useState(false);

    function handleClick() {
        setOpenedNav(!openedNav);
    }

    return (
        <div className="flex flex-row">
            <div>Cool Logo Here</div>
            <div>Gray</div>            

        
        </div>
    )
}

export default TopNav;