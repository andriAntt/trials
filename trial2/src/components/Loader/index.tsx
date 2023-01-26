import "./styles.css";
import { FC } from "react";
import { Oval } from "react-loader-spinner";

const Loader: FC = () => {
	return (
		<div className="loaderContainer">
			<Oval color="#00BFFF" height={100} width={100} />
		</div>
	);
};

export default Loader;
