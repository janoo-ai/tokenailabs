import React from "react";
import {
  Html,
  Text,
  Body,
  Head,
  Container,
  Preview,
  Heading,
  Tailwind,
  Img,
  Section,
  Link,
} from "@react-email/components";

function Email({ name, email, message }) {
  return (
    <Html>
      <Head></Head>
      <Preview>Thank you for reaching out, {name}!</Preview>
      <Tailwind>
        <Body className="">
          <Container className="w-[600px] px-4 py-6 bg-slate-950 rounded-lg">
            {/* Header Section */}
            <Section>
              <Heading className="text-2xl text-white font-bold">
                Hello {name},
              </Heading>
              <Text className="text-lg text-white mt-4">
                Thank you for reaching out to us. We have received your message,
                and our team will get back to you soon.
              </Text>
            </Section>

            {/* Contact Details Section */}
            <Section className="mt-4">
              <Heading className="text-xl text-white font-semibold">
                Your Contact Details:
              </Heading>
              <Text className="text-md text-white mt-1">
                <strong>Email:</strong> {email}
              </Text>
              <Text className="text-md text-white mt-1">
                <strong>Message:</strong> {message}
              </Text>
            </Section>

            {/* Thank You Section */}
            <Section className="mt-3">
              <Text className="text-lg text-white mt-4">
                We appreciate your interest in our services. We will respond as
                soon as possible.
              </Text>
            </Section>

            {/* Footer Section */}
            <Section className="mt-6 w-full ">
              <Text className="text-sm text-white text-center w-fit">
                Best Regards,
                <br />
                support@tokenailabs.com
              </Text>
            </Section>
          </Container>
          <Text className="text-center font-sm font-black">
            Note : Please do not reply to this message. It is an automated
            system-generated notification.
          </Text>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default Email;
