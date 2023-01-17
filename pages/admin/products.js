import { useQuery } from "@apollo/client";
import { LIST_PRODUCTS } from "../../components/helpers/list.js";
import { SEARCH_PRODUCTS } from "../../components/helpers/search.js";
// Server Side authorization
import { getCookie } from "../../components/helpers/auth.js";
import client from "../../setup/client.js";
import { AUTH_ADMIN } from "../../components/helpers/users";
//main Components
import AdminLayout from "../../components/admin/AdminLayout.js";
import ProductAdd from "../../components/admin/Product_Add_Update";
//sub components
//import Search_RComp from "../../components/Reuse_Component/Search_RComp.js";
import Table from "../../components/TableDisplay/Table.js";
// styles
import {
	Dash_HeaderStyle,
	Dash_FooterStyle,
} from "../../components/styles/DashBoard_Style";

const Admin_Product = ({ query }) => {
	console.log("Product Component query", query);

	const { term } = query;

	const { data, error, loading } = term
		? useQuery(SEARCH_PRODUCTS, { variables: { name: term } })
		: useQuery(LIST_PRODUCTS);

	if (error) return <p>error...</p>;

	const products = data && Object.values(data)[0];

	const colHeaders =
		products?.length > 0 ? Object.keys(products[0]).slice(1) : false;

	return (
		<AdminLayout>
			<Dash_HeaderStyle className="admin_display_head_left">
				Product
			</Dash_HeaderStyle>

			{/* <Search_RComp className="admin_display_controls_left" /> */}
			<p className="admin_display_controls_right">Items per page</p>

			<div className="admin_display_content">
				{loading ? (
					<p>loading...</p>
				) : colHeaders ? (
					<Table colHeaders={colHeaders} data={products} type="product" />
				) : (
					<div>
						<h2>No products Added</h2>{" "}
						<p>
							Please add a category and collection before adding your first
							product
						</p>
					</div>
				)}
			</div>

			<Dash_FooterStyle className="admin_display_footer">
				PAGES
			</Dash_FooterStyle>

			<ProductAdd />
		</AdminLayout>
	);
};

export default Admin_Product;
