import picture from '/public/Bred-1.avif';
import shadow from '/public/Shadow-1.avif';
import royal from '/public/Royal-1.avif';
import bred4 from '/public/Jordan-4-Bred.avif';
import blackcement3 from '/public/Black-Cement-3.avif';
import whitecement3 from '/public/whitecement3.avif';
const sneakers = [
    {
        name: 'Jordan 1 Retro High Bred Banned',
        id: 0,
        brand: 'Jordan',
        style: '555088-001',
        colorway: 'Black/Varsity Red-White',
        retailPrice: 160,
        releaseDate: '09/03/2016',
        resellPrice: 527,
        size: 10,
        stock: 1,
        image: picture,
        description: "The shoe that started it all. In 1985, Nike partnered with a young superstar in the making, Michael Jordan, and changed the game by releasing the Air Jordan, now known as the Air Jordan 1. It was rumored that this black and red colorway was banned by the NBA for violating the league's dress code, leading to the shoe's reputation as the banned Jordans. While this story was most likely a marketing move on Nike's part as it has never been confirmed, the legend of the Air Jordan 1 Bred lives on."
    },

    {
        name: 'Jordan 1 Retro Royal',
        id: 1,
        brand: 'Jordan',
        style: '555088-007',
        colorway: 'Black/Varsity Royal-White',
        retailPrice: 160,
        releaseDate: '04/01/2017',
        resellPrice: 348,
        size: 12.5,
        stock: 2,
        image: royal,
        description: 'The Jordan 1 Retro Royal (2017) is one of the original Air Jordan 1 colorways that debuted in 1985. It features a black and blue leather upper, with the deep black tones acting as the base of the silhouette and giving way to the vibrant blues of Varsity Royal on the overlays. From there, a black "Air Jordan" wings logo contrasts nicely with the Varsity Royal on the collar, and a matching blue Nike "Swoosh" on the side completes the design.'
    },

    {
        name: 'Jordan 1 Retro High Shadow',
        id: 2,
        brand: 'Jordan',
        style: '555088-013',
        colorway: 'Black/Medium Grey-White',
        retailPrice: 160,
        releaseDate: '04/14/2018',
        resellPrice: 329,
        size: 10.5,
        stock: 5,
        image: shadow,
        description: 'Despite the name, the Air Jordan 1 Shadows are a pair that will put any fit of yours firmly in the spotlight. This very rare OG colorway has now hit shelves only three times, making these a must-own for any AJ1 collector. The shoe features a black and grey leather upper with original "Nike Air" branding on the tongue tag and insoles, along with a white midsole and black outsole.'
    },

    {
        name: 'Jordan 4 Retro Bred',
        id: 3,
        brand: 'Jordan',
        style: '308497-060',
        colorway: 'Black/Fire Red-Cement Grey-Summit White',
        retailPrice: 200,
        releaseDate: '05/04/2019',
        resellPrice: 450,
        size: 9.5,
        stock: 5,
        image: bred4,
        description: 'Looking for a classic sneaker to add to your collection? Then you need to buy the latest and greatest Jordan 4 Retro Bred (2019). This AJ 4, also known as "Black Cement 4," comes with a black upper plus grey accents, white midsole plus black, white and grey accents, and a red sole. These sneakers released in May 2019 and retailed for $200. Thrive in one of Jordan’s most iconic sneakers ever, so make sure you have a pair of your own.'
    },

    {
        name: 'Jordan 3 Retro Black Cement',
        id: 4,
        brand: 'Jordan',
        style: '854262-001',
        colorway: 'Black/Fire Red-Cement Grey-White',
        retailPrice: 200,
        releaseDate: '02/17/2018',
        resellPrice: 391,
        size: 12,
        image: blackcement3,
        description: "One of the most anticipated releases of 2018, the Air Jordan 3 Retro OG marked the first time original 'Nike Air' branding was featured on the 'Black Cement' AJ 3 since it's 2001 retro. Jordan stuck to the mantra of 'if it aint broke, don’t fix it,' on these, staying true to the OG with a black-based leather upper with cement grey, fire red, and white accents, finished off by the iconic elephant print detailing. Their release date was on Michael Jordan's 55th birthday, February 17th, 2018, and went for $200 in mens sizes. The 'Black Cement' Air Jordan 3 Retro OG is a must-have, and you don't need us to tell you that. They should be in everyone's collection, multiples if possible."
    },

    {
        name: 'Jordan 3 Retro White Cement',
        id: 5,
        brand: 'Jordan',
        style: '136064-105',
        colorway: 'White/Cement Grey-Fire Red',
        retailPrice: 150,
        releaseDate: '01/22/2011',
        resellPrice: 400,
        size: 8.5,
        image: whitecement3,
        description: "The Nike Air Jordan III Retro White/Cement from 2011 was a long overdue release. By 2011, the White Cement Jordan III had sat in the vault at Nike since the 2003 release. Which meant, for most sneakerheads, you had already burned through at least a pair or two of the iconic Jordan 3 sneaker. This variation of the White Cement Jordan III Retro was the first time it became a problem that the 'Nike Air' wasn’t on the heel of the shoe. Purists might have been offish with the 2003 release but it became mainstream to complain about the Jumpman on the heel thanks to platforms like Twitter and Instagram. Outside of sneaker enthusiasts, however, it didn’t matter because the memories of the 1988 Dunk Contest, and MJ taking off from the free throw line still conjured up memories for Chicago Bulls and Michael Jordan fans. The 2011 Jordan III sold well initially, selling out in most places rather quickly but restocks meant getting your hands on a pair wasn’t impossible, especially considering the latte January release that meant plenty of holiday money burning a hole in the pockets of sneaker enthusiasts. In terms of quality and availability, the 2011 Air Jordan Retro 3 White Cement might be the lowest of all the original colorway Jordan 3s but it will always have a mass appeal that most sneakers will never have thanks to Michael Jordan."
    },

    {
        name: 'Jordan 3 Retro White Cement',
        id: 5,
        brand: 'Jordan',
        style: '136064-105',
        colorway: 'White/Cement Grey-Fire Red',
        retailPrice: 150,
        releaseDate: '01/22/2011',
        resellPrice: 400,
        size: 8.5,
        image: whitecement3,
        description: "The Nike Air Jordan III Retro White/Cement from 2011 was a long overdue release. By 2011, the White Cement Jordan III had sat in the vault at Nike since the 2003 release. Which meant, for most sneakerheads, you had already burned through at least a pair or two of the iconic Jordan 3 sneaker. This variation of the White Cement Jordan III Retro was the first time it became a problem that the 'Nike Air' wasn’t on the heel of the shoe. Purists might have been offish with the 2003 release but it became mainstream to complain about the Jumpman on the heel thanks to platforms like Twitter and Instagram. Outside of sneaker enthusiasts, however, it didn’t matter because the memories of the 1988 Dunk Contest, and MJ taking off from the free throw line still conjured up memories for Chicago Bulls and Michael Jordan fans. The 2011 Jordan III sold well initially, selling out in most places rather quickly but restocks meant getting your hands on a pair wasn’t impossible, especially considering the latte January release that meant plenty of holiday money burning a hole in the pockets of sneaker enthusiasts. In terms of quality and availability, the 2011 Air Jordan Retro 3 White Cement might be the lowest of all the original colorway Jordan 3s but it will always have a mass appeal that most sneakers will never have thanks to Michael Jordan."
    },
    
    {
        name: 'Jordan 3 Retro White Cement',
        id: 5,
        brand: 'Jordan',
        style: '136064-105',
        colorway: 'White/Cement Grey-Fire Red',
        retailPrice: 150,
        releaseDate: '01/22/2011',
        resellPrice: 400,
        size: 8.5,
        image: whitecement3,
        description: "The Nike Air Jordan III Retro White/Cement from 2011 was a long overdue release. By 2011, the White Cement Jordan III had sat in the vault at Nike since the 2003 release. Which meant, for most sneakerheads, you had already burned through at least a pair or two of the iconic Jordan 3 sneaker. This variation of the White Cement Jordan III Retro was the first time it became a problem that the 'Nike Air' wasn’t on the heel of the shoe. Purists might have been offish with the 2003 release but it became mainstream to complain about the Jumpman on the heel thanks to platforms like Twitter and Instagram. Outside of sneaker enthusiasts, however, it didn’t matter because the memories of the 1988 Dunk Contest, and MJ taking off from the free throw line still conjured up memories for Chicago Bulls and Michael Jordan fans. The 2011 Jordan III sold well initially, selling out in most places rather quickly but restocks meant getting your hands on a pair wasn’t impossible, especially considering the latte January release that meant plenty of holiday money burning a hole in the pockets of sneaker enthusiasts. In terms of quality and availability, the 2011 Air Jordan Retro 3 White Cement might be the lowest of all the original colorway Jordan 3s but it will always have a mass appeal that most sneakers will never have thanks to Michael Jordan."
    },    {
        name: 'Jordan 3 Retro White Cement',
        id: 5,
        brand: 'Jordan',
        style: '136064-105',
        colorway: 'White/Cement Grey-Fire Red',
        retailPrice: 150,
        releaseDate: '01/22/2011',
        resellPrice: 400,
        sizes: 8.5,
        image: whitecement3,
        description: "The Nike Air Jordan III Retro White/Cement from 2011 was a long overdue release. By 2011, the White Cement Jordan III had sat in the vault at Nike since the 2003 release. Which meant, for most sneakerheads, you had already burned through at least a pair or two of the iconic Jordan 3 sneaker. This variation of the White Cement Jordan III Retro was the first time it became a problem that the 'Nike Air' wasn’t on the heel of the shoe. Purists might have been offish with the 2003 release but it became mainstream to complain about the Jumpman on the heel thanks to platforms like Twitter and Instagram. Outside of sneaker enthusiasts, however, it didn’t matter because the memories of the 1988 Dunk Contest, and MJ taking off from the free throw line still conjured up memories for Chicago Bulls and Michael Jordan fans. The 2011 Jordan III sold well initially, selling out in most places rather quickly but restocks meant getting your hands on a pair wasn’t impossible, especially considering the latte January release that meant plenty of holiday money burning a hole in the pockets of sneaker enthusiasts. In terms of quality and availability, the 2011 Air Jordan Retro 3 White Cement might be the lowest of all the original colorway Jordan 3s but it will always have a mass appeal that most sneakers will never have thanks to Michael Jordan."
    },    {
        name: 'Jordan 3 Retro White Cement',
        id: 5,
        brand: 'Jordan',
        style: '136064-105',
        colorway: 'White/Cement Grey-Fire Red',
        retailPrice: 150,
        releaseDate: '01/22/2011',
        resellPrice: 400,
        sizes: 8.5,
        image: whitecement3,
        description: "The Nike Air Jordan III Retro White/Cement from 2011 was a long overdue release. By 2011, the White Cement Jordan III had sat in the vault at Nike since the 2003 release. Which meant, for most sneakerheads, you had already burned through at least a pair or two of the iconic Jordan 3 sneaker. This variation of the White Cement Jordan III Retro was the first time it became a problem that the 'Nike Air' wasn’t on the heel of the shoe. Purists might have been offish with the 2003 release but it became mainstream to complain about the Jumpman on the heel thanks to platforms like Twitter and Instagram. Outside of sneaker enthusiasts, however, it didn’t matter because the memories of the 1988 Dunk Contest, and MJ taking off from the free throw line still conjured up memories for Chicago Bulls and Michael Jordan fans. The 2011 Jordan III sold well initially, selling out in most places rather quickly but restocks meant getting your hands on a pair wasn’t impossible, especially considering the latte January release that meant plenty of holiday money burning a hole in the pockets of sneaker enthusiasts. In terms of quality and availability, the 2011 Air Jordan Retro 3 White Cement might be the lowest of all the original colorway Jordan 3s but it will always have a mass appeal that most sneakers will never have thanks to Michael Jordan."
    },    {
        name: 'Jordan 3 Retro White Cement',
        id: 5,
        brand: 'Jordan',
        style: '136064-105',
        colorway: 'White/Cement Grey-Fire Red',
        retailPrice: 150,
        releaseDate: '01/22/2011',
        resellPrice: 400,
        sizes: 8.5,
        image: whitecement3,
        description: "The Nike Air Jordan III Retro White/Cement from 2011 was a long overdue release. By 2011, the White Cement Jordan III had sat in the vault at Nike since the 2003 release. Which meant, for most sneakerheads, you had already burned through at least a pair or two of the iconic Jordan 3 sneaker. This variation of the White Cement Jordan III Retro was the first time it became a problem that the 'Nike Air' wasn’t on the heel of the shoe. Purists might have been offish with the 2003 release but it became mainstream to complain about the Jumpman on the heel thanks to platforms like Twitter and Instagram. Outside of sneaker enthusiasts, however, it didn’t matter because the memories of the 1988 Dunk Contest, and MJ taking off from the free throw line still conjured up memories for Chicago Bulls and Michael Jordan fans. The 2011 Jordan III sold well initially, selling out in most places rather quickly but restocks meant getting your hands on a pair wasn’t impossible, especially considering the latte January release that meant plenty of holiday money burning a hole in the pockets of sneaker enthusiasts. In terms of quality and availability, the 2011 Air Jordan Retro 3 White Cement might be the lowest of all the original colorway Jordan 3s but it will always have a mass appeal that most sneakers will never have thanks to Michael Jordan."
    },    {
        name: 'Jordan 3 Retro White Cement',
        id: 5,
        brand: 'Jordan',
        style: '136064-105',
        colorway: 'White/Cement Grey-Fire Red',
        retailPrice: 150,
        releaseDate: '01/22/2011',
        resellPrice: 400,
        sizes: 8.5,
        image: whitecement3,
        description: "The Nike Air Jordan III Retro White/Cement from 2011 was a long overdue release. By 2011, the White Cement Jordan III had sat in the vault at Nike since the 2003 release. Which meant, for most sneakerheads, you had already burned through at least a pair or two of the iconic Jordan 3 sneaker. This variation of the White Cement Jordan III Retro was the first time it became a problem that the 'Nike Air' wasn’t on the heel of the shoe. Purists might have been offish with the 2003 release but it became mainstream to complain about the Jumpman on the heel thanks to platforms like Twitter and Instagram. Outside of sneaker enthusiasts, however, it didn’t matter because the memories of the 1988 Dunk Contest, and MJ taking off from the free throw line still conjured up memories for Chicago Bulls and Michael Jordan fans. The 2011 Jordan III sold well initially, selling out in most places rather quickly but restocks meant getting your hands on a pair wasn’t impossible, especially considering the latte January release that meant plenty of holiday money burning a hole in the pockets of sneaker enthusiasts. In terms of quality and availability, the 2011 Air Jordan Retro 3 White Cement might be the lowest of all the original colorway Jordan 3s but it will always have a mass appeal that most sneakers will never have thanks to Michael Jordan."
    },
    
];

export default sneakers;