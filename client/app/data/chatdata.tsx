// Static mock users (replace with API later)

export type chatType = {
  id: string;
  name: string;
  message: string;
  time: string;
  image: any;
  unread: number;
  active: boolean;
  hasStory: boolean;
};

const chatMessage: chatType[] = [
  {
    id: "1",
    name: "Julia",
    message: "You: Hey Julia! How you doin?",
    time: "09:14 AM",
    image: require("../assets/img/lady5.png"),
    unread: 0,
    active: true,
    hasStory: true,
  },
  {
    id: "2",
    name: "Gloria",
    message: "Thanks, I appreciate it. Hey, do you...",
    time: "Yesterday",
    image: require("../assets/img/lady2.png"),
    unread: 1,
    active: true,
    hasStory: false,
  },
  {
    id: "3",
    name: "Janeth",
    message: "Same here. I’ve been working on t...",
    time: "Yesterday",
    image: require("../assets/img/lady3.png"),
    unread: 3,
    active: true,
    hasStory: true,
  },
  {
    id: "4",
    name: "Cynthia",
    message: "You: Hey Julia! How you doin?",
    time: "09:14 AM",
    image: require("../assets/img/lady6.png"),
    unread: 0,
    active: true,
    hasStory: false,
  },
  {
    id: "5",
    name: "Rose",
    message: "Thanks, I appreciate it. Hey, do you...",
    time: "Yesterday",
    image: require("../assets/img/lady2.png"),
    unread: 1,
    active: false,
    hasStory: true,
  },
  {
    id: "6",
    name: "Dicksen",
    message: "Same here. I’ve been working on t...",
    time: "Yesterday",
    image: require("../assets/img/guy.png"),
    unread: 3,
    active: false,
    hasStory: false,
  },
];

export default chatMessage;
