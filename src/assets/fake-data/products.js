// all images imported from images directory

import phone1 from "../images/phone1.png";
import phone2 from "../images/phone2.png";
import phone3 from "../images/iphone3.png";
import phone4 from "../images/phone4.png";
import phone5 from "../images/phone5.png";
import phone6 from "../images/phone6.jpg";
import phone7 from "../images/phone7.jpg";
import phone8 from "../images/phone8.jpg";
import phone9 from "../images/phone9.jpg";
import laptop10 from "../images/laptop10.jpg";
import laptop11 from "../images/laptop11.jpg";
import laptop12 from "../images/laptop12.jpg";
import laptop13 from "../images/laptop13.jpg";
import laptop14 from "../images/laptop14.jpg";
import laptop15 from "../images/laptop15.jpg";
import laptop16 from "../images/laptop16.jpg";
import laptop17 from "../images/laptop17.jpg";
import watch18 from "../images/watch18.jpg";
import watch19 from "../images/watch19.jpg";
import watch20 from "../images/watch20.jpg";
import watch21 from "../images/watch21.jpg";
import watch22 from "../images/watch22.jpg";
import watch23jpg from "../images/watch23jpg.jpg";
import watch24jpg from "../images/watch24.jpg";
const products = [
  {
    id: 1,
    title: "Apple iPhone 7s",
    price: 660.0,
    category: "smartphone",
    desc: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
    image: phone1,
  },
  {
    id: 2,
    title: "Apple iPhone 6s",
    price: 299.0,
    category: "smartphone",
    desc: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
    image: phone2,
  },
  {
    id: 3,
    title: "Unlocked Mobile Phone",
    price: 125.0,
    category: "smartphone",
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    image: phone3,
  },
  {
    id: 4,
    title: "Metal Body Mobile",
    price: 160.0,
    category: "smartphone",
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    image: phone4,
  },
  {
    id: 5,
    title: "Zhndu Mobile",
    price: 160.0,
    category: "smartphone",
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    image: phone5,
  },
  {
    id: 6,
    title: "SAMSUNG Galaxy S22",
    price: 550.0,
    category: "smartphone",
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    image: phone6,
  },
  {
    id: 7,
    title: "Samsung Galaxy A03s",
    price: 450.0,
    category: "smartphone",
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    image: phone7,
  },
  {
    id: 8,
    title: "OnePlus 10 Pro",
    price: 250.0,
    category: "smartphone",
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    image: phone8,
  },

  {
    id: 9,
    title: "SAMSUNG Galaxy A54",
    price: 650.0,
    category: "smartphone",
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    image: phone9,
  },
  {
    id: 10,
    title: "WAICID Laptop",
    price: 650.0,
    category: "laptop",
    desc: "WAICID Laptop 15.6 Inch, 512GB SSD 12GB DDR4, Intel Celeron N5095(4M Cache, up to 2.9 GHz), Windows 11 Laptops Computer with USB Type-C, IPS FHD 1080P Display, 5G/2.4Ghz WiFi, 2*USB 3.0, Bluetooth 4.2",
    image: laptop10,
  },
  {
    id: 11,
    title: "Lenovo 2022",
    price: 775.0,
    category: "laptop",
    desc: "WAICID Laptop 15.6 Inch, 512GB SSD 12GB DDR4, Intel Celeron N5095(4M Cache, up to 2.9 GHz), Windows 11 Laptops Computer with USB Type-C, IPS FHD 1080P Display, 5G/2.4Ghz WiFi, 2*USB 3.0, Bluetooth 4.2",
    image: laptop11,
  },
  {
    id: 12,
    title: "ASUS Vivobook",
    price: 575.0,
    category: "laptop",
    desc: "WAICID Laptop 15.6 Inch, 512GB SSD 12GB DDR4, Intel Celeron N5095(4M Cache, up to 2.9 GHz), Windows 11 Laptops Computer with USB Type-C, IPS FHD 1080P Display, 5G/2.4Ghz WiFi, 2*USB 3.0, Bluetooth 4.2",
    image: laptop12,
  },
  {
    id: 13,
    title: "Gateway Newest",
    price: 440.0,
    category: "laptop",
    desc: "WAICID Laptop 15.6 Inch, 512GB SSD 12GB DDR4, Intel Celeron N5095(4M Cache, up to 2.9 GHz), Windows 11 Laptops Computer with USB Type-C, IPS FHD 1080P Display, 5G/2.4Ghz WiFi, 2*USB 3.0, Bluetooth 4.2",
    image: laptop13,
  },
  {
    id: 14,
    title: "HP",
    price: 440.0,
    category: "laptop",
    desc: "WAICID Laptop 15.6 Inch, 512GB SSD 12GB DDR4, Intel Celeron N5095(4M Cache, up to 2.9 GHz), Windows 11 Laptops Computer with USB Type-C, IPS FHD 1080P Display, 5G/2.4Ghz WiFi, 2*USB 3.0, Bluetooth 4.2",
    image: laptop14,
  },
  {
    id: 15,
    title: "HP",
    price: 700.0,
    category: "laptop",
    desc: "WAICID Laptop 15.6 Inch, 512GB SSD 12GB DDR4, Intel Celeron N5095(4M Cache, up to 2.9 GHz), Windows 11 Laptops Computer with USB Type-C, IPS FHD 1080P Display, 5G/2.4Ghz WiFi, 2*USB 3.0, Bluetooth 4.2",
    image: laptop15,
  },
  {
    id: 16,
    title: "HP",
    price: 500.0,
    category: "laptop",
    desc: "WAICID Laptop 15.6 Inch, 512GB SSD 12GB DDR4, Intel Celeron N5095(4M Cache, up to 2.9 GHz), Windows 11 Laptops Computer with USB Type-C, IPS FHD 1080P Display, 5G/2.4Ghz WiFi, 2*USB 3.0, Bluetooth 4.2",
    image: laptop16,
  },
  {
    id: 17,
    title: "ASUS ROG",
    price: 750.0,
    category: "laptop",
    desc: "WAICID Laptop 15.6 Inch, 512GB SSD 12GB DDR4, Intel Celeron N5095(4M Cache, up to 2.9 GHz), Windows 11 Laptops Computer with USB Type-C, IPS FHD 1080P Display, 5G/2.4Ghz WiFi, 2*USB 3.0, Bluetooth 4.2",
    image: laptop17,
  },
  {
    id: 18,
    title: "Smart Watch",
    price: 100.0,
    category: "watch",
    desc: "Smart Watch with Call Answer/Dial, 1.82' 46mm Big Face Smartwatch for Android & iPhones Compatible, Fitness Step Tracker w/Heart Rate, Sleep Monitor, Sp02, 23 Sports Mode Watches Gifts for Women Men",
    image: watch18,
  },
  {
    id: 19,
    title: "HENGTO Fitness",
    price: 150.0,
    category: "watch",
    desc: "Smart Watch with Call Answer/Dial, 1.82' 46mm Big Face Smartwatch for Android & iPhones Compatible, Fitness Step Tracker w/Heart Rate, Sleep Monitor, Sp02, 23 Sports Mode Watches Gifts for Women Men",
    image: watch19,
  },
  {
    id: 20,
    title: "Smart Watch",
    price: 170.0,
    category: "watch",
    desc: "Smart Watch with Call Answer/Dial, 1.82' 46mm Big Face Smartwatch for Android & iPhones Compatible, Fitness Step Tracker w/Heart Rate, Sleep Monitor, Sp02, 23 Sports Mode Watches Gifts for Women Men",
    image: watch20,
  },
  {
    id: 21,
    title: "Fossil",
    price: 88.0,
    category: "watch",
    desc: "Smart Watch with Call Answer/Dial, 1.82' 46mm Big Face Smartwatch for Android & iPhones Compatible, Fitness Step Tracker w/Heart Rate, Sleep Monitor, Sp02, 23 Sports Mode Watches Gifts for Women Men",
    image: watch21,
  },
  {
    id: 22,
    title: "PUREROYI",
    price: 99.0,
    category: "watch",
    desc: "Smart Watch with Call Answer/Dial, 1.82' 46mm Big Face Smartwatch for Android & iPhones Compatible, Fitness Step Tracker w/Heart Rate, Sleep Monitor, Sp02, 23 Sports Mode Watches Gifts for Women Men",
    image: watch22,
  },
  {
    id: 23,
    title: "OLEVS",
    price: 190.0,
    category: "watch",
    desc: "Smart Watch with Call Answer/Dial, 1.82' 46mm Big Face Smartwatch for Android & iPhones Compatible, Fitness Step Tracker w/Heart Rate, Sleep Monitor, Sp02, 23 Sports Mode Watches Gifts for Women Men",
    image: watch23jpg,
  },
  {
    id: 24,
    title: "Bulova",
    price: 200.0,
    category: "watch",
    desc: "Smart Watch with Call Answer/Dial, 1.82' 46mm Big Face Smartwatch for Android & iPhones Compatible, Fitness Step Tracker w/Heart Rate, Sleep Monitor, Sp02, 23 Sports Mode Watches Gifts for Women Men",
    image: watch24jpg,
  },
];

export default products;
