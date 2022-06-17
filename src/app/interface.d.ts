export interface IArticle extends IBottleView {
  pricePerUnitText: string;
  unit: string;
}

export interface IBottle {
  id: number;
  brandName: string;
  name: string;
  articles: IArticle[];
}

export interface IBottleView {
  id: number;
  image: string;
  name: string;
  price: number;
  shortDescription: string;
}
