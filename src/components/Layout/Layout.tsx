import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

// Pass the child props
export default function Layout({ children }: any) {
  return (
    <div>
      {/* Attaching all file components */}
      <Header />
      {children}
      <Footer /> {/* Attach if necessary */}
    </div>
  );
}
