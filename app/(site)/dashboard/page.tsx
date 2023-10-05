"use client";
import DataTable from "@/components/DataTable";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const { logout } = useAuth();
  const router = useRouter();

  // get the data, if not available, navigate to uploader

  return (
    <div>
      <Button
        onClick={async () => {
          await logout();
          router.push("/login");
        }}
      >
        Logout
      </Button>
      <DataTable />
    </div>
  );
}
