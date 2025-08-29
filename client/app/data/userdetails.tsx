export type MatchTypes = {
  id: string;
  name: string;
  age: string;
  gender: string;
  height: string;
  profession: string;
  location: string;
  distance: string;
  about: string;
  lookingFor: string;
  hobbies: any;
  image: any;
};

const userDetails: MatchTypes[] = [
  {
    id: "user004",
    name: "John",
    age: "33",
    gender: "Male",
    height: "5:11",
    profession: "Entreprenuer & CEO",
    location: "Montreal Quebec",
    distance: "19km",
    about: "Hi, I am John and I love business and adventure.",
    lookingFor: "Something Casual",
    hobbies: ["Traveling", "Food", "Movies", "Singing", "Piano"],
    image: [
      require("../assets/img/guy2.png"),
      require("../assets/img/guy4.png"),
      require("../assets/img/guy3.png"),
      require("../assets/img/guy4.png"),
    ],
  },
  {
    id: "user023",
    name: "Catherine",
    age: "23",
    gender: "Female",
    height: "5:11",
    profession: "Teacher ",
    location: "Ottawa Ontario",
    distance: " 230km",
    about:
      "Hi I am Cathrine, I am a cook by profession and I love spending time with family and enjoying the nature and adventure.",
    lookingFor: "Marriage",
    hobbies: ["Singing", "Cooking", "Dancing", "Teaching", "Reading"],
    image: [
      require("../assets/img/lady3.png"),
      require("../assets/img/lady.png"),
      require("../assets/img/lady.png"),
      require("../assets/img/lady2.png"),
    ],
  },
  {
    id: "user003",
    name: "Lisa",
    age: "27",
    gender: "Female",
    height: "5:3",
    profession: "Self-employed",
    location: "Toronto Ontario",
    distance: " 139km",
    about: "Hi I am Lisa, not the popular Mona Lisa but you favorite lisa.",
    lookingFor: "Serious Relationship.",
    hobbies: ["Music", "Invesment", "Art", "Videography", "Baking"],
    image: [
      require("../assets/img/lady4.png"),
      require("../assets/img/lady4.png"),
      require("../assets/img/lady3.png"),
      require("../assets/img/lady3.png"),
    ],
  },
];

export default userDetails;
