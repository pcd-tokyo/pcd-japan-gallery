import { Art } from '~/types/entity'
import { stringUtil } from '~/util/stringUtil'

export const entityProvider = {
  getArt: (data: any): Art => {
    return {
      title: data['作品名'],
      description: '',
      thumbnail: entityProvider.getThumbnailUrl(data['サムネイル']),
      url: data['作品URL'],
      createdAt: data['タイムスタンプ'],
      tags: data['タグ'].split(','),
    }
  },
  getThumbnailUrl: (rowThumbnailUrl: any): string => {
    const id = (stringUtil.getURLParams(rowThumbnailUrl) as any).id
    return `https://drive.google.com/uc?export=view&id=${id}&usp=sharing`
  },
}
