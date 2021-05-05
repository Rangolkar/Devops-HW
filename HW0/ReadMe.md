# HW0

### Basic course setup (5)

Properly setting up your Discord and Moodle profile.

* Moodle Profile:

![image](https://media.github.ncsu.edu/user/15014/files/99fd6a80-625b-11eb-8d49-91bb5f23210d)

* Discord Profile:

![image](https://media.github.ncsu.edu/user/15014/files/aa154a00-625b-11eb-8492-963586bf35ff)

### Github (5)

Sign into [NCSU's GitHub](https://github.ncsu.edu/).

1. Create a *private* repo called HW0-DevOps. 

![image](https://media.github.ncsu.edu/user/15014/files/bc8f8380-625b-11eb-9398-0ab9fbd411ed)

2. Go to Settings, Collaborators and Teams, and add the TA and instructor as a collaborator (using their unity id).

Sara Ghodsi <sghodsi@ncsu.edu>, Rohit Nair <rnair2@ncsu.edu>, Christopher Parnin <cjparnin@ncsu.edu>
![image](https://media.github.ncsu.edu/user/15014/files/cadd9f80-625b-11eb-9b61-74a5e6f92b23)

### Do class activities (10)

* [ ] Make an brief introduction of yourself in #welcome
![image](https://media.github.ncsu.edu/user/15014/files/21e37480-625c-11eb-925c-ae3530cc4809)

* [ ] Pick and explain the difference between nightly builds, continuous integration, continuous delivery, and continuous deployment in Breakout.
* [ ] Discussion: Living with Continuous Deployment.

I had joined voice channel ams2 in that we had a discussion regarding the topic difference between nightly builds and continous integration, why both of them are important and in which situation are they used and why are they used. The next topic was "Fast to deploy, slow to release" what is the concept exactly and when is it used. And lastly we discussed our industry experience with shipping copde into production and how has CI/CD pipeline made our life easy.

### Do Basics workshop exercises (10)

* [ ] Setup: Practice: Installing useful software

![image](https://media.github.ncsu.edu/user/15014/files/b2ba5000-625c-11eb-83f2-c9c3ad5ee470)

![image](https://media.github.ncsu.edu/user/15014/files/c665b680-625c-11eb-952d-83cd95ce63a6)

![image](https://media.github.ncsu.edu/user/15014/files/f614be80-625c-11eb-8296-554b429eb7dd)

* [ ] Setup: Exercise: Customize your bash prompt

Command used:
PROMPT_COMMAND='PS1="\[\033[0;33m\][\!]\`if [[ \$? = "0" ]]; then echo "\\[\\033[32m\\]"; else echo "\\[\\033[31m\\]"; fi\`[\u.\h: \`if [[ `pwd|wc -c|tr -d " "` > 18 ]]; then echo "\\W"; else echo "\\w"; fi\`]\$\[\033[0m\] "; echo -ne "\033]0;`hostname -s`:`pwd`\007"'

![image](https://media.github.ncsu.edu/user/15014/files/5c014600-625d-11eb-98f8-344e7bbc411d)
 As seen in the screenshot the bash is customized such that color is green when right command is written and red when wrong command is written.

* [ ] Shells: Exercise: Data Science with Bash

![image](https://media.github.ncsu.edu/user/15014/files/e8ac0400-625d-11eb-8417-c4529931112b)

* [ ] Markdown: Practice: Create an About Me Page (AboutMe.md) in your homework submission.

![image](https://media.github.ncsu.edu/user/15014/files/fe212e00-625d-11eb-8f83-905c3ba505f1)

* [ ] Online Tools: Practice: Set up a Task List and Github Project(create issue and project board in your repository for this homework.)

![image](https://media.github.ncsu.edu/user/15014/files/1729df00-625e-11eb-952d-08f6e8ae6cd1)

**Bonus**: Git: Complete all levels in https://learngitbranching.js.org/ ---just include a screenshot of completed level screen in your Homework submission (+10) points.

### Opunit checks (20)

* Acheive 100% pass rate for opunit profile checks:

![image](https://media.github.ncsu.edu/user/15014/files/1cd3f480-625f-11eb-9792-cd956d0173f6)

### Answer conceptual questions (10)

* 1. Explain class philosophy of "Understand how it works"

Modern tool landscape is very complicated there are 100's of tools and in few years they will become obsolete. Big companies build their own tools they do not use anything off the shelf we should also have the same philosophy, hence we should understand the underlying technology rather than the latest tool. 

* 2. What is heredoc, and why might it be useful?

Heredoc is an input mechanism that allows you to enter in text (interactively or in a script), until a delimiter string is reached 'END_DOC'. Heredoc can also be useful for running command on input you’d like to type in manually or paste from your clipboard and don’t want to bother placing in a file. In this case, we can omit the single quotes for our heredoc marker EOF, since we’re only processing simple text without bash commands.

* 3. Explain what does it mean by "Commits are NOT diffs"?

Commit is the object inside the object model of git. A commit contains many things A root tree, A list of parent commits, A commit message, An author name, email, time or A committer name, email, time. Whereas Diffs are not part of the object model. Instead, diffs are dynamically calculated from the commit graph inside the object store. For example, even object attributes, such as file renames are not represented inside the datastore and must be calculated dynamically.

* 4. What are signs of a bad kanban board?

Signs of a bad Kanban board
Empty
Only high-level goals
Too many things
Items sticking around not making progress.

* 5. Why are nightly builds useful?

During the production of large projects we cannot build different components in isolation and test them later because it will be very dangerous as if we decide to integrate the project one day before shipping and if it does not work it can be dangerous. Hence we build the code in a timely manner the integration of code is much easier. These builds help put the code under these "smoke tests" which is not extensive testing but rather checks for integration risks and catching early errors.
It is also useful to build the team morale by keeping work constantly visible to everyone.
Nightly b builds are preffered because for huge projects the build time is very long approx 19 hours hence it can done at night.

* 6. Explain "Every Feature is an Experiment"

Every feature that a software devloper builds is really an experiment. Nobody knows if it will be really build. Experiments show that only 33% of the feature survive. So we can assume thet 80% of what we build is not going to be used. 

* 7. What does it mean by "Comfort the Customer with Discomfort"

As companies transition to continuous deployment, they’re experimenting with ways to comfort customers regarding the new pace of delivery.
In today’s consumer world, as products and devices receive a constant stream of updates, customers often Organizations should treat managing
configuration the same as managing features and code. have no choice but to accept them. New generations of customers might, in fact, expect them. If mobile devices are training all of us to accept constant change, and if even cars and televisions are automatically updating themselves, why not business software? The number of customers willing to wait a year or two for updates will rapidly dwindle. Still, not all customers and companies are ready for this change. When moving speedily, companies must consider whether they’re moving faster than users desire. Still, the best comfort a company can provide is the ability to deliver a change at a moment’s notice, whenever the customer is ready.

* 8. Explain "You are the Support Person"

Developers have the power and freedom to deploy changes at their own
behest. If code breaks during production, it is the developers responsibility owning a feature or code change from cradle to grave (from inception to deployment), the burden is on the developer. This burden means that when things break, the developer is the one who gets the support call and must fix the issue, no matter what time of day. Because developers own changes from cradle to grave, traditional team structures must change. 

* 9. Why can sharing an api key be problematic?

Sharing of API keys becomes more of a concern if the API key authenticates someone for access to a subset of data. We should keep API keys private because those keys protect critical assets, and prevent people you don't know from stealing things. One can think of the API key as the API password. Anything your application is authorized to do with the API, someone else can do if they steal your credentials.
The concept is no different for digital keys, the only challe

* 10. What differences did you observe between the two cloud provider apis you tried?

I used AWS as the other cloud provider to boot VM's. The main difference which I observed between the two was security in the digital ocean we had just one token which was used for authentication whereas in AWS we get an access key and secret access key which provides a higher level of security. Another difference which affected me was the documentation provided by digital ocean was given in much simpler terms, easy to understand where the API documentation for AWS cloud was very vast and little complicated.

### Complete provisioning workshop (20)

![image](https://media.github.ncsu.edu/user/15014/files/0fba0400-6265-11eb-8339-1dae390df8f3)

![image](https://media.github.ncsu.edu/user/15014/files/1d6f8980-6265-11eb-8508-d8d87682e5c5)

![image](https://media.github.ncsu.edu/user/15014/files/25c7c480-6265-11eb-8e6a-2449b2c09118)

![image](https://media.github.ncsu.edu/user/15014/files/31b38680-6265-11eb-98f7-2a74dfe9fff7)

![image](https://media.github.ncsu.edu/user/15014/files/3bd58500-6265-11eb-805a-743cbe2b22f6)

![image](https://media.github.ncsu.edu/user/15014/files/4ee85500-6265-11eb-806c-f2365fc566b7)

![image](https://media.github.ncsu.edu/user/15014/files/a686c080-6265-11eb-9055-c15d2523c153)

![image](https://media.github.ncsu.edu/user/15014/files/b0a8bf00-6265-11eb-82ee-ddf6848db8f0)

![image](https://media.github.ncsu.edu/user/15014/files/21e87200-6266-11eb-9ab7-fcdc4bb1a76b)

![image](https://media.github.ncsu.edu/user/15014/files/30cf2480-6266-11eb-8a97-5bbf6d8bad43)

![image](https://media.github.ncsu.edu/user/15014/files/64aa4a00-6266-11eb-941f-ba02d1d69bd8)

![image](https://media.github.ncsu.edu/user/15014/files/7be93780-6266-11eb-8285-2565d253d0ab)

### Provision with additional cloud provider (20)

The additional cloud provider that I choose was AWS.

The provisioning code needs to be able to perform the following essential task:

> _create a new VM and print out the ip address of the new server_.

Steps to run the code:
1. Login into AWS account and create a new user with AWS EC2 full access.
2. Install AWS CLI and boto 3 in your terminal using the following command "pip install awscli boto3"
3. Run command "aws configure" ion your terminal and enter the Access Key and Shared Access Key that you get when you created a new user. 
4. Run "python aws_instance.py" to create your own instance. The instance iud and public ip will be printed as the output on the terminal.

![image](https://media.github.ncsu.edu/user/15014/files/a1764100-6266-11eb-9292-c6b119155987)

![image](https://media.github.ncsu.edu/user/15014/files/cbc7fe80-6266-11eb-9592-59c6b64c942d)

![image](https://media.github.ncsu.edu/user/15014/files/d4b8d000-6266-11eb-9f8c-67e7470846ad)

## Screencast (10)

Create a screencast of your assignment:

Google Drive Link : https://drive.google.com/drive/folders/1PX1SbW9e3cBZN2pAVXg5_SW0-XYzn-4U?usp=sharing

* Create a screencast demoing your opunit profile check : "Oputin_check.mov"

* Demonstrate running your code that provisions the two servers across the different platforms, including the cloud provider interface before and after running the code : "server part screencast.mov"
