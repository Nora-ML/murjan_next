import { useQuery } from "@apollo/client";
import { LIST_CATEGORIES } from "../../components/helpers/list.js";
//main Components
import AdminLayout from "../../components/admin/AdminLayout.js";
import CategoryAdd from "../../components/admin/Category_Add_Update";
//sub components
import Search_RComp from "../../components/Reuse_Component/Search_RComp.js";
import Table from "../../components/TableDisplay/Table.js";
import {
	Dash_HeaderStyle,
	Dash_FooterStyle,
} from "../../components/styles/DashBoard_Style";

const Admin_Category = () => {
	const { data: listCategories, error, loading } = useQuery(LIST_CATEGORIES);

	if (error) return <p>error...</p>;

	const categories = listCategories?.listCategories;

	const colHeaders =
		categories?.length > 0 ? Object.keys(categories[0]).slice(1) : false;

	return (
		<AdminLayout>
			<Dash_HeaderStyle className="admin_display_head_left">
				Categories
			</Dash_HeaderStyle>

			<Search_RComp className="admin_display_controls_left" />
			<p className="admin_display_controls_right">Items per page</p>

			<div className="admin_display_content">
				{loading ? (
					<p>loading...</p>
				) : colHeaders ? (
					<Table colHeaders={colHeaders} data={categories} type="category" />
				) : (
					<div>
						<h2>No Categories Added</h2>
					</div>
				)}
			</div>

			<Dash_FooterStyle className="admin_display_footer">
				PAGES
			</Dash_FooterStyle>

			<CategoryAdd />
		</AdminLayout>
	);
};

export default Admin_Category;
