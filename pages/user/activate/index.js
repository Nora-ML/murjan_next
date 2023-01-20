import { useState } from "react";
import { useMutation } from "@apollo/client";
import Router from "next/router";

import { ACTIVATE_USER, RESEND_OTP } from "../../../components/helpers/users";
import {
	PageContainer_Style,
	SubContainer_Style,
	ButtonFill_Style,
} from "../../../components/styles/UserFormStyles";
import Form_RComp from "../../../components/Forms/Form_RComp";
import Success_RComp from "../../../components/Messages/Success";
import Error_RComp from "../../../components/Messages/Error";

const ActivateUser = () => {
	//const [code, setCode] = useState();

	const [activateUser, { loading, error, data }] = useMutation(ACTIVATE_USER);
	const [resendOtp] = useMutation(RESEND_OTP);

	/*     const activate = async (e) => {
        e.preventDefault();
        let currTime = Math.floor((new Date().getTime() / 1000) / 60);
        let varibleObject = { OTP: { "code": parseInt(code)} };

        try {
            await activateUser({ variables: varibleObject });
        } catch (error) {
            console.log("ERROR",error)
        }

    }
 */
	setTimeout(() => {
		if (data) {
			Router.push({ pathname: "/signin" });
		}
	}, 1000);

	const formData = { OTP: "subForm" };
	const subForm = { code: "" };

	const secondaryCallData =
		typeof window !== "undefined" && localStorage.getItem("email")
			? { email: localStorage.getItem("email") }
			: "";

	console.log("secondaryCallData", secondaryCallData);

	return (
		<PageContainer_Style>
			{data ? (
				<Success_RComp
					message={`Account Successfuly Activated. You Will be directed to Sign In page`}
				/>
			) : (
				<>
					<h1 className="form_header">Account Activation</h1>
					{error ? <Error_RComp error={error} /> : ""}
					<p>Please fill in the OTP sent to your email:</p>
					<Form_RComp
						formFields={{ formData, subForm }}
						mutationFunction={[activateUser]}
						mutationResponse={{ loading, error, data }}
						mainFormInputs={[
							{
								type: "verification",
								length: 6,
								placeholder: "0",
								required: "true",
							},
						]}
						formButton={[
							/* submit */
							{
								type: "cancel",
								value: "Resend OTP ?",
								fnc: { resendOtp },
								fncData: { secondaryCallData },
							},
							{ type: "submit", value: "Activate Account" },
						]}
					/>
				</>
			)}
		</PageContainer_Style>
	);
};

export default ActivateUser;
