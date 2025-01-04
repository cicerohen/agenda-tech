export type Label = {
  id: string;
  name: string;
};

export type Card = {
  id: string;
  closed: boolean;
  desc: string;
  due: string;
  labels: Label[];
  name: string;
  shortLink: string;
  shortUrl: string;
};

export type Board = {
  cards: Card[];
  labels: Label[];
};
