'use client';

import Image from 'next/image';
import HeaderStyles from './styles/header.module.scss';
import MainStyles from './styles/main.module.scss';
import { LanguageProvider } from './context';
import ImageProfile from '../../public/images/danhousen.jpg';
import LinuxImage from '../../public/images/linux.png';
import TerraformImage from '../../public/images/terraform.png';
import AwsImage from '../../public/images/aws.png';
import AnsibleImage from '../../public/images/ansible.png';
import DockerImage from '../../public/images/docker.png';
import K8sImage from '../../public/images/k8s.png';
import { SkillCard, ProfileDescription, Navigation } from './components';
import { SoftSkillsSection } from './sections';

export default function Home() {
  return (
    <LanguageProvider>
      <>
        <header className={`${HeaderStyles.header}`}>
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
        <main id="About" className={MainStyles.about}>
          <section className={MainStyles.skill_container}>
            <h3>Skills</h3>
            <div className={MainStyles.skill_cards}>
              <SkillCard imageSrc={LinuxImage} alt={'Linux icon'} />
              <SkillCard imageSrc={TerraformImage} alt={'Terraform icon'} />
              <SkillCard imageSrc={AwsImage} alt={'AWS icon'} />
              <SkillCard imageSrc={K8sImage} alt={'K8s icon'} />
              <SkillCard imageSrc={DockerImage} alt={'Docker icon'} />
              <SkillCard imageSrc={AnsibleImage} alt={'Ansible icon'} />
            </div>
          </section>
          <SoftSkillsSection />
        </main>
        <footer style={{ height: '50vh', backgroundColor: 'black' }}></footer>
      </>
    </LanguageProvider>
  );
}
