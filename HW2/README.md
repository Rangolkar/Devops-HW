# HW2

> You will be answering questions related to watching the lecture on CM and performing the class and workshop activities.

You have been assigned a GitHub repository `HW2-<unityid>`.

Due Friday, 26th before midnight.

### Class discussion (20)

Describe your discussion for defining idempotency.  What examples did you use for idempotent and not idempotent operations?

I had joined us-east-1 voice channel 16th February 2021 where we discussed about the different definitions of idempotence which were similar to what profesor had mentioned in his lecture which was an idempotent system is able to react a desired state, regardless of its current state also the other definition stated that in idempotency applying the same operation multiple times results in the same state. 
We also discussed about few examples of idempotent operation. From a RESTful service standpoint, for an operation (or service call) to be idempotent, clients can make that same call repeatedly while producing the same result. In other words, making multiple identical requests has the same effect as making a single request. The different HTTP methods which are idempotent are GET, HEAD, PUT, DELETE No matter how many times you call them, they will produce the same result with the same URI, while POST and PATCH is not idempotent.

### Answer the following conceptual questions (40)

Please answer using your own words.

1. What are the core activities of *traditional* configuration management?

core activities of traditional configuration management are:

Identify all items related to software.

Manage Changes to those items.

Enable variations of items and changes.

Maintain quality of versions and releases.

Provide traceability between changes and requirements.

2. What are some components of modern configuration management?

components of modern configuration management are:

Git branches

Package Managers, task and build managers

Inventory, configuration scripts

Infrastructure update patterns

Orchestration and configuration tools

Testing and compliance

3. How does modern tooling and software development processes change configuration management for the better?

In modern tooling source Control makes easy to identify software components and manage changes, we dont need file listing in document.
Variations can be enabled with branches and feature flags. Don't need manual baselines.
Better code review practices + CI/CD pipelines can enable quality control and traceability between requirements and code in production. You dont need control board.

4. What are some reasons why dependencies might be difficult to configure for a computing environment?

As professor said in the lecture gists cannot be executed and most of the times it is because of dependency error for example only 8% of python notebooks are executable and only 25% of python code snippets from stack overflow are runnable. 
We also cannot use naive algorithms to enable executable gists like for example to just pip install all the required pacakges, but that also doesnt work.
We can use package managers but often package managers themselves require transistive dependencies also there is a lot of missing glue work like the configuration files that need to be set up, the standing up services are also complicated.

5. Why is idempotency useful for configuration scripts?

As per the definition an idempotent system is able to react a desired state, regardless of its current state. Configuration scripts are usually used to do tasks on the host machine so to avoid doing a single task multiple times if it is already done we need the script to be idempotent. For example, if a configuration script downloads a file using wget. If you run this script twice, the shell module doesn’t have a way to check if the task has already been done. If it isn’t idempotent and it will wastefully download the file over and over to again! In such situation we need the script to be idempotent. 

6. Explain the difference between pull and push configuration models.

In push configuration model we have the configuration tool on a configuration server and its job is to  push configuration to our ASSETS(servers)
It is easier to manage, Less enforcement of state(ASSET can drift from config) and ASSET is managed centrally.
In Pull configuration model all our ASSETS are running in agent and it is using some sort of communication with the server and asks what should be its configuration and it pulls it from the server and applies it itself. It is better at ensuring assets stay in sync with config, but it is more complex and the asset can register itself.

7. Compare and contrast living infrastructure from immutable infrastructure.

In Living infrastructure the instance stays alive and you can constantly update it which means you maintain same dedicated instance. In this type we can skips provisioning step for each update, we can accumulate updates over time, it is simple as the instrastructure remains static also resilence can be reduced. But in this case idempotent operations are desirable as we need to make sure we can run the same script over and over again. Configuration drift is possible if manualupdates are allowed. 
In immutable infrastructure you recreate a new instance every time there is new change which means you deploy a new read-only instance. Everytime we want a new system we build a new image. In this method the images are built offline and deployed with provisioning step. Hence, the updates can be slower due to additional provisioning and setup time. Immutability is difficult hence we end up having complicated infrastrucure and we end up having different escape hatches like writeable volumes or data subscriptions.

8. Explain the difference between provisioning and configuration management.

Provisioning is what gets your machine up. Either kickstarting a machine, or virt install, or using an API to launch a cloud vm.
Configuration management is what happens right afterwards. In fact, the last thing a provisioning tool does is launch your configuration management tool.
Provisioning is the process of setting up IT infrastructure. It can also refer to the steps required to manage access to data and resources, and make them available to users and systems. 
Whereas, configuration management is a process for maintaining computer systems, servers, and software in a desired, consistent state. It’s a way to make sure that a system performs as it’s expected to as changes are made over time. 

9. What impact does configuring a server to listen on 0.0.0.0 have? Why might this be a problem?

Configuring a server to listen on 0.0.0.0 allows connections from every possible network to that server which means anyone can access that server this may cause security concerns, so we need to limit the access to our server by for example limiting the access to the localhost and not allow everyone in the world to do that.

