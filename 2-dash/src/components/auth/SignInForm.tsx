"use client";

import Checkbox from "@/src/components/form/input/Checkbox";
import Input from "@/src/components/form/input/InputField";
import Label from "@/src/components/form/Label";
import Button from "@/src/components/ui/button/Button";
import { ChevronLeftIcon, EyeCloseIcon, EyeIcon } from "@/icons";
import Link from "next/link";
import React, { useState } from "react";

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex flex-col flex-1 lg:w-1/2 w-full">
      <div className="w-full max-w-md sm:pt-10 mx-auto mb-5">
        <Link href="/">
          <ChevronLeftIcon />
          Back to dashboard
        </Link>
      </div>
      <div>
        <div>
          <div>
            <h1>Sign In</h1>
            <p>Enter your email and password to sign in!</p>
          </div>
          <div>
            <div>
              <div></div>
            </div>
            <div>
              <div>
                <button></button>
                <button></button>
              </div>
              <div>
                <div></div>
              </div>
              <div>
                <span></span>
              </div>
            </div>
            <form>
              <div>
                <div>
                  <Label></Label>
                  <Input placeholder="info@gmail.com" type="email" />
                </div>
                <div>
                  <Label></Label>
                  <div>
                    <Input
                      placeholder="Enter your password"
                      type={showPassword ? "text" : "password"}
                    />
                    <span></span>
                  </div>
                </div>
                <div>
                  <div>
                    <Checkbox checked={isChecked} onChange={setIsChecked} />
                    <span></span>
                  </div>
                  <Link href="/"></Link>
                </div>
                <div>
                  <Button className="w-full" size="sm">
                    Sign in{" "}
                  </Button>
                </div>
              </div>
            </form>
            <div>
              <p>
                <Link href="/"></Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
