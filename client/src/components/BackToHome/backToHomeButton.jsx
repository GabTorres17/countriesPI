import { useNavigate } from "react-router-dom";

// const backToHome = () => {
//     const navigate = useNavigate();

//     const handlebackToHome = () => {
//         navigate("/countries")
//     }
// }
const backToHome = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/countries");
  };

  return handleBackToHome;
};

export default backToHome;