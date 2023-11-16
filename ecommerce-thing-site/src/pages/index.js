import Footer from "@/components/footer";
import Header from "@/components/header";
import '../app/globals.css'
import Image from "next/image";
import Layout from "@/components/layout";
import ProductCard from "@/components/productCard";
export default function Home()
{
    //header
    //content
    //footer

    return (
        <Layout>
        <div>
            <Header></Header>


<div class="bg-white">
  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 class="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

    <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <ProductCard price={200} color="blue" name="oversized jeans" image="/6.jpg"></ProductCard>
      <ProductCard price={200} color="dark blue air skull edition" name="oversized jeans" image="/BLACK-AIR-Skull-and-Star-Applique-Jeans-streetwear-techwear-5.webp"></ProductCard>
      <ProductCard price={200} color="blue" name="jeans" image="/6.jpg"></ProductCard>
      <ProductCard price={200} color="blue" name="jeans" image="/6.jpg"></ProductCard>
      

    </div>
  </div>
</div>

            <Footer></Footer>
        </div>
        </Layout>
    );
}