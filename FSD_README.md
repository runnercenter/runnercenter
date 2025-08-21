# Runner Center - FSD Architecture

Этот проект использует архитектуру FSD (Feature-Sliced Design) для организации кода.

## Структура проекта

```
src/
├── shared/           # Переиспользуемые компоненты и утилиты
│   ├── api/         # API методы и моки
│   ├── types/       # TypeScript типы
│   ├── hooks/       # React хуки
│   └── ui/          # UI компоненты (Layout, Loading, ErrorMessage)
├── entities/        # Бизнес-сущности
│   ├── product/     # Продукты (кроссовки)
│   ├── brand/       # Бренды
│   └── blog/        # Блог посты
├── widgets/         # Крупные компоненты UI
│   ├── Header.tsx
│   └── Footer.tsx
└── pages/           # Страницы приложения
    └── Home.tsx
```

## Описание сущностей

### Product (Продукт)
- `id`: уникальный идентификатор
- `name`: название кроссовок
- `image`: фотография товара
- `price`: основная цена
- `discountPrice?`: цена со скидкой (опционально)
- `discount?`: размер скидки в процентах (опционально)
- `isLiked`: добавлен ли товар в избранное

### Brand (Бренд)
- `id`: уникальный идентификатор
- `name`: название бренда
- `image`: логотип бренда

### BlogPost (Пост блога)
- `id`: уникальный идентификатор
- `title`: заголовок статьи
- `image`: изображение статьи

## API

Все данные загружаются через моковый API (`src/shared/api/index.ts`):

- `getProducts()` - получить все продукты
- `getBrands()` - получить все бренды
- `getBlogPosts()` - получить все посты блога
- `toggleProductLike(id)` - переключить лайк продукта

## Хуки

- `useProducts()` - хук для работы с продуктами
- `useBrands()` - хук для работы с брендами
- `useBlogPosts()` - хук для работы с постами блога

## Компоненты

### Shared UI
- `Layout` - основной макет с Header и Footer
- `Loading` - компонент загрузки
- `ErrorMessage` - компонент отображения ошибок

### Entity Components
- `ProductCard` - карточка продукта с возможностью лайка
- `BrandCard` - карточка бренда
- `BlogCard` - карточка поста блога

### Widgets
- `Header` - шапка сайта с навигацией
- `Footer` - подвал сайта с контактами и ссылками

## Запуск проекта

```bash
npm install
npm run dev
```

Приложение будет доступно по адресу: http://localhost:5173/runnercenter/

## Технологии

- React 19
- TypeScript
- Vite
- Tailwind CSS
- FSD Architecture
