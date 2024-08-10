

## slide3:

Let’s first look at this single server setup which can serve a single user easily:

What do we have here?
Web browser/Mobile app as a user, DNS, Web server and a few other things like domain name, IP address etc.

Requests will be coming from the User and our only Web server will be processing the request and serving the response.


## slide4:
We see a new keyword here, What is DNS?
Just like the phonebook stores the mapping of a person’s name to their phone numbers (excluding those people who can memorise contacts), we have DNS which stores the mapping of domain names to IP addresses.

The domain name system (DNS) is the Internet’s naming service that maps human-friendly domain names to machine-readable IP addresses. The service of DNS is transparent to users. When a user enters a domain name in the browser, the browser has to translate the domain name to IP address by asking the DNS infrastructure. Once the desired IP address is obtained, the user’s request is forwarded to the destination web server.


## slide5:
Let’s separate our design into web tier and data tier to scale our system a bit and to be able to serve more users.

Our web servers will do all the processing, but our data is persisted in the database. We can perform CRUD (Create, Read, Update, Delete) operations on the database and further process our data before sending back the response in HTML, JSON formats etc.

## slide7:
A load balancer evenly distributes incoming traffic among web servers that are defined in a load-balanced set. The user connects to the public IP of the load balancer which further connects with the private IP of our defined servers.

Now at this point, we have handled issues of SPOF and single server overload with horizontal scaling + Load Balancer.

- If server 1 goes offline, all the traffic will be routed to server 2. This prevents the website from going offline. We will also add a new healthy web server to the server pool to balance the load.
- If the website traffic grows rapidly, and two servers are not enough to handle the traffic, the load balancer can handle this problem gracefully. You only need to add more servers to the web server pool, and the load balancer automatically starts to send requests to them.


## slide8
The Web Tier looks fine now. Let’s handle the Data Tier now.

We only have 1 database server as of now, so again issues like SPOF can come up.

To handle it we can follow the Data Replication strategy.

Wikipedia: “Database replication can be used in many database management systems, usually with a master/slave relationship between the original (master) and the copies (slaves)”.

A master database generally only supports write operations. A slave database gets copies of the data from the master database and only supports read operations.

Most applications require a much higher ratio of reads to writes; thus, the number of slave databases in a system is usually larger than the number of master databases.


## slide9:
With this architecture we can achieve below things:

- Better performance: In the master-slave model, all writes and updates happen in master nodes; whereas, read operations are distributed across slave nodes. This model improves performance because it allows more queries to be processed in parallel.
- Reliability: If one of your database servers is destroyed by a natural disaster, such as a typhoon or an earthquake, data is still preserved. You do not need to worry about data loss because data is replicated across multiple locations.
- Availability: To make the system highly available for read operations, if we only have 1 slave database available and that too goes offline, we can temporarily shift the read operations to the master database itself. In case of other slave database nodes are present, we can redirect the operations to other healthy slave databases.

If the master database goes offline, a slave database will be promoted to be the new master. In production systems, promoting a new master is more complicated as the data in a slave database might not be up to date. The missing data needs to be updated by running data recovery scripts.


## slide11
Now, we have a basic understanding of the web and data tiers, it is time to improve the load/response time.

We can use caching and CDN for this.

Caching
A cache is a temporary storage area that stores the result of expensive responses or frequently accessed data in memory so that subsequent requests are served more quickly. The application performance is greatly affected by calling the database repeatedly. The cache can help in solving this problem.

Once we get the request, the web server checks if the data is present in the cache. If it is present (also called cache-hit), then our cache access it and directly sends the data to the client. If data is not present in our cache (also called cache-miss), it queries the database then stores the response in the cache and sends data back to the client.

## slide14
Currently, our architecture maintains the session state of the user in the server itself — Stateful Architecture. So to authenticate a particular user, all its requests should go to its mapped server which stores its state.

This adds an overhead on the server, also adding and removing servers becomes difficult in case of changing traffic.

To decouple things further, we need to move to a Stateless Architecture, where any server can take the user request and process it further, hence stateless.

In this stateless architecture, HTTP requests from users can be sent to any web server, which fetches state data from a shared data store. State data is stored in a shared data store and kept out of web servers. A stateless system is simpler, more robust, and scalable.

Also, adding and removing servers can be done based on traffic load as we removed the state data from our web servers.


## slideX
Our application can get users from multiple geographic locations. To improve availability and provide a better user experience across wider geographical areas, supporting multiple data centers is crucial.

Let’s look at dealing with 2 geographic locations which use the concept of GeoDNS-routing:

GeoDNS uses the IP address of the user from whom the DNS request is received, identifies the IP location, and serves a unique response according to the country or region of the user.

Also, in the event of any significant data center outage, we direct all traffic to a healthy data center.


## slideX
Message queuing makes it possible for applications to communicate asynchronously, by sending messages to each other via a queue. A message queue provides temporary storage between the sender and the receiver so that the sender can keep operating without interruption when the destination program is busy or not connected. Asynchronous processing allows a task to call a service, and move on to the next task while the service processes the request at its own pace.

With MQ, a producer can publish messages to the queue and move on to do some other tasks as consumer may or may not be available to consume and process it at that particular time. Our consumer once available can read messages from the queue and then process them.

One good example will be an application that supports photo customization, including cropping, sharpening, blurring, etc. Those customization tasks take time to complete. Web servers publish photo processing jobs to the message queue. Photo processing workers pick up jobs from the message queue and asynchronously perform photo customization tasks.

Here the producer and the consumer can be scaled independently. When the size of the queue becomes large, more workers are added to reduce the processing time. However, if the queue is empty most of the time, the number of workers can be reduced.


## slideX
harding is the practice of adding more servers

Sharding separates large databases into smaller, more easily managed parts called shards. Each shard shares the same schema, though the actual data on each shard is unique to the shard.

User data is allocated to a database server based on a particular sharding key. Anytime you access data, a hash function is used to find the corresponding shard.

