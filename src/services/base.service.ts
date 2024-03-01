// import { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'
// import {IServiceError} from "@/core/service/types";
// import {Result} from "typescript-result";
// import {internalServerError, unauthorizedError} from "@/core/service/service.errors";
// import {NuxtAxiosInstance} from "@nuxtjs/axios";
// import {ToastNotificationsService} from "~/core/toast-notifications/toast-notifications.service";
// import {i18nInstance} from "~/plugins/i18n-accessor";
// import {AuthStoreModule, PopupsStoreModule} from "~/plugins/store-accessor";

// export class BaseAxiosService {
//   public readonly baseURL: string
//   public readonly client: AxiosInstance

//   protected constructor (axios: NuxtAxiosInstance, url: string) {
//     this.baseURL = url
//     this.client = axios
//   }

//   public async executeGet<M> (url: string, options: AxiosRequestConfig = {}): Promise<Result<IServiceError, M>> {
//     try {
//       const response = await this.client.get<M>(this.attachBaseURL(url), options)
//       return Result.ok(response.data)
//     } catch (e) {
//       return await this.parseAxiosError<M>(e)
//     }
//   }

//   public async executeWithPostContent<M> (url: string, content: object, config: AxiosRequestConfig = {}): Promise<Result<IServiceError, M>> {
//     try {
//       const response = await this.client.post<M>(this.attachBaseURL(url), content, config)
//       return Result.ok(response.data)
//     } catch (e) {
//       return await this.parseAxiosError<M>(e)
//     }
//   }

//   public async executeWithPatchContent<M> (url: string, content: object): Promise<Result<IServiceError, M>> {
//     try {
//       const response = await this.client.patch<M>(this.attachBaseURL(url), content)
//       return Result.ok(response.data)
//     } catch (e) {
//       return await this.parseAxiosError<M>(e)
//     }
//   }

//   public async executeWithPutContent<M> (url: string, content: object): Promise<Result<IServiceError, M>> {
//     try {
//       const response = await this.client.put<M>(this.attachBaseURL(url), content)
//       return Result.ok(response.data)
//     } catch (e) {
//       return await this.parseAxiosError<M>(e)
//     }
//   }

//   public async executeWithDeleteContent<M> (url: string, content: object = {}): Promise<Result<IServiceError, M>> {
//     try {
//       const response = await this.client.delete<M>(this.attachBaseURL(url), {
//         data: content
//       })
//       return Result.ok(response.data)
//     } catch (e) {
//       return await this.parseAxiosError<M>(e)
//     }
//   }

//   private attachBaseURL (url: string): string {
//     return `${this.client.defaults.baseURL}${this.baseURL}${url}`
//   }

//   private async parseAxiosError<M>(e: any): Promise<Result<IServiceError, M>> {
//     const error = e as AxiosError<IServiceError>
//     if (error.response) {
//       // The request was made and the server responded with a status code
//       // that falls out of the range of 2xx
//     //   if (error.response.status === 401 && process.client) {
//     //     await PopupsStoreModule.hideActivePopup()
//     //     await AuthStoreModule.signOut()
//     //     return Result.error(unauthorizedError)
//     //   }
//       if (error.response.status === 429) {
//         ToastNotificationsService.showErrorNotification(i18nInstance.t('notifications.too-many-requests').toString())
//       }
//       return Result.error(error.response.data)
//     } else if (error.request) {
//       // The request was made but no response was received
//       // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//       // http.ClientRequest in node.js
//       return Result.error(internalServerError)
//     } else {
//       // Something happened in setting up the request that triggered an Error
//       return Result.error(internalServerError)
//     }
//   }
// }
