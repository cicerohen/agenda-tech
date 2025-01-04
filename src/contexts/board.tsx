"use client";

import { createContext, useContext } from "react";
import { Card, Label } from "@/types/board";

type ContextType = {
  cards: Card[];
  labels: Label[];
};

const Context = createContext<ContextType>({} as ContextType);

export function BoardProvider({
  children,
  cards,
  labels,
}: {
  children: React.ReactNode;
  cards: Card[];
  labels: Label[];
}) {
  return (
    <Context.Provider value={{ cards, labels }}>{children}</Context.Provider>
  );
}

export function useBoard() {
  return useContext(Context);
}
