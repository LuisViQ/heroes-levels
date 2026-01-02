import { buildApiUrl, buildHeaders } from "./api";

export default async function getSingleItem (id: number) {
 const res = await fetch(buildApiUrl(`products/${id}`), {
    method: "GET",
    headers: buildHeaders(),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data?.message ?? "Falha ao carregar produto");
  }
  return data;
}
