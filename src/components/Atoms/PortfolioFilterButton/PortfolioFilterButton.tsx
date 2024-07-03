import React from 'react'
import { type PortfolioFilterProps } from '~/components/Modules/PortfolioModule/PortfolioModule';

type Prop = PortfolioFilterProps & {
  index: number,
}

export default function PortfolioFilterButton(props: Prop) {
    const filter = props.filters[props.index];
  return <button 
    onClick={() => props.setCurrentFilter(filter ?? '')} className={`py-2 px-4 rounded-full font-roboto ${props.currentFilter === filter ? 'bg-black text-white' : 'border border-black border-dotted'}`}>{filter}</button>;
}
