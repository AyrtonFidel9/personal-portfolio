'use client';

import React from 'react';
import { Navigation, ProjectCard } from '../components';
import { LanguageProvider, useLanguage } from '../context';
import ProjectsContent from '@/content/projects.json';
import ProjectsStyle from './projects.module.scss';

function Projects() {
  const images: string[] = ProjectsContent.en.projects.map(
    (item) => item.image
  );

  return (
    <LanguageProvider>
      <>
        <Navigation />
        <section className={ProjectsStyle.projects}>
          <h2>Projects</h2>
          <DisplayCards />
        </section>
      </>
    </LanguageProvider>
  );
}

const DisplayCards = () => {
  const { languageOption } = useLanguage();
  const images: string[] = ProjectsContent.en.projects.map(
    (item) => item.image
  );
  return (
    <div className={ProjectsStyle.cards_section}>
      {ProjectsContent[languageOption].projects.map((item, index) => {
        return (
          <ProjectCard
            key={item.title}
            title={item.title}
            description={item.description}
            imageSrc={images[index]}
            alt={`${item.title} image`}
          />
        );
      })}
    </div>
  );
};

export default Projects;
