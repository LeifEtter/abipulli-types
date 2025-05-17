import { Chat } from "./chat";
import { Order } from "./order";
import { User } from "./user";

export interface Design {
  id: number;
  orderId: number;
  order?: Order;
  images: Image[];
  textElements: TextElement[];
  designSuggestions: DesignSuggestion[];
  designCost: number;
  createdAt: Date;
  updatedAt: Date;
}

export type DesignCreateInput = Omit<Design, "id" | "createdAt" | "updatedAt">;
export type DesignUpdateInput = Partial<Omit<Design, "id">> & { id: number };

export interface DesignSuggestion {
  id: number;
  chatId: number;
  chat?: Chat;
  suggestion: string;
  createdAt: Date;
}

export type DesignSuggestionCreateInput = Omit<
  DesignSuggestion,
  "id" | "createdAt"
>;
export type DesignSuggestionUpdateInput = Partial<
  Omit<DesignSuggestion, "id">
> & { id: number };

export interface Image {
  id: number;
  origin: string;
  createdAt: Date;
  generated: boolean;
  prompt: string;
  userId: number;
  user?: User;
  positionX: number;
  positionY: number;
}

export type ImageCreateInput = Omit<Image, "id" | "createdAt">;
export type ImageUpdateInput = Partial<Omit<Image, "id">> & { id: number };

export interface TextElement {
  id: number;
  text: string;
  createdAt: Date;
  positionX: number;
  positionY: number;
  fontSize: number;
  fontColor: string;
  fontWeight: number;
  fontStyle: string;
}

export type TextElementCreateInput = Omit<TextElement, "id" | "createdAt">;
export type TextElementUpdateInput = Partial<Omit<TextElement, "id">> & {
  id: number;
};
