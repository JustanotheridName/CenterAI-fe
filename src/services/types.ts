export interface IBaseResult<T> {
    success: boolean;
    data?: T;
    error?: string;
}