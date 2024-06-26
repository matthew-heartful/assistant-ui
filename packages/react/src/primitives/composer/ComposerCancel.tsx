"use client";

import { composeEventHandlers } from "@radix-ui/primitive";
import {
  type ComponentPropsWithoutRef,
  Primitive,
} from "@radix-ui/react-primitive";
import { type ElementRef, forwardRef } from "react";
import { useComposerContext } from "../../context/ComposerContext";

type ComposerCancelElement = ElementRef<typeof Primitive.button>;
type PrimitiveFormProps = ComponentPropsWithoutRef<typeof Primitive.button>;

type ComposerCancelProps = PrimitiveFormProps;

export const ComposerCancel = forwardRef<
  ComposerCancelElement,
  ComposerCancelProps
>(({ onClick, ...rest }, ref) => {
  const { useComposer } = useComposerContext();

  const handleCancel = () => {
    useComposer.getState().cancel();
  };

  return (
    <Primitive.button
      type="button"
      {...rest}
      ref={ref}
      onClick={composeEventHandlers(onClick, handleCancel)}
    />
  );
});
