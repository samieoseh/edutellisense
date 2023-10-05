"use client";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const { logout } = useAuth();
  const router = useRouter();
  return (
    <div>
      <Button
        onClick={() => {
          logout();
          router.push("/login");
        }}
      >
        Logout
      </Button>
    </div>
  );
}
