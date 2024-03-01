interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  rate: {
    rate: number;
    count: number;
  };
}

export async function getProducts(): Promise<Product[]> {
  const results = await fetch("https://fakestoreapi.com/products");

  const products: Product[] = await results.json();

  return products;
}

export async function getAllCarts(): Promise<Product[]> {
  const results = await fetch("https://fakestoreapi.com/carts/5");

  const carts: Product[] = await results.json();
  console.log(carts);

  return carts;
}
