export class HeadMetaInfo {
  title: string
  description: string
  url: string
  imageUrl: string
  twitterCardType: string
  type: string

  constructor(arg: any = {}) {
    this.title = arg.title || 'PCD Japan Gallery 2021'
    this.description = arg.description || 'PCD Japan Gallery 2021'
    this.url = arg.url || 'https://pcd-tokyo.github.io/'
    this.imageUrl = arg.imageUrl || 'https://pcd-tokyo.github.io/images/ogp.png'
    this.twitterCardType = arg.twitterCardType || 'summary_large_image'
    this.type = arg.type || 'website'
  }

  getMeta() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
        { hid: 'og:title', property: 'og:title', content: this.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description,
        },
        { hid: 'og:type', property: 'og:type', content: this.type },
        { hid: 'og:url', property: 'og:url', content: this.url },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.imageUrl,
        },
        // Twitter
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: this.twitterCardType,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.imageUrl,
        },
      ],
    }
  }
}
