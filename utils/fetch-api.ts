import Constants from "@/utils/constants";

type BodyInit = RequestInit["body"] | Record<string, unknown>;

type HTTPHeaders = "Content-Type" | "Authorization" | "Accept";

type RequestOptions = Omit<RequestInit, "body" | "method"> & {
  headers?: RequestInit["headers"] | Partial<Record<HTTPHeaders, string>>;
};

type ApiResponse<T> = {
  status?: number;
  success?: boolean;
  message?: string;
  stackTrace?: string | T;
  data?: T;
};

export default function fetchApi() {
  async function _request<T>(
    url: string,
    method: RequestInit["method"],
    body?: BodyInit,
    options?: RequestOptions,
  ) {
    try {
      const headers = new Headers(options?.headers);

      if (!headers.has("Content-Type")) {
        headers.append("Content-Type", "application/json");
      }

      if (body instanceof Object) body = JSON.stringify(body);

      const resJson = await fetch(url, { method, body, headers });

      const response = await resJson.json();

      if (!response.data) response.data = response;

      return response;
    } catch (error) {
      const errorResponse = {
        status: 500,
        success: false,
        message:
          (error instanceof Error && error.message) ||
          "Something went wrong, try later.",
        ...(Constants.NODE_ENV === "development" && {
          stackTrace: (error instanceof Error && error.stack) || "",
        }),
      };
      return errorResponse;
    }
  }

  return {
    async get<T>(
      url: string,
      options?: RequestOptions,
    ): Promise<ApiResponse<T>> {
      return _request(url, "GET", undefined, options);
    },

    async post<T>(
      url: string,
      body: BodyInit,
      options?: RequestOptions,
    ): Promise<ApiResponse<T>> {
      return _request(url, "POST", body, options);
    },

    async put<T>(
      url: string,
      body: BodyInit,
      options?: RequestOptions,
    ): Promise<ApiResponse<T>> {
      return _request(url, "PUT", body, options);
    },

    async patch<T>(
      url: string,
      body: BodyInit,
      options?: RequestOptions,
    ): Promise<ApiResponse<T>> {
      return _request(url, "PATCH", body, options);
    },

    async delete<T>(
      url: string,
      body: BodyInit,
      options?: RequestOptions,
    ): Promise<ApiResponse<T>> {
      return _request(url, "DELETE", body, options);
    },
  };
}
