#!/bin/bash

# Create VM
bakerx run ubuntu-vm focal

# Get ssh command
ssh_cmd=$(bakerx ssh-info ubuntu-vm|tr -d '"')

# Use heredoc to send script over ssh
$ssh_cmd << 'END_DOC'

sudo apt-get update

# Install packages
sudo apt-get install -y curl
sudo curl -sL https://deb.nodesource.com/setup_15.x | sudo -E bash -
sudo apt-get install -y nodejs

# Get project
git clone https://github.com/CSC-DevOps/App
# Setup project

cd App
npm install

exit
END_DOC

echo $ssh_cmd