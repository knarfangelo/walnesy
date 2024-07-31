import { IBlog } from "./IBlog";

const blogList: IBlog[] = [
    {
        id: 1,
        title: "Primer blog",
        content: "Contenido del primer blog...",
        date: new Date(),
        img: "/blog/blog1.jpg"
    },
    {
        id: 2,
        title: "Segundo blog",
        content: "Contenido del segundo blog...",
        date: new Date(),
        img: "/blog/blog2.jpg"
    },
    {
        id: 3,
        title: "Tercer blog",
        content: "Contenido del tercer blog...",
        date: new Date(),
        img: "/blog/blog3.jpg"  
    },
    {
        id: 3,
        title: "Cuarto blog",
        content: "Contenido del tercer blog...",
        date: new Date(),
        img: "/blog/blog4.jpg"  
    }
];

export default blogList;