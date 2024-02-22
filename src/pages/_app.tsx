import "../styles/globals.css"

import { ChakraProvider, crukBrand } from "@cruk/chakra-components"
import type { AppProps } from "next/app"

const App = ({ Component, pageProps }: AppProps) => (
	<ChakraProvider theme={crukBrand}>
		<Component {...pageProps} />
	</ChakraProvider>
)

export default App
