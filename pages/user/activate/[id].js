/* import { ACTIVATE_USER } from "../../../components/helpers/users";
import { useMutation } from "@apollo/client";
import { PageContainer_Style,SubContainer_Style,ButtonFill_Style} from "../../../components/styles/UserFormStyles";
import Success_RComp from "../../../components/Reuse_Component/Success_RComp";
import Error_RComp from "../../../components/Reuse_Component/Error_RComp";
import Router from "next/router";

const ActivateUser = ({ query }) => {
    const { id: token } = query;
    const [activateUser, {loading,error,data}] = useMutation(ACTIVATE_USER);

    const formData = {token:token};

    const activate = async() => {
        await activateUser({ variables: formData });
    }

    setTimeout(() => {
        if (data) {
            Router.push({pathname:"/signin"})
        }
    },700)

    return (
    <PageContainer_Style width="100%">
            
            {error
                ? <Error_RComp error={error} /> 
                : data 
                ? <Success_RComp message={`Account Successfuly Activated. You Will be directed to Sign In page`} />
                :
                <SubContainer_Style width="60%" backColor="var(--main_color)">
                    <h1 className="form_header">Hello, </h1>
                    <ButtonFill_Style
                        type="submit"
                        value="Activate Account"
            
                        onClick={()=>activate()}
                    />
                </SubContainer_Style>
            }
            
        </PageContainer_Style>
    )
}

export default ActivateUser; */