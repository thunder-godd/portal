import { useState } from "react";
import Greeting from "../components/Greeting";
import Navs from "../components/Navs";
const Dash = () => {
	const [navs, setNavs] = useState([
		{ title: "Fees", link: "fees" },
		{ title: "Courses", link: "courses" },
		{ title: "Results", link: "courses" },
		{ title: "Timetables", link: "timetables" },
		{ title: "Rooms", link: "rooms" },
		{ title: "Enquiries", link: "enquiries" },
	]);
	return (
		<div className="page dash">
			<main className="main">
				<Greeting />
				<div className="grid">
					{navs.map((nav, id) => {
						return <Navs key={id} title={nav.title} link={nav.link} />;
					})}
				</div>
			</main>
		</div>
	);
};

export default Dash;
