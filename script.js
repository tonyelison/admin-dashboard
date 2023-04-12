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
    title: "Announcement DEF",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title: "Announcement GHI",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title: "Announcement JKL",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title: "Announcement MNO",
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
  const card = document.createElement("div");
  card.classList.add("card");

  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");

  const title = document.createElement("h4");
  title.textContent = item.title;
  
  const desc = document.createElement("div");
  desc.classList.add("desc");
  desc.textContent = item.desc;

  const actions = document.createElement("div");
  actions.classList.add("card-actions");
  item.actions.forEach((action) => {
    const actionItem = document.createElement("div");
    actionItem.classList.add(action);
    actions.appendChild(actionItem);
  });

  cardContent.append(title, desc, actions);
  card.appendChild(cardContent);
  cardGrid.appendChild(card);
});

// populate announcements
const announcementCard = document.querySelector(".widget.announcement .card-content");
announcements.forEach((a) => {
  const item = document.createElement("div");
  item.classList.add("list-item");

  const title = document.createElement("h5");
  title.textContent = a.title;
  
  const desc = document.createElement("div");
  desc.classList.add("desc");
  desc.textContent = a.desc;

  item.append(title, desc);
  announcementCard.appendChild(item);
});

// populate trending
const trendingCard = document.querySelector(".widget.trending .card-content");
trendingUsers.forEach((user) => {
  const item = document.createElement("div");
  item.classList.add("list-item");

  const handle = document.createElement("h5");
  handle.textContent = user.handle;
  
  const name = document.createElement("div");
  name.classList.add("name");
  name.textContent = user.name;

  item.append(handle, name);
  trendingCard.appendChild(item);
});