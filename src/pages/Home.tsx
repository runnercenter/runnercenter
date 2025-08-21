/*
import { ProductCard } from '../entities/product';
import { BrandCard } from '../entities/brand';
import { BlogCard } from '../entities/blog';
import { Loading, ErrorMessage } from '../shared/ui';
import { GridContainer } from '../shared/ui/GridContainer';
import { useProducts, useBrands, useBlogPosts } from '../shared/hooks';
*/
import { Layout } from '../shared/ui/Layout';

function Home() {
  /*
  const { products, loading: productsLoading, error: productsError, toggleLike } = useProducts();
  const { brands, loading: brandsLoading, error: brandsError } = useBrands();
  const { blogPosts, loading: blogLoading, error: blogError } = useBlogPosts();
  */
  return (
    <Layout>
      <div className="space-y-8">
        <h1 className="text-4xl font-bold text-center mb-12">Runner Center</h1>
        
        {/* Font Weight Examples */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Geologica Font Weight Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg shadow">
              <p className="font-thin text-lg">font-thin (100)</p>
              <p className="font-thin text-sm text-gray-600">Thin weight example</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <p className="font-extralight text-lg">font-extralight (200)</p>
              <p className="font-extralight text-sm text-gray-600">Extra light weight example</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <p className="font-light text-lg">font-light (300)</p>
              <p className="font-light text-sm text-gray-600">Light weight example</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <p className="font-normal text-lg">font-normal (400)</p>
              <p className="font-normal text-sm text-gray-600">Normal weight example</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <p className="font-medium text-lg">font-medium (500)</p>
              <p className="font-medium text-sm text-gray-600">Medium weight example</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <p className="font-semibold text-lg">font-semibold (600)</p>
              <p className="font-semibold text-sm text-gray-600">Semi-bold weight example</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <p className="font-bold text-lg">font-bold (700)</p>
              <p className="font-bold text-sm text-gray-600">Bold weight example</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <p className="font-extrabold text-lg">font-extrabold (800)</p>
              <p className="font-extrabold text-sm text-gray-600">Extra bold weight example</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <p className="font-black text-lg">font-black (900)</p>
              <p className="font-black text-sm text-gray-600">Black weight example</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
