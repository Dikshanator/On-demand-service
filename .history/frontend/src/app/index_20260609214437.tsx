import { useEffect } from "react";
import { useRouter } from "expo-router";
import { useAuth } from "@/context/AuthContext";
import "./global.css";

export default function HomeScreen() {
  const router = useRouter();
  const { authStep } = useAuth();

  useEffect(() => {
    if (authStep === "authenticated") {
      router.replace("/dashboard");
      return;
    }

    router.replace("/auth/role-selection");
  }, [authStep, router]);

  return null;
}
