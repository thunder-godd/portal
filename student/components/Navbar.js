import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dshb from "../public/assets/dshb.png";
import anc from "../public/assets/anc.png";
import prof from "../public/assets/prof.png";
import menu from "../public/assets/menu.png";
const Navbar = () => {
	const [show, setShow] = useState(false);
	const handleClick = () => {
		setShow((prev) => !prev);
	};
	return (
		<div className="navbar">
			<div className="dash nav-icon">
				<span className="dash-icon">
					<Link href="/dash">
						<Image src={dshb} alt="dash icon" />
					</Link>
				</span>
			</div>
			<div className="f-items">
				<div className="announcement nav-icon">
					<span className="mic-icon">
						{/* <Link href="/announcements"> */}
						<Image src={anc} alt="speaker icon" />
						{/* </Link> */}
					</span>
				</div>
				<div className="profile nav-icon">
					<span className="prof-icon">
						{/* <Link href="/profile"> */}
						<Image src={prof} alt="profile icon" />
						{/* </Link> */}
					</span>
				</div>
				<div className="nav-container">
					<span onClick={(e) => handleClick()} className="menu-icon nav-icon">
						<Image src={menu} alt="menu icon" />
					</span>
					<nav className="menu">
						<ul className={show ? "show" : "hide"}>
							<li className="nav-link">
								<Link href="/fees">Fees</Link>
							</li>
							<li className="nav-link">
								<Link href="/courses">Courses</Link>
							</li>
							<li className="nav-link">
								<Link href="/results">Results</Link>
							</li>
							<li className="nav-link">
								<Link href="/rooms">Rooms</Link>
							</li>
							<li className="nav-link">
								<Link href="/timetables">Timetables</Link>
							</li>
							<li className="nav-link">
								<Link href="/">LogOut</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
