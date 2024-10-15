import { useState, useEffect } from "react";
import { fetchKanbanData } from "../services/api";

export const useKanbanData = () => {
  // Initialize from localStorage or default to 'status' and 'priority'
  const [grouping, setGrouping] = useState(
    () => localStorage.getItem("grouping") || "status"
  );
  const [sorting, setSorting] = useState(
    () => localStorage.getItem("sorting") || "priority"
  );
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchKanbanData();
        setData(result);
      } catch (error) {
        // Handle error (e.g., show error message to user)
      }
    };

    loadData();
  }, []);

  // Save user preferences to localStorage when they change
  useEffect(() => {
    localStorage.setItem("grouping", grouping);
    localStorage.setItem("sorting", sorting);
  }, [grouping, sorting]);

  const updateGrouping = (newGrouping) => {
    setGrouping(newGrouping);
  };

  const updateSorting = (newSorting) => {
    setSorting(newSorting);
  };

  return {
    data,
    grouping,
    sorting,
    updateGrouping,
    updateSorting,
  };
};
