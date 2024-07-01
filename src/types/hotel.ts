export interface HotelType {
    id: number,
    name: string,
    location: string,
    description: string,
    imageSrc: string,
    rate: string,
    reviews: string | number,
    guests: number,
    rooms: number,
    price: string | number
}