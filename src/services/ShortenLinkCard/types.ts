import { IShortenLinkCardState } from "@/store/ShortenLinkCard/types";

export interface IConvertLinkResult {
    success: boolean;
    data?: IPostConvertResponse;
    error?: string;
}

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