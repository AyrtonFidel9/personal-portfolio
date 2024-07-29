'use client';

import React from 'react';
import ProjectsContent from '@/content/projects.json';
import { Navigation, ProjectCard } from '../components';
import { LanguageProvider, useLanguage } from '../context';
import ProjectsStyle from './projects.module.scss';

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
            urlProject={item.urlProject}
          />
        );
      })}
    </div>
  );
};

function Projects() {
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

export default Projects;
