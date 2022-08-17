import Image from "next/image";
import user from "../public/assets/user.svg";
const Greeting = () => {
	return (
		<section className="grt glass glass-1">
			<div className="dets">
				<h3>Good Morning, John D.</h3>
				<h4> F17/1234/2023</h4>
				<p>BSc. Elec and Electronic Eng.</p>
			</div>

			<div className="usr">
				<Image src={user} alt="user" />
			</div>
		</section>
	);
};

export default Greeting;
