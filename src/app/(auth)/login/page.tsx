import { Metadata } from "next";
import LoginForm from "./LoginForm";
import Link from "next/link";
import LoginImage from "@/assets/login-image.jpg";
import Image from "next/image";
import GoogleSignInButton from "./GoogleSignInButton";

export const metadata: Metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className="w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
          <h1 className="text-center text-3xl font-bold">Login to JASM</h1>
          <div className="space-y-5">
            <GoogleSignInButton />
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-muted"></div>
              <span> or</span>
              <div className="h-px flex-1 bg-muted"></div>
            </div>
            <LoginForm />
            <Link
              href={"/signup"}
              className="block text-center hover:underline"
            >
              Don&apos;t have an account? Sign Up instead
            </Link>
          </div>
        </div>
        <Image
          src={LoginImage}
          alt="LoginImage"
          className="hidden w-1/2 object-cover md:block"
        />
      </div>
    </main>
  );
}
