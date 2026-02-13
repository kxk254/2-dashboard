"use client";

import Checkbox from "@/components/form/input/Checkbox";
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import Button from "@/components/ui/button/Button";
import { ChevronLeftIcon, EyeCloseIcon, EyeIcon } from "@/icons";
import Link from "next/link";
import React, { useState } from "react";

export default function SignInForm() {
  const [] = useState();
  const [] = useState();

  return (
    <div className="flex flex-col flex-1 lg:w-1/2 w-full">
      <div className="w-full max-w-md sm:pt-10 mx-auto mb-5">
        <Link>
          <ChevronLeftIcon />
          Back to dashboard
        </Link>
      </div>
      <div>
        <div>
          <div>
            <h1>Sign In</h1>
            <p>Enter your email and password to sign in!</p>
          </div>{" "}
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
                  <Input />
                </div>
                <div>
                  <Label></Label>
                  <div>
                    <Input />
                    <span></span>
                  </div>
                </div>
                <div>
                  <div>
                    <Checkbox />
                    <span></span>
                  </div>
                  <Link></Link>
                </div>
                <div>
                  <Button>Sign in </Button>
                </div>
              </div>
            </form>
            <div>
              <p>
                <Link></Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
