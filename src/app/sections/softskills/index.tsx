import React from 'react';
import Image from 'next/image';
import SoftSkillsContent from '@/content/softskills.json';
import { useLanguage } from '@/app/context';
import { SkillCard } from './components';
import CloudImage from './assets/cloud.jpg';
import SoftSkillsStyles from './softskills.module.scss';

function SoftSkills() {
  const { languageOption } = useLanguage();

  return (
    <section className={SoftSkillsStyles.SoftSkills}>
      <h3>Soft Skills</h3>
      <div className={SoftSkillsStyles.SoftSkillsContainer}>
        {SoftSkillsContent[languageOption].softskills.map((item) => {
          return (
            <SkillCard
              key={item.title}
              title={item.title}
              description={item.description}
              bkgColor={item.bkgColor}
              txtColor={item.color}
            />
          );
        })}
      </div>
      <figure className={`${SoftSkillsStyles.SoftSkillImageContainer}`}>
        <figcaption>Soft Skills</figcaption>
        <Image
          src={CloudImage}
          alt="cloud image"
          className={SoftSkillsStyles.SoftSkillImage}
        />
      </figure>
    </section>
  );
}

export default SoftSkills;
