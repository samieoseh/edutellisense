import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { account, databases, storage } from "./appwriteConfig";
import uuid4 from "uuid4";
import { apiState } from "@/constants/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const storeToDatabase = async (userId: string) => {
  try {
    await databases.createDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID ?? "undefined",
      process.env.NEXT_PUBLIC_COLLECTION_ID ?? "undefined",
      userId,
      {
        plan: "free",
      }
    );
  } catch (error: any) {
    console.log(error);
  }
};

export const handlePlanChange = async (plan: string) => {
  const currentUser = await account.get();
  const documentId = currentUser.$id;
  try {
    await databases.updateDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID ?? "undefined",
      process.env.NEXT_PUBLIC_COLLECTION_ID ?? "undefined",
      documentId,
      {
        plan: plan,
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const handleFileStorage = async (userId: string, file: File) => {
  try {
    const fileId = uuid4();
    await storage.createFile(
      process.env.NEXT_PUBLIC_BUCKET_ID ?? "undefined",
      fileId,
      file
    );
    await databases.createDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID ?? "undefined",
      process.env.NEXT_PUBLIC_FILE_COLLECTION_ID ?? "undefined",
      fileId,
      {
        user: userId,
      }
    );
    return apiState.SUCCESS;
  } catch (error: any) {
    console.log(error);
    return apiState.ERROR;
  }
};
