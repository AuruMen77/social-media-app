import { Metadata } from "next";
import signupImage from "@/assets/signup-image.jpg";
import Image from "next/image";
import Link from "next/link";
import SignUpForm from "./SignUpForm";

export const metadata: Metadata = {
  title: "Signup",
};

export default function Page() {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        {/* error messages may overflow, lets optimize it later */}
        <div className="w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
          <div className="space-y-1 text-center">
            <h1 className="text-3xl font-bold tracking-tight">
              Sign up to JASM
            </h1>
            <p className="text-muted-foreground">
              A place where there are <span className="italic">just </span>some
              other friends
            </p>
          </div>
          <div className="space-y-5">
          <SignUpForm/>
            <Link
              href="/login"
              className="block text-center hover:underline"
            >Already have an account? Log In instead</Link>
          </div>
        </div>
        <Image
          src={signupImage}
          alt="signup image"
          className="hidden w-1/2 object-cover md:block"
        />
        <div></div>
      </div>
    </main>
  );
}
