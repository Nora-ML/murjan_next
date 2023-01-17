import AdminLayout from "../../components/admin/AdminLayout.js";
import withAdmin from "../withAdmin.js";


const AdminBoard = ({currentUser}) => {
    console.log("AdminBOard",currentUser);
    //const { data, error, loading } = useQuery(LIST_USERS);

    return (
        <AdminLayout>
            <h1>Admin Page </h1>
        </AdminLayout>
    )
}

export default withAdmin(AdminBoard);


