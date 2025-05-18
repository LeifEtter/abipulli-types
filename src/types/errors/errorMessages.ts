export const errorMessages = {
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
} as const;
