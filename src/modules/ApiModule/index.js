import { ThemeUtils as Utils } from 'react-native-mdcore'

import { Experience, Listing } from '@models'

import HttpService from './HttpService'

export default class ApiModule extends HttpService {

  async getExperiences() {
    const objects = await this.get('/api/experiences')
    return objects.map((object, index) => new Experience({
      id: Utils.idx(object, object => object['id']),
      category: index % 2 === 0 ? 'Nature' : 'Arts & Design',
      image: Utils.idx(object, object => object['poster_pictures'][0]['poster']),
      price: Utils.idx(object, object => object['base_price']),
      title: Utils.idx(object, object => object['display_text'])
    }))
  }

  async getListings() {
    const objects = await this.get('/api/listings')
    return objects.map((object) => new Listing({
      id: Utils.idx(object, object => object['listing']['id']),
      image: Utils.idx(object, object => object['listing']['picture_urls'][0]),
      price: Utils.idx(object, object => object['pricing_quote']['rate']['amount']),
      title: Utils.idx(object, object => object['listing']['name'])
    }))
  }
}
