import { useParams } from "react-router-dom";
import AuthWrapper from "../components/AuthWrapper";

export default function Product() {
  const { id } = useParams();

  return (
    <AuthWrapper>
      <div>
        <h1>Product Details</h1>
        <p>Showing details for product with ID: {id}</p>
      </div>
    </AuthWrapper>
  );
}
