import { ProjectCard } from '@/app/components';
import React from 'react';
import ProjectsContent from '@/content/projects.json';
import { useLanguage } from '@/app/context';
import Link from 'next/link';
import ProjectsSectionStyles from './projects.module.scss';

function ProjectsSection() {
  const { languageOption } = useLanguage();

  const images: string[] = ProjectsContent.en.projects.map(
    (item) => item.image
  );

  return (
    <section id="Projects" className={ProjectsSectionStyles.project_section}>
      <h3>Projects</h3>
      <div className={ProjectsSectionStyles.card_bar}>
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
      <p className={ProjectsSectionStyles.link_projects}>
        <Link href="/projects">
          {languageOption === 'en' ? 'See more...' : 'Ver más...'}
        </Link>
      </p>
    </section>
  );
}

export default ProjectsSection;
