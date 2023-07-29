import { faker } from "@faker-js/faker";

export interface LatestTrendType {
  productImg: string;
  productName: string;
}

export interface SuggestionType {
  productName: string;
}

export interface ProductType {
  productImg: string;
  productName: string;
  productRating: number;
  productOrgPrice: number;
  productDisPrice: number;
  productsReviews: number;
}

export const fetchLatestTrendData = () => {
  const latestTrends: LatestTrendType[] = [];

  for (let i = 1; i <= 5; i++) {
    latestTrends.push({
      productImg: faker.image.people(300, 400, true),
      productName: faker.commerce.productName(),
    });
  }

  return latestTrends;
};

export const fetchSuggestionData = () => {
  const suggestionData: SuggestionType[] = [];

  for (let i = 1; i <= 5; i++) {
    suggestionData.push({
      productName: faker.commerce.productName(),
    });
  }

  return suggestionData;
};

export const fetchProducts = () => {
  const products: ProductType[] = [];

  for (let i = 0; i <= 30; i++) {
    const productImg = faker.image.url({
      height: 400,
      width: 300,
    });
    const productName = faker.commerce.productName();
    const productRating = faker.number.int({ min: 1, max: 5 });
    const productOrgPrice = Number(
      faker.commerce.price({ min: 300, max: 5000 })
    );
    const productDisPrice = Number(
      faker.commerce.price({
        min: 300,
        max: Number(productOrgPrice),
      })
    );
    const productsReviews = faker.number.int({ min: 10, max: 50 });

    products.push({
      productImg,
      productName,
      productRating,
      productOrgPrice,
      productDisPrice,
      productsReviews,
    });
  }

  return products;
};
