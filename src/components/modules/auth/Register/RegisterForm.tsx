"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";

export type FormValues = {
  name: string;
  email: string;
  password: string;
};

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    console.log("User Registered:", data);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="grid md:grid-cols-2 w-full max-w-4xl shadow-lg bg-card border border-border rounded-lg overflow-hidden">
        {/* Left Side - Image */}
        <div className="hidden md:block w-full">
          <Image
            src="https://res.cloudinary.com/dazrkjcqb/image/upload/v1740850006/fdzatfp6304hazk2oygq.webp"
            alt="Register Illustration"
            width={600}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Form */}
        <Card className="w-full p-6">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-2xl font-bold text-primary">
                Create an Account
              </CardTitle>
              <ModeToggle />
            </div>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div>
                <Label
                  htmlFor="name"
                  className="text-sm font-medium text-primary"
                >
                  Name
                </Label>
                <Input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="mt-1"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-primary"
                >
                  Email
                </Label>
                <Input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Invalid email format",
                    },
                  })}
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
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
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
                Sign Up
              </Button>

              {/* Login Link */}
              <p className="text-sm text-center text-muted-foreground">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-primary hover:underline font-medium"
                >
                  Login
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterForm;
