# HW4---Testing and Analysis

> You will be answering questions related to watching the lecture on Testing and Analysis and performing the class and workshop activities.

You have been assigned a GitHub repository `HW4-<unityid>`.

Due Thursday, April 1st before midnight.

### Class discussion (18)

Describe your discussion for testing.

1. What are some tradeoffs in having lots of unit tests and/or UI/integration tests in a CI pipeline?

I had attended ams2 voice channel for this discussion. Where we discussed our personal experiences of this particular tradeoff. Having a lot of unit tests/integration tests is a waste of time sometimes because running the tests takes a lot of time and sometimes it is not necessary that the features which we are testing are of not utmost importance still we end up spending time on it. Rather if in CI pipeline we just include tests which makes sure that the build is not broken and the individual feature tests can be done by the respective team will save a lot of time of the entire enterprise which is using the same CI pipeline for their build. 

2. What are some reasons why 100% test coverage (i.e. statement coverage), might be difficult, impossible, impractical, or even counter-productive to achieve in practice.

One of the few reasons we discussed included the reason why 100% statement coverage is counter-productive to achieve in practice because to attain full statement coverage requires testing with the controlling decision true, but not with a false outcome. No source code exists for the false outcome, so statement coverage cannot measure it but if you only execute a simple if statement with the decision true, you are not testing the if statement itself. Since simple if statements occur frequently, this shortcoming presents a serious risk. Also, statement coverage cannot distinguish the code separated by logical operators from the rest of the statement. Statement coverage does not call for testing loop termination decisions. Statement coverage only calls for executing loop bodies.

### Conceptual Questions (42)

1. What are the two different senses of testing and how do they differ?

The two senses of testing are:

- Discovery : Which says that Software Testing is the Process of executing a program or system with the intent of finding errors. It is the white box testing ie the edge case detection. To see how much we have explored in a program.

- Verify : It is any activity aimed at evaluating an attribute or capability of a program or system and determining that it meets its required results. It includes Unit Tests and Assertions and exceptions testing. 

2. What is the goal of code coverage?

We do code coverage because executing faulty code is necessary condition for revealing a fault. Especially, when taking nto account internal structure of the code, or white box testing. Benefits of code coverage are that testing criteria is based on actual code behavior, not requirements hence can be measured objectively and automatically. It can be used to measure quality of test suite, or compare test suites. Therefore, we can say that by increasing the amount of possible code run, we are decreasing the chances of having a fault. Code coverage measures this property. 

3. Does condition coverage imply branch coverage? Why not?

Condition coverage aims to cover the various condition whereas branch coverage involves checking whether every possible branch is covered so there can be a case where all conditions are covered but still the branch which we take take is only one. Hence we can say that condition coverage does not imply branch coverage because as we saw in the example mentioned in the lecture we could acheive condition coverage but not necessary branch coverage. In the example mentioned in the lecture we were covering all the conditions but the branch that we were taking was always the True one.  

4. Why might be data-flow coverage be a more effective criteria for testing than achieving path coverage?

In path coverage there can be many examples where it can be infeasible an example which professor discussed in lecture was that of a while loop which we are running until some condition becomes true we can have an infinite amount of code path which we may need to cover this makes generating a test suite which covers adequate amount of all possible code path almost impossible. Hence to pratically get 100% path coverage is practically impossible. Whereas,  Data Flow Coverage breaks away from the control flow and focuses on assignments and computational uses of variables. Hence, we can say that data-flow coverage is a more effective criteria for testing than achieving path coverage.

5. What is the primary limitation of mutation coverage?

The main idea of mutation coverage is instead of thinking of the test and what is running in the code we think about what if  created an invalid version of my code and to ask the question of does my test actually catch that. So the way we would compute mutation coverage is by creating invalid mutant program such as x>0 and ask the question does our test cover it? So given all possible mutants we can generate how many of them are caught by our test. 

Some Limitation of mutation Testing are:

- Complex mutations are difficult to implement.
- Mutation testing is time-consuming and expensive.
- Large mutant programs need to be tested against the original test suite.

6. How can an acceptance test be automated while still allowing human review?

Acceptance Testing Evaluates the system delivered by developers. It is carried out by client. Its goal is to demonstrate that the system meets the requirements and its easy to use. You can automate acceptance tests by capturing enough detail for human review and with baseline screenshots pixel-based comparison can be used for regreassion tests. Also possible with semantic UI diffs.

7. Why might the failure rate of a test be useful to know when analyzing a test suite?

