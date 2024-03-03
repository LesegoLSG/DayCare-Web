import Image1 from '../../Assets/Image1.jpg';
import Image2 from '../../Assets/Image2.jpg';
import Image3 from '../../Assets/Image3.jpg';
import Image4 from '../../Assets/Image4.jpg';
import Lesego from '../../Assets/Lesego.png';
import EmptyUser from '../../Assets/EmptyUser.png';
import Lottie from "lottie-react";

import animationArts from './AnimationJSON/Arts.json';
import booksAnimation from './AnimationJSON/Book.json';
import mealData from './AnimationJSON/Meal.json';
import funWalkData from './AnimationJSON/Funwalk.json';
import musicData from './AnimationJSON/Music.json';
import socialData from './AnimationJSON/Social.json';

//To be broken down into pieces, when need to have an object with main data which will also contain an object for styling.
const serviceData = [
    {
        id: 1,
        icon: 'myIcon',
        title: 'Early Childhood Education Program',
        briefDescription: 'Our comprehensive early childhood education program fosters holistic development in a safe and nurturing environment.',
        extendedDescription: 'Our early childhood education program is designed to lay a strong foundation for childrens lifelong learning journey. With a blend of structured lessons and hands-on experiences, we focus on promoting cognitive, social, emotional, and physical development. Our qualified educators create engaging activities that stimulate curiosity and creativity, preparing children for future academic success.',
        imageMain: Image1,
        animation: <Lottie animationData={booksAnimation} />,
        colorStyling: 'blue'
    },
    {
        id: 2,
        icon: 'myIcon',
        title: 'Creative Arts and Crafts',
        briefDescription: ' Unleash your childs creativity with our arts and crafts program! From painting and drawing to sculpting and crafting.',
        extendedDescription: 'In our creative arts and crafts sessions, children embark on a journey of self-expression and discovery. Under the guidance of experienced instructors, they experiment with different art forms, learn basic techniques, and create masterpieces to showcase their imagination. Our program not only enhances artistic abilities but also encourages problem-solving, perseverance, and confidence.',
        imageMain: Image2,
        animation: <Lottie animationData={animationArts} />,
        colorStyling: 'red'
    },
    {
        id: 3,
        icon: 'myIcon',
        title: 'Outdoor Play and Exploration',
        briefDescription: ' Let your child connect with nature and engage in active play through our outdoor play and exploration sessions.',
        extendedDescription: 'Outdoor play is an integral part of our curriculum, providing children with opportunities to explore the natural world, engage in physical activity, and develop a sense of environmental stewardship. Through supervised outdoor adventures, children learn to appreciate the beauty of nature, build resilience, and develop important social skills such as cooperation and teamwork.',
        imageMain: Image3,
        animation: <Lottie animationData={funWalkData} />,
        colorStyling: 'purple'
    },
    {
        id: 4,
        icon: 'myIcon',
        title: 'Music and Movement',
        briefDescription: 'Our music and movement program introduces children to the joy of music, rhythm, and dance! Through singing, dancing, and playing musical instruments',
        extendedDescription: ' Music and movement are powerful tools for promoting holistic development in children. In our dynamic program, children explore different genres of music, experiment with rhythm and melody, and participate in fun-filled dance routines. Through musical expression, they develop listening skills, improve coordination, and build confidence in their abilities.',
        imageMain: Image4,
        animation: <Lottie animationData={musicData} />,
        colorStyling: 'orange'
    },
    {
        id: 5,
        icon: 'myIcon',
        title: 'Nutritious Meals and Snacks',
        briefDescription: 'We prioritize your childs health and well-being by providing nutritious meals and snacks prepared with fresh, wholesome ingredients.',
        extendedDescription: 'At our daycare center, we believe that good nutrition is essential for supporting childrens growth, development, and overall well-being. Our dedicated kitchen staff prepare delicious and balanced meals using locally sourced ingredients, catering to diverse dietary needs and preferences. We encourage children to explore new flavors, learn about nutrition, and develop lifelong habits for healthy eating.',
        imageMain: Lesego,
        animation: <Lottie animationData={mealData} />,
        colorStyling: 'green'
    },
    {
        id: 6,
        icon: 'myIcon',
        title: 'Social and Emotional Development',
        briefDescription: 'Our social and emotional development program focuses on nurturing positive relationships, empathy, and resilience in children.',
        extendedDescription: 'Building strong social and emotional skills is crucial for childrens success in school and life. In our program, children engage in activities that promote self-awareness, empathy, and effective communication. They learn to recognize and manage their emotions, resolve conflicts peacefully, and develop healthy relationships with peers and adults.',
        animation: <Lottie animationData={socialData} />,
        colorStyling: 'yellow'

    },
];
export default serviceData;