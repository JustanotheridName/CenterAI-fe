import { BaseAxiosService } from "../base.service";
import { IPostConvertRequest, IPostConvertResponse, URLS } from './types'

class ConvertService extends BaseAxiosService {

    constructor() {
        super(URLS.CONVERT)
    }

    public convertLink(payload: IPostConvertRequest): Promise<IPostConvertResponse>  {
        return this.post<IPostConvertResponse, IPostConvertRequest>('', payload)
    }

}

const convertService = new ConvertService()
export default convertService