A test's failure rate is helpful in prioritizing a test suite. The tests with the highest failure rate are run first, followed by the tests that run faster. As a result, the build is faster and more efficient.
The failure rates of tests in a test suite can be used to make detections. Failure rates may be gathered over time to establish a historical failure rate graph, with recent failures suggesting recent bugs or problems arising from recent code changes. When a test suite contains tests that are proven to fail based on historical data, the test suite may be made to run faster in order to boost results.

8. What's the highest level of flakyness a test can achieve and why? Hint: Think what behavior are purely random decision would be?

A highest level of flakyness a test would acheive is 50% because falkyness = min(passing,failing) / (passing + failing) hence in this case if the number of passing case = number of failing case then we can get maximum flakyness which will be 50%. 

9. What is the difference between generative and mutation-based fuzzing techniques?

Black-box fuzzing can be implemented in two ways:

Generative: test input is randomly created. Generation can be guided by grammars or other domain knowledge. This approach is commonly used for security testing.

Mutation: test input is randomly modified. The test input can be existing templates, input files, or captured network traffic that is replayed. Imagine you were testing Microsoft Word and you had a 200 page document. If you randomly made changes to the document and attempted to open it with Word—chances are you might be able to discover a bug.

10. Why might minification of fuzzing inputs be useful for debugging an fault?

In order to make revealing a fault easier, it is possible to automatically reduce the input, by systematically deleting the input and checking to see if the fault is still revealed. Typically, the process involves deleting parts of the input, until the smallest version of the input that still produces the error remains. Hence, minification of fuzzing inputs be useful for debugging an fault.

11. Why regex isn't enough for performing static analysis?

If we use regex to detect message chains in code? While we can detect one message chain, we miss one, and falsely detect another. The short answer is that any implementation of a static analysis that results in both high false positives and high false negatives is going to incite an angry mob of programmers, who will insist the tool be removed from the CI pipeline.
Hence, we need a technique that is more sound, more precise, and frankly often easier to implement than a basket of regex. 

12. When implementing a code smell detector, how might you detect duplicated code?

Duplicate Code is a computer programming term for a sequence of source code that occurs more than once, either within a program or across different programs owned or maintained by the same entity.  Two code blocks may be considered as duplicates, even if they are not completely identical (i.e., copy/paste) but have few occasionally different tokens, or have an identical functionality. The later is more difficult to detect. There are various tools availible which can be used to detect duplicate code few of them are:

- Clone Detective VS
- PMD's CPD reporting default format is Text
- JSINSPECT - For structurally similar JS code
- JSINSPECT can be integrated with VSS Code
- DupFinder (Jet brains tool) supports HTML reporting by applying XSL transformation on XML output
- Simian supports Java, C#, C, C++, Ruby, Objective -C, Groovy, Swift
- Simian is available as IntelliJ plugin
- Atomiq supports C#, VB.Net, ASPX, Ruby, Python, Java, C, C++, ActionScript, and XAML
- Atomiq console edition supports HTML and CLI
- Atomiq is Standalone

13. Why is an visitor pattern using technique for writing static analysis based code checks?

If there is a complicated data structure we dont know a way to navigate it or perform actions on it. A visitor pattern implements a travelsal of that dat structure so that you visit every element of that data structure it will have a call backward which will says that it found a method node. It is basically used to abstract the process of visiting a data structure such as abstract syntax tree(AST). What it enables in short is a way for us to selectively visit nodes of interest while ignoring the others and without any knowledge of travelsal.

14. How might advanced analysis techniques such as statistical analysis or automated program repair impact the design and usage of an automated software pipeline?

Statistical analysis will take lots of test runs which helps us in identifying the most likely statement to be failing. It is used to compare faulty and unfaulty execution traces. Fault location uses statistical properties to calculate the suspiciousness of a llne location. Automated Program repair is the idea of combining statistical fault utilization and repair idea where we can randomly generate fixes to code and then see if it passes the test suite. It can used to improve programmer productivity, improve security vulnerability also it can be used for self healing systems.  

### Coverage Calculation (10)

Calculate the branch coverage of the following test suite:
   - demo(1,1,1);
   - demo(0,0,0);

```js
function demo(a,b,c) {
   if( c && b ) { c = b * b; }
   else if( a )
   {
      if( b )
      {
         if( c )
         {
            console.log( a + b + c );
         }
      }
   }

   if( a || b || c )
   {
      return 0;
   }
   return 1;
}
```

There are total of 15 branches out of which these tests cover 10 Hence the branch coverage is 66.67%.

