import { useMutation } from "@apollo/client";
import { NEW_PASS_USER } from "../../../components/helpers/users.js";
import {
	PageContainer_Style,
	SubContainer_Style,
	ButtonFill_Style,
} from "../../../components/styles/UserFormStyles";
import Success_RComp from "../../../components/Messages/Success";
import Form_RComp from "../../../components/Forms/Form_RComp";
import Router from "next/router";
import Error_RComp from "../../../components/Messages/Error";

const PasswordReset = ({ query }) => {
	console.log("QUery", query);
	const { id: token } = query;
	console.log("form data token --- ", token);
	const [newPass, { loading, error, data }] = useMutation(NEW_PASS_USER);

	const formData = { token: token, password: "" };

	setTimeout(() => {
		if (data) {
			Router.push({ pathname: "/signin" });
		}
	}, 200);

	return (
		<PageContainer_Style>
			{error ? (
				<Error_RComp error={error} />
			) : data ? (
				<Success_RComp
					message={`Password Successfuly Reset. You Will be directed to Sign In`}
				/>
			) : (
				<>
					<h1 className="form_header">Create a new Password</h1>
					<Form_RComp
						formFields={{ formData }}
						mutationFunction={[newPass]}
						mutationResponse={{ loading, error, data }}
						mainFormInputs={[
							{
								type: "password",
								label: "Password",
								name: "password",
								placeholder: "New Password ",
								required: "true",
							},
						]}
						formButton={[
							/* submit */
							{ type: "submit", value: "New Password" },
						]}
					/>
				</>
			)}
		</PageContainer_Style>
	);
};

export async function getServerSideProps(context) {
	return { props: { query: context.query } };
}

export default PasswordReset;
