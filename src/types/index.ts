export interface LinkType {
    name: string,
    url: string,
    targetId?: string,
    newTab?: boolean,
}

export interface ImageType {
    src: string,
    alt?: string,
}

export interface ContentElementType {
    tagName: string,
    content?: string,
    atts?: {},
}

export interface StoryType {
    title: string,
    description?: string,
    contents: ContentElementType[],
    variations: ImageType[],
    mainImage: ImageType,
    previewImage: ImageType,
}