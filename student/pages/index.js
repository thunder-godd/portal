import Lgn_Form from "../components/Lgn_Form";
import Al_Form from "../components/Al_Form";
function Login() {
	return (
		<div className="page login">
			<main className="main">
				<Lgn_Form />
				<p>or </p>
				<Al_Form />
			</main>
		</div>
	);
}
export default Login;
