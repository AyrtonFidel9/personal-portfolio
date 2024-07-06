import React from 'react';
import SoftSkillsContent from '@/content/softskills.json';
import SoftSkillsStyles from './softskills.module.scss';
import { SkillCard } from './components';
import { useLanguage } from '@/app/context';
import Image from 'next/image';
import CloudImage from './assets/cloud.jpg';

function SoftSkills() {
  const { languageOption } = useLanguage();

  return (
    <section className={SoftSkillsStyles.SoftSkills}>
      <h3>Soft Skills</h3>
      <div className={SoftSkillsStyles.SoftSkillsContainer}>
        {SoftSkillsContent[languageOption].softskills.map((item) => {
          return (
            <SkillCard
              title={item.title}
              description={item.description}
              bkgColor={item.bkgColor}
              color={item.color}
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
