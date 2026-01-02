const API_URL = process.env.EXPO_PUBLIC_API_URL ?? "";

const baseUrl = API_URL.endsWith("/") ? API_URL : `${API_URL}/`;

export function buildApiUrl(path: string) {
  return `${baseUrl}${path.replace(/^\//, "")}`;
}

export function buildHeaders(token?: string) {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
}
