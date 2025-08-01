import { useEffect, useState } from 'react';
import { shortList, longList, list } from './data';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';

const Carousel = () => {
  const [people, setPeople] = useState(longList);
  const [currentPerson, setCurrentPerson] = useState(0);

  const prevSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson + 1) % people.length;
      return result;
    });
  };
  const nextSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson + 1) % people.length;
      return result;
    });
  };

  useEffect(() => {
    let sliderId = setInterval(() => {
      setCurrentPerson((oldPerson) => {
        const result = (oldPerson + 1) % people.length;
        return result;
      });
    }, 5000);
    return () => clearInterval(sliderId);
  }, [currentPerson, people]);

  return (
    <section className="slider-container">
      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;
        return (
          <article
            className="slide"
            style={{
              transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
              opacity: personIndex === currentPerson ? 1 : 0,
              visibility: personIndex === currentPerson ? 'visible' : 'hidden',
            }}
            key={id}
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button type="button" className="prev" onClick={prevSlide}>
        <FiChevronsLeft />
      </button>
      <button type="button" className="next" onClick={nextSlide}>
        <FiChevronsRight />
      </button>
    </section>
  );
};

export default Carousel;
