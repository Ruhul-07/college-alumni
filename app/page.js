import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import Navbar from "@/components/Navbar";
import OurResponsibility from "@/components/OurResponsibilty";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <OurResponsibility></OurResponsibility>
      <GallerySection></GallerySection>
      <Footer></Footer>
      <div>
        <footer className="footer footer-center bg-base-300 text-base-content p-4">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by
              ACME Industries Ltd
            </p>
          </aside>
        </footer>
      </div>
    </>
  );
}
