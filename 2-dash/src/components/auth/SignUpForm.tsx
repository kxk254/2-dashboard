"use client";

import Checkbox from "@/components/form/input/Checkbox";
import Input from "@/components/form/input/InputFild";
import Label from "@/components/form/Label";
import { ChevronLefticon, EyeCloseIcon, EyeIcon } from "@/icons/index";
import Link from "next/link";
import React, { useState } from "react";

export default function SignUpForm() {
  const [] = useState();
  const [] = useState();

  return (
    <div>
      <div>
        <Link>
          <ChevronLefticon />
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
              <Link>Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
