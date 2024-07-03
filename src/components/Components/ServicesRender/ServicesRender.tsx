import React from 'react'
import ServiceAtom from '~/components/Atoms/ServiceAtom/ServiceAtom'

type Props = {
  services: React.ComponentProps<typeof ServiceAtom>[]
}

export default function ServicesRender(props: Props) {
  return (
    <div>
      {props.services.map((service) => (<ServiceAtom key={service.index} { ...service } />))}
    </div>
  )
}
