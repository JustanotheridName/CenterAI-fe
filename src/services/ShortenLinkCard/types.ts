import { IShortenLinkCardState } from "@/store/ShortenLinkCard/types";

export enum URLS {
    CONVERT = '/conversion'
}

export interface IPostConvertRequest {
    link: string
}

export interface IPostConvertResponse extends IShortenLinkCardState {
    id: number,
    timestamp: string
}