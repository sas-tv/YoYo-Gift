// import { connectedDatabase, disconnectDatabase } from '../../../src/db';

// const giftList = [
//   {
//     name: 'Amazon 150',
//     image: '/assets/amazon.png',
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//     category: 'Ecommerce',
//     reviews: [
//       {
//         reviewer: 'Sayan Saha',
//         reviewDate: '01/10/2022',
//         review: 'This is a great product. Everyone should buy it'
//       }
//     ]
//   },
//   {
//     name: 'Amazon 500',
//     image: '/assets/amazon.png',
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//     category: 'Ecommerce',
//     reviews: []
//   },
//   {
//     name: 'Amazon 1000',
//     image: '/assets/amazon.png',
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//     category: 'Ecommerce',
//     reviews: [
//       {
//         reviewer: 'Sayan Saha',
//         reviewDate: '01/10/2022',
//         review: 'This is a great product. Everyone should buy it'
//       }
//     ]
//   },
//   {
//     name: 'Amazon 5000',
//     image: '/assets/amazon.png',
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//     category: 'Ecommerce',
//     reviews: [
//       {
//         reviewer: 'Sayan Saha',
//         reviewDate: '01/10/2022',
//         review: 'This is a great product. Everyone should buy it'
//       }
//     ]
//   },
//   {
//     name: 'Myntra 150',
//     image: '/assets/myntra.png',
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//     category: 'Ecommerce',
//     reviews: [
//       {
//         reviewer: 'Sayan Saha',
//         reviewDate: '01/10/2022',
//         review: 'This is a great product. Everyone should buy it'
//       }
//     ]
//   },
//   {
//     name: 'Myntra 750',
//     image: '/assets/myntra.png',
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//     category: 'Ecommerce',
//     reviews: [
//       {
//         reviewer: 'Sayan Saha',
//         reviewDate: '01/10/2022',
//         review: 'This is a great product. Everyone should buy it'
//       }
//     ]
//   },
//   {
//     name: 'Myntra 1500',
//     image: '/assets/myntra.png',
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//     category: 'Ecommerce',
//     reviews: [
//       {
//         reviewer: 'Sayan Saha',
//         reviewDate: '01/10/2022',
//         review: 'This is a great product. Everyone should buy it'
//       }
//     ]
//   },
//   {
//     name: 'Myntra 3000',
//     image: '/assets/myntra.png',
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//     category: 'Ecommerce',
//     reviews: [
//       {
//         reviewer: 'Sayan Saha',
//         reviewDate: '01/10/2022',
//         review: 'This is a great product. Everyone should buy it'
//       }
//     ]
//   },
//   {
//     name: 'Book My Show 250',
//     image: '/assets/bookmyshow.jpg',
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//     category: 'Entertainment',
//     reviews: [
//       {
//         reviewer: 'Sayan Saha',
//         reviewDate: '01/10/2022',
//         review: 'This is a great product. Everyone should buy it'
//       }
//     ]
//   },
//   {
//     name: 'Book My Show 500',
//     image: '/assets/bookmyshow.jpg',
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//     category: 'Entertainment',
//     reviews: [
//       {
//         reviewer: 'Sayan Saha',
//         reviewDate: '01/10/2022',
//         review: 'This is a great product. Everyone should buy it'
//       }
//     ]
//   },
//   {
//     name: 'Book My Show 1000',
//     image: '/assets/bookmyshow.jpg',
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//     category: 'Entertainment',
//     reviews: [
//       {
//         reviewer: 'Sayan Saha',
//         reviewDate: '01/10/2022',
//         review: 'This is a great product. Everyone should buy it'
//       }
//     ]
//   },
//   {
//     name: 'Book My Show 2000',
//     image: '/assets/bookmyshow.jpg',
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//     category: 'Entertainment',
//     reviews: [
//       {
//         reviewer: 'Sayan Saha',
//         reviewDate: '01/10/2022',
//         review: 'This is a great product. Everyone should buy it'
//       }
//     ]
//   },
//   {
//     name: 'Saavn 50',
//     image: '/assets/saavn.jpg',
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//     category: 'Entertainment',
//     reviews: [
//       {
//         reviewer: 'Sayan Saha',
//         reviewDate: '01/10/2022',
//         review: 'This is a great product. Everyone should buy it'
//       }
//     ]
//   },
//   {
//     name: 'Saavn 100',
//     image: '/assets/saavn.jpg',
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//     category: 'Entertainment',
//     reviews: [
//       {
//         reviewer: 'Sayan Saha',
//         reviewDate: '01/10/2022',
//         review: 'This is a great product. Everyone should buy it'
//       }
//     ]
//   },
//   {
//     name: 'Saavn 250',
//     image: '/assets/saavn.jpg',
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//     category: 'Entertainment',
//     reviews: [
//       {
//         reviewer: 'Sayan Saha',
//         reviewDate: '01/10/2022',
//         review: 'This is a great product. Everyone should buy it'
//       }
//     ]
//   },
//   {
//     name: 'Saavn 750',
//     image: '/assets/saavn.jpg',
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//     category: 'Entertainment',
//     reviews: [
//       {
//         reviewer: 'Sayan Saha',
//         reviewDate: '01/10/2022',
//         review: 'This is a great product. Everyone should buy it'
//       }
//     ]
//   },
//   {
//     name: 'Make My Trip 1000',
//     image: '/assets/makemytrip.png',
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//     category: 'Travel',
//     reviews: [
//       {
//         reviewer: 'Sayan Saha',
//         reviewDate: '01/10/2022',
//         review: 'This is a great product. Everyone should buy it'
//       }
//     ]
//   },
//   {
//     name: 'Make My Trip 2000',
//     image: '/assets/makemytrip.png',
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//     category: 'Travel',
//     reviews: [
//       {
//         reviewer: 'Sayan Saha',
//         reviewDate: '01/10/2022',
//         review: 'This is a great product. Everyone should buy it'
//       }
//     ]
//   },
//   {
//     name: 'Make My Trip 5000',
//     image: '/assets/makemytrip.png',
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//     category: 'Travel',
//     reviews: [
//       {
//         reviewer: 'Sayan Saha',
//         reviewDate: '01/10/2022',
//         review: 'This is a great product. Everyone should buy it'
//       }
//     ]
//   },
//   {
//     name: 'Make My Trip 10000',
//     image: '/assets/makemytrip.png',
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//     category: 'Travel',
//     reviews: [
//       {
//         reviewer: 'Sayan Saha',
//         reviewDate: '01/10/2022',
//         review: 'This is a great product. Everyone should buy it'
//       }
//     ]
//   },
//   {
//     name: 'Trip Advisor 100',
//     image: '/assets/tripadvisor.png',
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//     category: 'Travel',
//     reviews: [
//       {
//         reviewer: 'Sayan Saha',
//         reviewDate: '01/10/2022',
//         review: 'This is a great product. Everyone should buy it'
//       }
//     ]
//   },
//   {
//     name: 'Trip Advisor 500',
//     image: '/assets/tripadvisor.png',
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//     category: 'Travel',
//     reviews: [
//       {
//         reviewer: 'Sayan Saha',
//         reviewDate: '01/10/2022',
//         review: 'This is a great product. Everyone should buy it'
//       }
//     ]
//   },
//   {
//     name: 'Trip Advisor 1000',
//     image: '/assets/tripadvisor.png',
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//     category: 'Travel',
//     reviews: [
//       {
//         reviewer: 'Sayan Saha',
//         reviewDate: '01/10/2022',
//         review: 'This is a great product. Everyone should buy it'
//       }
//     ]
//   },
//   {
//     name: 'Trip Advisor 2000',
//     image: '/assets/tripadvisor.png',
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//     category: 'Travel',
//     reviews: [
//       {
//         reviewer: 'Sayan Saha',
//         reviewDate: '01/10/2022',
//         review: 'This is a great product. Everyone should buy it'
//       }
//     ]
//   },
//   {
//     name: 'Lakme 50',
//     image: '/assets/lakmesalon.png',
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//     category: 'Beauty',
//     reviews: [
//       {
//         reviewer: 'Sayan Saha',
//         reviewDate: '01/10/2022',
//         review: 'This is a great product. Everyone should buy it'
//       }
//     ]
//   },
//   {
//     name: 'Lakme 100',
//     image: '/assets/lakmesalon.png',
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//     category: 'Beauty',
//     reviews: [
//       {
//         reviewer: 'Sayan Saha',
//         reviewDate: '01/10/2022',
//         review: 'This is a great product. Everyone should buy it'
//       }
//     ]
//   },
//   {
//     name: 'Lakme 250',
//     image: '/assets/lakmesalon.png',
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//     category: 'Beauty',
//     reviews: [
//       {
//         reviewer: 'Sayan Saha',
//         reviewDate: '01/10/2022',
//         review: 'This is a great product. Everyone should buy it'
//       }
//     ]
//   },
//   {
//     name: 'Lakme 500',
//     image: '/assets/lakmesalon.png',
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//     category: 'Beauty',
//     reviews: [
//       {
//         reviewer: 'Sayan Saha',
//         reviewDate: '01/10/2022',
//         review: 'This is a great product. Everyone should buy it'
//       }
//     ]
//   },
//   {
//     name: 'VLCC 100',
//     image: '/assets/vlcc.jpg',
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//     category: 'Beauty',
//     reviews: [
//       {
//         reviewer: 'Sayan Saha',
//         reviewDate: '01/10/2022',
//         review: 'This is a great product. Everyone should buy it'
//       }
//     ]
//   },
//   {
//     name: 'VLCC 500',
//     image: '/assets/vlcc.jpg',
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//     category: 'Beauty',
//     reviews: [
//       {
//         reviewer: 'Sayan Saha',
//         reviewDate: '01/10/2022',
//         review: 'This is a great product. Everyone should buy it'
//       }
//     ]
//   },
//   {
//     name: 'VLCC 1000',
//     image: '/assets/vlcc.jpg',
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//     category: 'Beauty',
//     reviews: []
//   },
//   {
//     name: 'KFC 250',
//     image: '/assets/kfc.png',
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//     category: 'Food',
//     reviews: [
//       {
//         reviewer: 'Sayan Saha',
//         reviewDate: '01/10/2022',
//         review: 'This is a great product. Everyone should buy it'
//       }
//     ]
//   },
//   {
//     name: 'KFC 500',
//     image: '/assets/kfc.jpg',
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//     category: 'Food',
//     reviews: [
//       {
//         reviewer: 'Sayan Saha',
//         reviewDate: '01/10/2022',
//         review: 'This is a great product. Everyone should buy it'
//       }
//     ]
//   },
//   {
//     name: 'KFC 1000',
//     image: '/assets/kfc.jpg',
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//     category: 'Food',
//     reviews: [
//       {
//         reviewer: 'Sayan Saha',
//         reviewDate: '01/10/2022',
//         review: 'This is a great product. Everyone should buy it'
//       }
//     ]
//   },
//   {
//     name: 'KFC 2000',
//     image: '/assets/kfc.jpg',
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//     category: 'Food',
//     reviews: [
//       {
//         reviewer: 'Sayan Saha',
//         reviewDate: '01/10/2022',
//         review: 'This is a great product. Everyone should buy it'
//       }
//     ]
//   },
//   {
//     name: 'McDonald 100',
//     image: '/assets/mcdonalds.jpg',
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//     category: 'Food',
//     reviews: [
//       {
//         reviewer: 'Sayan Saha',
//         reviewDate: '01/10/2022',
//         review: 'This is a great product. Everyone should buy it'
//       }
//     ]
//   },
//   {
//     name: 'McDonald 500',
//     image: '/assets/mcdonalds.jpg',
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//     category: 'Food',
//     reviews: [
//       {
//         reviewer: 'Sayan Saha',
//         reviewDate: '01/10/2022',
//         review: 'This is a great product. Everyone should buy it'
//       }
//     ]
//   },
//   {
//     name: 'McDonald 1000',
//     image: '/assets/mcdonalds.jpg',
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//     category: 'Food',
//     reviews: [
//       {
//         reviewer: 'Sayan Saha',
//         reviewDate: '01/10/2022',
//         review: 'This is a great product. Everyone should buy it'
//       }
//     ]
//   },
//   {
//     name: 'McDonald 5000',
//     image: '/assets/mcdonalds.jpg',
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//     category: 'Food',
//     reviews: []
//   },
// ];

// /**
//  * Call this function once from any page, on page load i.e., useEffect
//  * Make sure you don't run this function more than once
//  * If you did and the collection got messed up, don't forget to delete it from MongoDb website and re-run again
//  * @param {*} req Parameter isn't useful, in this case
//  * @param {*} res Parameter isn't useful, in this case
//  */
// async function insertGiftListApiHandler(req, res) {
//   const client = await connectedDatabase();

//   await client.db().collection('Gifts').insertMany(giftList);

//   await disconnectDatabase();

//   res.status(200).json({
//     data: 'Cards inserted successfully'
//   });
// };

// export default insertGiftListApiHandler;