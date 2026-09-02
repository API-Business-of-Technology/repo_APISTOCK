"use client";
import Image from "next/image";
import "./Login.css";
// ex: app/login/page.tsx oswa pages/login.tsx
import SecureLoginForm from "../components/LoginPage";

type LoginData = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const handleLogin = async ({ email, password }: LoginData) => {
    console.log({ email, password });
  };

  return (
    <div className="Afficher">
      <Image
        src="/logo.png"
        alt="Logo de Ai security"
        width={150}
        height={150}
      />
      <SecureLoginForm onSubmit={handleLogin} />
    </div>
  );
}
