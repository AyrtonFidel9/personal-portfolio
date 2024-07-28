'use client';

import Image from 'next/image';
import HeaderStyles from './styles/header.module.scss';
import MainStyles from './styles/main.module.scss';
import { LanguageProvider } from './context';
import ImageProfile from '../../public/images/danhousen.jpg';
import { ProfileDescription, Navigation } from './components';
import {
  CertificationsSection,
  FooterSection,
  ProjectsSection,
  SoftSkillsSection,
  HardSkillsSection,
} from './sections';

export default function Home() {
  return (
    <LanguageProvider>
      <>
        <header id="Home" className={`${HeaderStyles.header}`}>
          <ul className={HeaderStyles.boxes}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <Navigation />
          <Image
            className={HeaderStyles.image_profile}
            alt="image profile portfolio"
            src={ImageProfile}
            loading="lazy"
            width={230}
            height={230}
          />
          <ProfileDescription />
        </header>
        <main className={MainStyles.about}>
          <HardSkillsSection />
          <SoftSkillsSection />
          <CertificationsSection />
          <ProjectsSection />
        </main>
        <FooterSection />
      </>
    </LanguageProvider>
  );
}
