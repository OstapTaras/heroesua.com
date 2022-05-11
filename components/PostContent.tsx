import React from 'react'
import LeftMenu from './LeftMenu'


const createComponent = (tagName, props, content) => {
    return (
        <div className='content-element-wrapper'>
            {React.createElement(
                tagName,
                props,
                content
            )}
        </div>
    )
}

const PostContent = ({title, contents, menuItems }) => {
    return (
        <div className="main-block row px-5">

            <LeftMenu items={menuItems} />

            <div className="col-6 px-0">
                <h2 className="main-heading mb-5">{title}</h2>
                {contents.map((el, index) => {
                    const  { tagName, content, ...props } = el
                    return createComponent(tagName, {key:index, ...props}, content)
                })}
            </div>

        </div>
    )
}
export default PostContent;