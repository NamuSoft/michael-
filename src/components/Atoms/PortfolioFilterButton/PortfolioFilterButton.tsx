import React from 'react'
import { PortfolioFilterProps } from '~/components/Modules/PortfolioModule/PortfolioModule';

type Prop = PortfolioFilterProps & {
  index: number,
}

export default function PortfolioFilterButton(props: Prop) {
  return <button className=''>{props.filters[props.index]}</button>;
}