10. What is an interesting thing you learned about research in configuration management?

Research in configuration management is about the future in CM, what next can be done to make CM more solid. One research which I found interesting is of Automatic inference of Dockerfile in which given a code snippet, we should be able to infer the dependencies associated with it. This was done using address name resolution and transistive and system dependencies. It is done by scanning through all the packages that are availible and dynamically extract co-dependencies and build association rules from existing docker files and use more information to make mappings between the names. 

### Answer the following questions about the CM workshop (40)

1. How did you create a connection between between the configuration server and web server?

Inorder to automatically connect to the server without having to manually authenicate each connection. We created a pair of public/private keys for authentication through ssh. 
From your host machine, we created a new public/private key pair, running the following command:
ssh-keygen -t rsa -b 4096 -C "web-srv" -f web-srv -N ""
The public key will be used to authorize the private key for connections to the web-srv and the private key will be stored in the config-server. It can then be used, to make a ssh connection to the web-srv, (ssh -i web-srv).
We stored the private key content inside the config-server, in a file called ~/.ssh/web-srv and added the pubic key to the list of authorized keys in the ~/.ssh/authorized_keys file on the web-srv!

2. Did you have any problems getting this setup?

I faced a few problems while getting this setup
I pasted the wrong keys inside the wrong server that is I pasted the public key inside the config server and private key inside web server.
I had hanged the permission of the authorized key file to chmod 600 which came in between the ssh's ability to read it.

3. Why does the permission of the private key need to be changed?

The permission on the private key should be changed to remove the permission denied error on the config server so inorder to reduce who can read or access the ~/.ssh/web-srv file we need to run chmod 600 ~/.ssh/web-srv.

4. If ssh can be used to execute remote commands, why not just use bash commands for CM?

While being able to run ad-hoc commands and scripts provides a useful capability, there are several constraints that make this impractical.
Writing bash scripts can be error-prone. Most commands are not idempotent, meaning they may cause errors or unexpected behaviors if run multiple times on the same servers. Finally, configuration of servers is an inherently noisy problem, due to network issues and random service and hardware failures. This means, you often need to resume a configuration operation after experiencing partial failure.

5. What are some reasons why it is useful to have a configuration server.

Configuration server has a configuration tool Ansible and a bunch of files like inventory file and private key. to manage all the assets that we want to control for example a web server. If there are 100's of web server it is easier to control them if we have only a configuration server. All the commands are run on the single server and it will be executed on all the web servers. 

##### Part 3

*Wait for updated version of part 3 before completing*

1. What is your understanding of the `yaml` format?

YAML  ("YAML Ain't Markup Language") is a human-readable data-serialization language. It is commonly used for configuration files and in applications where data is being stored or transmitted. YAML targets many of the same communications applications as Extensible Markup Language (XML) but has a minimal syntax which intentionally differs from SGML. It uses both Python-style indentation to indicate nesting, and a more compact format that uses [...] for lists and {...} for maps so that JSON files are valid YAML 1.2. YAML is a superset of JSON. This means that, in theory at least, a YAML parser can understand JSON, but not necessarily the other way around.In general, there are certain things I like about YAML that are not available in JSON.

2. What is the difference between a *module* and *task* in ansible?

Task is units of action in Ansible. You can execute a single task once with an ad-hoc command. A task is, paraphrasing the manual, 'nothing more than a call to an ansible module'. That call definition, however, knows nothing of on which hosts it is supposed to run on.
Whereas, modules are units of code Ansible executes. Each module has a particular use, from administering users on a specific type of database to managing VLAN interfaces on a specific type of network device. You can invoke a single module with a task, or invoke several different modules in a playbook.

3. What are situations where you might use *variables* and *templates* in ansible?

Variables are used to avoid hard-coding configuration values inside ansible tasks. You can declare variables as part of the top-level playbook object and reference variables inside of the playbook by using "{{variable_name}}". You can also load variables from an external file with vars_files:. Variables can also be loaded as prompts, with vars_prompt, or passed on the command line: --extra-vars "version=1.23.45 other_variable=foo". 
Templates are powerful ways to setup basic configuration settings without hard coding values. When you use a template, it will get the template, fill in any parameters, and then copy the file over to the destination. This can be useful for setting up complex configuration files such as apache, mysql, or jenkins.

4. What are some operators that enable idempotence in ansible tasks?

Some operators that enable idempotence in ansible tasks are Output/Register/Conditions. When a module is executed, you can save the results of that command using register. Further, you can use conditions to control whether a task is executed with when. You can control whether a command is considered changed, using changed_when.

5. Why are roles useful for organizing ansible playbooks?

As your playbooks grow more complex in size, you will start to think about ways to organize and seperate out tasks. Roles can be used in that case. Roles allow for you to essentially “include” in other playbooks. However, they use a particular layout to organize content. Roles let you automatically load related vars_files, tasks, handlers, and other Ansible artifacts based on a known file structure. Once you group your content in roles, you can easily reuse them and share them with other users.

