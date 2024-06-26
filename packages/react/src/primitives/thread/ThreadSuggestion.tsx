"use client";

import { composeEventHandlers } from "@radix-ui/primitive";
import {
  type ComponentPropsWithoutRef,
  Primitive,
} from "@radix-ui/react-primitive";
import { type ElementRef, forwardRef } from "react";
import { useThreadContext } from "../../context/ThreadContext";

type ThreadSuggestionElement = ElementRef<typeof Primitive.button>;
type PrimitiveButtonProps = ComponentPropsWithoutRef<typeof Primitive.button>;

type ThreadSuggestionProps = PrimitiveButtonProps & {
  prompt: string;
  method: "replace";
  autoSend?: boolean;
};

export const ThreadSuggestion = forwardRef<
  ThreadSuggestionElement,
  ThreadSuggestionProps
>(({ onClick, prompt, method, autoSend: send, ...rest }, ref) => {
  const { useThread, useComposer } = useThreadContext();

  const isDisabled = useThread((t) => t.isRunning);
  const handleApplySuggestion = () => {
    const thread = useThread.getState();
    const composer = useComposer.getState();
    composer.setValue(prompt);

    if (send && !thread.isRunning) {
      composer.send();
    }
  };

  return (
    <Primitive.button
      {...rest}
      disabled={isDisabled}
      ref={ref}
      onClick={composeEventHandlers(onClick, handleApplySuggestion)}
    />
  );
});
