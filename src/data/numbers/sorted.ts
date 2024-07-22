import { http } from "@/services/http";

export async function sorted() {
  try {
    const response = await http<string[]>({
      url: `${process.env.NEXT_PUBLIC_SITE_API_URL}/numbers/`,
      method: "GET",
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
