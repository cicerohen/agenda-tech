"use client";

import { Filter } from "./components/filter";

export function Toolbar({ children }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="h-20 z-20 flex sticky top-0 px-4 bg-primary-foreground items-center">
      <div className="flex items-center flex-1 justify-between lg:container lg:mx-auto ">
        {children}
      </div>
    </div>
  );
}

Toolbar.Filter = Filter;
