import { useParams } from "react-router-dom";

export default function User() {
  const { userId } = useParams();

  return (
    <div>
      <h1>User Details</h1>
      <p>Showing details for user with ID: {userId}</p>
    </div>
  );
}
