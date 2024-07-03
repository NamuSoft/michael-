import React from 'react'
import PortfolioAtom from '~/components/Atoms/PorfolioAtom/PortfolioAtom';
import PortfolioFilterButton from '~/components/Atoms/PortfolioFilterButton/PortfolioFilterButton';

export interface PortfolioFilterProps {
  filters: string[];
  currentFilter: string;
  setCurrentFilter: (filter: string) => void;
}

type Props = {
  portfolios: React.ComponentProps<typeof PortfolioAtom>[];
  portfolioFilters: PortfolioFilterProps;
};

export default function PortfolioRender(props: Props) {
  return (
    <div>
      <div className="flex gap-2">
        {props.portfolioFilters.filters.map((filter, index) => (<PortfolioFilterButton key={index} { ...props.portfolioFilters } index={index} />))}
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">{props.portfolios.map((filter, index) => (<PortfolioAtom key={index} {...filter} />))}</div>
    </div>
  )
}
