import {format} from "date-fns"
import {ptBR} from "date-fns/locale"
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getResume(text: string) {
  const matched = text.match(/\[!resume\]([^\]]+)\[resume!\]/i);
  return (matched && matched[1]) || "";
}

export function getMoreInfoUrl(text: string) {
  const matched = text
    .replace(/[\s\u200b-\u200f\u2028\u2029]+/g, "")
    .match(
      /\[!moreInfo\][\s\S]*?(https?:\/\/[^\s\[\]]+)[\s\S]*?\[moreInfo!\]/i
    );
  return (matched && matched[1]) || "";
}


export function getFormattedDate(dueDate: string) {
  return format(new Date(dueDate), "d MMMM, H:mm'h'", { locale: ptBR })

}
