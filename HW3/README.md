# HW3---Pipelines

### Class discussion (20)

Describe your discussion for continuous integration. What positive experience did you share? What was a negative experience that someone shared?

I attended the discussion on NYC3 voice channel on 2nd March 2021. We had to share our experiences with using CI during a class, job or internship so I shared my experience during my internship how the CI pipeline helped me to keep the code which I was commiting compliant with the source code and it made sure that it is not breaking the build. We also shared the negative experience which we got, one of the member shared their experience where they had to find a work around because the module which they were using was not included in the compulsary packages of the build hence they had to run that package only when their testing environment was present.

![image](https://media.github.ncsu.edu/user/15014/files/24a2f380-7b93-11eb-918a-f67ae76db770)

### Conceptual Questions Lecture (48)

1. Why is a pipeline useful architecture for supporting continuous deployment?

A pipeline is an architechtural style for incrementally processing data with independent components or stages. Looking at the architechture of pipeline, it is essentially made of two parts a pipe which is a message queue and a filter which is a process, thread or component that perpetually reads messages from an input pipe, one at a time, processes each message, then writes the result to an output pipe. If we chain these things together we can create a pretty powerful continuous deployment. 

2. What is the primary principle of CI?

Continous Integration is a practice where developers automatically build, test and analyze a software change in response to every software change committed to the source repository.

CI principles are:

Commit code frequently

Dont commit broken code

Fix broken builds immediately

Write automated developer tools

All tests and inspection must pass

Run private builds

Avoid getting broken code

3. What are some claimed benefits of CI that are supported by empirical evidence?

CI claimed benefits supported by empirical evidence is:

Detecting defects and fixing them faster.

CI helps catch error earlier

CI makes us less worried about breaking our builds

CI provides a common build environment

CI helps us deploy more often

CI allows faster iteration

CI makes integration easier

CI can enforce a specific workflow

CI allows testing across multiple platforms

CI lets us spend less time debugging

CI allows running tests on more powerful hardware.

4. Why can troubleshooting a CI build failure be difficult?

When a CI build failure occurs we have to looks at the logs of random build environment which can be very tedious and frustrating, after doing that also we are not really able to get into the details of really what caused the failure. There are not many tools out there to help with this there are some plugins which help to parse the build logs and make it easier but they are not that useful.  

5. In the lecture, what characteristics did the four build manager tools have in commmon, how did they differ?

Common Charecteristics: Perform different tasks and each tasks have different goals to acheive. 

npm: In npm we can provide a section called scripts in which given a name we can provide a command that can be run. 

Grunt: Each task executes a registered plugin or arbitary javascript. A plugin is typically installed from npm. 

Make: There are two key parts of a make file one is a target which refers o a group of commands and a source which is a dependency for a target. So one benefit or using make file is that we can use source to infer what targets need to be run prior. By doing this we can acheive some sense of idempotence in the build object. One of the problems that we will face is the problems of running bash scripts where if the commands dont work out it is hard to manage these scripts.

Maven: It is a tool for managing dependencies and build lifecycles in Java/JVM. In this there is a phase which is a stage in the build lifecycle and each phase contains goals, which are executed by plugins. 

6. Based on the reading, summarize desirable proproperties of the Build phase.

Desirable properties of a build phase are:

Correctness: Dependencies are fully expressed.

Velocity/Speed: Builds are completed in a reasonable amount of time (reasonable variesfrom project to project).

Incrementality: Builds (re)execute the minimal subset of necessary commands to updatedeliverables without missing any necessary commands.

Repeatability: Given the same input, builds perform the same commands (i.e., deterministic builds). Moreover, it should be possible to reproduce a past build in the future (e.g.,if a package service goes down or is no longer available).

Independence: Builds should be isolated from each other.

7. How might we verify a pipeline works correctly?

A possible way to verify if a pipeline works correctly is to apply a form of taint analysis, i.e., track all outputs of a build and check who reads those outputs. Taint analysis has been effectively applied to the analysis of the surface area that is exposed to security issues (e.g., SQL injections). The same concepts may apply to the leakage of state within the scope of builds. If no test prioritization/selection strategy is used, large amounts of testing resources can be wasted on not impacted artifacts, delaying the delivery this can be verified with a predefined set of mappings between code and tests, given the code changes, the pipeline should trigger and only trigger those tests. Another way which can be used for verification are the variou automated linters which have been proposed to detect errors in the pipeline. 

> From Pipeline Workshop Conceptual Questions...

8. Trace the flow of a commit from the local App repository to running code in production. Can you see how it maps to the pipeline diagram?

In the pipeline we made a git commit which was the change to "HI to production" and build that locally ran the test and then triggered git push to prod which did rest of the pipeline where it sets the change to the remote repo which was production.git which triggered the post-receive event and ran the script of checking out in the prod-ww directory and then installed the modules and then it used pm2 to start or stop npm to run the applications which is now on port 5001. 

9. What are some issues that might occur if required to pass tests in a pre-commit hook?

The pre-commit hook is run first, before you even type in a commit message. It’s used to inspect the snapshot that’s about to be committed, to see if you’ve forgotten something, to make sure tests run, or to examine whatever you need to inspect in the code. Exiting non-zero from this hook aborts the commit. You can do things like check for code style (run lint or something equivalent), check for trailing whitespace (the default hook does exactly this), or check for appropriate documentation on new methods. But if we are working in a group project and multiple people are using the same repository then there maybe a case that if all the members run the pre-commit hooks it will pass but it may fail once everbody in the team pushes their code in the repository as in a project most function definitions are dependent on each other. 

10. What are some issues that could occur when running npm install (when testing), and then npm install again in deployment?

npm install is used to install dependencies in the current environment to run different applications. These dependencies are managed using package.json.These dependencies may change for different environment and they need to be reflected in the package file. Hence we must include the right package name with the version as well do avoid the dependency on this file. So, if we run npm install in testing and then in deployment without specifying the packages the required dependencies will not be presenr and the code may fail. 

11. Why is pm2 needed? What problems does this solve? What problems other problems might exist in more complex applications that our pipeline does not address?

PM2 empowers your process management workflow. It allows you to fine-tune the behavior, options, environment variables, logs files of each application via a process file. It’s particularly useful for micro-service based applications. pm2 will ensure that the web app will stay running, even if it crashes. PM2 assists in keeping the services of several servers up and running in more complex applications. It has a load balancer built in. 
Our pipeline does not address static analysis of the code which checks the code and the configuration files and looks for rule violation that maybe violations of code complexity or security etc. 

12. What are other stages of the pipeline that are missing?

Other stages of the pipeline which are missing are:

Pre-Build: Quick Checks for problems

Analysis: Run static analysis

Package: Create image or bundle binaries

Staging: Run system tests in staging environment


### Completion of Pipelines Workshop (32)

1. What did you learn in the pipelines workshop?

In the pipelines workshop we learnt about the basics of setting up a simple delivery pipeline, consisting of git hooks and shell commands. Inorder to commit a change to a repository then after some processing see these changes deployed to a production environment and make sure there are some checks which prevent bad things from being deployed. We also learnt that a delivery pipeline is a workflow system for building, validating, and deploying changes into a production environment. Pipelines are essential for supporting the paradigm of continuous deployment. A pipeline consists of stages, which typically represents a software engineering process, such as testing, static analysis, acceptance testing, or code review. When fully automated, pipelines allow commits to source code to be automatically tested and “seamlessly” deployed into production environments within minutes. A hook is a mechanism for specifying an action that occurs in response to an event. The action can be used to trigger other events. Thus, hooks can be composed together in order to create a simple pipeline. We created a simple pipeline that runs tests, installs, and “deploys” an application into production based on a commit.

2. What problems did you encounter?

As seen in the lecture since I am using a windows machine I was not able to run few commands in the normal command prompt I had to run them on bash. Another problem which I faced was that I forgot to make most of the files executable by using the chmod +x command hence was facing access issue for some files.  I had to give different permission level to different files like production-www and production.git.

3. Document the completion of the Pipelines workshop with a screen shot of passing opunit check.

![image](https://media.github.ncsu.edu/user/15014/files/505ae080-7d2f-11eb-87ca-ccc4d90a542c)
![image](https://media.github.ncsu.edu/user/15014/files/610b5680-7d2f-11eb-997c-44ab80570fd7)

