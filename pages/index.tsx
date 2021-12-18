import Layout from "../components/Layout";
import SideBar from "../components/SideBar";

export default function Home() {
  return (
    <Layout showHome={true} showSideBar={true}>
      <p className="text-7xl">I'm Mikayla</p>
    </Layout>
  );
}
