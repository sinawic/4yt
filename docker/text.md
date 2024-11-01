



## What are virtual machines and virtualization?
Before containers came along, the “virtual machine” was the technology of choice for optimizing server capacity. Programmed to emulate the hardware of a physical computer with a complete operating system, VMs (and hypervisors) make it possible to run what appear to be multiple computers with multiple different operating systems on the hardware of a single physical server.


## What is a hypervisor?
Virtualization is not possible without the hypervisor. A hypervisor, or virtual machine monitor, is the software that enables multiple operating systems to run side-by-side, all with access to the same physical server resources. The hypervisor orchestrates and separates the available resources (computing power, memory, storage, etc.), aligning a portion to each virtual machine as needed.

The main difference between Type 1 vs. Type 2 hypervisors is that Type 1 runs on bare metal and Type 2 runs atop an operating system. Each hypervisor type also has its own pros and cons and specific use cases.


## What are the advantages and disadvantages of virtual machines?
- You can virtually spin up multiple different OSs using a single physical machine
- You can manage and allocate resources and limits to VMs
- Since each VM includes an OS and a virtual copy of all the hardware the OS requires, VMs require significant RAM and CPU resources
- Moving VMs between public clouds, private clouds and traditional data centers can be challenging


## What are containers and containerization?
The container shares the kernel of the host OS with other containers, and the shared part of the OS is read-only. Therefore, the containers are lightweight, so you can deploy multiple containers on a single server (or a VM)—no more dedicating an entire server (or a VM) to a single application, allowing you to isolate multiple different applications from each other which will bring more and more benefits, like security benefits and managing different dependencies of applications separately. And, you only have one OS to maintain. Scaling up becomes fast and easy, without the need for more server space.


## But, as with virtual machines, containers have their disadvantages: 
- Because the OS is shared, a security vulnerability in the OS kernel is a threat to all containers on the host machine.
- Containerization is still a new solution with wide variances in implementation plans and skilled resources, making adoption a challenging process for some


## Virtualization vs. Containerization: What’s the right path for you? 
Virtualization enables you to run multiple operating systems on the hardware of a single physical server, while containerization enables you to deploy multiple applications using the same operating system on a single virtual machine or server.

![virtualization-vs-containerization](virtualization-vs-containerization.jpg)


## Docker Main Concepts
- Docker Engine
- Docker Build
- Docker Run
- Docker Compose
- Docker Hub


## Docker Engine overview
Docker Engine is an open source containerization technology for building and containerizing your applications. Docker Engine acts as a client-server application with:

- A server with a long-running daemon process dockerd.
- APIs which specify interfaces that programs can use to talk to and instruct the Docker daemon.
- A command line interface (CLI) client docker.
The CLI uses Docker APIs to control or interact with the Docker daemon through scripting or direct CLI commands. Many other Docker applications use the underlying API and CLI. The daemon creates and manages Docker objects, such as images, containers, networks, and volumes.

- https://docs.docker.com/engine/storage/
- https://docs.docker.com/engine/network/
- https://docs.docker.com/engine/logging/
- https://docs.docker.com/engine/manage-resources/pruning/


## Docker Build overview
Docker Build is one of Docker Engine's most used features. Whenever you are creating an image you are using Docker Build. Build is a key part of your software development life cycle allowing you to package and bundle your code and ship it anywhere.

- https://docs.docker.com/build/concepts/overview/
- https://docs.docker.com/build/building/multi-stage/
- https://docs.docker.com/build/cache/


## Docker Run overview
When you have your images downloaded or built them yourself based on your codebase or ... you can run containers based on those images which will actually run your applications or different services inside that container. separated in many ways with other services on the operating system or other containers, unless you explicitly define some kind of connection.

By running containers you can map ports from within the container to the host network so for example you can access a defined port inside the container from the host IP address. you can define storage points say it be docker volumes or bind mounts from the host filesystem to inside the container.


## Docker Compose overview
Docker Compose is a tool for defining and running multi-container applications. It is the key to unlocking a streamlined and efficient development and deployment experience.

Compose simplifies the control of your entire application stack, making it easy to manage services, networks, and volumes in a single, comprehensible YAML configuration file. Then, with a single command, you create and start all the services from your configuration file.

Compose works in all environments; production, staging, development, testing, as well as CI workflows. It also has commands for managing the whole lifecycle of your application:

- Start, stop, and rebuild services
- View the status of running services
- Stream the log output of running services
- Run a one-off command on a service


### Why use Compose?
Using Docker Compose offers several benefits that streamline the development, deployment, and management of containerized applications:

- Simplified control: Docker Compose allows you to define and manage multi-container applications in a single YAML file. This simplifies the complex task of orchestrating and coordinating various services, making it easier to manage and replicate your application environment.
- Efficient collaboration: Docker Compose configuration files are easy to share, facilitating collaboration among developers, operations teams, and other stakeholders. This collaborative approach leads to smoother workflows, faster issue resolution, and increased overall efficiency.
- Rapid application development: Compose caches the configuration used to create a container. When you restart a service that has not changed, Compose re-uses the existing containers. Re-using containers means that you can make changes to your environment very quickly.
- Portability across environments: Compose supports variables in the Compose file. You can use these variables to customize your composition for different environments, or different users.
- Extensive community and support: Docker Compose benefits from a vibrant and active community, which means abundant resources, tutorials, and support. This community-driven ecosystem contributes to the continuous improvement of Docker Compose and helps users troubleshoot issues effectively.

### Common use cases of Docker Compose
- Development environments
  When you're developing software, the ability to run an application in an isolated environment and interact with it is crucial. The Compose command line tool can be used to create the environment and interact with it.

  The Compose file provides a way to document and configure all of the application's service dependencies (databases, queues, caches, web service APIs, etc). Using the Compose command line tool you can create and start one or more containers for each dependency with a single command (docker compose up).

- Automated testing environments
  An important part of any Continuous Deployment or Continuous Integration process is the automated test suite. Automated end-to-end testing requires an environment in which to run tests. Compose provides a convenient way to create and destroy isolated testing environments for your test suite.

- Single host deployments
  For times that you are required to manage a single host to deploy and manage your services and applications, compose can become one of the best solutions as it will let you simply isolate your different applications, networks, storages... since you don't have multiple servers to manage separately.


<!-- docker compose demo -->


## Docker Hub overview
Docker Hub is a service provided by Docker for finding and sharing container images.

It's the world’s largest repository of container images with an array of content sources including container community developers, open source projects, and independent software vendors (ISV) building and distributing their code in containers.

What key features are included in Docker Hub?
- Repositories: Push and pull container images.
- Builds: Automatically build container images from GitHub and Bitbucket and push them to Docker Hub.
- Webhooks: Trigger actions after a successful push to a repository to integrate Docker Hub with other services.

Also we have many different container registry providers which docker hub is one of them:
- GitHub Container Registry
- Google Container Registry
- Red Hat Quay
- Amazon ECR
- Azure Container Registry




