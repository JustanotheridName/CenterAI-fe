import { IShortenLinkCardState } from "@/store/ShortenLinkCard/types";
import { IBaseResult } from "../types";

export const BASE_URL = '/conversion'
export type IConvertLinkResult = IBaseResult<IPostConvertResponse>
export enum URLS {}

export interface IPostConvertRequest {
    link: string
}

export interface IPostConvertResponse extends IShortenLinkCardState {
    id: number,
    timestamp: string
}