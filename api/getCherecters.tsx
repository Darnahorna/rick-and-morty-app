import { getResponse } from "./api";

export const data: any = await getResponse("character", "GET");
