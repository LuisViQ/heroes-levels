import { buildApiUrl, buildHeaders } from "./api";

type GetItemOptions = {
  force?: boolean;
};

type Product = {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
};

let cachedProducts: Product[] | null = null;
let inFlight: Promise<Product[]> | null = null;

const fetchProducts = async () => {
  const res = await fetch(buildApiUrl("products"), {
    method: "GET",
    headers: buildHeaders(),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data?.message ?? "Falha ao carregar produtos");
  }
  return (data.products ?? []) as Product[];
};

export default async function getItem(options: GetItemOptions = {}) {
  const { force = false } = options;

  if (!force) {
    if (cachedProducts) return cachedProducts;
    if (inFlight) return inFlight;
  }

  const promise = fetchProducts();
  if (!force) {
    inFlight = promise;
  }

  try {
    const products = await promise;
    cachedProducts = products;
    return products;
  } finally {
    if (!force) {
      inFlight = null;
    }
  }
}
