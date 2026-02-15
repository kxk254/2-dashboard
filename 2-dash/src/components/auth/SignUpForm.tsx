"use client";

import Checkbox from "@/src/components/form/input/Checkbox";
import Input from "@/src/components/form/input/InputFild";
import Label from "@/src/components/form/Label";
import { ChevronLeftIcon, EyeCloseIcon, EyeIcon } from "@/icons/index";
import Link from "next/link";
import React, { useState } from "react";

export default function SignUpForm() {
  const [] = useState();
  const [] = useState();

  return (
    <div>
      <div>
        <Link href="/">
          <ChevronLeftIcon />
        </Link>
      </div>
      {/* Section 2 */}
      <div>
        <div>
          <h1></h1>
          <p></p>
        </div>
        <div>
          <div>
            <button></button>
            <button></button>
          </div>
          <div>
            <div>
              <div></div>
            </div>
            <div>
              <span></span>
            </div>
          </div>

          {/* Form */}
          <form></form>

          <div>
            <p>
              <Link href="/">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
