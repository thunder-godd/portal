import Image from "next/image";
import Navbar from "./Navbar";
import elip1 from "../public/assets/elip1.svg";
import elip2 from "../public/assets/elip2.svg";
import elip3 from "../public/assets/elip3.svg";
const Layout = ({ children }) => {
	return (
		<div className="layout">
			<Navbar />
			{children}
			<div className="el el1 ">
				<Image src={elip1} alt="U" />
			</div>
			<div className="el el3 ">
				<Image src={elip3} alt="O" />
			</div>
			<div className="el el2">
				<Image src={elip2} alt="N" />
			</div>
		</div>
	);
};

export default Layout;
