import React, { useMemo } from "react"

const Category = ({ type }) => {
    const vegetables = [
        {
            name: "Tomato",
            price: "5.00",

        },
        {
            name: "Potato",
            price: "5.00"
        },
        {
            name: "Carrot",
            price: "2.00"
        },
        {
            name: "Cabbage",
            price: "12.00"
        }
    ]

    const fruits = [
        {
            name: "Melon",
            price: "10.00"
        },
        {
            name: "Watermelon",
            price: "12.00"
        },
        {
            name: "Apple",
            price: "2.00"
        },
        {
            name: "banana",
            price: "3.00"
        }


    ]
    const fruitList = useMemo(() => {
        if (type.toLowerCase() === "fruits") {
            return fruits.map((item, index) => (
                <div key={index}>
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                </div>
            ));
        } else if (type.toLowerCase() === "vegetables") {
            return vegetables.map((item, index) => {
                return (
                    <div key={index}>
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                    </div>
                )
            })
        }

    }, [type]);

    return (
        <div>
            {fruitList}
        </div>
    );

}



export default Category