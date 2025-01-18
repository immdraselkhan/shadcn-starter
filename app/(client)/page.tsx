import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";

export default function Home() {
  return (
    <Container className="flex flex-1 items-center justify-center text-gray-800">
      <Typography className="text-5xl font-bold text-primary">
        Next.js+shadcn starter
      </Typography>
    </Container>
  );
}
