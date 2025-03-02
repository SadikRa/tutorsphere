"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";
import { SiGithub, SiGoogle } from "react-icons/si";
import { signIn } from "next-auth/react";

export type FormValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    console.log("Login attempt", data);
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Logging in with ${provider}`);

    if (provider == "github") {
      signIn("github", {
        callbackUrl: "http://localhost:3000/",
      });
    } else if (provider == "google") {
      signIn("google", {
        callbackUrl: "http://localhost:3000/",
      });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="flex flex-col md:flex-row w-full max-w-4xl shadow-lg bg-card border border-border rounded-lg overflow-hidden">
        {/* Side Image */}
        <div className="hidden md:block md:w-1/2">
          <Image
            src="https://res.cloudinary.com/dazrkjcqb/image/upload/v1740850006/fdzatfp6304hazk2oygq.webp"
            alt="Login Illustration"
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Login Form */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
          <Card className="w-full bg-transparent border-none shadow-none">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-2xl font-bold text-primary">
                  Login to TutorSphere 🎓
                </CardTitle>
                <ModeToggle />
              </div>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Email Field */}
                <div>
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-primary"
                  >
                    Email
                  </Label>
                  <Input
                    {...register("email", { required: "Email is required" })}
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="mt-1"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Password Field */}
                <div>
                  <Label
                    htmlFor="password"
                    className="text-sm font-medium text-primary"
                  >
                    Password
                  </Label>
                  <Input
                    {...register("password", {
                      required: "Password is required",
                    })}
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    className="mt-1"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Login
                </Button>

                {/* Signup Link */}
                <p className="text-sm text-center text-muted-foreground">
                  Don’t have an account?
                  <Link
                    href="/register"
                    className="text-primary hover:underline font-medium"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
              {/* Social Login */}
              <div className="mt-6">
                <p className="text-sm text-center text-muted-foreground mb-4">
                  Or continue with
                </p>
                <div className="flex justify-center space-x-4">
                  {/* GitHub Login Button */}
                  <Button
                    onClick={() => handleSocialLogin("github")}
                    variant="outline"
                    className="w-12 h-12 p-0 rounded-full"
                  >
                    <SiGithub className="w-6 h-6" />
                  </Button>

                  {/* Google Login Button */}
                  <Button
                    onClick={() => handleSocialLogin("google")}
                    variant="outline"
                    className="w-12 h-12 p-0 rounded-full"
                  >
                    <SiGoogle className="w-6 h-6 text-red-500" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
