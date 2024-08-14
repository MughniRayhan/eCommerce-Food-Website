import CategoryCard from "./CategoryCard";

const data=[
    {
        id: 0,
        name: "Fresh Fruits",
        count: "9 Products",
        img: "/images/category_1.png",
    },
    {
        id: 1,
        name: "Fresh Vegs",
        count: "15 Products",
        img: "/images/category_2.png",
    },
    {
        id: 2,
        name: "Canned Goods",
        count: "7 Products",
        img: "/images/category_3.png",
    },
    {
        id: 3,
        name: "Bread & Bakery",
        count: "10 Products",
        img: "/images/category_6.png",
    },
    {
        id: 4,
        name: "Fishes",
        count: "6 Products",
        img: "/images/category_5.png",
    },
    {
        id: 5,
        name: "Eggs & Dairy",
        count: "8 Products",
        img: "/images/category_4.png",
    },
    {
        id: 6,
        name: "Soft Drinks",
        count: "5 Products",
        img: "/images/category_7.png",
    },
    {
        id: 7,
        name: "Fresh Fruits",
        count: "10 Products",
        img: "/images/category_1.png",
    },
];

const Category = ()=>{
    return <div className="container pt-16">
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
     {data.map((x)=>
     <CategoryCard 
     key={x.id} 
     img={x.img} 
     name={x.name} 
     count={x.count}/>
     )}
    </div>
        
    </div>
}

export default Category;