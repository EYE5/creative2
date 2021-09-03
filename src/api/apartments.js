import { data } from "@/data";

export async function getAll() {
  const res = await new Promise((resolve) =>
    setTimeout(() => resolve(data), 1000)
  );

  return res.response;
}
