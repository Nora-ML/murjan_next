import { useQuery } from "@apollo/client";
import { LIST_OFFERS } from "../../components/helpers/list.js";
//main Components
import AdminLayout from "../../components/admin/AdminLayout.js";
import OfferAdd from "../../components/admin/Offer_Add_Update";
//sub components
import Search_RComp from "../../components/Reuse_Component/Search_RComp.js";
import Table from "../../components/TableDisplay/Table.js";

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
			<OfferAdd />
			<h1 className="admin_display_head_left">Offers</h1>

			<Search_RComp className="admin_display_controls_left" />
			<h2 className="admin_display_controls_right">Items per page</h2>

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

			<h2 className="admin_display_footer_left">footer 1</h2>
			<h2 className="admin_display_footer_right">footer2 </h2>
		</AdminLayout>
	);
};
export default Admin_Offer;
