import { Box } from "@/components/ui/box";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";

export function Footer() {
  return (
    <Container as="footer" className="py-4">
      <Box className="container mx-auto text-center">
        <Typography>
          Written by{" "}
          <Typography
            as="a"
            href="https://raselkhan.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            raselkhan.dev
          </Typography>
        </Typography>
      </Box>
    </Container>
  );
}
