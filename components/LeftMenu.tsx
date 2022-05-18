import React from 'react'
import { LinkType } from '../types'

interface GridElement {
    xl:number,
    lg:number,
    md:number,
    sm:number,
    xs:number,
}


interface LeftMenuProps {
    items: LinkType[],
}

const LeftMenu = (props:LeftMenuProps) => {
    const { items } = props
    return (
        <ul className="nav flex-column col-4 left-side-bar d-none d-md-block">
            {items.map((item, index) => {
                return (
                    <li className="nav-item" key={`left-navbar-item-${index}`}>
                        <a className="nav-link" href={item.url}>{item.name}</a>
                    </li>
                )
            })}
        </ul>
    )
}
export default LeftMenu