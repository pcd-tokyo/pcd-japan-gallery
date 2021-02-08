import { Art } from '~/types/entity'
import { stringUtil } from '~/util/stringUtil'

export const entityProvider = {
  getArt: (data: any): Art => {
    return {
      id: data.id,
      title: data['作品名'],
      description: data['説明文'],
      thumbnail: entityProvider.getThumbnailUrl(data['作品画像']),
      url: data['作品URL'],
      user: {
        name: data['作者名'] || 'GUEST',
      },
      createdAt: data['タイムスタンプ'],
    }
  },
  getThumbnailUrl: (rowThumbnailUrl: any): string => {
    const id = (stringUtil.getURLParams(rowThumbnailUrl) as any).id
    return `https://drive.google.com/uc?export=view&id=${id}&usp=sharing`
  },
  getEmptyArt: (): Art => {
    return {
      id: 0,
      title: '',
      description: '',
      thumbnail: '',
      url: '',
      user: {
        name: '',
      },
      createdAt: '',
    }
  },
}
