import { BASE_API_URL } from "../../utils/constants";
import Mainpage from "./components/home";
export default function Home() {
  if (!BASE_API_URL) {
    return null;
  }
  return (
    <>
      <Mainpage />
    </>
  );
}
