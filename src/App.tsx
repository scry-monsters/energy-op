import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Partners from "./pages/Partners";
import Contacts from "./pages/Contacts";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<RootLayout />}>
				<Route index element={<Home />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/about" element={<About />} />
				<Route path="/partners" element={<Partners />} />
				<Route path="/contacts" element={<Contacts />} />
			</Route>
		)
	);
	return <RouterProvider router={router} />;
}

export default App;
