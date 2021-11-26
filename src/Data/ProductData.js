import { images } from '../Images';

export const ProductData = {
  cards: [
    {
      id: '1',
      name: 'Яблоко',
      price: 9,
      image: images.apple,
      alt: 'зелёное яблоко',
      description: 'Как свежий и сочный арбуз',
    },
    {
      id: '2',
      name: 'Яйцо',
      price: 79,
      image: images.egg,
      alt: 'куриное яйцо',
      description: 'Яйцо столовое свежее садовое',
    },
    {
      id: '3',
      name: 'Зубная паста',
      price: 112,
      image: images.toothpaste,
      alt: 'детская паста для чистки зубов',
      description:
        'В России одними из первых торговых марок зубной пасты были «Дентинъ» (1906—1914 гг.) и «Хлородонт» (1926 г.)',
    },
    // {
    //   id: '4',
    //   name: 'Хлеб',
    //   price: 52,
    //   image: images.bread,
    //   alt: 'хлеб столичный',
    //   description: 'Свежий хлеб',
    // },
    {
      id: '5',
      name: 'Шоколад',
      price: 48,
      image: images.chocolate,
      alt: 'шоколадка Алёнка',
      description:
        'Кондитерское изделие на основе масла какао, являющееся продуктом переработки какао-бобов — семян шоколадного дерева, богатых теобромином и кофеином.',
    },
    {
      id: '6',
      name: 'Молоко',
      price: 96,
      image: images.milk,
      alt: 'молоко пастеризованое',
      description:
        'Полидисперсная система, в которой все составные вещества находятся в тонкодисперсном состоянии, что обеспечивает молоку жидкую консистенцию.',
    },
  ],
};