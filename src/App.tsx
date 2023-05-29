import { Box, Flex } from "@chakra-ui/react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Nav from "./components/Navbar";

function App() {
	return (
		<Flex flexDirection="column" h="100vh">
			<Nav />
			<Flex flex="1">
				<Sidebar />
				<Box p={4} flex="1">
					<Home title="Page 1" />
				</Box>
			</Flex>
			<Footer />
		</Flex>
	);
}

export default App;