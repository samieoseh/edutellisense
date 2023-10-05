"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { apiState } from "@/constants/constants";
import { account } from "@/lib/appwriteConfig";
import { handleFileStorage } from "@/lib/utils";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const router = useRouter();
  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      setFile(file);
    }
  };

  const handleSubmit = async () => {
    const currentUser = await account.get();
    const userId = currentUser.$id;
    console.log(file);
    if (file) {
      const status = await handleFileStorage(userId, file);
      if (status === apiState.SUCCESS) {
        router.push("/dashboard");
      }
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Input type="file" onChange={(e) => handleFileChange(e)} />
      <Button type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </form>
  );
}
