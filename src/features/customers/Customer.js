import { useSelector } from "react-redux";
function Customer() {
  const customer = useSelector((store) => store.customer.fullName);
  const id = useSelector((store) => store.customer.nationalId);
  console.log(id);
  console.log(customer);
  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;
