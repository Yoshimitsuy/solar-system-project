import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName } = this.props;
    const { planetImage } = this.props;

    return (
      <section>
        <div data-testid="planet-card">
          <img
            src={ planetImage }
            alt={ `Planeta ${planetName}` }
            className={ planetName }
          />
        </div>
        <p data-testid="planet-name" className="planet-name">{ planetName }</p>
      </section>
    );
  }
}

PlanetCard.propTypes = { planetName: PropTypes.string.isRequired };
PlanetCard.propTypes = { planetImage: PropTypes.string.isRequired };

export default PlanetCard;
