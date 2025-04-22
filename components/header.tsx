import { Box } from "@/components/ui/box";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";

export function Header() {
  return (
    <Container as="header" className="py-4 text-white" lang="bn">
      <Box className="container mx-auto text-center">
        <Typography as="h1" className="text-2xl font-bold">
          Header Update
        </Typography>
      </Box>
    </Container>
  );
}
