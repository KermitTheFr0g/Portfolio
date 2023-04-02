import { FC } from "react";

interface item {
    itemText: string;
    itemLink: string;
}

const TopNavItem:FC<item> = (props) => {
    return (
        <div>
            {props.itemText}
        </div>
    )
}

export default TopNavItem;