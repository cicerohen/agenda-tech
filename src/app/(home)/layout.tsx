import type { Metadata } from "next";

import { BoardProvider } from "@/contexts/board";
import { Header } from "@/components/header";

import { type Board } from "@/types/board";

export const metadata: Metadata = {
  title: "Agenda Tech",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const res = await fetch(process.env.NEXT_PUBLIC_TRELLO_BOARD_JSON_URL!, { cache: "no-store"});
  const board: Board = await res.json();

  const cards = board.cards
    .filter((card) => !card.closed)
    .filter((card) => card.due)
    .sort((a, b) => new Date(a.due).getTime() - new Date(b.due).getTime());

  return (
    <BoardProvider cards={cards} labels={board.labels}>
      <div>
        <Header />
        {children}
        <footer className="bg-secondary">
          <div className="lg:container lg:mx-auto"></div>
        </footer>
      </div>
    </BoardProvider>
  );
}
