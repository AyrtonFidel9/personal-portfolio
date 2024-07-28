import React from 'react';
import AwsImage from '../../../../public/images/aws.png';
import LinuxImage from '../../../../public/images/linux.png';
import TerraformImage from '../../../../public/images/terraform.png';
import AnsibleImage from '../../../../public/images/ansible.png';
import DockerImage from '../../../../public/images/docker.png';
import K8sImage from '../../../../public/images/k8s.png';
import { SkillCard } from './Components';
import HardSkillsStyles from './hardskills.module.scss';

function HardSkillsSection() {
  return (
    <section id="About" className={HardSkillsStyles.skill_container}>
      <h3>Skills</h3>
      <div className={HardSkillsStyles.skill_cards}>
        <SkillCard imageSrc={LinuxImage} alt={'Linux icon'} />
        <SkillCard imageSrc={TerraformImage} alt={'Terraform icon'} />
        <SkillCard imageSrc={AwsImage} alt={'AWS icon'} />
        <SkillCard imageSrc={K8sImage} alt={'K8s icon'} />
        <SkillCard imageSrc={DockerImage} alt={'Docker icon'} />
        <SkillCard imageSrc={AnsibleImage} alt={'Ansible icon'} />
      </div>
    </section>
  );
}

export default HardSkillsSection;
