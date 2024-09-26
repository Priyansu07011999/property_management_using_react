import villa1 from '../assets/villa1.jpg';
import villa2 from '../assets/villa2.jpg';
import villa3 from '../assets/villa3.jpg';
import villa4 from '../assets/villa4.jpeg';
import villa5 from '../assets/villa5.jpeg';
import villa6 from '../assets/villa6.jpg';
import villa7 from '../assets/villa7.jpeg';
import villa8 from '../assets/villa18.jpeg';
import villa9 from '../assets/villa9.jpeg';
import villa10 from '../assets/villa10.jpeg';
import villa11 from '../assets/villa11.jpeg';
import villa12 from '../assets/villa12.jpeg';
import villa13 from '../assets/villa13.jpg';
import villa14 from '../assets/villla14.jpg';
import villa15 from '../assets/villa15.jpg';
import villa16 from '../assets/villa16.jpg';
import villa17 from '../assets/villa17.jpg';
import villa18 from '../assets/villa18.jpeg';
import villa19 from '../assets/villa19.jpg';
import villa20 from '../assets/villa20.jpg';
import villa21 from '../assets/villa21.jpg';

const properties = [
    {
        id: 1,
        title: "Luxurious Villa in Namsara Hills",
        bedrooms: 5,
        location: "Odisha, India",
        img: villa1,
        amount: 4500000000, // 45 Cr
        description: "A stunning villa with panoramic views, offering 5 bedrooms, a pool, and modern amenities."
    },
    {
        id: 2,
        title: "Modern Apartment in Mumbai",
        bedrooms: 2,
        location: "Maharashtra, India",
        img: villa2,
        amount: 1200000000, // 12 Cr
        description: "This sleek apartment features 2 bedrooms, floor-to-ceiling windows, and is located in the vibrant area of Mumbai."
    },
    {
        id: 3,
        title: "Cozy Cottage in the Countryside",
        bedrooms: 3,
        location: "Himachal Pradesh, India",
        img: villa3,
        amount: 650000000, // 6.5 Cr
        description: "Escape to nature in this quaint 3-bedroom cottage with a beautiful garden and rustic charm."
    },
    {
        id: 4,
        title: "Beachfront Condo in Goa",
        bedrooms: 3,
        location: "Goa, India",
        img: villa4,
        amount: 2500000000, // 25 Cr
        description: "A luxurious 3-bedroom condo offering breathtaking ocean views, direct beach access, and modern amenities."
    },
    {
        id: 5,
        title: "Penthouse Suite in Delhi",
        bedrooms: 4,
        location: "Delhi, India",
        img: villa5,
        amount: 980000000, // 9.8 Cr
        description: "An opulent penthouse with 4 bedrooms, a private pool, and a skyline view of Delhi, perfect for those who seek the best."
    },
    {
        id: 6,
        title: "Suburban Family Home in Odisha",
        bedrooms: 4,
        location: "Odisha, India",
        img: villa6,
        amount: 450000000, // 4.5 Cr
        description: "A spacious 4-bedroom home in a family-friendly neighborhood, featuring a large backyard and modern interiors."
    },
    {
        id: 7,
        title: "Mountain Retreat in Uttarakhand",
        bedrooms: 3,
        location: "Uttarakhand, India",
        img: villa7,
        amount: 850000000, // 8.5 Cr
        description: "Nestled in the mountains, this 3-bedroom retreat is perfect for nature lovers, offering stunning views and cozy interiors."
    },
    {
        id: 8,
        title: "Downtown Loft in Bengaluru",
        bedrooms: 2,
        location: "Karnataka, India",
        img: villa8,
        amount: 1750000000, // 17.5 Cr
        description: "A modern loft with industrial design, offering 2 bedrooms and located in the heart of downtown Bengaluru."
    },
    {
        id: 9,
        title: "Chic Townhouse in Jaipur",
        bedrooms: 3,
        location: "Jaipur, India",
        img: villa9,
        amount: 2600000000, // 26 Cr
        description: "A stylish 3-bedroom townhouse located in a prestigious area of Jaipur, with easy access to the city's top attractions."
    },
    {
        id: 10,
        title: "Historical Mansion in Kolkata",
        bedrooms: 6,
        location: "Kolkata, India",
        img: villa10,
        amount: 7000000000, // 70 Cr
        description: "A grand historical mansion with 6 bedrooms, featuring classic architecture and located in the heart of Kolkata."
    },
    {
        id: 11,
        title: "Luxury Chalet in Shimla",
        bedrooms: 4,
        location: "Shimla, India",
        img: villa11,
        amount: 5200000000, // 52 Cr
        description: "This luxury chalet offers 4 bedrooms, a private spa, and incredible views of the mountains. Perfect for winter getaways."
    },
    {
        id: 12,
        title: "Eco-Friendly Home in Pune",
        bedrooms: 3,
        location: "Maharashtra, India",
        img: villa12,
        amount: 950000000, // 9.5 Cr
        description: "An eco-friendly 3-bedroom home with solar panels, energy-efficient features, and a beautifully landscaped garden."
    },
    {
        id: 13,
        title: "Cliffside Mansion in Maharashtra",
        bedrooms: 7,
        location: "Maharashtra, India",
        img: villa13,
        amount: 1000000000, // 10 Cr
        description: "An expansive cliffside mansion with panoramic views, offering 7 bedrooms, a private beach, and a spacious outdoor area."
    },
    {
        id: 14,
        title: "Urban Studio in Noida",
        bedrooms: 1,
        location: "Noida, India",
        img: villa14,
        amount: 900000000, // 9 Cr
        description: "A modern, compact studio apartment in Noida, offering high-end amenities and excellent city views."
    },
    {
        id: 15,
        title: "Palatial Estate near Mumbai",
        bedrooms: 8,
        location: "Maharashtra, India",
        img: villa15,
        amount: 6500000000, // 65 Cr
        description: "A magnificent 8-bedroom estate with lush gardens, a pool, and extensive living space, located on the outskirts of Mumbai."
    },
    {
        id: 16,
        title: "Minimalist Home in Chennai",
        bedrooms: 4,
        location: "Tamilnadu, India",
        img: villa16,
        amount: 1800000000, // 18 Cr
        description: "A modern minimalist home with 4 bedrooms, open floor plans, and a focus on clean lines and simplicity in design."
    },
    {
        id: 17,
        title: "Secluded Ranch in Madhya Pradesh",
        bedrooms: 5,
        location: "Madhya Pradesh, India",
        img: villa17,
        amount: 2900000000, // 29 Cr
        description: "This 5-bedroom ranch offers vast open spaces, stunning views, and plenty of privacy for those looking to escape city life."
    },
    {
        id: 18,
        title: "Tropical Villa in Kerala",
        bedrooms: 4,
        location: "Kerala, India",
        img: villa18,
        amount: 3100000000, // 31 Cr
        description: "A tropical paradise, this 4-bedroom villa features lush gardens, an infinity pool, and is located close to Kerala’s famous beaches."
    },
    {
        id: 19,
        title: "Mediterranean Villa in Goa",
        bedrooms: 5,
        location: "Goa, India",
        img: villa19,
        amount: 3700000000, // 37 Cr
        description: "This beautiful villa, located in Goa, offers 5 bedrooms, a pool, and stunning views of the ocean."
    },
    {
        id: 20,
        title: "Skyscraper Apartment in Hyderabad",
        bedrooms: 3,
        location: "Telegana, India",
        img: villa20,
        amount: 6500000000, // 65 Cr
        description: "A luxurious high-rise apartment with 3 bedrooms, located in a prestigious building offering panoramic city views."
    },
    {
        id: 21,
        title: "Imaginarto Apartment in Mumbai",
        bedrooms: 3,
        location: "Maharashtra, India",
        img: villa21,
        amount: 6500000000, // 65 Cr
        description: "A luxurious high-rise apartment with 3 bedrooms, located in a prestigious building offering panoramic city views."
    }
];

export default properties;
