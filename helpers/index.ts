import React from 'react'

export const openRef = (ref, newTab=false) => {
    window.open(ref, '_blank')
}

export const createComponent = (tagName:string, props, content) => {
    return React.createElement(
            'div',
            {className:'content-element-wrapper'},
            React.createElement(
                tagName,
                props,
                content
            )
        )
}