export type likeType = {
  likerid: string;
  likedId: String;
  likedname: String;
  likedUserPhoto: any;
  timeStamp: string;
};

const LIKE: likeType[] = [
  {
    likerid: " user001",
    likedId: "user456",
    likedname: "John",
    likedUserPhoto: require("../assets/img/guy2.png"),
    timeStamp: "3 hours ago",
  },
  {
    likerid: "user013",
    likedId: "user456",
    likedname: "Catherine",
    likedUserPhoto: require("../assets/img/lady2.png"),
    timeStamp: "2 daysago",
  },
  {
    likerid: "user002",
    likedId: "user456",
    likedname: "David",
    likedUserPhoto: require("../assets/img/guy3.png"),
    timeStamp: "1 hour ago",
  },
];

export default LIKE;
