import Link from "next/link";

const Navs = ({ title, link }) => {
	return (
		<section className="navs glass glass-2">
			{/* <Link href={`/${link}`}> */}
			<h3 className="nav-title">{title} </h3>
			<span className="navs-icon icon">|</span>
			{/* </Link> */}
		</section>
	);
};

export default Navs;
