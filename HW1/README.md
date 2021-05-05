# HW1

This homework will guide you to practice with basic virtualization technology and familiarize you with building node CLI programs.

## Class activities (50)

Complete the following class activities. Document in your HW's README.md

* [ ] Discussion: Describe a situation where it was difficult to run code from someone else (4)

I had joined the ams2 voice channel to discuss this topic with other classmates. All of us shared our experiences where we faced difficulties to run code which was written by someone else. What was the reason due to which we faced this difficulty. What helped us in overcoming the problem which we were facing.

* [ ] Complete "On your own": Ubuntu up script (10)

I ran the Ubuntu Up script on my local machine as the terminal is not loading on my docable-server.
![image](https://media.github.ncsu.edu/user/15014/files/8a680680-6b24-11eb-8e7f-01016722b06e)
![image](https://media.github.ncsu.edu/user/15014/files/cbf8b180-6b24-11eb-8e80-25dc467035d5)
![image](https://media.github.ncsu.edu/user/15014/files/d61ab000-6b24-11eb-8c9e-77b99f6e406f)
![image](https://media.github.ncsu.edu/user/15014/files/2a259480-6b25-11eb-8240-546aa1b76bcc)
![image](https://media.github.ncsu.edu/user/15014/files/6822b880-6b25-11eb-82c5-04e2cb97a8f3)

* [ ] Complete the [CLI notebook](https://docable.cloud/chrisparnin/notebooks/nodejs/CLI/cli.md) (6)

![image](https://media.github.ncsu.edu/user/15014/files/a9b06500-6b1f-11eb-8d59-4f063e2b4dd6)
![image](https://media.github.ncsu.edu/user/15014/files/b9c84480-6b1f-11eb-9512-ed2acd69eb9b)
![image](https://media.github.ncsu.edu/user/15014/files/cd73ab00-6b1f-11eb-98bb-1c32f363372a)
![image](https://media.github.ncsu.edu/user/15014/files/dcf2f400-6b1f-11eb-92c0-8e775653c783)
![image](https://media.github.ncsu.edu/user/15014/files/eaa87980-6b1f-11eb-9df8-61a0a865f8cc)

* [ ] Complete "Docker workshop" (10)

Prepare a simple rootfs with busybox
![image](https://media.github.ncsu.edu/user/15014/files/2453be80-6c9f-11eb-87e8-9b8063cd26ec)

Playing With Container
![image](https://media.github.ncsu.edu/user/15014/files/8f9d9080-6c9f-11eb-952e-ad15c002ba44)

Introducing overlay filesystem
![image](https://media.github.ncsu.edu/user/15014/files/5a467200-6ca2-11eb-9fb4-e674aecba159)

Introducing Docker containers

Setup
Create a headless VM with bakerx
![image](https://media.github.ncsu.edu/user/15014/files/6a168400-6cab-11eb-84c7-7767e45edbea)

Install docker inside your VM
![image](https://media.github.ncsu.edu/user/15014/files/00e34080-6cac-11eb-8b60-223933ed1060)
![image](https://media.github.ncsu.edu/user/15014/files/5d466000-6cac-11eb-821f-152fc66a4bcd)

Playing with Docker
![image](https://media.github.ncsu.edu/user/15014/files/a1396500-6cac-11eb-9700-adeac5d714e0)
![image](https://media.github.ncsu.edu/user/15014/files/0f7e2780-6cad-11eb-9d68-d0c33a2490be)

Building Images
![image](https://media.github.ncsu.edu/user/15014/files/769bdc00-6cad-11eb-96c5-3143bba50981)
![image](https://media.github.ncsu.edu/user/15014/files/e8742580-6cad-11eb-9a21-c7000075553d)

Understanding containers
![image](https://media.github.ncsu.edu/user/15014/files/2d985780-6cae-11eb-9f90-a317986b8a77)

Volumes
![image](https://media.github.ncsu.edu/user/15014/files/57ea1500-6cae-11eb-8380-466689592c66)

Build script demo
![image](https://media.github.ncsu.edu/user/15014/files/c4fdaa80-6cae-11eb-84c7-b604526bac41)
![image](https://media.github.ncsu.edu/user/15014/files/abf4f980-6cae-11eb-9332-bb12a9166a63)

Answer the following conceptual questions (20)

* Why can code be difficult to run on another machine? 

If we build a software on our machine it has no value until we can run it on some other device. Delivering and deploying software is a non-trivial task, even simple code snippets can be difficult to run. If we want to send our code to someone else we need to set up an environment or create a home for the code to run as it cannot run on a random environment. So we can say that managing environments is hard. 

* Explain the concepts of a computing environment and headless infrastructure.

Inorder for our software/code to run smoothly on any machine we should assume that the environment of the code is something that must coexist. So we can say that a computing environment involves the collection of computer machinery, data storage devices, work stations, software applications, and networks that support the processing and exchange of electronic information demanded by the software solution. Computing environment is not only just a library which is running but it also includes external changes like time, load, weather etc. 
A headless infrastructure is like headless browsers for integration testing such that you can build, use and throw away very quickly like a 2GB VM running in the cloud. 

* Compare full emulation virtualization vs. binary translation

Full Emulation means to run a virtual machine as a user application, Emulate CPU, Emulate memory, Disks and Emulate network and other hardware in other words you can fully emulate a computer. But the problem here is it is slow, we don't take any advantage of the optimization in the hardware itself. 
Binary Translation on the other hand is used to optimize full emulation. In this you take the unsafe/privileged operation and try to turn them into safer calls which can be done in the Vm itself and by translating these instructions you get to maintain isolation.

* What are some use cases associated with microvms and unikernels?

Micro VMs: Embedded Appliances like docker for MAC, windows, subsystem linux.
Unikernels: Lambda/Optimized ML, FPGAs(Azure)

* In VM workshop, why can't the eth0 ip address be pinged from the host?

We cannot ping eth0 ip because it is a network which is private to the virtual machine and the VM is able to reach the outside network using NAT so it will have something at the host level which helps in routing the packets outside the VM.

* How can bakerx access the virtual machine through ssh?

A ssh connection is provided, using an identify file, and the port 2008, which will be forwarded to the VM’s ssh port. StrictHostKeyChecking=no is also used because conflicting host signatures often exist when you create multiple VMs that use the same port number over time.

* What are the limitations of using chroot for os-virtualization?

Limitations:
1. No CPU memory limit
2. Other running processes are still visible.
3. Cannot use the same network port as another process
4. Lots of security isues.

* Why is the builder pattern useful for building images?

The builder pattern is the setup that is used to build a container. It involves two Docker images:
a "build" image with all the build tools installed, capable of creating production-ready application files.
a "service" image capable of running the application.
How it work:
This allows you to throw away the old layer and just keep the bottom layer so that you could use other images temporarily like install dev tool then throw it away then you just have the smaller image which just has the binary image which you want. 

## Virtual Machine provisioning with CLI program (40)

You will start with a starter code base and modify it to fulfill the homework criteria.
Please do the following before you start the homework.

### Prepare your GitHub Repo.

Sign into [NCSU's GitHub](https://github.ncsu.edu/).

1. Go to the repository: `https://github.ncsu.edu/cscdevops-spring2021/HW1-<unity>`
2. **Do not create any content, yet**
 
### Clone and set-url

3. Clone the following template repository. Then, modify the git remote url so that it now will point to your HW1-<unity> repo.

```bash
git clone http://github.com/CSC-DevOps/V
cd V
git remote -v
git remote set-url origin https://github.ncsu.edu/cscdevops-spring2021/HW1-<unity>
```

### Install and test

Install the npm packages, then create a symlink for running your program.
```bash
npm install
npm link
```

Try it out.
```
v up
```

You will see a virtual machine being prepared and booted; however, **it will hang as the network and port forwarding for ssh is not ready**.

```
Executing VBoxManage import "/Users/cjparnin/.bakerx/.persist/images/bionic/box.ovf" --vsys 0 --vmname V
Executing VBoxManage modifyvm "V" --memory 1024 --cpus 1
Executing VBoxManage modifyvm V  --uart1 0x3f8 4 --uartmode1 disconnected
Running VM customizations...
Executing VBoxManage startvm V --type emergencystop
Executing VBoxManage startvm V --type headless
Waiting for ssh to be ready on localhost:2800...
```

#### VM setup (15 points)

Add the following required components to your project by editing the [`customize(name)`](https://github.com/CSC-DevOps/V/blob/14c48245080b6eb8968175bd07d48a810dc4c3ea/commands/up.js#L92-L95) function inside commands/up.js. You will want to take advantage of the `VBoxManage.execute` wrapper to execute VirtualBox commands.

* Add a NIC with NAT networking.
* Add a port forward from 2800 => 22 for guestssh.
* Add a port forward from 9000 => 5001 for a node application.

![image](https://media.github.ncsu.edu/user/15014/files/50e4ca80-6b27-11eb-8155-ad5542bb9653)

#### Post-Configuration (10 points)

Add the following required components to your project by editing the [`postconfiguration(name)`](https://github.com/CSC-DevOps/V/blob/master/commands/up.js#L100) function inside the commands/up.js. You will want to take advantage of the ssh command wrapper to send commands to the VM.

* Install nodejs, npm, git
* Clone https://github.com/CSC-DevOps/App
* Install the npm packages

![image](https://media.github.ncsu.edu/user/15014/files/69ed7b80-6b27-11eb-8671-5d8bcaf7e562)

**Warning** 💥: Be mindful of the deadly mix of quotes, platforms, and operators for combining (&&)---they are inconsistent on platforms and you may accidently be running the second command on your host system instead of remote system.

#### SSH and App (15 points)

Add a new command by creating a ssh.js inside the commands directory. 
When running `v ssh` it should ssh into your VM (25 points).

* Implement and demonstrate running `v ssh`.
* Manually run `node main.js start 5001`.
* Demonstrate you can visit `localhost:9000` to see your running App.

![image](https://media.github.ncsu.edu/user/15014/files/22c3c100-6be1-11eb-9cf0-02d9b6eff307)
![image](https://media.github.ncsu.edu/user/15014/files/c3ff4700-6be2-11eb-92f2-ed4a4211cc79)
![image](https://media.github.ncsu.edu/user/15014/files/e09b7f00-6be2-11eb-985b-7bb47cf33331)

#### Extra Requirements

You can complete some or all of the following activities for extra credit by modifying your code.

* Create a second NIC with host-only networking enabled and set the IP address to 192.168.33.10. Demonstrate that you can use your IP address to visit [http://192.168.33.10:5001/](http://192.168.33.10:5001/) to see your running App. (5 points)
  > Note: to receive full credit, you must dynamically detect the host-only interface (or create it, if doesn't exist), instead of hard-coding the interface name (hint: see [here](https://www.virtualbox.org/manual/ch08.html#idp16668048)).

* Create a shared sync folder mapping the (current working directory on your host => /V inside the VM). This can be fairly involved, only attempt if experienced---limited help will be provided from teaching staff. (5 points)

## Screencast (10)

Create a screencast of your assignment:

* Demonstrate running your code to provision the VM (`v up`), running your customization and post-configuration steps, and ssh (`v ssh`) and a starting your App. Demonstrate your app running on your browser. Demonstrate any extra requirements fulfilled.

Link: https://drive.google.com/drive/u/0/folders/1rUFsw_VOlmxoxo7Pil4DIS42zlcj2fd4
The code is present in the github repository inside the commands directory.

For guidelines, software, and recommendations see [Screencasts](Screencasts.md).