import React, {useContext} from "react";
import {themeContext} from "../../utils/ThemeContext";
import {
  ExperienceContainer,
  Title,
  Description,
} from "./styles";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ewallyLogo from '../../assets/ewally.svg';
import betabitLogo from '../../assets/betabit.jpg';

const Experience = () => {
  const {theme} = useContext(themeContext);

  // useEffect(() => {
  //   (() => {
  //     let lang = window.navigator.languages ? window.navigator.languages[0] : null;
  //     lang = lang || window.navigator.language || window.navigator.browserLanguage
  //       || window.navigator.userLanguage;
  //     console.log('lang', lang);
  //   })();
  // }, []);

  return (
    <ExperienceContainer id="experience">
      <Title theme={theme} className="section__title">
        EXPERIÊNCIA
      </Title>
      <Description>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{background: '#242933', color: '#fff'}}
            contentArrowStyle={{borderRight: '7px solid  #242933'}}
            date="10/2021 - 08/2022"
            dateClassName='timeline-date'
            iconStyle={{background: '#242933', color: '#ff6348'}}
            icon={
              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
                <img src={betabitLogo} alt="betabit" width={40} />
              </div>
            }
          >
            <h3 className="vertical-timeline-element-title" style={{color: '#ff6348'}}>Desenvolvedor Fullstack</h3>
            <h4 className="vertical-timeline-element-title" style={{color: '#ff6348'}}>(Betabit)</h4>
            <p>
              Criação e manutenção de APIs, aplicações web e mobile. Participação em equipe de desenvolvimento ágil. Tecnologias usadas incluem Typescript, NodeJS, AdonisJS, NestJS, MySQL, PostgreSQL, MongoDB, Docker, Docker Compose, AWS S3, ReactJS, NextJS, VueJS, Quasar, entre outras.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{background: '#242933', color: '#fff'}}
            contentArrowStyle={{borderRight: '7px solid  #242933'}}
            date="08/2022 - present"
            dateClassName='timeline-date'
            iconStyle={{background: '#242933', color: '#fff'}}
            icon={
              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
                <img src={ewallyLogo} alt="betabit" width={30} style={{borderRadius: '100%'}} />
              </div>
            }
          >
            <h3 className="vertical-timeline-element-title" style={{color: '#ff6348'}}>Desenvolvedor Fullstack</h3>
            <h4 className="vertical-timeline-element-title" style={{color: '#ff6348'}}>(Ewally)</h4>
            <p>
              (placeholder)
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Description>
    </ExperienceContainer>
  );
};

export default Experience;
