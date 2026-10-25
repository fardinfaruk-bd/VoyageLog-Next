import { serverMutation } from "../core/server";

export const createMemories = async (memoriesData) => {
  return serverMutation("/photos", memoriesData);
};