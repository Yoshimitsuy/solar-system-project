import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <section>
        <div data-testid="solar-system">
          <Title headline="Planetas" />
        </div>

        <div className="planetinha">
          {planets.map((planet) => (
            <PlanetCard
              planetName={ planet.name }
              planetImage={ planet.image }
              key={ planet.name }
            />
          ))}
        </div>
      </section>
    );
  }
}

export default SolarSystem;
