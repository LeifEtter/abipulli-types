// src/types/models/chat.ts
import { z as z6 } from "zod";

// src/types/models/chatMessage.ts
import { z as z5 } from "zod";

// src/types/models/design.ts
import { z as z4 } from "zod";

// src/types/models/textElement.ts
import { z } from "zod";
var TextElementSchema = z.object({
  id: z.number(),
  text: z.string(),
  createdAt: z.coerce.date(),
  positionX: z.number(),
  positionY: z.number(),
  fontSize: z.number(),
  fontColor: z.string(),
  fontWeight: z.number(),
  fontStyle: z.string()
});
var TextElementCreateParamsSchema = TextElementSchema.omit({
  id: true
});
var TextElementUpdateParamsSchema = TextElementCreateParamsSchema.partial();

// src/types/models/image.ts
import { z as z2 } from "zod";
var ImageSchema = z2.object({
  id: z2.number(),
  createdAt: z2.coerce.date(),
  generated: z2.boolean().optional(),
  prompt: z2.string().optional(),
  userId: z2.number().optional(),
  uuid: z2.string(),
  width: z2.number(),
  height: z2.number(),
  url: z2.string()
});
var ImageWithPositionAndScaleSchema = ImageSchema.extend({
  positionX: z2.number().optional(),
  positionY: z2.number().optional(),
  scaleX: z2.number().optional(),
  scaleY: z2.number().optional(),
  imageToDesignId: z2.number()
});
var ImageUploadParamsSchema = ImageSchema.pick({
  prompt: true,
  generated: true
});
var DesignImageSchema = z2.object({
  imageId: z2.number(),
  imageToDesignId: z2.number(),
  image: ImageSchema,
  positionX: z2.number(),
  positionY: z2.number(),
  scaleX: z2.number().optional(),
  scaleY: z2.number().optional()
});
var AddImageToDesignParamsSchema = DesignImageSchema.pick({
  positionX: true,
  positionY: true
}).extend({
  scaleX: z2.number(),
  scaleY: z2.number()
});
var ManipulateImageInDesignParamsSchema = DesignImageSchema.pick({
  positionX: true,
  positionY: true,
  scaleX: true,
  scaleY: true
}).partial();
var GenerateImageParamsSchema = z2.object({
  prompt: z2.string(),
  styleTags: z2.array(z2.string())
});
var ImproveImageQueryParamsSchema = z2.object({
  motto: z2.string(),
  styleTags: z2.array(z2.string()),
  description: z2.string()
});
var ImproveImageQueryResultSchema = ImproveImageQueryParamsSchema.pick({
  description: true
});
var ImproveImageParamsSchema = ImproveImageQueryParamsSchema.pick({
  styleTags: true,
  description: true
}).extend({
  target: z2.string()
});

// src/types/models/pullover.ts
import { z as z3 } from "zod";
var PulloverSchema = z3.object({
  id: z3.number(),
  name: z3.string(),
  color: z3.string(),
  description: z3.string(),
  basePrice: z3.number(),
  createdAt: z3.coerce.date(),
  updatedAt: z3.coerce.date(),
  imageId: z3.number(),
  image: ImageSchema
});
var PulloverCreateParamsSchema = PulloverSchema.pick({
  name: true,
  description: true,
  basePrice: true,
  color: true
});

// src/types/models/design.ts
var DesignSuggestionSchema = z4.object({
  id: z4.number(),
  chatId: z4.number(),
  designId: z4.number(),
  accepted: z4.boolean().default(false),
  denied: z4.boolean().default(false),
  suggestion: z4.string(),
  createdAt: z4.coerce.date()
});
var DesignSuggestionCreateSchema = DesignSuggestionSchema.pick({
  designId: true,
  suggestion: true
});
var DesignSchema = z4.object({
  id: z4.number(),
  orderId: z4.number(),
  preferredPulloverId: z4.number().optional(),
  preferredPullover: PulloverSchema.optional(),
  images: z4.array(ImageWithPositionAndScaleSchema).optional(),
  textElements: z4.array(TextElementSchema).optional(),
  designCost: z4.number(),
  createdAt: z4.coerce.date(),
  updatedAt: z4.coerce.date(),
  customerId: z4.number()
});
var DesignCreateParamsSchema = DesignSchema.pick({
  preferredPulloverId: true
});

