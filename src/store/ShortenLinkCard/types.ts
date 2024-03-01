export interface IShortenLinkCardState {
    link: string,
    link_converted: string,
    ip: string | undefined,
    user_agent: string | undefined
}

export enum ShortenLinkCardGetters {
    CONVERTED_LINK = 'ShortenLinkCardModule/convertedLink'
}

export enum ShortenLinkCardMutations {
    SET_LINK = 'setLink',
    SET_LINK_CONVERTED = 'setLinkConverted'
}

export enum ShortenLinkCardActions {
    CONVERT_LINK = 'ShortenLinkCardModule/convertLink'
}