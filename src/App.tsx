import { Box } from "@chakra-ui/react";
import { useQuery } from "react-query";
import invariant from "tiny-invariant";
import { JSONClient } from "./lib/fetch-client";

function App() {
  const { data } = useQuery("repoData", () =>
    JSONClient<{ name: string }>(
      "https://api.github.com/repos/tannerlinsley/react-query"
    )
  );
  invariant(data);

  return <Box>name: {data.name}</Box>;
}

export default App;
