import type {HotelType} from "@/types/hotel";
import hotel1Image from "@/assets/hotels/hotel-1.jpg";
import hotel2Image from "@/assets/hotels/hotel-2.jpg";
import hotel3Image from "@/assets/hotels/hotel-3.jpg";
import hotel4Image from "@/assets/hotels/hotel-4.webp";
import hotel5Image from "@/assets/hotels/hotel-5.jpg";
import hotel6Image from "@/assets/hotels/hotel-6.jpg";
import hotel7Image from "@/assets/hotels/hotel-7.jpg";

import hotel8Image from "@/assets/hotels/hotel-1.jpg";
import hotel9Image from "@/assets/hotels/hotel-2.jpg";
import hotel10Image from "@/assets/hotels/hotel-3.jpg";
import hotel11Image from "@/assets/hotels/hotel-4.webp";
import hotel12Image from "@/assets/hotels/hotel-5.jpg";
import hotel13Image from "@/assets/hotels/hotel-6.jpg";
import hotel14Image from "@/assets/hotels/hotel-7.jpg";

import hotel15Image from "@/assets/hotels/hotel-1.jpg";
import hotel16Image from "@/assets/hotels/hotel-2.jpg";
import hotel17Image from "@/assets/hotels/hotel-3.jpg";
import hotel18Image from "@/assets/hotels/hotel-4.webp";
import hotel19Image from "@/assets/hotels/hotel-5.jpg";
import hotel20Image from "@/assets/hotels/hotel-6.jpg";

