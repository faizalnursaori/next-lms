import React from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

const style = tv({
  base: "space-y-2 rounded-lg border border-slate-200 bg-white p-8 shadow-sm shadow-slate-100",
});

type TCard = VariantProps<typeof style>;
interface Props extends TCard, React.ComponentPropsWithRef<"div"> {}

export const Input = (props: Props) => {
  return <div {...props} className={twMerge(style({ ...props }), props.className)}></div>;
};
