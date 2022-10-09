import { Card } from "antd";
import { PageHeader } from "antd";
import React from "react";
// cards will conditionally render based on user input.
const Menu = (restaurantData) => (
    <>
        <PageHeader
            className="site-page-header"
            onBack={() => null}
            title="Menu"
        />
        <br></br>
        {/* onclick see photo href will show photo of menu item, if no photo, no href */}
        <Card title="Appetizers">
            <Card
                type="inner"
                title="Mozzarella Sticks"
                extra={<a href="#">See Photo</a>}
            >
                Tillamook cheese with marinara sauce and ranch
                <p>$8.00</p>
            </Card>
            <Card
                style={{
                    marginTop: 16,
                }}
                type="inner"
                title="Coconut Shrimp"
                extra={<a href="#">See Photo</a>}
            >
                <p>$15.00</p>
            </Card>
        </Card>

        <Card title="Main">
            <Card
                type="inner"
                title="Pesto Chicken Panini"
                extra={<a href="#">See Photo</a>}
            >
                House made pesto (contains nuts)
                <p>$20.00</p>
            </Card>
            <Card
                style={{
                    marginTop: 16,
                }}
                type="inner"
                title="Dish Name"
                extra={<a href="#">See Photo</a>}
            >
                Vegan tacos with salsa verde
                <p>$20.00</p>
            </Card>
        </Card>
    </>
);

export default Menu;
