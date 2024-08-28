

## slide2
You open your browser every day and go to your preferred websites, whether they be for social media, news, or online shopping. By entering a URL or clicking on a link to the page, you can access this page. Have you ever considered what goes on in the background?

The process involves the browser, your computer’s operating system, your internet service provider, the server where you host the site, and the services running on that server.


## slide4
Websites are collections of files, often HTML, CSS, Javascript, and images, that tell your browser how to display the site, images, and data. They need to be accessible to anyone from anywhere at any time, so hosting them on your computer at home isn’t scalable or reliable. A powerful external computer connected to the Internet, called a server, stores these files.

When you point your browser at a URL like https://github.com/, your browser has to figure out which server on the Internet is hosting the site. It does this by looking up the domain, to find the address.

Every item connected to the Internet has a special address known as an IP address, including servers, smartphones. Four numerical parts make up an IP address:

1.0.168.192

But numbers like this are hard to remember! That’s where domain names come in. github.com is much easier to remember than 1.0.168.192, right? Imagine having to remember all the phone numbers of your contacts without having the Contacts app on your phone. Your Contacts app lets you look up phone numbers by name.

On the internet, we follow the same procedures. Similar to the Contacts app on our phones is the domain name system, or DNS. DNS helps in locating servers on the Internet for us.

Now that we know about the different parts and how they relate to one another, let’s look at each step of the process and how the browser communicates with the server when you type in a URL.


## slide5
You type a domain in your browser and press Enter.
here are what different parts of a domain mean

https:// is the scheme. HTTPS stands for Hypertext Transfer Protocol Secure.

github.com is the domain name of the site. It is the memorable address and points to a specific server’s IP address.

sinawic is the path of the url

4yt is the resource of this url.


## slide6
The browser must determine which Internet server to connect to when you type the URL into the address bar and hit Enter. To do that, it needs to look up the IP address of the server hosting the website using the domain you typed in. It does this using a DNS lookup.

a DNS resolve can happen in different levels:
- browser cache
- the operating system
- local network at your router
- DNS server on local network
- internet service provider (ISP)
If the browser cannot find the IP address at any of those layers, the DNS server on your local network or at your ISP does a recursive DNS lookup. A recursive DNS lookup asks multiple DNS servers around the Internet, which in turn asks more DNS servers for the DNS record until it is found.


## slide7
Transmission control protocol, more formally known as TCP, is used throughout the public Internet routing infrastructure to route packets from a client browser request through the router, the Internet service provider, through an Internet exchange to switch ISPs or networks, and finally to find the server with the IP address to connect to.

Once the browser finds the server on the Internet, it establishes a TCP connection with the server and if HTTPS is being used, a TLS handshake takes place to secure the communication.


## slide8
Once the browser has established a connection with the server, the next step is to send the HTTP request to get the resource or the page.


## slide9
In order to request the contents of the page, the browser first sends an HTTP request to the server. A request line, headers (or request-related metadata), and a body make up an HTTP request. The server can determine what the client (in this case, your browser) wants to do using the information in the request line.


## slide10
HTTP headers let the client and the server pass additional information with an HTTP request or response

The last part of the request is the body. For a request that manipulates resources, like POST, PUT, or PATCH, the body will contain the data from the client to create or update.
The request body can be in different formats and the server understands the format based on a request header, Content-Type.


## slide11
The server takes the request and based on the information in the request line, headers, and body, decides how to process the request.


## slide12
Server processes request and sends back a response

An HTTP response is made by a server to a client based on the URL path, headers and body that it receives from the request. The aim of the response is to provide the client with the resource it requested, or inform the client that the action it requested has been carried out; or else to inform the client that an error occurred in processing its request.


## slide13
Browser renders the content, based on the response
Once the browser has received the response from the server, it inspects the response headers for information on how to render the resource.
based on the content-type of the response browser knows what type of data it received an what can it do with the data.
It can be HTML or data in json format ...
