"use server";

import { cookies } from "next/headers";

export const getCookieByKey = async (key: string) => {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(key);

  return cookie?.value || null;
};

export async function setCookieByKey(key: string, value: string) {
  const cookieStore = await cookies();
  cookieStore.set(key, value);
}

export const deleteCookieByKey = async (key: string) => {
  const cookieStore = await cookies();
  cookieStore.delete(key);
};
