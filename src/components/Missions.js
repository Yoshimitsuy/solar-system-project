import React from 'react';
import MissionCard from './MissionCard';
import Title from './Title';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <section>
        <div data-testid="missions" className="missions">
          <Title headline="Missões" />
        </div>
        <div className="missions-comp">
          {
            console.log(missions)
          }
          {missions.map((mission) => (
            <MissionCard
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
              key={ mission.name }
            />
          ))}
        </div>
      </section>

    );
  }
}

export default Missions;
