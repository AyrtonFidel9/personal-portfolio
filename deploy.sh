#! /bin/bash
sudo yum update -y
sudo yum install -y yum-utils
sudo yum install docker -y
sudo usermod -a -G docker ec2-user
wget https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m) 
sudo mv docker-compose-$(uname -s)-$(uname -m) /usr/local/bin/docker-compose
sudo chmod -v +x /usr/local/bin/docker-compose
sudo systemctl enable docker.service
sudo systemctl start docker.service

sudo docker pull ayrtonfidel9/personal-portfolio

sudo docker run -p 80:80 ayrtonfidel9/personal-portfolio