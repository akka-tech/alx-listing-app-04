export interface PropertyProps {
    id: string | number;
    rating: number;
    name: string;
    address: {
        city: string;
        country: string;
    };
    image: string;
    description: string;
    category: string[];
}