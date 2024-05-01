export interface Iitem {
    id: number;
    image1: any;
    // image2: string;
    name: string;
    movie: string;
    description: string;
    price: number;
    rank: number;
    discount: boolean;
    stock: number;
    totalAddedToCart: number;
}


// type ItemType = {
//     id: number;
//     image1: string;
//     // image2: string;
//     name: string;
//     movie: string;
//     description: string;
//     price: number;
//     rank: number;
//     discount: boolean;
// }

// type AnimeItemType = ItemType & {published_date: "20/02/2002"}