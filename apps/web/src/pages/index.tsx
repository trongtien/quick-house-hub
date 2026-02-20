import { Button } from "@quick-house-hub/ui";
import { formatDate } from "@quick-house-hub/utils";

export default function Home() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Quick House Hub</h1>
      <p>Welcome to your Turborepo monorepo!</p>
      <p>Current date: {formatDate(new Date())}</p>
      <Button>Click me</Button>
    </main>
  );
}
