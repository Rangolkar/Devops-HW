# HW #5 Redis

Understanding the basic building blocks that form complex infrastructure is important for operating web-scale applications.

### Completing redis workshop (80)

In our [redis workshop](https://github.com/CSC-DevOps/Caches), we worked with server-side web technologies combined with redis to demonstrate concepts related to caches and queues.

Your assignment is to complete the workshop with the following additional considerations:

* Complete Tasks 1--5.
* Create a screencast.
* Answer conceptual questions related to lecture.

Setup

![image](https://media.github.ncsu.edu/user/15014/files/15b15700-9bbd-11eb-828a-bbab874204b3)

Redis-CLI

![image](https://media.github.ncsu.edu/user/15014/files/24980980-9bbd-11eb-86aa-26c04d3676d3)

A simple in-memory data store

![image](https://media.github.ncsu.edu/user/15014/files/42fe0500-9bbd-11eb-8b00-d920baf7361d)

A simple web server

![image](https://media.github.ncsu.edu/user/15014/files/9c673380-9bbf-11eb-9caa-5164bf11ad96)

![image](https://media.github.ncsu.edu/user/15014/files/c0c31000-9bbf-11eb-95c8-54e4c8e34a18)

![image](https://media.github.ncsu.edu/user/15014/files/c91b4b00-9bbf-11eb-93b5-a645a88550bd)

Using express and redis

Task 1: 

Creating a simple route in express

![image](https://media.github.ncsu.edu/user/15014/files/11873880-9bc1-11eb-80ee-44af9673683a)

![image](https://media.github.ncsu.edu/user/15014/files/1e0b9100-9bc1-11eb-8a41-cf4f6723a0f3)

Task 2:

Creating a simple storage api

![image](https://media.github.ncsu.edu/user/15014/files/58752e00-9bc1-11eb-8a8b-34321d9c519c)

![image](https://media.github.ncsu.edu/user/15014/files/b6097a80-9bc1-11eb-9fd7-aae67c0ba985)

![image](https://media.github.ncsu.edu/user/15014/files/f832bc00-9bc1-11eb-8bb1-4f1fd2901302)

Using caches and queues in meow.io

Task 3:

<!-- Without using Cache:

![image](https://media.github.ncsu.edu/user/15014/files/5c0ab400-9bc5-11eb-8d66-7a4294f8195d) -->

With using Cache:

![image](https://media.github.ncsu.edu/user/15014/files/44333000-9bc5-11eb-8b3b-1d279b81f6cf)

![image](https://media.github.ncsu.edu/user/15014/files/6e84ed80-9bc5-11eb-9660-5d226831733f)

Cat picture uploads storage

Task 4:

<!-- Before Change:

![image](https://media.github.ncsu.edu/user/15014/files/87db6900-9bc8-11eb-8789-47ea2610e7dc)

After Change: -->

Change made in Code:

![image](https://media.github.ncsu.edu/user/15014/files/b6594400-9bc8-11eb-8fed-bc82d3e4f3d3)

![image](https://media.github.ncsu.edu/user/15014/files/fddfd000-9bc8-11eb-9df0-444cd693eae0)

Task 5:

<!-- Before Change:

![image](https://media.github.ncsu.edu/user/15014/files/87db6900-9bc8-11eb-8789-47ea2610e7dc)

After Change: -->

Changes made to upload.js

![image](https://media.github.ncsu.edu/user/15014/files/07366e80-9c95-11eb-9e5f-29210aff0004)

Changes made to app.js 

![image](https://media.github.ncsu.edu/user/15014/files/1f0df280-9c95-11eb-8036-e5809531b087)

![image](https://media.github.ncsu.edu/user/15014/files/e5d58280-9c94-11eb-880f-5ca2931ec070)

### Conceptual Questions (20)

1. Describe three desirable properties for infrastructure.

- Availability: No or limited interruption to provided services
- Scalable: Can increase specific units in response to demand
- Efficient: Avoid redundant work, shift responsiblity to low cost components

2. Describe some benefits and issues related to using Load Balancers.

Benefits of Load Balancer:

- Increased Scalability:

Load Balancer can help to spread the traffic across multiple servers and the increase in the traffic can be handled in a much easier manner. Depending on how the site’s traffic fluctuates, the server administrators can scale the web servers up or down depending upon your site’s needs

- Redundancy

When you use load balancing for maintaining a website on more than one web server, the impact of hardware failure on a site’s overall uptime can be limited significantly. By implementing load balancing you can achieve redundancy. This means that when the website traffic is sent to two or more web servers and one server fails, then the load balancer will automatically transfer the traffic to the other working servers.

- Reduced Downtime, Increased Performance

Load Balancer helps you to shut off any server for maintenance and channel traffic to your other resources without disrupting work in any location. This way you can reduce the downtime, maintain the uptime and improve the performance.

- Efficiently Manages Failures

Load balancing helps in detecting failures early on and manages them efficiently, making sure that failure of any kind doesn’t affect the servers or the workload.

Issues related to using Load balancer:

If all requests and information during a user's session are stored in separate backend servers can cause the user's session to be disrupted. Also, when using load balancers, the number of TCP connections and the number of servers must be identical in order for the workload to be distributed equally which is sometimes difficult to do.

3. What are some reasons for keeping servers in seperate availability zones?

Availability Zones supports isolation and spreads risk by operating instances in independent pools. It ensures availability and robustness which is useful for supporting certain deployment strategies. 

4. Describe the Circuit Breaker and Bulkhead pattern.

Circuit Breaker Pattern:

When connecting to a remote service or resource, the Circuit Breaker Pattern may improve the reliability and resiliency of an application by handling faults that can take a variable amount of time to recover from.

Bulkhead Pattern: 

This is a failure-tolerant framework design. An application's components are separated into pools such that if one fails, the others will continue to work.

##### Screencast

Topic: Radhika Vijaykumar Angolkar's Zoom Meeting
Start Time : Apr 13, 2021 11:00 PM

Meeting Recording:
https://ncsu.zoom.us/rec/share/IETrkGT0ZeX9Sc__DtUZjpuHNWl4IcU03Rn7As5btohzYz9Vk3dlbv8iU_xC9Kks.hz9FiQAHESYATliD

Access Passcode: ePa%F0j^


##### Evaluation

- Complete task 1 30%
- Complete task 2 40%
- Complete task 3 50%
- Complete task 4: 70%
- Answer conceptual questions 90%
- Complete task 5: 100%