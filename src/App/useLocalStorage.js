import React from "react";

const defaultItem = [
  { text: "Complete morning workout 🏋️‍♂️", completed: true },
  { text: "Write project proposal 📝", completed: false },
  { text: "Grocery shopping 🛒", completed: false },
  { text: "Learn a new recipe 👩‍🍳", completed: false },
  { text: "Take a hike nearby 🌳", completed: false },
  { text: "Read a chapter of a book 📖", completed: false },
  { text: "Plan weekend activities 🗓️", completed: false },
  { text: "Organize workspace 🗄️", completed: false },
  { text: "Call a family member 📞", completed: false },
  { text: "Watch a documentary 📺", completed: false },
];

function useLocalStorage() {
  let parsedItem = localStorage.getItem("TaskMaster_V1");
  parsedItem = parsedItem ? JSON.parse(parsedItem) : defaultItem;

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem("TaskMaster_V1", JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
}

export { useLocalStorage };
