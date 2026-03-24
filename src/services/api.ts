export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  }
  
  const API_BASE_URL = 'https://fakestoreapi.com';
  
  export const fetchProducts = async (): Promise<Product[]> => {
    try {
      const response = await fetch(`${API_BASE_URL}/products`);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      return response.json();
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  };
  
  export const fetchProductById = async (id: string): Promise<Product> => {
    try {
      const response = await fetch(`${API_BASE_URL}/products/${id}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch product with id ${id}`);
      }
      return response.json();
    } catch (error) {
      console.error(`Error fetching product ${id}:`, error);
      throw error;
    }
  };
  