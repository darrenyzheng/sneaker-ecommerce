const getImagePath = (sneakerName) => {
    return `/${sneakerName}.avif`;
}

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
        image: getImagePath('Jordan-1-Retro-High-Bred-Banned'),
        description: "The shoe that started it all. In 1985, Nike partnered with a young superstar in the making, Michael Jordan, and changed the game by releasing the Air Jordan, now known as the Air Jordan 1. It was rumored that this black and red colorway was banned by the NBA for violating the league's dress code, leading to the shoe's reputation as the banned Jordans."
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
        image: getImagePath('Jordan-1-Retro-Royal'),
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
        image: getImagePath('Jordan-1-Retro-High-Shadow'),
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
        image: getImagePath('Jordan-4-Retro-Bred'),
        description: 'Looking for a classic sneaker to add to your collection? Then you need to buy the latest and greatest Jordan 4 Retro Bred (2019). This AJ 4, also known as "Black Cement 4," comes with a black upper plus grey accents, white midsole plus black, white and grey accents, and a red sole. These sneakers released in May 2019 and retailed for $200. Thrive in one of Jordan’s most iconic sneakers ever, so make sure you have a pair of your own.'
    },

    {
        name: "Jordan 3 Retro Black Cement",
        id: 4,
        brand: "Jordan",
        style: "854262-001",
        colorway: "Black/Fire Red-Cement Grey-White",
        retailPrice: 200,
        releaseDate: "02/17/2018",
        resellPrice: 391,
        size: 12,
        image: getImagePath('Jordan-3-Retro-Black-Cement'),
        description: "One of the most anticipated releases of 2018, the Air Jordan 3 Retro OG marked the first time original 'Nike Air' branding was featured on the 'Black Cement' AJ 3 since it's 2001 retro. Jordan stuck to the mantra of 'if it aint broke, don’t fix it,' on these, staying true to the OG with a black-based leather upper with cement grey, fire red, and white accents, finished off by the iconic elephant print detailing. Their release date was on Michael Jordan's 55th birthday, February 17th, 2018, and went for $200 in mens sizes. The 'Black Cement' Air Jordan 3 Retro OG is a must-have, and you don't need us to tell you that. They should be in everyone's collection, multiples if possible.",
        stock: 7
    },
    {
        name: "Jordan 3 Retro White Cement",
        id: 5,
        brand: "Jordan",
        style: "136064-105",
        colorway: "White/Cement Grey-Fire Red",
        retailPrice: 150,
        releaseDate: "01/22/2011",
        resellPrice: 400,
        size: 8.5,
        image: getImagePath('Jordan-3-Retro-White-Cement'),
        description: "The Nike Air Jordan III Retro White/Cement from 2011 was a long overdue release. By 2011, the White Cement Jordan III had sat in the vault at Nike since the 2003 release. Which meant, for most sneakerheads, you had already burned through at least a pair or two of the iconic Jordan 3 sneaker. This variation of the White Cement Jordan III Retro was the first time it became a problem that the 'Nike Air' wasn’t on the heel of the shoe.",
        stock: 4
    },
    {
        name: "adidas Ultra Boost 2.0",
        id: 6,
        brand: "Adidas",
        style: "AQ5929",
        colorway: "White/White/White",
        retailPrice: 180,
        releaseDate: "04/29/2016",
        resellPrice: 270,
        size: 13,
        image: getImagePath('adidas-Ultra-Boost-2.0'),
        description: "The adidas Ultra Boost 2.0 in Triple White is touted by the company as 'the greatest running shoe ever.' The adidas Ultra Boost 2.0 Triple White is the successor to the original 2015 Ultra Boost, a new take on Boost tech for greater fit and comfort. The Triple White colorway on the Ultra Boost 2.0 gives it a singular look with monochrome laces, an upper, and soles. The Boost midsole works in tandem with the comfortable rubber outsole and a torsion bar for support. The adidas Ultra Boost 2.0 in Triple White released in April of 2016 and retailed for $180.",
        stock: 6
    },
    {
        name: "Jordan 11 Retro Space Jam",
        id: 7,
        brand: "Jordan",
        style: "378037-003",
        colorway: "Black/Dark Concord-White",
        retailPrice: 220,
        releaseDate: "12/10/2016",
        resellPrice: 331,
        size: 8,
        image: getImagePath('Jordan-11-Retro-Space-Jam'),
        description: "The Air Jordan 11 Space Jam has released twice since it first appeared on the feet of Michael Jordan in the 1995 NBA Playoffs. The 2016 Jordan 11 Space Jam marks the third time that this iconic shoe and immensely popular colorway hit retail shelves. The Black, Dark Concord and White colorway received the Space Jam nickname due to the product placement in Space Jam the movie that released in 1996. With 2016 being the 20th anniversary and the rumors of LeBron James playing a role, the Jordan 11 Space Jam captures the spotlight once again with a retro release.",
        stock: 8
    },
    {
        name: "Nike Air Force 1 Low",
        id: 8,
        brand: "Nike",
        style: "315122-111/CW2288-111",
        colorway: "White/White",
        retailPrice: 115,
        releaseDate: "12/09/2020",
        resellPrice: 77,
        size: 11,
        image: getImagePath('Nike-Air-Force-1-Low'),
        description: "The Nike Air Force 1 Low White ‘07 features an all-white leather upper with a perforated toe box and Swoosh overlays. A Nike heel embroidery and white sole completes the design. The Nike Air Force 1 Low White ‘07 originally released in 2007, but since it is an essential colorway to the brand, it consistently restocks.",
        stock: 5
    },
    {
        name: "Jordan 4 Retro Fear",
        id: 9,
        brand: "Jordan",
        style: "FQ8138-002",
        colorway: "Black/White/Anthracite/Black/Pure Platinum",
        retailPrice: 215,
        releaseDate: "02/25/2017",
        resellPrice: 186,
        size: 9,
        image: getImagePath('Jordan-4-Retro-Fear'),
        description: "The Jordan 4 Retro Fear (2024) marks the return of one of the most anticipated releases from the Fear Pack. Originally released in 2013, the Fear Pack was designed to explore Michael Jordan’s fear of failure and his drive to overcome it. The Jordan 4 Fear stood out from the pack with its sleek black, anthracite, and pure platinum color scheme, giving the iconic silhouette a bold, edgy look. The signature flight patch on the tongue, a hallmark of the Jordan 4, emphasizes the model’s connection to MJ’s legacy and impact both on and off the court.",
        stock: 3
    },
    {
        name: "adidas Yeezy Boost 350 V2 Zebra",
        id: 10,
        brand: "Yeezy",
        style: "CP9654",
        colorway: "White/Core Black/Red",
        retailPrice: 220,
        releaseDate: "12/09/2020",
        resellPrice: 195,
        size: 10,
        image: getImagePath('Adidas-Yeezy-Boost-350-V2-Zebra'),
        description: "Debuted in 2017, the adidas Yeezy Boost 350 V2 Zebra is known as one of the most renowned colorways in the Yeezy line. It features a white and black marbled Primeknit upper with a white side-stripe and red 'SPLY-350' text. At the base, a cushioned Boost sole provides comfort and support. The adidas Yeezy Boost 350 V2 Zebra released in February of 2017 and retailed for $220.",
        stock: 2
    },
    {
        name: "Nike Air Yeezy 2",
        id: 11,
        brand: "Yeezy",
        style: "508214-010",
        colorway: "Wolf Grey/Pure Platinum",
        retailPrice: 250,
        releaseDate: "06/09/2012",
        resellPrice: 3789,
        size: 10.5,
        image: getImagePath('Nike-Air-Yeezy-2'),
        description: "The Nike Air Yeezy 2 Pure Platinum is a famous sneaker that resulted from the collaboration between Nike and rapper/designer Kanye West. The Air Yeezy 2 is the second model in the Air Yeezy line, and it was released in 2012. The design incorporates various elements inspired by both athletic performance footwear and high-fashion aesthetics.",
        stock: 1
    },
    {
        name: "Jordan 1 Retro High Chicago",
        id: 12,
        brand: "Jordan",
        style: "DZ5485-612",
        colorway: "Varsity Red/Black-Sail-Muslin",
        retailPrice: 180,
        releaseDate: "11/19/2022",
        resellPrice: 222,
        size: 8,
        image: getImagePath('Jordan-1-Retro-High-Chicago'),
        description: "The original Air Jordan 1 Chicago colorway was first introduced in 1985 and has only been retroed a few times since. But 2022 is the year that the colorway returns with an added vintage look. Pre-yellowed accents and cracked leather uppers showcase a fabricated look of age and wear. The Air Jordan 1 Lost and Found Chicago released in November of 2022 for $180.",
        stock: 6
    },
    {
        name: "Jordan 5 Retro Olive",
        id: 13,
        brand: "Jordan",
        style: "DD0587-308",
        colorway: "Army Olive/Solar Orange",
        retailPrice: 210,
        releaseDate: "03/02/2024",
        resellPrice: 135,
        size: 9.5,
        image: getImagePath('Jordan-5-Retro-Olive'),
        description: "The Jordan 5 Retro Olive (2024) is an updated relaunch of the Jordan 5 Retro Olive that made its debut in 2006. The 2024 version features an upper made of Army Olive suede with mesh peeking through cutouts on the side panels. The plastic eyestays and laces also come in Army Olive. Splashes of Solar Orange provide contrast on the collar, the inside of the tongue, and the midsole.",
        stock: 8
    },
    {
        name: "Nike Kobe 5 Protro Year of the Mamba Eggplant",
        id: 14,
        brand: "Nike",
        style: "IB4481-500",
        colorway: "University Red/Black/Metallic Gold",
        retailPrice: 190,
        releaseDate: "01/09/2025",
        resellPrice: 189,
        size: 12,
        image: getImagePath('Nike-Kobe-5-Protro-Year-Of-The-Mamba-Eggplant'),
        description: "The Nike Kobe 5 Protro Year of the Mamba Eggplant celebrates Kobe Bryant's legacy with a design inspired by the elegance and wisdom of the snake in Chinese culture. Wrapped in a stunning metallic purple upper, the sneaker exudes power and poise, while black accents and a translucent outsole add layers of depth to its aesthetic. The iconic swoosh is accented by a golden snake that appears on the side of the upper, paying homage to Bryant's Mamba mentality both on and off the court.",
        stock: 3
    },
    {
        name: "Jordan 7 Retro Raptors",
        id: 15,
        brand: "Jordan",
        style: "304775-018",
        colorway: "Black/True Red-Dark Charcoal-Club Purple",
        retailPrice: 160,
        releaseDate: "09/01/2012",
        resellPrice: 333,
        size: 9,
        image: getImagePath('Jordan-7-Retro-Raptors'),
        description: "The Air Jordan 7 Retro Raptors 2012 is a 2012 retro-inspired release of the original Air Jordan 7 1992 colorway. The upper is constructed with Black nubuck accented by True Red and Club Purple hues similar to the Toronto Raptors team colors. True Red accents appear on the Jumpman logo on the ankle, the ‘23’ branding on the heel, midsole detailing, and the ‘Jordan’ branding on the tongue. Club Purple hues feature on the heel pull tab, midsole detailing, and sock liner.",
        stock: 6
    },
    {
        name: "Jordan 8 Retro Aqua",
        id: 16,
        brand: "Jordan",
        style: "305381-025",
        colorway: "Black/Bright Concord-Aqua Tone",
        retailPrice: 190,
        releaseDate: "11/27/2015",
        resellPrice: 297,
        size: 8,
        image: getImagePath('Jordan-8-Retro-Aqua'),
        description: "The Air Jordan 8 Retro Aqua 2015 was made available in three major color combinations; black, bright concord, as well as an aqua tone.This 2015 Air Jordan 8 is made of a durabuck upper that is black colored. The sneaker has a design that features anti-inversion cross straps, an AIR sole, an inner sleeve, as well as a polycarbonate torsion plate. This high-top shoe also boasts additional aqua and purple tones at the back end, and the base in an abstract pattern.",
        stock: 7
    },
    {
        name: "Jordan 5 Retro Moonlight",
        id: 17,
        brand: "Jordan",
        style: "CT4838-011",
        colorway: "Black/Cool Grey-White",
        retailPrice: 190,
        releaseDate: "09/25/2021",
        resellPrice: 230,
        size: 9,
        image: getImagePath('Jordan-5-Retro-Moonlight'),
        description: "The Air Jordan 5 Moonlight arrives looking identical to the original 2013 Jordan 5 Oreo. It features a black Durabuck upper with translucent netted inserts and grey embroidered Jumpman logos on the tongue. From there, a white midsole with black speckled shark teeth and an icy translucent sole brings a contrast to the monotone upper. The Air Jordan 5 Moonlight released in September of 2021 and retailed for $190.",
        stock: 8
    },
    {
        name: "Jordan 7 Retro Bordeaux",
        id: 18,
        brand: "Jordan",
        style: "304775-003",
        colorway: "Black/Light Graphite-Bordeaux",
        retailPrice: 150,
        releaseDate: "04/16/2011",
        resellPrice: 275,
        size: 12,
        image: getImagePath('Jordan-7-Retro-Bordeaux'),
        description: "The 'Air Jordan 7 Retro Bordeaux 2015' features a black and grey color scheme, complemented by a blue, green, yellow and bordeaux color palette, with an upper built from a nubuck material in alternating black and grey colors, this 'Retro Air Jordan 7' model has a midsole and an outsole both in a black color, the sneaker also has a darker midsole and the 'Nike Air' logo on the inside, AIR unit-soles complete the design by Nike, and was released on the 18th of July 2015, and initially was listed for a price of $190.",
        stock: 2
    },
    {
        name: "Nike Air Max 97 Silver Bullet",
        id: 19,
        brand: "Nike",
        style: "921826-001",
        colorway: "White/Metallic Silver-Red",
        retailPrice: 160,
        releaseDate: "06/30/2017",
        resellPrice: 490,
        size: 10.5,
        image: getImagePath('Nike-Air-Max-97-Silver-Bullet'),
        description: "First released in 1997, the Nike Air Max 97 was the first to feature a full-length air cushion unit. The design is inspired by the Japanese bullet trains, as evident from the sleek, futuristic appearance of the shoe. Released in its Silver Bullet colorway, the model features a white leather and mesh upper with metallic silver wave-like panels and red accents. This shoe returned in 2017 as part of its 20th anniversary celebration and remains a classic to this day.",
        stock: 4
    },

    {
        name: 'Jordan 6 Retro Black Infrared',
        id: 20,
        brand: 'Jordan',
        style: '384664-060',
        colorway: 'Black/Infrared',
        retailPrice: 200,
        releaseDate: '02/16/2019',
        resellPrice: 254,
        size: 9,
        image: getImagePath('Jordan-6-Retro-Black-Infrared'),
        description: "Make sure your head isn’t in the beam while trying to grab the Jordan 6 Retro Black Infrared (2019). This AJ6 come with a black upper, black midsole plus red accents, and a translucent sole. These sneakers released in February 2019 and retailed for $200.",
        stock: 4
    },
    {
        name: 'Jordan 4 Retro Wintered Loyal Blue',
        id: 21,
        brand: 'Jordan',
        style: 'CQ9597-401',
        colorway: 'Loyal Blue/White-Habanero Red-Black',
        retailPrice: 200,
        releaseDate: '12/21/2019',
        resellPrice: 276,
        size: 11,
        image: getImagePath('Jordan-4-Retro-Wintered-Loyal-Blue'),
        description: "Reminiscent of the extremely limited Eminem Encore 4, this release gives many of us the opportunity to own a blue toned Jordan 4 without having to spend more than the cost of a car. The difference between this winterized design and a traditional Jordan 4 lies in the material choices.",
        stock: 7
    },
    {
        name: 'Jordan 1 Grove Green',
        id: 22,
        brand: 'Jordan',
        style: '332550-300',
        colorway: 'Grove Green/Black-White',
        retailPrice: 150,
        releaseDate: '12/01/2016',
        resellPrice: 399,
        size: 12,
        image: getImagePath('Jordan-1-Retro-Grove-Green'),
        description: "The Jordan 1 Retro Grove Green is a part of the Jordan Retro series and comes in a Grove Green color with black and white accents. The Air Jordan 1 Retro Grove Green features a leather upper and has a perforated toebox that provides breathability and ventilation, keeping your feet cool and dry during intense physical activity.",
        stock: 3
    },
    {
        name: 'Jordan 4 Retro SB Pine Green',
        id: 23,
        brand: 'Jordan',
        style: 'DR5415-103',
        colorway: 'Sail/Pine Green/Neutral Grey/White',
        retailPrice: 225,
        releaseDate: '03/21/2023',
        resellPrice: 288,
        size: 11,
        image: getImagePath('Jordan-4-Retro-SB-Pine-Green'),
        description: "Nike SB’s collaboration with Jordan helps create the ultimate sneaker for the skatepark to the basketball court, with the release of the Jordan 4 Retro SB Pine Green. The Jordan 4 Retro SB Pine Green used a white leather upper with a Neutral Grey suede mudguard. The limited edition sneakers sit on top of a white and Pine Green midsole which is highlighted by a red air unit.",
        stock: 6
    },
    {
        name: 'Jordan 1 High Hyper Royal',
        id: 24,
        brand: 'Jordan',
        style: '555088-402',
        colorway: 'Hyper Royal/Light Smoke Grey-White',
        retailPrice: 170,
        releaseDate: '04/17/2021',
        resellPrice: 208,
        size: 9,
        image: getImagePath('Jordan-1-Retro-High-Hyper-Royal-Smoke-Grey'),
        description: "The Air Jordan 1 Retro High Hyper Royal features a white leather upper with fading blue suede overlays.The Swoosh and padded collar have neutral grey contrast accents, adding to the vintage-inspired aesthetic. A stitched Nike tongue tag and a Jordan Wings logo are branding elements on the lateral collar flap. The high-top shoe has encapsulated Nike Air units and is mounted on a regular AJ1 rubber cup sole.",
        stock: 9
    },
    {
        name: 'Jordan 11 Retro Playoffs Bred',
        id: 25,
        brand: 'Jordan',
        style: '378037-061',
        colorway: 'Black/White-Varsity Red',
        retailPrice: 220,
        releaseDate: '12/14/2019',
        resellPrice: 289,
        size: 11,
        image: getImagePath('Jordan-11-Retro-Playoffs-Bred'),
        description: 'These sneakers represent MJ’s comeback from retirement to win his fourth title with the Chicago Bulls and the 1996 Finals MVP. This is the fourth time this colorway has been retroed since its original debut. This Jordan 11 features a black upper with shiny patent leather overlays and red detailing.',
        stock: 2
    },
    {
        name: 'Jordan 4 Retro Fire Red',
        id: 26,
        brand: 'Jordan',
        style: 'DC7770-160',
        colorway: 'White/Black-Tech Grey-Fire Red',
        retailPrice: 200,
        releaseDate: '11/28/2020',
        resellPrice: 274,
        size: 12,
        image: getImagePath('Jordan-4-Retro-Fire-Red'),
        description: 'This release returns in its original form with "Nike Air" branded heels, making it the first time this colorway has retroed in this variation since its debut in 1989. This Jordan 4 consists of a white leather upper with black and Fire Red detailing. Rubber netted underlays, black heel tabs with "Nike Air" branding, and black with fire red midsoles completes this design.',
        stock: 5
    },
    {
        name: 'Jordan 5 Retro Raging Bull Red',
        id: 27,
        brand: 'Jordan',
        style: 'DD0587-600',
        colorway: 'Varsity Red/Black-White',
        retailPrice: 190,
        releaseDate: '04/10/2021',
        resellPrice: 205,
        size: 10,
        image: getImagePath('Jordan-5-Retro-Raging-Bull-Red'),
        description: 'The Air Jordan 5 Raging Bulls is a suede lover’s dream, bringing back the same look and feel from the 2009 version. The upper is composed entirely out of red suede, celebrating MJ’s tenure with the Chicago Bulls. From there, a red and black embroidered "23" appears on the lateral side of each shoe’s heel, highlighting Jordan’s quintessential jersey number. In usual Jordan 5 fashion, the upper part of the tongue is made of reflective materials with a contrasting black Jumpman logo.',
        stock: 8
    },
    {
        name: 'Jordan 11 Retro Concord',
        id: 28,
        brand: 'Jordan',
        style: '378037-100',
        colorway: 'White/Black-Concord',
        retailPrice: 220,
        releaseDate: '12/08/2018',
        resellPrice: 350,
        size: 11,
        image: getImagePath('Jordan-11-Retro-Concord'),
        description: "Jordan Brand is reaching harder than MJ on Space Jam for the sneaker of the year crown by releasing the Jordan 11 Retro Concord (2018). This Iconic Jordan 11 colorway is showcasing a white upper with black accents, white midsole, and a freezing cold translucent sole.",
        stock: 4
    },
    {
        name: 'Jordan 5 Retro Off-White Sail',
        id: 29,
        brand: 'Jordan',
        style: 'DH8565-100',
        colorway: 'Sail/Fire Red-Muslin-Black',
        retailPrice: 225,
        releaseDate: '10/29/2020',
        resellPrice: 286,
        size: 12,
        image: getImagePath('Jordan-5-Retro-Off-White-Sail'),
        description: "In signature fashion, Virgil has reimagined this classic silhouette in a way that embraces the importance of Nike Air technology. This Jordan 5 is comprised of a sail textile mesh upper with translucent netted panels and circular window inserts throughout the shoe. 3M reflective tongues, fire red Jordan branding, and an aged translucent outsole completes the design.",
        stock: 9
    },

    {
        name: 'Jordan 1 Retro High Pine Green Black',
        id: 30,
        brand: 'Jordan',
        style: '555088-030',
        colorway: 'Black/Pine Green-White-Gym Red',
        retailPrice: 170,
        releaseDate: '03/21/2023',
        resellPrice: 288,
        size: 11,
        image: getImagePath('Jordan-1-Retro-High-Pine-Green-Black'),
        description: "This colorway draws inspiration from the Jordan 1 Retro High Pine Green from 2019, only this time the entire upper features black and pine green hues. This Jordan 1 High is comprised of a black tumbled leather upper with green leather overlays. A Gym Red embroidered tongue tag, sail midsole, and pine green outsole completes this design.",
        stock: 3
    },
    {
        name: 'Jordan 6 Retro Travis Scott',
        id: 31,
        brand: 'Jordan',
        style: 'CN1084-200',
        colorway: 'Medium Olive/Black-Sail-University Red',
        retailPrice: 250,
        releaseDate: '10/11/2019',
        resellPrice: 320,
        size: 10,
        image: getImagePath('Jordan-6-Retro-Travis-Scott'),
        description: "This is the fourth Air Jordan silhouette that Cactus Jack has touched. This sneaker made its mainstream debut when Travis rocked them on stage during his Super Bowl LIII performance and the rest is history. This AJ 6 features an olive upper with black detailing and red contrasting accents on the tongue and lace locks.",
        stock: 7
    },
    {
        name: 'Jordan 4 Retro White Thunder',
        id: 32,
        brand: 'Jordan',
        style: 'FQ8213-001',
        colorway: 'Black/White/Black',
        retailPrice: 160,
        releaseDate: '08/24/2024',
        resellPrice: 180,
        size: 10,
        image: getImagePath('Jordan-4-Retro-White-Thunder'),
        description: "The Air Jordan 4 Retro White Thunder (GS) is a striking new release that pays homage to one of the most iconic colorways in Jordan Brand history. Inspired by the original Black and Yellow Thunder 4s, this grade school version brings a fresh take to the classic design. The upper features a predominantly black nubuck material, providing a sleek and bold look, while white accents create a sharp contrast.",
        stock: 2
    },
    {
        name: 'Nike SB Dunk High',
        id: 33,
        brand: 'Nike',
        style: '653599-400',
        colorway: 'Aqua/Chrome-Black',
        retailPrice: 108,
        releaseDate: '08/24/2024',
        resellPrice: 493,
        size: 12,
        image: getImagePath('Nike-SB-Dunk-High-Diamond-Supply-Co.'),
        description: "The Nike SB Dunk High Diamond Supply Co. Aqua Blue is a high-top sneaker featuring an aqua leather upper with black croc plastic skin overlays and a metallic Chrome Swoosh. Released in aqua and Chrome-Black colors, the shoe has a round toe, flat heel, and a rubber sole with a white midsole and black outsole. Made from cotton, rubber, and leather, it includes black lining, Tiffany SB laces, and the signature Chrome Swoosh on the side.",
        stock: 5
    },
    {
        name: 'Nike Flyknit Racer Oreo 2',
        id: 34,
        brand: 'Nike',
        style: '526628-012',
        colorway: 'Black/White',
        retailPrice: 150,
        releaseDate: '05/08/2015',
        resellPrice: 145,
        size: 8,
        image: getImagePath('Nike-Flyknit-Racer-Oreo-2'),
        description: "The Nike Flyknit Racer Oreo 2 is an innovative running shoe that features a white and black colorway, redesigned from the original Nike Flyknit Racer Oreo released in 2013. The shoe's upper is made from Flyknit material, offering targeted support, breathability, and stretch, with white Nike Swoosh branding, black Flywire cables, and a sock-like collar for a secure fit.",
        stock: 9
    },
    {
        name: 'Nike Kobe 5 Protro X-Ray',
        id: 35,
        brand: 'Nike',
        style: 'FQ8213-001',
        colorway: 'Deep Royal Blue/Baltic Blue/Glacier Blue',
        retailPrice: 190,
        releaseDate: '10/17/2024',
        resellPrice: 212,
        size: 10,
        image: getImagePath('Nike-Kobe-5-Protro-X-Ray'),
        description: "The Nike Kobe 5 Protro X-Ray, released on October 17, 2024, is a vibrant homage to Kobe Bryant's legendary career, inspired by the iconic X-ray T-shirt featuring his hand adorned with five championship rings. The sneaker reimagines this concept with an X-ray design on the upper, showcasing a foot with glow-in-the-dark elements, and is done in deep royal blue, baltic blue, and glacier blue.",
        stock: 4
    },
    {
        name: 'Nike Kobe 6 Protro Reverse Grinch',
        id: 36,
        brand: 'Nike',
        style: 'HJ4303-400',
        colorway: 'Bright Crimson/Black/Electric Green',
        retailPrice: 190,
        releaseDate: '12/15/2023',
        resellPrice: 293,
        size: 12,
        image: getImagePath('Nike-Kobe-6-Protro-Reverse-Grinch'),
        description: "Step into the future while honoring a legend with the Nike Kobe 6 Protro Reverse Grinch, a long-awaited sneaker that flips the script on the iconic Grinch colorway. Featuring a Bright Crimson upper that mirrors the intensity of Kobe Bryant's game, the shoe stands out with a snakeskin-textured upper, a nod to the Black Mamba, and black Swooshes accented by electrifying Electric Green details.",
        stock: 6
    },
    {
        name: 'Nike Air Max 1 Athletic Department',
        id: 37,
        brand: 'Nike',
        style: 'FV4921-600',
        colorway: 'White/Fir/Sail/Midnight Navy/Coconut Milk',
        retailPrice: 150,
        releaseDate: '09/07/2023',
        resellPrice: 57,
        size: 11,
        image: getImagePath('Nike-Air-Max-1-Athletic-Department-Deep-Royal-Blue'),
        description: "The Nike Air Max 1 Athletic Department Deep Royal Blue presents a subtly elegant design that blends high-performance capabilities with versatile style. The shoe features a white mesh base that keeps it lightweight and breathable, while gray suede overlays the forefoot, eye stays, side panel, and heel for both structure and aesthetic appeal. A dark blue suede mudguard surrounds the shoe, complemented by an iridescent mini Swoosh, with the same blue appearing in the sock liner and side-panel Nike Swoosh beneath the heel. What sets this shoe apart is the innovative sole unit, with Visible Air housed in the white foam midsole, and a rubber outsole that combines black lugged rubber for traction and white rubber for midsole expansion.",
        stock: 3
    },
    {
        name: 'Nike Zoom Vomero 5 Supersonic',
        id: 38,
        brand: 'Nike',
        style: 'FN7649-110',
        colorway: 'White/Igloo/Black/Neutral Grey',
        retailPrice: 175,
        releaseDate: '08/01/2023',
        resellPrice: 98,
        size: 8,
        image: getImagePath('Nike-Zoom-Vomero-5-Supersonic-Light-Bone-Black'),
        description: "The Nike Vomero 5 Supersonic Light Bone Black offers a running shoe silhouette with a low-top design, focusing on comfort and performance. The shoe features a Light Bone upper made from a combination of synthetic leather and mesh, accented with black details. Glow-in-the-dark elements appear on the molded heel counter, quarter-panel cage, and rubber outsole, while a white synthetic leather Swoosh adds a signature touch.",
        stock: 4
    },
    {
        name: 'Nike Dunk High Wu-Tang',
        id: 39,
        brand: 'Nike',
        style: 'HJ4320-001',
        colorway: 'Black/Pollen/White',
        retailPrice: 150,
        releaseDate: '11/09/2024',
        resellPrice: 140,
        size: 9,
        image: getImagePath('Nike-Dunk-High-Wu-Tang'),
        description: "The Nike Dunk High Wu-Tang (2024) brings back one of the most legendary sneaker collaborations in history, reviving the iconic 1999 release that was one of the earliest sneaker partnerships with a music group. Staying true to the original, this 2024 retro release features the Wu-Tang Clan's signature black and goldenrod color scheme, with a custom Wu-Tang logo on the heel and tongue label as a nod to the group's lasting legacy.",
        stock: 7
    },
    {
        name: 'Nike Air Foamposite One Copper',
        id: 40,
        brand: 'Nike',
        style: 'FZ9902-001',
        colorway: 'Black/Metallic Copper/Off Noir',
        retailPrice: 230,
        releaseDate: '12/04/2024',
        resellPrice: 135,
        size: 11,
        image: getImagePath('Nike-Air-Foamposite-One-Copper'),
        description: "The Nike Air Foamposite One Copper (2024) redefines boldness with its eye-catching metallic copper upper, contrasted by sleek black accents. Originally launched in the late '90s, the Foamposite One was ahead of its time in both design and technology, and this 2024 re-release serves as a nostalgic nod to the silhouette's history. The innovative molded Foamposite upper ensures durability and a futuristic look, while the carbon fiber midfoot shank provides unparalleled stability.",
        stock: 6
    },
    {
        name: 'Nike Air Max 90 Reverse Duck Camo',
        id: 41,
        brand: 'Nike',
        style: 'CW6024-600',
        colorway: 'Infrared/Black-Dark Sage-Baroque Brown',
        retailPrice: 140,
        releaseDate: '09/19/2024',
        resellPrice: 69,
        size: 12,
        image: getImagePath('Nike-Air-Max-90-Reverse-Dunk-Camo'),
        description: "Nike celebrated Air Max Day 2020 with the release of the Nike Air Max 90 Reverse Duck Camo, offering a fresh take on the classic Atmos Air Max 90 design from 2013. The shoe features an Infrared mesh upper, paired with a Duck Camo mudguard and black quarter panels.",
        stock: 8
    },
    {
        name: 'Nike Air Max Plus Triple Black',
        id: 42,
        brand: 'Nike',
        style: '604133-050',
        colorway: 'Black/Black-Black',
        retailPrice: 150,
        releaseDate: '12/20/2017',
        resellPrice: 119,
        size: 10,
        stock: 7,
        image: getImagePath('Nike-Air-Max-Plus-Triple-Black'),
        description: "The Nike Air Max Plus Triple Black is an all-black rendition of the iconic Nike Air Max Plus, released ahead of its 20th anniversary. The shoe features a breathable synthetic upper with closed mesh inserts, edgy TPU ribbing, an external toe cap, a textured ankle strip, and a low mudguard. Its lightweight midsole incorporates Tuned Air technology and a Max Air sole unit for enhanced comfort and support. Released on December 20, 2017, for $150, the Nike Air Max Plus Triple Black offers a sleek and versatile look with performance-driven features."
    },
    
    {
        name: 'adidas Yeezy Boost 350 V2 Carbon Beluga',
        id: 43,
        brand: 'Yeezy',
        style: 'HQ7045',
        colorway: 'Carbon Beluga/Steeple Grey/Solar Red',
        retailPrice: 230,
        releaseDate: '05/27/2024',
        resellPrice: 109,
        size: 8,
        stock: 3,
        image: getImagePath('Adidas-Yeezy-Boost-350-V2-Carbon-Beluga'),
        description: "Just in time for summer, adidas and Kanye West unveiled the Yeezy Boost 350 V2 Carbon Beluga, a revamped version of the classic Beluga colorway that continues to push the boundaries of sneaker culture. The Carbon Beluga colorway offers a fresh take on the iconic design, with a Primeknit upper wrapped around the Boost midsole, infusing the familiar silhouette with bold, modern energy. Street-ready yet sleek, this sneaker embodies the signature Yeezy aesthetic while elevating your style. Released on May 31, 2023, for $230, the adidas Yeezy Boost 350 V2 Carbon Beluga is a must-have for sneaker enthusiasts."
    },
    
    {
        name: 'adidas Yeezy Boost 350 V2 Granite',
        id: 44,
        brand: 'Yeezy',
        style: 'HQ2059',
        colorway: 'Granite/Core Black/Granite',
        retailPrice: 230,
        releaseDate: '08/28/2023',
        resellPrice: 127,
        size: 11,
        stock: 5,
        image: getImagePath('Adidas-Yeezy-Boost-350-V2-Granite'),
        description: "The Nike Air Max Plus Triple Black is an all-black rendition of the iconic Nike Air Max Plus, released ahead of its 20th anniversary. The shoe features a breathable synthetic upper with closed mesh inserts, edgy TPU ribbing, an external toe cap, a textured ankle strip, and a low mudguard. Its lightweight midsole incorporates Tuned Air technology and a Max Air sole unit for enhanced comfort and support. Released on December 20, 2017, for $150, the Nike Air Max Plus Triple Black offers a sleek and versatile look with performance-driven features."
    },
    
    {
        name: 'adidas Yeezy Slide',
        id: 45,
        brand: 'Yeezy',
        style: '604133-050',
        colorway: 'ID2350',
        retailPrice: 70,
        releaseDate: '03/21/2024',
        resellPrice: 83,
        size: 11,
        stock: 9,
        image: getImagePath('Adidas-Yeezy-Slide'),
        description: "The Nike Air Max Plus Triple Black is an all-black rendition of the iconic Nike Air Max Plus, released ahead of its 20th anniversary. The shoe features a breathable synthetic upper with closed mesh inserts, edgy TPU ribbing, an external toe cap, a textured ankle strip, and a low mudguard. Its lightweight midsole incorporates Tuned Air technology and a Max Air sole unit for enhanced comfort and support. Released on December 20, 2017, for $150, the Nike Air Max Plus Triple Black offers a sleek and versatile look with performance-driven features."
    },
];

export default sneakers;