// src/types/models/chatMessage.ts
var ChatMessageSchema = z5.object({
  id: z5.number(),
  content: z5.string(),
  senderId: z5.number(),
  designId: z5.number().optional(),
  design: DesignSchema.optional(),
  chatId: z5.number(),
  createdAt: z5.coerce.date()
});
var ChatMessageCreateParamsSchema = ChatMessageSchema.pick({
  content: true,
  senderId: true,
  designId: true
});

// src/types/models/chat.ts
var ChatSchema = z6.object({
  id: z6.number(),
  messages: z6.array(ChatMessageSchema),
  lastMessageAt: z6.coerce.date(),
  createdAt: z6.coerce.date(),
  updatedAt: z6.coerce.date(),
  orderId: z6.number().optional(),
  userId: z6.number(),
  assignedAdminId: z6.number().optional()
});
var ChatCreateParamsSchema = ChatSchema.pick({
  assignedAdminId: true
}).extend({
  initialMessage: z6.string().optional()
});
var ChatCreateResultSchema = ChatSchema.pick({
  id: true,
  assignedAdminId: true
});

// src/types/models/order.ts
import { z as z7 } from "zod";
var OrderStatusSchema = z7.union([
  z7.literal("CREATED"),
  z7.literal("BASIC_INFO"),
  z7.literal("DESIGNING"),
  z7.literal("REVISING"),
  z7.literal("FINISHING_INFO")
]);
var OrderSchema = z7.object({
  id: z7.number(),
  customerId: z7.number(),
  deadline: z7.coerce.date(),
  schoolCountry: z7.string(),
  studentAmount: z7.number(),
  school: z7.string(),
  motto: z7.string(),
  deliveryAddress: z7.string(),
  billingAddress: z7.string(),
  createdAt: z7.coerce.date(),
  updatedAt: z7.coerce.date(),
  status: OrderStatusSchema,
  designs: z7.array(DesignSchema).optional(),
  chats: z7.array(ChatSchema).optional()
});
var OrderCreateParamsSchema = OrderSchema.pick({
  school: true,
  schoolCountry: true
}).extend({
  motto: OrderSchema.shape.motto.optional(),
  deadline: OrderSchema.shape.deadline.optional(),
  studentAmount: OrderSchema.shape.studentAmount.optional()
});
var OrderCompleteParamsSchema = OrderSchema.pick({
  studentAmount: true,
  deliveryAddress: true,
  billingAddress: true
});
var OrderUpdateParamsSchema = OrderSchema.omit({
  id: true,
  customerId: true,
  createdAt: true,
  updatedAt: true,
  designs: true,
  chats: true
}).partial();

// src/types/models/role.ts
import { z as z8 } from "zod";
var UserRoleSchema = z8.object({
  id: z8.number(),
  roleName: z8.string(),
  rolePower: z8.number()
});
var UserRoleCreateParamsSchema = UserRoleSchema.omit({ id: true });
var UserRoleUpdateSchema = UserRoleCreateParamsSchema.partial();

