import { BaseAxiosService } from "../base.service";
import { BASE_URL, IConvertLinkResult, IPostConvertRequest, IPostConvertResponse } from './types'

class ConvertService extends BaseAxiosService {

    constructor() {
        super(BASE_URL)
    }

    public async convertLink(payload: IPostConvertRequest): Promise<IConvertLinkResult>  {
        try {
            const data = await this.post<IPostConvertResponse, IPostConvertRequest>('', payload)
            return {success: true, data}
        }
        catch (error) {
            return { success: false, error: 'Link coversion failed' }
        }
    }

}

const convertService = new ConvertService()
export default convertService