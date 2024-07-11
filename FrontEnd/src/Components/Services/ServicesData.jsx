import Lottie from "lottie-react";

import animationArts from "./AnimationJSON/Arts.json";
import booksAnimation from "./AnimationJSON/Book.json";
import mealData from "./AnimationJSON/Meal.json";
import Play from "./AnimationJSON/Play.json";
import musicData from "./AnimationJSON/Music.json";
import SocialDev from "./AnimationJSON/SocialDev.json";

import EarlyChildhoodEdu from "../../Assets/ServicesImages/EarlyChildhoodEdu.jpg";
import Art from "../../Assets/ServicesImages/Art.jpg";
import Music from "../../Assets/ServicesImages/Music.jpg";
import NutritiousMeal from "../../Assets/ServicesImages/NutritiousMeal.jpg";
import OutdoorPlaying from "../../Assets/ServicesImages/OutdoorPlaying.jpg";
import SocialDevelopment from "../../Assets/ServicesImages/SocialDevelopment.jpg";

const serviceData = [
  {
    id: 1,
    icon: "myIcon",
    title: "Early Childhood Education Program",
    briefDescription:
      "Our comprehensive early childhood education program fosters holistic development in a safe and nurturing environment.",
    extendedDescription:
      "Our early childhood education program is designed to lay a strong foundation for childrens lifelong learning journey. With a blend of structured lessons and hands-on experiences, we focus on promoting cognitive, social, emotional, and physical development. Our qualified educators create engaging activities that stimulate curiosity and creativity, preparing children for future academic success.",
    imageMain: EarlyChildhoodEdu,
    animation: <Lottie animationData={booksAnimation} />,
    colorStyling: "blue",
    keyFeatures: [
      "Structured learning curriculum",
      "Hands-on learning experiences",
      "Qualified and experienced educators",
    ],
    benefits: [
      "Promotes cognitive, social, emotional, and physical development",
      "Prepares children for future academic success",
      "Stimulates curiosity and creativity",
    ],
    customerReviews: [
      {
        comment:
          "My child has learned so much and loves going to this program!",
        author: "Jane Doe",
      },
      {
        comment: "The teachers are amazing and the environment is nurturing.",
        author: "John Smith",
      },
      {
        comment: "Highly recommend this program for any parent!",
        author: "Emily Johnson",
      },
    ],
  },
  {
    id: 2,
    icon: "myIcon",
    title: "Creative Arts and Crafts",
    briefDescription:
      "Unleash your child's creativity with our arts and crafts program! From painting and drawing to sculpting and crafting.",
    extendedDescription:
      "In our creative arts and crafts sessions, children embark on a journey of self-expression and discovery. Under the guidance of experienced instructors, they experiment with different art forms, learn basic techniques, and create masterpieces to showcase their imagination. Our program not only enhances artistic abilities but also encourages problem-solving, perseverance, and confidence.",
    imageMain: Art,
    animation: <Lottie animationData={animationArts} />,
    colorStyling: "red",
    keyFeatures: [
      "Various art forms and techniques",
      "Experienced art instructors",
      "Encourages self-expression and creativity",
    ],
    benefits: [
      "Enhances artistic abilities",
      "Develops problem-solving and perseverance skills",
      "Builds confidence in children",
    ],
    customerReviews: [
      {
        comment: "My child loves the creative freedom and has learned so much!",
        author: "Sarah Williams",
      },
      {
        comment: "The teachers are fantastic and really inspire the kids.",
        author: "Michael Brown",
      },
      {
        comment: "Great program! It's helped my child become more confident.",
        author: "Sophia Anderson",
      },
    ],
  },
  {
    id: 3,
    icon: "myIcon",
    title: "Outdoor Play and Exploration",
    briefDescription:
      "Let your child connect with nature and engage in active play through our outdoor play and exploration sessions.",
    extendedDescription:
      "Outdoor play is an integral part of our curriculum, providing children with opportunities to explore the natural world, engage in physical activity, and develop a sense of environmental stewardship. Through supervised outdoor adventures, children learn to appreciate the beauty of nature, build resilience, and develop important social skills such as cooperation and teamwork.",
    imageMain: OutdoorPlaying,
    animation: <Lottie animationData={Play} />,
    colorStyling: "purple",
    keyFeatures: [
      "Supervised outdoor adventures",
      "Develops environmental stewardship",
      "Builds resilience and social skills",
    ],
    benefits: [
      "Appreciation for nature",
      "Physical activity and exercise",
      "Cooperation and teamwork",
    ],
    customerReviews: [
      {
        comment: "The outdoor play sessions are a highlight for my child!",
        author: "David Miller",
      },
      {
        comment:
          "I love that they learn about nature and get exercise at the same time.",
        author: "Jessica Taylor",
      },
      {
        comment: "Great way for kids to learn social skills and work together.",
        author: "Andrew Clark",
      },
    ],
  },
  {
    id: 4,
    icon: "myIcon",
    title: "Music and Movement",
    briefDescription:
      "Our music and movement program introduces children to the joy of music, rhythm, and dance! Through singing, dancing, and playing musical instruments.",
    extendedDescription:
      "Music and movement are powerful tools for promoting holistic development in children. In our dynamic program, children explore different genres of music, experiment with rhythm and melody, and participate in fun-filled dance routines. Through musical expression, they develop listening skills, improve coordination, and build confidence in their abilities.",
    imageMain: Music,
    animation: <Lottie animationData={musicData} />,
    colorStyling: "orange",
    keyFeatures: [
      "Exploration of different music genres",
      "Improves listening and coordination skills",
      "Fun-filled dance routines",
    ],
    benefits: [
      "Promotes holistic development",
      "Builds confidence in musical expression",
      "Enhances coordination and rhythm",
    ],
    customerReviews: [
      {
        comment:
          "My child loves the music and dancing. It's their favorite activity!",
        author: "Jessica Green",
      },
      {
        comment:
          "Great program! Helps kids learn about rhythm and improves coordination.",
        author: "Alex Wilson",
      },
      {
        comment: "Fantastic teachers and a lot of fun for the kids.",
        author: "Sophie Davis",
      },
    ],
  },
  {
    id: 5,
    icon: "myIcon",
    title: "Nutritious Meals and Snacks",
    briefDescription:
      "We prioritize your child's health and well-being by providing nutritious meals and snacks prepared with fresh, wholesome ingredients.",
    extendedDescription:
      "At our daycare center, we believe that good nutrition is essential for supporting children's growth, development, and overall well-being. Our dedicated kitchen staff prepare delicious and balanced meals using locally sourced ingredients, catering to diverse dietary needs and preferences. We encourage children to explore new flavors, learn about nutrition, and develop lifelong habits for healthy eating.",
    imageMain: NutritiousMeal,
    animation: <Lottie animationData={mealData} />,
    colorStyling: "green",
    keyFeatures: [
      "Delicious and balanced meals",
      "Locally sourced ingredients",
      "Caters to diverse dietary needs",
    ],
    benefits: [
      "Supports growth and development",
      "Promotes healthy eating habits",
      "Teaches children about nutrition",
    ],
    customerReviews: [
      {
        comment: "The meals are nutritious and my child loves them!",
        author: "Rachel Lee",
      },
      {
        comment: "I appreciate that they cater to different dietary needs.",
        author: "David Brown",
      },
      {
        comment:
          "High-quality meals that make me feel good about what my child is eating.",
        author: "Amanda White",
      },
    ],
  },
  {
    id: 6,
    icon: "myIcon",
    title: "Social and Emotional Development",
    briefDescription:
      "Our social and emotional development program focuses on nurturing positive relationships, empathy, and resilience in children.",
    extendedDescription:
      "Building strong social and emotional skills is crucial for children's success in school and life. In our program, children engage in activities that promote self-awareness, empathy, and effective communication. They learn to recognize and manage their emotions, resolve conflicts peacefully, and develop healthy relationships with peers and adults.",
    imageMain: SocialDevelopment,
    animation: <Lottie animationData={SocialDev} />,
    colorStyling: "yellow",
    keyFeatures: [
      "Promotes self-awareness and empathy",
      "Develops effective communication skills",
      "Builds healthy relationships",
    ],
    benefits: [
      "Prepares children for social interactions",
      "Enhances emotional intelligence",
      "Teaches conflict resolution",
    ],
    customerReviews: [
      {
        comment:
          "My child has become more confident and better at communicating.",
        author: "Lisa Johnson",
      },
      {
        comment:
          "Great program for teaching kids about emotions and relationships.",
        author: "Michael Taylor",
      },
      {
        comment:
          "I've seen a positive change in my child's social skills since starting the program.",
        author: "Sophie Roberts",
      },
    ],
  },
];

export default serviceData;
