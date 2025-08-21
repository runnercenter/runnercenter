import type { BlogPost } from '../../shared/types';

interface BlogCardProps {
  blogPost: BlogPost;
  onClick?: (postId: number) => void;
}

export function BlogCard({ blogPost, onClick }: BlogCardProps) {
  const handleClick = () => {
    if (onClick) {
      onClick(blogPost.id);
    }
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={handleClick}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={blogPost.image}
          alt={blogPost.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 hover:text-blue-600 transition-colors">
          {blogPost.title}
        </h3>
        <div className="mt-3 flex items-center text-sm text-gray-500">
          <span>Читать далее</span>
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}
