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
  Section,
  Link,
} from "@react-email/components";

function NewsletterConfirmation({ name }) {
  return (
    <Html>
      <Head></Head>
      <Preview>Confirm Your Newsletter Subscription</Preview>
      <Tailwind>
        <Body className="bg-gradient-to-t from-gray-800 to-blue-500">
          <Container className="w-[600px] px-6 py-8 bg-white rounded-lg shadow-lg">
            <Section>
              <Heading className="text-3xl text-center text-blue-600 font-bold">
                Thank You for Subscribing <br />
                <Text className="text-bule-800 mt-1 text-3xl"> {name}!</Text>
              </Heading>
              <Text className="text-lg text-gray-700 text-center mt-4">
                You have successfully subscribed to our newsletter. We are
                excited to keep you updated with the latest news and updates.
              </Text>
            </Section>

            <Section className="mt-3 text-center">
              <Text className="text-md text-gray-600">
                If you did not subscribe to this newsletter, please disregard
                this message or{" "}
                <Link
                  href="mailto:support@tokenailabs.com"
                  className="text-blue-500">
                  contact us
                </Link>
                .
              </Text>
            </Section>

            <Section className="mt-4 text-center">
              <Link
                href="https://www.tokenailabs.com/"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg">
                Visit Our Website
              </Link>
            </Section>

            <Section className="mt-3 text-center">
              <Text className="text-sm text-gray-500">
                Best regards, <br />
                The Token ai labs pvt ltd Team
              </Text>
            </Section>

            <Section className="mt-6 text-center text-sm text-gray-400">
              <Text>
                This is an automated message. Please do not reply directly to
                this email.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default NewsletterConfirmation;
