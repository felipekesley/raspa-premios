"use client";

import React from "react";
import { PatternFormat, type PatternFormatProps } from "react-number-format";
import { Input } from "../_shared/input";

type PhonePatternProps = Omit<PatternFormatProps, "customInput">;

export const CpfPattern = React.forwardRef<HTMLInputElement, PhonePatternProps>(
  (props, ref) => {
    return (
      <PatternFormat
        {...props}
        format="###.###.###-##"
        allowEmptyFormatting
        mask="x"
        type="tel"
        customInput={Input}
        getInputRef={ref}
      />
    );
  }
);
