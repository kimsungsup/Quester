import React, { useState } from "react";

type Props = {
  categories: string[];
  onCategoryChange: (category: number) => void;
  nowCategory: number | null;
};

const CategoryFilter = ({
  categories,
  onCategoryChange,
  nowCategory,
}: Props) => {
  const handleCategoryChange = (category: number) => {
    onCategoryChange(category);
  };

  return (
    <div style={{}} className="categoryfilter">
      {categories.map((category, idx) => (
        <button
          key={idx}
          onClick={() => handleCategoryChange(idx)}
          style={{
            margin: "5px",
            padding: "12px 12px",
            borderRadius: "42px",
            cursor: "pointer",
            border: "1px solid",
            color: nowCategory === idx ? "white" : "#283063",
            fontWeight: "bold",
            backgroundColor: nowCategory === idx ? "#283063" : "white",
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
