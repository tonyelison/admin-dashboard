/*
Mock Data
*/

const projects = [
  {
    title: "Project ABC",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    actions: ["favorite", "hide", "history"],
  },
  {
    title: "Project DEF",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    actions: [],
  },
  {
    title: "Project GHI",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    actions: ["favorite", "hide"],
  },
  {
    title: "Project JKL",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    actions: ["favorite", "history"],
  },
  {
    title: "Project ABC",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    actions: ["favorite", "hide", "history"],
  },
  {
    title: "Project ABC",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    actions: ["favorite", "hide", "history"],
  },
];

const announcements = [
  {
    title: "Announcement ABC",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title: "Announcement ABC",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title: "Announcement ABC",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
];

const trendingUsers = [
  {
    handle: "user123",
    name: "Some User",
    avatar: "1"
  },
  {
    handle: "user124",
    name: "Some User",
    avatar: "2"
  },
  {
    handle: "user125",
    name: "Some User",
    avatar: "3"
  },
  {
    handle: "user126",
    name: "Some User",
    avatar: "4"
  },
];

// generate project cards
const cardGrid = document.querySelector(".card-grid");
projects.forEach((item) => {
  let card = document.createElement("div");
  card.classList.add("card");

  let title = document.createElement("h4");
  title.textContent = item.title;
  
  let desc = document.createElement("div");
  desc.classList.add("desc");
  desc.textContent = item.desc;

  let actions = document.createElement("div");
  actions.classList.add("card-actions");
  item.actions.forEach((action) => {
    let actionItem = document.createElement("div");
    actionItem.classList.add(action);
    actions.appendChild(actionItem);
  });

  card.append(title, desc, actions);
  cardGrid.appendChild(card);
});