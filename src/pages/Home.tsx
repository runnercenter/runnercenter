import { ProductCard } from '../entities/product';
import { BrandCard } from '../entities/brand';
import { BlogCard } from '../entities/blog';
import { Loading, ErrorMessage } from '../shared/ui';
import { Layout } from '../shared/ui/Layout';
import { GridContainer } from '../shared/ui/GridContainer';
import { useProducts, useBrands, useBlogPosts } from '../shared/hooks';

function Home() {
  const { products, loading: productsLoading, error: productsError, toggleLike } = useProducts();
  const { brands, loading: brandsLoading, error: brandsError } = useBrands();
  const { blogPosts, loading: blogLoading, error: blogError } = useBlogPosts();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 mb-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Runner Center</h1>
          <p className="text-xl md:text-2xl mb-6">Твой идеальный выбор спортивной обуви</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Посмотреть каталог
          </button>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Рекомендуемые товары</h2>
          <button className="text-blue-600 hover:text-blue-700 font-medium">
            Посмотреть все
          </button>
        </div>
        
        {productsLoading ? (
          <Loading className="py-12" />
        ) : productsError ? (
          <ErrorMessage message={productsError} />
        ) : (
          <GridContainer columns={4}>
            {products.slice(0, 4).map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onToggleLike={toggleLike}
              />
            ))}
          </GridContainer>
        )}
      </section>

      {/* Brands Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Популярные бренды</h2>
          <button className="text-blue-600 hover:text-blue-700 font-medium">
            Все бренды
          </button>
        </div>
        
        {brandsLoading ? (
          <Loading className="py-12" />
        ) : brandsError ? (
          <ErrorMessage message={brandsError} />
        ) : (
          <GridContainer columns={5}>
            {brands.map((brand) => (
              <BrandCard 
                key={brand.id} 
                brand={brand} 
                onClick={(brandId) => console.log('Выбран бренд:', brandId)}
              />
            ))}
          </GridContainer>
        )}
      </section>

      {/* Blog Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Последние статьи</h2>
          <button className="text-blue-600 hover:text-blue-700 font-medium">
            Все статьи
          </button>
        </div>
        
        {blogLoading ? (
          <Loading className="py-12" />
        ) : blogError ? (
          <ErrorMessage message={blogError} />
        ) : (
          <GridContainer columns={3}>
            {blogPosts.map((post) => (
              <BlogCard 
                key={post.id} 
                blogPost={post} 
                onClick={(postId) => console.log('Открыть статью:', postId)}
              />
            ))}
          </GridContainer>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="bg-white rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Подпишитесь на нашу рассылку
        </h2>
        <p className="text-gray-600 mb-6">
          Получайте уведомления о новых товарах и специальных предложениях
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Ваш email"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Подписаться
          </button>
        </div>
      </section>
    </Layout>
  );
}

export default Home;
