"use client";

import DrinkCard from "@/components/DrinkCard";

import React from "react";

const AdminDrinkList: React.FC<DrinkListProps> = ({ drinks }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {drinks.map((drink) => (
        <DrinkCard key={drink.id} drink={drink} />
      ))}
    </div>
  );
};

export default AdminDrinkList;
