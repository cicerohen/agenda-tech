import Link, { LinkProps } from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { CalendarIcon } from "@radix-ui/react-icons";
export function EventCard({ children }: React.HTMLAttributes<HTMLDivElement>) {
  return <Card className="grid gtid-cols-1">{children}</Card>;
}

EventCard.Header = CardHeader;
EventCard.Title = CardTitle;
EventCard.Content = CardContent;
EventCard.Date = EventCardDate;
EventCard.Description = EventCardDescription;
EventCard.Label = EventCardLabel;
EventCard.CtaBtn = EventCardCta;
EventCard.Footer = EventCardFooter;

function EventCardDate({
  children,
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className="text-muted-foreground text-sm flex items-center mb-2">
      <CalendarIcon className="h-5 w-5 mr-1 opacity-50" />
      <span className="font-semibold">{children}</span>
    </p>
  );
}

function EventCardDescription({
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return <CardDescription>{children}</CardDescription>;
}

function EventCardLabel({ children }: React.HTMLAttributes<HTMLDivElement>) {
  return <Badge variant="secondary">{children}</Badge>;
}

function EventCardCta(props: LinkProps) {
  return (
    <Button variant="outline" asChild>
      <Link {...props} target="_blank">
        Acessar site
      </Link>
    </Button>
  );
}

function EventCardFooter({ children }: React.HTMLAttributes<HTMLDivElement>) {
  return <CardFooter className="flex justify-between">{children}</CardFooter>;
}