const hotelsList: Array<HotelType> = [
    {
        id: 1,
        name: 'Montmartre Majesty Hotel',
        location: 'Aspen, USA',
        imageSrc: hotel1Image,
        rate: '4.7',
        reviews: '2,578',
        guests: 10,
        rooms: 24,
        price: 'R$ 1600,00',
        description: 'Um hotel majestoso em Aspen, oferecendo vistas deslumbrantes das montanhas e serviços de luxo.'
    },
    {
        id: 2,
        name: 'Oceanview Paradise Resort',
        location: 'Malibu, USA',
        imageSrc: hotel2Image,
        rate: '4.5',
        reviews: '1,823',
        guests: 4,
        rooms: 26,
        price: 'R$ 2199,99',
        description: 'Resort paradisíaco em Malibu, com vistas espetaculares para o oceano e amenidades exclusivas.'
    },
    {
        id: 3,
        name: 'Royal Garden Hotel',
        location: 'London, UK',
        imageSrc: hotel3Image,
        rate: '4.6',
        reviews: '3,102',
        guests: 10,
        rooms: 4,
        price: 'R$ 3199,99',
        description: 'Hotel elegante em Londres, conhecido por seus belos jardins e serviços de primeira classe.'
    },
    {
        id: 4,
        name: 'Eternal Sunshine Inn',
        location: 'Santorini, Greece',
        imageSrc: hotel4Image,
        rate: '4.8',
        reviews: '2,410',
        guests: 3,
        rooms: 5,
        price: 'R$ 800,00',
        description: 'Pousada encantadora em Santorini, com vistas incríveis do pôr do sol e hospitalidade acolhedora.'
    },
    {
        id: 5,
        name: 'Desert Oasis Hotel',
        location: 'Dubai, UAE',
        imageSrc: hotel5Image,
        rate: '4.9',
        reviews: '3,876',
        guests: 8,
        rooms: 34,
        price: 'R$ 300,00',
        description: 'Hotel de luxo em Dubai, um verdadeiro oásis no deserto com comodidades de alta classe.'
    },
    {
        id: 6,
        name: 'Mountain Retreat Lodge',
        location: 'Aspen, USA',
        imageSrc: hotel6Image,
        rate: '4.4',
        reviews: '1,954',
        guests: 55,
        rooms: 2,
        price: 'R$ 400,00',
        description: 'Lodge acolhedor em Aspen, ideal para retiros na montanha e atividades ao ar livre.'
    },
    {
        id: 7,
        name: 'Urban Chic Boutique Hotel',
        location: 'New York, USA',
        imageSrc: hotel7Image,
        rate: '4.7',
        reviews: '4,112',
        guests: 55,
        rooms: 48,
        price: 'R$ 275,00',
        description: 'Hotel boutique moderno em Nova York, perfeito para quem busca elegância urbana e conforto.'
    },
    {
        id: 8,
        name: 'Sunny Beach Hotel',
        location: 'Miami, USA',
        imageSrc: hotel8Image,
        rate: '4.6',
        reviews: '2,789',
        guests: 30,
        rooms: 20,
        price: 'R$ 1200,00',
        description: 'Hotel à beira-mar em Miami, ideal para férias ensolaradas com toda a família.'
    },
    {
        id: 9,
        name: 'Snowy Peaks Resort',
        location: 'Whistler, Canada',
        imageSrc: hotel9Image,
        rate: '4.8',
        reviews: '3,200',
        guests: 15,
        rooms: 10,
        price: 'R$ 2000,00',
        description: 'Resort luxuoso em Whistler, perfeito para amantes de esqui e atividades de inverno.'
    },
    {
        id: 10,
        name: 'Tropical Paradise Hotel',
        location: 'Bora Bora, French Polynesia',
        imageSrc: hotel10Image,
        rate: '4.9',
        reviews: '1,500',
        guests: 20,
        rooms: 15,
        price: 'R$ 3500,00',
        description: 'Hotel paradisíaco em Bora Bora, oferecendo bangalôs sobre a água e vistas deslumbrantes.'
    },
    {
        id: 11,
        name: 'Metropolitan Hotel',
        location: 'Tokyo, Japan',
        imageSrc: hotel11Image,
        rate: '4.7',
        reviews: '4,000',
        guests: 100,
        rooms: 70,
        price: 'R$ 500,00',
        description: 'Hotel sofisticado em Tóquio, com uma mistura de tradição e modernidade.'
    },
    {
        id: 12,
        name: 'Island Getaway Resort',
        location: 'Maui, USA',
        imageSrc: hotel12Image,
        rate: '4.6',
        reviews: '2,850',
        guests: 50,
        rooms: 30,
        price: 'R$ 2500,00',
        description: 'Resort isolado em Maui, perfeito para uma escapada tranquila e relaxante.'
    },
    {
        id: 13,
        name: 'Historic Charm Hotel',
        location: 'Edinburgh, Scotland',
        imageSrc: hotel13Image,
        rate: '4.5',
        reviews: '3,100',
        guests: 12,
        rooms: 6,
        price: 'R$ 1800,00',
        description: 'Hotel encantador em Edimburgo, com uma atmosfera histórica e acomodações confortáveis.'
    },
    {
        id: 14,
        name: 'Safari Adventure Lodge',
        location: 'Serengeti, Tanzania',
        imageSrc: hotel14Image,
        rate: '4.8',
        reviews: '1,300',
        guests: 8,
        rooms: 8,
        price: 'R$ 2200,00',
        description: 'Lodge de aventura no Serengeti, ideal para explorar a vida selvagem africana.'
    },
    {
        id: 15,
        name: 'Cultural Heritage Hotel',
        location: 'Kyoto, Japan',
        imageSrc: hotel15Image,
        rate: '4.9',
        reviews: '3,400',
        guests: 20,
        rooms: 10,
        price: 'R$ 3200,00',
        description: 'Hotel em Kyoto, oferecendo uma experiência autêntica da cultura e tradição japonesa.'
    },
    {
        id: 16,
        name: 'Luxury Lakeside Hotel',
        location: 'Lake Como, Italy',
        imageSrc: hotel16Image,
        rate: '4.8',
        reviews: '2,500',
        guests: 15,
        rooms: 12,
        price: 'R$ 2900,00',
        description: 'Hotel de luxo à beira do Lago Como, com vistas panorâmicas e serviços exclusivos.'
    },
    {
        id: 17,
        name: 'Beachfront Bliss Resort',
        location: 'Phuket, Thailand',
        imageSrc: hotel17Image,
        rate: '4.7',
        reviews: '2,700',
        guests: 25,
        rooms: 20,
        price: 'R$ 1400,00',
        description: 'Resort à beira-mar em Phuket, perfeito para férias relaxantes com acesso direto à praia.'
    },
    {
        id: 18,
        name: 'Countryside Escape Inn',
        location: 'Tuscany, Italy',
        imageSrc: hotel18Image,
        rate: '4.6',
        reviews: '2,900',
        guests: 10,
        rooms: 5,
        price: 'R$ 1800,00',
        description: 'Pousada charmosa na Toscana, ideal para uma escapada tranquila no campo.'
    },
    {
        id: 19,
        name: 'Urban Luxury Suites',
        location: 'Berlin, Germany',
        imageSrc: hotel19Image,
        rate: '4.7',
        reviews: '3,000',
        guests: 30,
        rooms: 25,
        price: 'R$ 1300,00',
        description: 'Suítes luxuosas em Berlim, perfeitas para uma estadia confortável e sofisticada na cidade.'
    },
    {
        id: 20,
        name: 'Secluded Mountain Resort',
        location: 'Banff, Canada',
        imageSrc: hotel20Image,
        rate: '4.8',
        reviews: '2,300',
        guests: 10,
        rooms: 8,
        price: 'R$ 2400,00',
        description: 'Resort isolado em Banff, oferecendo um refúgio tranquilo nas montanhas.'
    },
];

export function getAllHotels(): Promise<Array<HotelType>>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(hotelsList)
        }, 2500)
    })
}

export function getHotelById(id: String): Promise<HotelType | null>{
    return new Promise((resolve) => {
        setTimeout(() => {
            const response = hotelsList.find(hotel => hotel.id.toString() === id) || null;
            resolve(response)
        }, 2500)
    })
}

export function getHotelsByName(name: String): Promise<Array<HotelType>>{
    return new Promise((resolve) => {
        setTimeout(() => {
            const response = hotelsList.filter(hotel => hotel.name.toLowerCase().includes(name.toLowerCase())) || null;
            resolve(response)
        }, 500)
    })
}
