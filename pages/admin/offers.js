import { useQuery } from "@apollo/client";
import { LIST_OFFERS } from "../../components/helpers/list.js";
//main Components
import AdminLayout from "../../components/admin/AdminLayout.js";
import OfferAdd from "../../components/admin/Offer_Add_Update";
//sub components
import Search_RComp from "../../components/Reuse_Component/Search_RComp.js";
import Table from "../../components/TableDisplay/Table.js";
import {
	Dash_HeaderStyle,
	Dash_FooterStyle,
} from "../../components/styles/DashBoard_Style";

const Admin_Offer = () => {
	const { data, error, loading } = useQuery(LIST_OFFERS);

	if (error) return <p>error...</p>;

	console.log("data");
	const offers = data?.listOffers;

	console.log("LIST OF OFFERS", offers);

	const colHeaders =
		offers?.length > 0 ? Object.keys(offers[0]).slice(1) : false;

	return (
		<AdminLayout>
			<Dash_HeaderStyle className="admin_display_head_left">
				Offers
			</Dash_HeaderStyle>

			<Search_RComp className="admin_display_controls_left" />
			<p className="admin_display_controls_right">Items per page</p>

			<div className="admin_display_content">
				{loading ? (
					<p>loading...</p>
				) : colHeaders ? (
					<Table colHeaders={colHeaders} data={offers} type="offer" />
				) : (
					<div>
						<h2>No Offers Added</h2>
					</div>
				)}
			</div>

			<Dash_FooterStyle className="admin_display_footer">
				PAGES
			</Dash_FooterStyle>
			<OfferAdd />
		</AdminLayout>
	);
};
export default Admin_Offer;
