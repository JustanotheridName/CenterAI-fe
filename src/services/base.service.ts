import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios"

export class BaseAxiosService {
    public static base_api_url = process.env.VUE_APP_API_URL
    private readonly client: AxiosInstance 

    constructor(baseURL: string) {
        this.client = axios.create({
            baseURL: '/api' + baseURL,
            timeout: 5000,
        });

        this.client.interceptors.response.use(this.handleSuccess, this.handleError);
    }

    private handleSuccess(response: AxiosResponse): AxiosResponse {
        return response;
    }

    private handleError(error: AxiosError): Promise<AxiosError> {
        if (error.response) {
            console.error('Error response:', error.response.data);
        } else if (error.request) {
            console.error('No response received:', error.request);
        } else {
            console.error('Request error:', error.message);
        }
        return Promise.reject(error);
    }

    protected async post<T, D>(url: string, data: D): Promise<T> {
        return this.client.post<T>(url, data)
            .then((response: AxiosResponse<T>) => response.data)
            .catch((error: AxiosError) => {
                throw error;
            });
    }

}
