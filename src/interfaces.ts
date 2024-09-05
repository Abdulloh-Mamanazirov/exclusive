export declare interface ProductCardI {
  id: string;
  title: string;
  image: string;
  discount?: number;
  price: number;
  old_price?: number;
}

export declare interface CateogryCardI {
  id: string;
  title: string;
  image: string;
}

export declare interface FeaturedCardI {
  id: string;
  image: string;
  title: string;
  description: string;
  cardIndex?: number;
}

export declare interface ProductsSectionI {
  title: string;
  heading: string;
  link: string;
  children: ProductCardI[];
  view?: "grid" | "horizontal";
}

export declare interface CategoriesSectionI {
  title: string;
  heading: string;
  children: CateogryCardI[];
}

export declare interface FeaturedSectionI {
  title: string;
  heading: string;
  children: FeaturedCardI[];
}
