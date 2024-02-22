import {
	Avatar,
	Heading2,
	AvatarGroup,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Button,
	Flex,
	Heading,
	Link,
	Loader,
	SocialProof,
	Text,
	VStack,
	Footnote,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	FormControl,
	Input,
	ToggleGroup,
	Box,
	Card,
	AccordionPanel,
	AccordionItem,
	Accordion,
	AccordionButton,
  AccordionIcon
} from "@cruk/chakra-components"
import NextLink from "next/link"

const Home = () => (
	<Box paddingY="100px">
		<Flex padding="20px 50px">
			<Heading2>Heading CRUK</Heading2>
		</Flex>
		<VStack gap="10" padding="50px">
			<Loader />
			<Text>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt doloribus animi veniam eius, sint sequi quisquam? Dicta molestiae accusamus dolore earum incidunt illo
				quos ratione. Beatae hic enim sint molestias.
			</Text>
			<Footnote />
		</VStack>
		<Flex padding="20px 50px">
			<Breadcrumb>
				<BreadcrumbItem>
					<BreadcrumbLink href="/">Home</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbItem>
					<BreadcrumbLink href="/">Get Involved</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbItem>
					<BreadcrumbLink href="/">Donate</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbItem>
					<BreadcrumbLink href="#" isCurrentPage>
						This is a long title, how does this work on mobile?
					</BreadcrumbLink>
				</BreadcrumbItem>
			</Breadcrumb>
		</Flex>
		<Flex padding="20px 50px">
			<AvatarGroup>
				<Avatar name="James Smith" />
				<Avatar name="Dave Carr" />
				<Avatar name="Jasmine Law" src="https://i.pravatar.cc/100" />
			</AvatarGroup>
		</Flex>
		<Flex padding="20px 50px">
			<Link as={NextLink} href="/">
				Test
			</Link>
		</Flex>
		<Flex padding="20px 50px">
			<Button href="/">Test</Button>
		</Flex>
		<Flex padding="20px 50px">
			<Heading>Testing</Heading>
		</Flex>
		<Flex padding="20px 50px">
			<SocialProof
				type="pullQuote"
				name="Rach"
				photo={{
					src: "https://via.placeholder.com/200",
					alt: "Placeholder image",
				}}
				body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris justo nisl, fermentum eget ornare in, elementum at sem. Ut tristique felis id elit mattis tincidunt"
				citation="cancer survivor and regular giver for 8 years"
			/>
		</Flex>
		<Flex padding="20px 50px">
			<FormControl>
				<FormLabel>Email address</FormLabel>
				<FormHelperText>We will never share your email.</FormHelperText>
				<Input type="email" />
				<FormErrorMessage>Invalid email address</FormErrorMessage>
			</FormControl>
		</Flex>
		<Flex padding="20px 50px">
			<ToggleGroup
				options={[
					{ value: "1", label: "First" },
					{ value: "2", label: "Second", isDisabled: true },
					{ value: "3", label: "Third" },
					{ value: "4", label: "Fourth" },
				]}
				value={"1"}
				onChange={(val) => console.log("clicked")}
				onFocus={() => console.log("focused")}>
				{undefined}
			</ToggleGroup>
		</Flex>
		<Flex padding="20px 50px">
			<Card
				direction="column"
				heading={{
					as: "h3",
					children: "Empower long-term projects",
				}}
				image={{
					alt: "Placeholder image",
					height: 500,
					src: "https://via.placeholder.com/500",
					width: 500,
				}}
				maxW="18.25rem"
				variant="navigation"
			/>
		</Flex>
		<Flex padding="20px 50px">
			<Accordion variant="themed" defaultIndex={undefined} allowToggle>
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left">
								Section 1 title
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left">
								Section 2 title
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</Flex>
	</Box>
)

export default Home