// src/types/models/user.ts
import { z as z9 } from "zod";
var PasswordSchema = z9.string().min(8, "Password must be at least 8 characters long").max(100, "Password must be less than 100 characters long").refine(
  (val) => /[A-Z]/.test(val),
  "Password must contain at least one uppercase letter"
).refine(
  (val) => /[0-9]/.test(val),
  "Password must contain at least one number"
).refine(
  (val) => /[!@#$%^&*]/.test(val),
  "Password must contain at least one special character"
);
var UserSchema = z9.object({
  id: z9.number(),
  email: z9.string().email(),
  password: PasswordSchema,
  firstName: z9.string(),
  lastName: z9.string(),
  school: z9.string(),
  createdAt: z9.coerce.date(),
  updatedAt: z9.coerce.date(),
  role: UserRoleSchema.optional(),
  storageUsed: z9.number().optional(),
  totalCost: z9.number().optional(),
  verified: z9.boolean(),
  orders: z9.array(OrderSchema).optional(),
  images: z9.array(ImageSchema).optional(),
  chats: z9.array(ChatSchema).optional(),
  designs: z9.array(DesignSchema).optional()
});
var UserCreateParamsSchema = UserSchema.pick({
  email: true,
  firstName: true,
  lastName: true,
  school: true
}).extend({ password: PasswordSchema });
var UserLoginParamsSchema = UserCreateParamsSchema.pick({
  email: true,
  password: true
});
var UserUpdateParamsSchema = UserCreateParamsSchema.omit({
  email: true
});
var UserLoginResultSchema = UserSchema.pick({ id: true }).extend({
  token: z9.string()
});
var UserCheckAuthResultSchema = UserSchema.pick({ id: true });

// src/types/models/ideogram.ts
import { z as z10 } from "zod";
var IdeogramImageSchema = z10.object({
  is_image_safe: z10.boolean(),
  prompt: z10.string(),
  resolution: z10.string(),
  seed: z10.number(),
  style_type: z10.string(),
  url: z10.string()
});
var IdeogramResponseSchema = z10.object({
  created: z10.coerce.date(),
  data: z10.array(IdeogramImageSchema)
});
var AspectRatioList = [
  "1x3",
  "3x1",
  "1x2",
  "2x1",
  "9x16",
  "16x9",
  "10x16",
  "16x10",
  "2x3",
  "3x2",
  "3x4",
  "4x3",
  "4x5",
  "5x4",
  "1x1"
];
var MagicPromptModeList = ["AUTO", "OFF", "ON"];
var StyleTypeList = [
  "AUTO",
  "GENERAL",
  "REALISTIC",
  "DESIGN"
];
var RenderingSpeedTypeList = ["TURBO", "DEFAULT", "QUALITY"];
var IdeogramRequestSchema = z10.object({
  prompt: z10.string(),
  seed: z10.string().optional(),
  resolution: z10.string().optional(),
  aspect_ratio: z10.enum(AspectRatioList),
  magic_prompt: z10.enum(MagicPromptModeList).optional(),
  negative_prompt: z10.string().optional(),
  num_images: z10.number().optional(),
  color_palette: z10.object({}).optional(),
  style_codes: z10.array(z10.string()).optional(),
  style_type: z10.enum(StyleTypeList).optional(),
  style_reference_images: z10.any().array().optional(),
  rendering_speed: z10.enum(RenderingSpeedTypeList).optional()
});

// src/types/errors/errorMessages.ts
var errorMessages = {
  faultyToken: "Invalid or expired token",
  emailAlreadyRegistered: "Email is already registered",
  faultyLoginCredentials: "Invalid email or password",
  cantDeleteSelf: "Cannot delete your own account",
  resourceNotFound: "Resource not found",
  resourceNotOwned: "You don't have permission to access this resource",
  rolePowerTooLow: "Your role doesn't have sufficient permissions",
  missingImage: "No image file provided",
  imageUploadFailed: "Failed to upload image",
  issueUploadingImage: "There was an issue uploading your image",
  missingBodyInfo: "Missing body information",
  paramIdMissing: "Missing parameter ID",
  paramIdMalformed: "Parameter ID is malformed",
  tokenUserDoesNotExist: "Token user does not exist",
  emailNotFound: "Email not found",
  faultySSOCredentials: "Invalid SSO credentials",
  missingToken: "Missing token"
};
export {
  AddImageToDesignParamsSchema,
  AspectRatioList,
  ChatCreateParamsSchema,
  ChatCreateResultSchema,
  ChatMessageCreateParamsSchema,
  ChatMessageSchema,
  ChatSchema,
  DesignCreateParamsSchema,
  DesignImageSchema,
  DesignSchema,
  DesignSuggestionCreateSchema,
  DesignSuggestionSchema,
  GenerateImageParamsSchema,
  IdeogramImageSchema,
  IdeogramRequestSchema,
  IdeogramResponseSchema,
  ImageSchema,
  ImageUploadParamsSchema,
  ImageWithPositionAndScaleSchema,
  ImproveImageParamsSchema,
  ImproveImageQueryParamsSchema,
  MagicPromptModeList,
  ManipulateImageInDesignParamsSchema,
  OrderCompleteParamsSchema,
  OrderCreateParamsSchema,
  OrderSchema,
  OrderStatusSchema,
  OrderUpdateParamsSchema,
  PasswordSchema,
  PulloverCreateParamsSchema,
  PulloverSchema,
  RenderingSpeedTypeList,
  StyleTypeList,
  TextElementCreateParamsSchema,
  TextElementSchema,
  TextElementUpdateParamsSchema,
  UserCreateParamsSchema,
  UserLoginParamsSchema,
  UserRoleCreateParamsSchema,
  UserRoleSchema,
  UserRoleUpdateSchema,
  UserSchema,
  UserUpdateParamsSchema,
  errorMessages
};
