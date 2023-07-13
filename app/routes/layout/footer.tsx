import { Footer, Container } from "@mantine/core";

export function LayoutFooter() {
  return (
    <Footer className="bg-gray-900 text-center">
      <Container className="py-3">
        <p className="text-sm text-white ">
          copyrights 2023 ハムランド All Rights Reserved.
        </p>
      </Container>
    </Footer>
  );
}
