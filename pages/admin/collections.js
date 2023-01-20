import { useQuery } from "@apollo/client";
import { LIST_COLLECTION } from "../../components/helpers/list.js";
//main Components
import AdminLayout from "../../components/admin/AdminLayout.js";
import CollectionAdd from "../../components/admin/Collection_Add_Update";
//sub components
import Search_RComp from "../../components/Reuse_Component/Search_RComp.js";
import Table from "../../components/TableDisplay/Table.js";
import {
	Dash_HeaderStyle,
	Dash_FooterStyle,
} from "../../components/styles/DashBoard_Style";

const Admin_Collection = () => {
	const { data: listCollections, error, loading } = useQuery(LIST_COLLECTION);

	if (error) return <p>error...</p>;

	const collections = listCollections?.listCollections;

	const colHeaders =
		collections?.length > 0 ? Object.keys(collections[0]).slice(1) : false;

	return (
		<AdminLayout>
			<Dash_HeaderStyle className="admin_display_head_left">
				Collections
			</Dash_HeaderStyle>

			<Search_RComp className="admin_display_controls_left" />
			<p className="admin_display_controls_right">Items per page</p>

			<div className="admin_display_content">
				{loading ? (
					<p>loading...</p>
				) : colHeaders ? (
					<Table colHeaders={colHeaders} data={collections} type="collection" />
				) : (
					<div>
						<h2>No Collections Added</h2>
					</div>
				)}
			</div>

			<Dash_FooterStyle className="admin_display_footer">
				PAGES
			</Dash_FooterStyle>

			<CollectionAdd />
		</AdminLayout>
	);
};
export default Admin_Collection;
