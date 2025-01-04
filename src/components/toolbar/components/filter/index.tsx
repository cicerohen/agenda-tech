"use client";

import { useEffect } from "react";
import { useForm, useFieldArray, UseFormReturn } from "react-hook-form";
import { ListFilterIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Primitive from "@radix-ui/react-popover";
import * as z from "zod";


import type { Label } from "@/types/board";

export const Schema = z.object({
  labels: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      selected: z.boolean().optional(),
    })
  ),
});

export type Values = z.infer<typeof Schema>;

export function Filter({
  labels,
  control,
}: UseFormReturn<Values> & {
  labels: Label[];
}) {
  const { fields, replace, update } = useFieldArray({
    control,
    name: "labels",
  });

  const hasSomeSelected = fields.some((sel) => sel.selected);

  const onClearFilters = () => {
    replace(fields.map((field) => ({ ...field, selected: false })));
  };

  useEffect(() => {
    replace(labels);
  }, []);

  return (
    <Primitive.Popover>
      <div className="flex items-center gap-2">
        <Primitive.PopoverTrigger asChild>
          <Button
            size="icon"
            variant={hasSomeSelected ? "default" : "secondary"}
            className="p-2"
          >
            <ListFilterIcon />
          </Button>
        </Primitive.PopoverTrigger>
        <p className="text-sm">Filtrar eventos</p>
      </div>

      <Primitive.PopoverContent
        className="w-80 bg-background  p-4 shadow-lg"
        align="start"
      >
        <div className="mb-6">
          <h4 className="font-bold">Tags</h4>
          <p className="text-muted-foreground text-sm">
            Filtrar eventos por tags
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {fields.map((label, i) => {
            return (
              <Badge
                asChild
                key={label.id}
                id={label.id}
                variant={(label.selected && "default") || "outline"}
              >
                <button
                  onClick={() => {
                    update(i, {
                      ...label,
                      selected: !label.selected,
                    });
                  }}
                >
                  {label.name}
                </button>
              </Badge>
            );
          })}
        </div>
        <div className="mt-6">
          <Button size="sm" variant="outline" onClick={onClearFilters}>
            Limpar
          </Button>
        </div>
      </Primitive.PopoverContent>
    </Primitive.Popover>
  );
}

export function useFilterForm() {
  return useForm<Values>({
    resolver: zodResolver(Schema),
    defaultValues: {
      labels: [],
    },
    mode: "onChange",
    reValidateMode: "onChange",
    shouldFocusError: false,
  });
}
