"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import CartBar from "./components/CartBar";

export default function Home() {
  const client = new QueryClient()
  
  return (
    <div id="root">
      <CartProvider>
        <Header/>
        <QueryClientProvider client={client}>
          <Main/>
        </QueryClientProvider>
        <CartBar/>
      </CartProvider>
      <Footer/>
    </div>
  );
}
