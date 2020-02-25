import {SearchItemModel} from './search-item.model';

export interface SearchResponseModel {
  kind: string;
  etag: string;
  pageInfo: object;
  items: SearchItemModel[];
}
