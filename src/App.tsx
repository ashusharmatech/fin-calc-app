import { Box, Flex } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import TVMCalculator from './pages/TVMCalculator';

const router = createBrowserRouter([
	{
		path: '/page1',
		element: <Page1 />
	},
	{
		path: '/page2',
		element: <Page2 />
	},
	{
		path: '/TVM',
		element: <TVMCalculator></TVMCalculator>
	},	
	{
		path: '/',
		element: <div>Hello world!</div>
	}
]);

function App() {
	return (
		<Flex flexDirection="column">
			<Sidebar>
				<RouterProvider router={router} />
			</Sidebar>
			<Footer />
		</Flex>
	);
}

export default App;
