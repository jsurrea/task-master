import React from "react";

function useLocalStorage(itemName, defaultValue) {
  const [item, setItem] = React.useState(defaultValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    try {
      let parsedItem = localStorage.getItem(itemName);
      parsedItem = parsedItem ? JSON.parse(parsedItem) : defaultValue;
      setLoading(false);
      setItem(parsedItem);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };
