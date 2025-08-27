export type Recipe = {
  id: string;
  name: string;
  thumbnail: string;
  instructions: string;
  ingredients: string[];
};

export type TheCocktailDbResponse = {
  drinks: any[] | string | undefined;
};
