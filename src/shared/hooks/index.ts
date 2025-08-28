import { useState, useEffect } from 'react';
import type { Product, Brand, BlogPost } from '../types';
import { api } from '../api';

// Хук для загрузки продуктов
export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const data = await api.getProducts();
        setProducts(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Ошибка загрузки продуктов');
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const toggleLike = async (productId: number) => {
    try {
      const updatedProduct = await api.toggleProductLike(productId);
      if (updatedProduct) {
        setProducts(prev => 
          prev.map(product => 
            product.id === productId ? updatedProduct : product
          )
        );
      }
    } catch (err) {
      console.error('Ошибка при изменении лайка:', err);
    }
  };

  return { products, loading, error, toggleLike };
}

// Хук для загрузки всех продуктов
export function useAllProducts(limit: number, offset: number) {
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAllProducts() {
      try {
        setLoading(true);
        const [data, total] = await api.getAllProducts(limit, offset);
        setProducts(data);
        setTotal(total);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Ошибка загрузки всех продуктов');
      } finally {
        setLoading(false);
      }
    }

    fetchAllProducts();
  }, []);

  const toggleLike = async (productId: number) => {
    try {
      const updatedProduct = await api.toggleProductLike(productId);
      if (updatedProduct) {
        setProducts(prev => 
          prev.map(product => 
            product.id === productId ? updatedProduct : product
          )
        );
      }
    } catch (err) {
      console.error('Ошибка при изменении лайка:', err);
    }
  };

  return { products, loading, error, toggleLike, total };
};

// Хук для загрузки брендов
export function useBrands() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBrands() {
      try {
        setLoading(true);
        const data = await api.getBrands();
        setBrands(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Ошибка загрузки брендов');
      } finally {
        setLoading(false);
      }
    }

    fetchBrands();
  }, []);

  return { brands, loading, error };
}

// Хук для загрузки блогов
export function useBlogPosts() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        setLoading(true);
        const data = await api.getBlogPosts();
        setBlogPosts(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Ошибка загрузки блогов');
      } finally {
        setLoading(false);
      }
    }

    fetchBlogPosts();
  }, []);

  return { blogPosts, loading, error };
}
