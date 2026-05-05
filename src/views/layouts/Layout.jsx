import { Outlet } from "react-router";
import Background from "../../components/Background";
import CursorGlow from "../../components/Cursor-glow";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";


export default function Layout() {
  return (
    <main className="container-fluid layout ps-0">
      <Background />
      <CursorGlow />
      <section className="row layout__row">
        <article className="col-12 col-md-4 layout__sidebar">
          <Navbar />
        </article>
        <article className="col-12 col-md-8 layout__content">
          <Outlet />
        </article>
      </section>
      <Footer />
    </main>
  );
}
