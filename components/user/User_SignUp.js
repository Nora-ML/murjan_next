import { useMutation } from "@apollo/client";
import Router from "next/router";
import { ACTIVATION_MAIL_USER } from "../helpers/users";
import Form_RComp from "../Forms/Form_RComp";
import {
	PageContainer_Style,
	SubContainer_Style,
	ButtonFill_Style,
} from "../styles/UserFormStyles.js";
import Success_RComp from "../Messages/Success";
import Error_RComp from "../Messages/Error";
import { setLocalStorage } from "../helpers/auth";
import { FormAndHeaderWrap } from "../../components/admin/Z_Style_AddPage";

const UserAdd = () => {
	const [activationMailToUser, { loading, error, data }] =
		useMutation(ACTIVATION_MAIL_USER);

	const formData = { name: "", email: "", password: "" };

	setTimeout(() => {
		if (data) {
			const user = Object.values(data)[0];
			if (typeof window !== "undefined") {
				localStorage.setItem("email", user.email);
			}
			Router.push({ pathname: "/user/activate" });
		}
	}, 1000);

	let width = "51%";
	return (
		<PageContainer_Style>
			{data ? (
				<Success_RComp
					message={`An activation Link has been sent to your email.`}
				/>
			) : (
				<FormAndHeaderWrap width={width}>
					<h1 className="form_header">Sign Up</h1>
					{error ? <Error_RComp error={error} /> : ""}
					<Form_RComp
						formWidth={width}
						formFields={{ formData }}
						mutationFunction={[activationMailToUser]}
						mutationResponse={{ loading, error, data }}
						/* Form Characteristics :  [fieldtype,typeof,labelText,name/id/for,placeholder,required,Attr2,Attr3] */
						mainFormInputs={[
							{
								type: "text",
								label: "Name",
								name: "name",
								placeholder: "Name..",
								required: "true",
							},
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
						formButton={[
							/* submit */
							{ type: "submit", value: "Create An Account" },
						]}
					/>
				</FormAndHeaderWrap>
			)}
		</PageContainer_Style>
	);
};
export default UserAdd;
