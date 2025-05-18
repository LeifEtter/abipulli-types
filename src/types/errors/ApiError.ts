export interface ErrorInfo {
  code: number;
  info: string;
  resource?: string;
}

export interface InternalErrorInfo {
  code: number;
  msg: string;
}

export class ApiError extends Error {
  public readonly code: number;
  public readonly info: string;
  public readonly resource?: string;

  constructor({ code, info, resource }: ErrorInfo) {
    super(info);
    this.code = code;
    this.info = info;
    this.resource = resource;
  }

  static internal({
    errorInfo,
  }: {
    errorInfo: InternalErrorInfo | null;
  }): ApiError {
    return new ApiError({
      code: errorInfo?.code ?? 500,
      info: errorInfo?.msg ?? "Internal Server Error",
    });
  }
}