![image](https://media.github.ncsu.edu/user/15014/files/c0df2800-9302-11eb-9412-7144833bfd50)

![image](https://media.github.ncsu.edu/user/15014/files/ecfaa900-9302-11eb-8c5a-07abed26cdbe)

![image](https://media.github.ncsu.edu/user/15014/files/35b26200-9303-11eb-9028-dbb40d9cccf6)

![image](https://media.github.ncsu.edu/user/15014/files/44991480-9303-11eb-8301-607a8bc6c7dc)

This is the cse when done using the automated branch coverage program which professor has given. But when tried manually I am getting the branch coverage of 5/10 = 50% for demo(1,1,1) it travesed 2 branches and for demo(0,0,0) it travesed 3 branches so total of 5 as seen in the image below.

![image](https://media.github.ncsu.edu/user/15014/files/90b77980-9342-11eb-96af-d6485dbdac81)

### Workshops (30)

* Document completing the Coverage workshop.

![image](https://media.github.ncsu.edu/user/15014/files/7a60c080-917e-11eb-973e-42212d1721ac)

![image](https://media.github.ncsu.edu/user/15014/files/c3654480-917f-11eb-9c7f-efadb42fbabf)

![image](https://media.github.ncsu.edu/user/15014/files/cd874300-917f-11eb-94f1-e296918280a1)

![image](https://media.github.ncsu.edu/user/15014/files/f6a7d380-917f-11eb-867f-ed76c5f48e4f)

![image](https://media.github.ncsu.edu/user/15014/files/fdcee180-917f-11eb-9ce1-89e96cf7c776)

![image](https://media.github.ncsu.edu/user/15014/files/1fc86400-9180-11eb-9ae3-d50233787413)

* Document completing any two of the following workshops. 
   - Test Suites
   - Fuzzing

    npm install

    ![image](https://media.github.ncsu.edu/user/15014/files/eda90900-9163-11eb-9076-2a7006854f9f)

    Without changing the string

    ![image](https://media.github.ncsu.edu/user/15014/files/c272e980-9164-11eb-96a2-03180ade0dab)

    Step 1: 

    With 25% chance, remove a random set of characters, using array.splice from a random start position.

    ![image](https://media.github.ncsu.edu/user/15014/files/3c0ad780-9165-11eb-8573-4cc7652291b8)

    Step 2:

    With a 25% chance, insert random characters into the string.

    ![image](https://media.github.ncsu.edu/user/15014/files/6197e100-9165-11eb-9b18-e364d511aae9)

    Step 3:

    With a 50% chance, replace any single quote strings with a random integer.

    ![image](https://media.github.ncsu.edu/user/15014/files/7ffddc80-9165-11eb-976f-c1b5dd60e267)

    Step 4:

    With a 25% chance, steps 1 and 2 (add a do/while loop).

    ![image](https://media.github.ncsu.edu/user/15014/files/b6d3f280-9165-11eb-9f32-0cf0683e74ab)

    Final Code of mutate.js which has all the changes:

    ![image](https://media.github.ncsu.edu/user/15014/files/585b4400-9166-11eb-883f-0718d804b3d2)

    Experiments:

    Before your do while loop, make a change to always reverse the input string (simply call array.reverse(), which will change the array in memory).

    ![image](https://media.github.ncsu.edu/user/15014/files/b6882700-9166-11eb-8cdd-38e671e24ab9)

    ![image](https://media.github.ncsu.edu/user/15014/files/54302600-9168-11eb-96d2-2a4dca2c99fa)

    Increase the number of iterations run from 1000 to 15000. Did you find any new faults? Try with an even larger number, 100000. Did that make a difference? Why do you think changing the number of runs might help reveal more faults (or not)?

    Changing the number of runs helps in revealing more faults because more the number of runs more are the different changes made to the code and hence more are the number of errors.

    ![image](https://media.github.ncsu.edu/user/15014/files/737d8200-916d-11eb-8e23-4a6af61f9435)

   - Analysis

   ![image](https://media.github.ncsu.edu/user/15014/files/e8d67900-9279-11eb-9e42-939e82ccfff2)

   ![image](https://media.github.ncsu.edu/user/15014/files/03a8ed80-927a-11eb-8856-7545106c7575)

   SimpleHalstead: The number of unique symbols and operators in a function. Note: For the purposes of the workshop, you can simply count the number of unique Identifier and BinaryExpression nodes in a function.

   ![image](https://media.github.ncsu.edu/user/15014/files/39ed6980-9288-11eb-99f3-8e7eb07aa247)

   ![image](https://media.github.ncsu.edu/user/15014/files/4a9ddf80-9288-11eb-9d28-c72a8b0ca006)

*Note:* You will want to coordinate with your team on which ones you cover, as it will directly relate to your responsibilities for the team project.

*Note:* for the workshop you do not complete, it is still recommended to review the video in order to get the basic concepts of the workshop and topic.