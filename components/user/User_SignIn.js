import { useEffect } from "react";
import Router from "next/router";
import { useMutation } from "@apollo/client";
import { LOGIN_USER, RESETPASS_MAIL_USER } from "../helpers/users";
// sub components
import Form_RComp from "../Forms/Form_RComp";
import Success_RComp from "../Messages/Success";
import Error_RComp from "../Messages/Error";
import { authenticate, isAuth } from "../helpers/auth";
//styles
import {
	PageContainer_Style,
	FormHeader_Style,
} from "../styles/UserFormStyles";
import { FormAndHeaderWrap } from "../styles/AddPageStyle";

const LogInUser = () => {
	console.log("-- LOG IN ---");

	const [logInUser, { loading, error, data }] = useMutation(LOGIN_USER);
	const [resetPassMail, { data: resetData }] = useMutation(RESETPASS_MAIL_USER);

	const formData = { email: "", password: "" };
	const { name } = data ? Object.values(data)[0] : "";

	if (data) {
		const { logInUser } = data;
		authenticate(logInUser, () =>
			isAuth() && isAuth().role === "admin"
				? Router.push("/admin")
				: Router.push("/user")
		);
	}

	/* setTimeout(() => {
        if (name) {
            Router.push({pathname:"/shop"})
        }
    }, 800) */

	useEffect(() => {
		console.log("If signin forced in url");
		isAuth() && isAuth().role === "admin"
			? Router.push("/admin")
			: isAuth()?.role === "customer"
			? Router.push("/user")
			: "";
	}, []);

	let width = "51%";
	return (
		<PageContainer_Style>
			{resetData ? (
				<Success_RComp
					message={`A password reset Link has been sent to your email.`}
				/>
			) : data ? (
				<Success_RComp message={`Welcome ${name}.`} />
			) : (
				<FormAndHeaderWrap width={width}>
					<h1 className="form_header">Sign In</h1>
					{/* {error ? <Error_RComp error={error} /> : ""} */}
					{loading ? <p>Loading ....</p> : ""}
					<Form_RComp
						formWidth={width}
						formFields={{ formData }}
						mutationFunction={[logInUser]}
						mutationResponse={{ loading, error, data }}
						formHeader="Log In"
						mainFormInputs={[
							{
								type: "email",
								label: "Email",
								name: "email",
								placeholder: "Email ..",
								required: "true",
							},
							{
								type: "password",
								label: "Password",
								name: "password",
								placeholder: "Password..",
								required: "true",
							},
						]}
						btnCount={2}
						formButton={[
							/* submit */
							{
								type: "cancel",
								value: "Forgot Password ?",
								fnc: resetPassMail,
							},
							{ type: "submit", value: "Log In" },
						]}
					/>
				</FormAndHeaderWrap>
			)}
		</PageContainer_Style>
	);
};
export default LogInUser;
