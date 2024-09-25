
# why did they make things like docker, kubernetes

with the unending desire from users to more features, more entertainment and more convenience, technology companies and development teams need to work more and upgrade their services faster and faster.

these upgrades might be bug fixes, feature changes, new feature releases and so on. but the thing that is common in all upgrades is the cycle that the service has to go through in order to reach to the hands of the end users.

this cycle will most probably have many steps, each step ideally done in an automated way, so that the team and the company can rely on the upgrade and the end users don't experience bugs and faulty stuff by each upgrade.


## application parts

each application will consist of multiple parts, all doing their jobs in order to fulfill one common goal, we can name 
- frontend services
- backend services
- data store sevices
- caching services
- proxy and load balancer services
...
as the parts of the bigger application that provides some desired functionalities using all these services.


## challenges in application development

so of course there are smaller teams for each of these parts, with different challenges and different duties. and when the application is in production, and being used directly by end users, many bugs will appear, many new features will be required, many changes in current features will be required. so the dev teams will need to update their related code bases and will expect the new code to be published in relevant environments, like dev, test, staging and production environments. also they would want this publish process to be executed and delivered in a reliable way, in which unit tests, vulnarability analysis, end to end tests and ... would be taken into action, and then the new version will be published.
also for releasing the new version in the production environment the team might require a strategy, like canary release.
so as you might have already guessed, with having multiple code repositories for each part of an application and having mulitple environments managing and ensuring accuracy of each of these steps in a fast growing and a fast changing application would be a difficult to impossible job to maintain.
so what's the solution to save the world?


## what is CI/CD

CI and CD stand for continuous integration and continuous deployment/delivery. so with having all these requirements and challenges in mind, we must have a solution to automate units of works as much as possible, using tools and methods to ideally make all these steps done without the need for human touch.
this is where automation and configuration management tools come into play.
tools like gitlab, jenkins, ansible, terraform ...
each having their unique powers and functionalities to more and more facilitate our reactions as devops engineers to development and maintenance requirements. so as the end result ideally we will only be monitoring the cycle of the development, deployment and delivery of the application parts, and won't need to do any job manually by hand, because the tools will take care of all the jobs needed to be done.


## tools for easier delivery cycle

## ideal point for application development and delivery

