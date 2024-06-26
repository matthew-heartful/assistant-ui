"use client";
import type {
  AssistantContentPart,
  ThreadMessage,
} from "../../utils/AssistantTypes";
import type { ModelConfig } from "../../utils/ModelConfigTypes";

export type ChatModelRunResult = {
  content: AssistantContentPart[];
};

export type ChatModelRunOptions = {
  messages: ThreadMessage[];
  abortSignal: AbortSignal;
  config: ModelConfig;
  onUpdate: (result: ChatModelRunResult) => void;
};

export type ChatModelAdapter = {
  run: (options: ChatModelRunOptions) => Promise<ChatModelRunResult>;
};
