import React from 'react'
import { LinkType } from '../types'


interface LeftMenuProps {
    items: LinkType[],
}

const LeftMenu = (props:LeftMenuProps) => {
    const { items } = props
    return (
        <ul className="nav flex-column col-4 left-side-bar">
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