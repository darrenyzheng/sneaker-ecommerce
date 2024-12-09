import React, { useEffect, useState } from "react";
import sneakerData from '../sneakers';
import Sneaker from './Sneaker';
import { IoArrowDownOutline, IoArrowUpOutline, IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Shop = () => {

    const [filteredSneakers, setFilteredSneakers] = useState(sneakerData);
    const [isBrandChecked, setIsBrandChecked] = useState(true);
    const [isPriceChecked, setIsPriceChecked] = useState(true);
    const [isReleaseDateChecked, setIsReleaseDateChecked] = useState(true);

    const [selectedYears, setSelectedYears] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedMinimum, setSelectedMinimum] = useState();
    const [selectedMaximum, setSelectedMaximum] = useState();

    const [sortOption, setSortOption] = useState('original');
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(12);
    const lastSneakerIndex = currentPage * postsPerPage;
    const firstSneakerIndex = lastSneakerIndex - postsPerPage;
    const sneakersPerPage = filteredSneakers.slice(firstSneakerIndex, lastSneakerIndex);

    useEffect(() => {
        let filtered = [...sneakerData];
        if (selectedYears.length > 0) {
            filtered = filtered.filter(sneaker => selectedYears.includes(sneaker.releaseDate.slice(-4)));
        }

        if (selectedBrands.length > 0) {
            filtered = filtered.filter(sneaker => selectedBrands.includes(sneaker.brand));
        }

        if (selectedMinimum) {
            filtered = filtered.filter(sneaker => sneaker.resellPrice >= selectedMinimum);
        }

        if (selectedMaximum) {
            filtered = filtered.filter(sneaker => sneaker.resellPrice <= selectedMaximum);
        }

        switch (sortOption) {
            case 'pricelowtohigh':
                filtered.sort((a, b) => a.resellPrice - b.resellPrice);
                break;
            case 'pricehightolow':
                filtered.sort((a, b) => b.resellPrice - a.resellPrice);
                break;
            case 'releasedateoldtonew':
                filtered.sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate));
                break;
            case 'releasedatenewtoold':
                filtered.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
                break;
            case 'original':
            default:
                break;
        }
        setFilteredSneakers(filtered);

    }, [selectedBrands, selectedYears, sneakerData, selectedMinimum, selectedMaximum, sortOption]);

    const handleYearCheckbox = (event) => {
        const year = event.target.value;
        setSelectedYears(prevSelectedYears =>
            prevSelectedYears.includes(year) ?
                prevSelectedYears.filter(prevSelectedYear => prevSelectedYear !== year)
                : [...prevSelectedYears, year]);
    };

    const handleBrandCheckbox = (event) => {
        const brand = event.target.value;
        setSelectedBrands(prevSelectedBrands =>
            prevSelectedBrands.includes(brand) ?
                prevSelectedBrands.filter(prevSelectedBrand => prevSelectedBrand !== brand)
                : [...prevSelectedBrands, brand]);
    };

    return (<div>
        <div className="header">
            <h1> LATEST RELEASES</h1>
        </div>



        <form>
            <h1> Filter</h1>
            <p> {filteredSneakers.length} {filteredSneakers.length === 1 ? 'product' : 'products'} </p>
            <div className="accordion">
                <div className='wrapper' onClick={() => setIsBrandChecked(prev => !prev)}>
                    <h2>Brand </h2>
                    {isBrandChecked ? <IoArrowUpOutline size={30} /> : <IoArrowDownOutline size={30} />}
                </div>
                <div className={`items ${isBrandChecked ? 'expand' : 'collapse'}`}>
                    {[...new Set(sneakerData.map(sneaker => sneaker.brand))].map((brand, index) => (
                        <div key={index}>
                            <input type="checkbox" id={brand} value={brand} onChange={handleBrandCheckbox} />
                            <label htmlFor={brand}>{brand}</label>
                        </div>
                    ))}
                </div>
            </div>

            <div className="accordion">
                <div className="wrapper" onClick={() => setIsPriceChecked(prev => !prev)}>
                    <h2>Price </h2>
                    {isPriceChecked ? <IoArrowUpOutline size={30} /> : <IoArrowDownOutline size={30} />}
                </div>
                <div className={`items ${isPriceChecked ? 'expand' : 'collapse'} prices`}>
                    <input type="number" placeholder="Minimum" min='0' onChange={(e) => setSelectedMinimum(e.target.value)} />
                    <input type="number" placeholder="Maximum" min='0' onChange={(e) => setSelectedMaximum(e.target.value)} />
                </div>
            </div>

            <div className="accordion">
                <div className="wrapper" onClick={() => setIsReleaseDateChecked(prev => !prev)}>
                    <h2>Release Date </h2>
                    {isReleaseDateChecked ? <IoArrowUpOutline size={30} /> : <IoArrowDownOutline size={30} />}
                </div>
                <div className={`items ${isReleaseDateChecked ? 'expand' : 'collapse'}`}>
                    {[...new Set(sneakerData.map(sneaker => sneaker.releaseDate.slice(-4)))].sort((a, b) => a - b).map((releaseYear) => (
                        <div key={releaseYear}>
                            <input type="checkbox" id={releaseYear} value={releaseYear} onChange={handleYearCheckbox} />
                            <label htmlFor={releaseYear}>{releaseYear}</label>
                        </div>
                    ))}
                </div>
            </div>

            <select className="sort" id="" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                <option value="original"> Original Sorting </option>
                <option value="pricelowtohigh"> Price (lowest to highest) </option>
                <option value="pricehightolow"> Price (highest to lowest) </option>
                <option value="releasedateoldtonew"> Release Date (oldest to newest) </option>
                <option value="releasedatenewtoold"> Release Date (newest to oldest) </option>
            </select>

        </form>

        <div className='sneakers'>
            {sneakersPerPage.map((sneaker) =>
                <Sneaker key={sneaker.id} id = {sneaker.id} name = {sneaker.name} brand={sneaker.brand} size={sneaker.sizes} resellPrice={sneaker.resellPrice} image={sneaker.image} releaseDate={sneaker.releaseDate} />
            )}
        </div >

        <div className='pagination'>
            <IoChevronBackSharp size={30} onClick={() => setCurrentPage(prevPage => prevPage - 1)} />
            {currentPage}
            <IoChevronForwardSharp size={30} onClick={() => setCurrentPage(prevPage => prevPage + 1)} />
        </div>

    </div>

    )
}

export default Shop;