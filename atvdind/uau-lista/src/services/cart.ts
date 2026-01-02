import { buildApiUrl, buildHeaders } from "./api";

export type CartItem = {
  id: number;
  title: string;
  thumbnail?: string;
  price: number;
  quantity: number;
  description?: string;
};

export type CartResponse = {
  cartId: number;
  userId: number;
  items: CartItem[];
  total?: number;
  itemsCount?: number;
};

const toMessage = async (res: Response) => {
  try {
    const data = await res.json();
    return data?.message ?? "Erro ao acessar carrinho";
  } catch {
    return "Erro ao acessar carrinho";
  }
};

export async function getCart(userId: number, token?: string) {
  const res = await fetch(buildApiUrl(`cart/${userId}`), {
    method: "GET",
    headers: buildHeaders(token),
  });

  if (!res.ok) {
    throw new Error(await toMessage(res));
  }

  return (await res.json()) as CartResponse;
}

export async function addCartItem(
  userId: number,
  productId: number,
  quantity: number,
  token?: string
) {
  const res = await fetch(buildApiUrl(`cart/${userId}/items`), {
    method: "POST",
    headers: buildHeaders(token),
    body: JSON.stringify({ productId, quantity }),
  });

  if (!res.ok) {
    throw new Error(await toMessage(res));
  }

  return (await res.json()) as CartResponse;
}

export async function updateCartItemQuantity(
  userId: number,
  productId: number,
  quantity: number,
  token?: string
) {
  const res = await fetch(buildApiUrl(`cart/${userId}/items/${productId}`), {
    method: "PATCH",
    headers: buildHeaders(token),
    body: JSON.stringify({ quantity }),
  });

  if (!res.ok) {
    throw new Error(await toMessage(res));
  }

  return (await res.json()) as CartResponse;
}

export async function removeCartItem(
  userId: number,
  productId: number,
  token?: string
) {
  const res = await fetch(buildApiUrl(`cart/${userId}/items/${productId}`), {
    method: "DELETE",
    headers: buildHeaders(token),
  });

  if (!res.ok) {
    throw new Error(await toMessage(res));
  }

  return (await res.json()) as CartResponse;
}

export async function clearCart(userId: number, token?: string) {
  const res = await fetch(buildApiUrl(`cart/${userId}/items`), {
    method: "DELETE",
    headers: buildHeaders(token),
  });

  if (!res.ok) {
    throw new Error(await toMessage(res));
  }

  return (await res.json()) as CartResponse;
}
