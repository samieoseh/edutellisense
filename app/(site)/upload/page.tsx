"use client";
import { apiState } from "@/constants/constants";
import { account } from "@/lib/appwriteConfig";
import { handleFileStorage } from "@/lib/utils";
import { useRouter } from "next/navigation";
import DragAndDrop from "@/components/DragAndDrop";

export default function UploadPage() {
  const router = useRouter();

  const handleSubmit = async (file: File | null) => {
    const currentUser = await account.get();
    const userId = currentUser.$id;

    if (file) {
      const status = await handleFileStorage(userId, file);
      if (status === apiState.SUCCESS) {
        router.push("/dashboard");
      }
    }
  };

  return <DragAndDrop onUpload={handleSubmit} />;
}
