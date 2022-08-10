export const responseClient = async (
  endpoint: string,
  customConfig: RequestInit = {}
) => {
  const config: RequestInit = {
    ...customConfig,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...customConfig.headers,
    },
  };

  const res = await fetch(endpoint, config);

  if (!res.ok) {
    const text = await res.text();
    throw new Error(
      `Error fetching ${URL} with config '${JSON.stringify(
        config
      )}': ${text}. Status: ${res.status}`
    );
  }

  return res;
};

// the JSON client
export const JSONClient = async <TResponse extends object>(
  endpoint: string,
  config: RequestInit = {}
): Promise<TResponse> => {
  const res = await responseClient(endpoint, config);

  return await res.json();
};
