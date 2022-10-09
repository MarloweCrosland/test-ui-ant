import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import React, { useState } from "react";
//conditionally render submenu children labels,
//when we click the submenu item, it renders only that category card,
//when we click "Our Menu" it renders the entire menu with all category cards.

//back button arrow will take user to Home..
const items = [
    {
        label: "Home",
        key: "mail",
    },
    {
        label: "Our Menu",
        icon: <AppstoreOutlined />,
        key: "SubMenu",
        children: [
            {
                type: "group",
                children: [
                    {
                        label: "Appetizers",
                        key: "setting:1",
                    },
                    {
                        label: "Main Dishes",
                        key: "setting:2",
                    },
                    {
                        label: "Drinks",
                        key: "setting:3",
                    },
                    {
                        label: "Desserts",
                        key: "setting:4",
                    },
                ],
            },
        ],
    },
    {
        label: "Contact Us",
        key: "app",
    },
];

const Nav = () => {
    const [current, setCurrent] = useState("mail");

    const onClick = (e) => {
        console.log("click ", e);
        setCurrent(e.key);
    };

    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
        />
    );
};

export default Nav;
