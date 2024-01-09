import InvoiceFormModal from "./InvoiceFormModal";

function AddInvoice(props) {
  return (
    <InvoiceFormModal
      open={props.open}
      onClose={props.onClose}
      name="Thêm hoá đơn"
      method="POST"
      invoice={null}
      reservationDetail={props.reservationDetail}
    />
  );
}

export default AddInvoice;
