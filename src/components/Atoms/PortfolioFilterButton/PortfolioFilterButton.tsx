import React from "react";
import { type PortfolioFilterProps } from "~/components/Components/PortfolioRender/PortfolioRender";

type Prop = PortfolioFilterProps & {
  index: number;
};

export default function PortfolioFilterButton(props: Prop) {
  const filter = props.filters[props.index];
  return (
    <button
      onClick={() => props.setCurrentFilter(filter ?? "")}
      className={`rounded-full text-[12px] xs:text-sm px-4 py-2 font-roboto hover:bg-black hover:text-white ${props.currentFilter === filter ? "bg-black text-white" : "border border-dashed border-black"}`}
    >
      {filter}
    </button>
  );
}
