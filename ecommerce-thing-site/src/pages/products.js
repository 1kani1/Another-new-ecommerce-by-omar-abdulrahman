
import '../app/globals.css';
import Image from 'next/image';
import Layout from "@/components/layout";

export default function Product()
{
    return(
        <Layout>

<div class="bg-gray-100">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
      <h2 class="text-2xl font-bold text-gray-900">Collections</h2>

      <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
        <div class="group relative">
          <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
          <Image src= "/japanese-techwear.webp" width = {200} height = {200} alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
          </div>
          <h3 class="mt-6 text-sm text-gray-500">
            <a href="#">
              <span class="absolute inset-0"></span>
              Japanese Only
            </a>
          </h3>
          <p class="text-base font-semibold text-gray-900">Tech-Wear</p>
        </div>
        <div class="group relative">
          <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
          <Image src= "/wallpaper.jpg" width = {200} height = {200} alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
          </div>
          <h3 class="mt-6 text-sm text-gray-500">
            <a href="#">
              <span class="absolute inset-0"></span>
              Egyptian Only
            </a>
          </h3>
          <p class="text-base font-semibold text-gray-900">Street-wear</p>
        </div>
        <div class="group relative">
          <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
          <Image src= "/techwear-kinowear-optimized-v2.jpg" width = {200} height = {200} alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
          </div>
          <h3 class="mt-6 text-sm text-gray-500">
            <a href="#">
              <span class="absolute inset-0"></span>
              Egyptian and Japanese thrifted Styles
            </a>
          </h3>
          <p class="text-base font-semibold text-gray-900">Street Tech wear</p>
        </div>
      </div>
    </div>
  </div>
</div>
        </Layout>
    );
}