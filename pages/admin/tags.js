import { useQuery } from "@apollo/client";
import { LIST_TAGS } from "../../components/helpers/list.js";
//main Components
import AdminLayout from "../../components/admin/AdminLayout.js";
import TagAdd from "../../components/admin/Tag_Add_Update";
//sub components
import Search_RComp from "../../components/Reuse_Component/Search_RComp.js";
import Table from "../../components/TableDisplay/Table.js";
import {
	Dash_HeaderStyle,
	Dash_FooterStyle,
} from "../../components/styles/DashBoard_Style";

const Admin_Tag = () => {
	const { data: listTags, error, loading } = useQuery(LIST_TAGS);

	if (error) return <p>error...</p>;

	const tags = listTags?.listTags;

	const colHeaders = tags?.length > 0 ? Object.keys(tags[0]).slice(1) : false;

	return (
		<AdminLayout>
			<Dash_HeaderStyle className="admin_display_head_left">
				Tags
			</Dash_HeaderStyle>

			<Search_RComp className="admin_display_controls_left" />
			<p className="admin_display_controls_right">Items per page</p>

			<div className="admin_display_content">
				{loading ? (
					<p>loading...</p>
				) : colHeaders ? (
					<Table colHeaders={colHeaders} data={tags} type="tag" />
				) : (
					<div>
						<h2>No Tags Added</h2>
					</div>
				)}
			</div>

			<Dash_FooterStyle className="admin_display_footer">
				PAGES
			</Dash_FooterStyle>

			<TagAdd />
		</AdminLayout>
	);
};
export default Admin_Tag;
