"use client";

import { useWatch } from "react-hook-form";
import { useBoard } from "@/contexts/board";

import { Toolbar } from "@/components/toolbar";
import { useFilterForm } from "@/components/toolbar/components/filter";
import { Section } from "@/components/section";
import {EventCard} from "@/components/event-card"

import { getResume, getMoreInfoUrl, getFormattedDate, } from "@/lib/utils";

export default function Home() {
  const { cards, labels } = useBoard();

  const form = useFilterForm();

  const labelsField = useWatch({
    control: form.control,
    name: "labels",
  });

  const hasSomeSelected = labelsField.some((sel) => sel.selected);
  const selectedLabels = labelsField.filter((item) => item.selected);

  return (
    <>
      <Toolbar>
        <Toolbar.Filter labels={labels} {...form} />
      </Toolbar>
      <Section>
        {cards
          .filter((card) => {
            if (hasSomeSelected) {
              return card.labels.some((label) =>
                selectedLabels.some((selected) => label.name === selected.name)
              );
            }
            return card;
          })
          .map((card) => {
            return (
              <EventCard key={card.id}>
                <EventCard.Header>
                  <EventCard.Date>
                    {getFormattedDate(card.due)}
                  </EventCard.Date>
                  <EventCard.Title>{card.name}</EventCard.Title>
                  <EventCard.Description>{getResume(card.desc)}</EventCard.Description>
                </EventCard.Header>
                <EventCard.Content>
                  {card.labels.map((label) => {
                    return <EventCard.Label key={label.id}>{label.name}</EventCard.Label>
                  })}
                </EventCard.Content>
                <EventCard.Footer>
                <EventCard.CtaBtn href={getMoreInfoUrl(card.desc)}/>
                </EventCard.Footer>
              </EventCard>
            );
          })}
      </Section>
    </>
  );
}
