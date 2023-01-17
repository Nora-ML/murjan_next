import { useQuery } from "@apollo/client";
import { LIST_USERS } from "../../components/helpers/list.js";
import AdminLayout from "../../components/admin/AdminLayout.js";
import Table from "../../components/TableDisplay/Table.js";
import AddUser from "../../components/admin/Admin_AddUser.js";

const Admin_User = () => {
	const { data: listUsers, error, loading } = useQuery(LIST_USERS);

	if (error) return <p>error...</p>;

	const users = listUsers?.listUsers;

	console.log("users--- ", users);

	const colHeaders =
		users && users.length > 0 ? Object.keys(users[0]).slice(1) : false;

	return (
		<AdminLayout>
			<AddUser />
			<h1 className="admin_display_head_left">User</h1>

			<h2 className="admin_display_controls_left">Search Box</h2>
			<h2 className="admin_display_controls_right">Items per page</h2>

			<div className="admin_display_content">
				{loading ? (
					<p>loading...</p>
				) : colHeaders ? (
					<Table colHeaders={colHeaders} data={users} type="user" />
				) : (
					<div>
						<h2>No Users Added</h2>
					</div>
				)}
			</div>

			<h2 className="admin_display_footer_left">footer 1</h2>
			<h2 className="admin_display_footer_right">footer2 </h2>
		</AdminLayout>
	);
};

export default Admin_User;
