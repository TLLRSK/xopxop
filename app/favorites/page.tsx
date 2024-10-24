import SectionTitle from "@/components/global/SectionTitle";
import ProductsGrid from "@/components/products/ProductsGrid";
import { fetchUserFavorites } from "@/utils/actions";

async function FavoritesPage() {
  const favorites = await fetchUserFavorites();
  if (favorites.length === 0) {
    return (
      <section className="min-h-[calc(100dvh-64px)] mt-[61px] flex items-center justify-center">
        <h2>You don't have any favorite product.</h2>
      </section>
    );
  }
 
  return (
    <section className="mt-[61px] overflow-x-hidden">
      <SectionTitle text="Favorites" />
      <ProductsGrid products={favorites.map((fav) => fav.product)} />
    </section>
  );
}

export default FavoritesPage;
