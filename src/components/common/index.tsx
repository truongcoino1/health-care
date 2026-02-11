import Header from "./Header";
import Footer from "./Footer";
import GoToTop from "./GoToTop";

type Props = {
  children: React.ReactNode;
};
function Layout(props: Props) {
  return (
    <div className="w-full mx-auto relative">
      <Header />
      {props.children}
      <Footer />
      <GoToTop />
    </div>
  );
}

export default Layout;
