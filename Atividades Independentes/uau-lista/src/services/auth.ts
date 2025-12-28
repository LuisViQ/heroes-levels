export default async function handleLogin (username: string, password:string) {
 const res = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
      expiresInMins: 30,
    }),
    // credentials: "include", // normalmente remove no mobile
  });

  const data = await res.json();

  if (!res.ok) {
    // dummyjson costuma mandar { message: "..." } em erro
    throw new Error(data?.message ?? "Falha no login");
  }

  return data; // aqui vem token + user

}