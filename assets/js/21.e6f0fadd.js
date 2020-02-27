(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{277:function(e,t,n){"use strict";n.r(t);var a=n(0),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("Hero"),e._v(" "),n("h2",{attrs:{id:"introdution"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introdution"}},[e._v("#")]),e._v(" Introdution")]),e._v(" "),n("p",[e._v("The technology that is powering todays artificial intelligence boom was inspired by biology. Artificial Neural Networks (ANNs) were originally designed to mimic biological neurons, including how they connect to each other and how they communicate with each other. While it's conception was inspired by biology, ANN's took a sharp turn away from biological models fairly quickly. Deep Learning as it is known today still uses the concept of neural networks but only in a very loose sense. Deep Neural Networks are \"layers\" of neurons connected to the neurons in the next layer and processed one layer at a time. This creates a rigid structure for forward only neuron connections. Additionally, while biological neurons work via action potential spikes, DNN's have mostly done away with that concept because activation such as ReLU have been found to work significantly better in DNN environments. Additionally, ANN's don't represent true neurons structures in the brain, which have different shapes, such as rows of pillars or a shell of more sophisticated neurons encapsulating less complex neurons.")]),e._v(" "),n("p",[e._v("Deep Learning is effective, there is no doubt about that. Just like how planes were inspired by birds but don't flap their wings, neural networks don't need to emulate real neurons to perfection to work. However, there is a growing consensus in the AI community that deep learning has limitations. From the need for massive amounts of data to hours, days or months of training time for tasks that humans are able to learn in minutes. New machine learning techniques, such as reinforcement learning rely on deep learning as it's foundation for the next step of machine learning. In fact, one popular algorithm, known as Deep Q Learning is just this - the \"deep\" refers to a neural network that is used to approximate a value function that then the rest of the Q Learning algorithm uses to do things more sophisticated than a neural network itself could achieve.")]),e._v(" "),n("p",[e._v("While our planes don't flap their wings, neurons and brains stand out as unique. Birds fly through wing flapping but paper planes and gliders don't. Unlike flight, brains are unique - there is no other known system that function like a brain. In fact, many scientists and engineers consider the brain to be the most complex and sophisticated machine in the universe - the only machine that can perceive, act and question it's own existence. This project is an attempt to simulate neurons clusters and structures realistically using a \"realtime\" environment. Elixir and BEAM have some key features that make this exploration possible. There isn't a specific goal for this project - that is, there is no final product or deliverable. Rather the objective is to simulate neurons to understand what a closer emulation can teach us about neuron interaction, intelligence and learning and to carry that research back into the real world of machine learning.")]),e._v(" "),n("h2",{attrs:{id:"erlang-beam-and-elixir"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#erlang-beam-and-elixir"}},[e._v("#")]),e._v(" Erlang, BEAM and Elixir")]),e._v(" "),n("p",[e._v("Erlang first appears in 1986, making it an old language by today's standard. However, with age comes wisdom - Erlang has been used in telecommunications for 30+ years and in that time, the engineers working on it have refined Erlang for high concurrency and fault tolerance. Similar to Java and the JVM or Python and the Python Interpreter, Erlang is the language that runs on the BEAM VM (Björn's Erlang Abstract Machine).")]),e._v(" "),n("p",[e._v("Elixir is a new language, first appearing in 2011. Elixir runs on the BEAM VM, similar to Clojure, Kotlin or Scala for the JVM. Elixir and Erlang both produces artifcats in Erlang Abstract Format, which are fed into the BEAM VM. However, Elixir has the benefit of hindsight and is able to take into account 30 years of language design lessons, including language structure, concepts and tools. Consequentially, Elixir is much easier to use and provides the programmer with a an immense amount of power by allowing them to tap into the 30 years of concurrent distributed architecture design of BEAM, in addition to the constructs and libraries already available in Erlang.")]),e._v(" "),n("h2",{attrs:{id:"the-process"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-process"}},[e._v("#")]),e._v(" The Process")]),e._v(" "),n("p",[e._v("BEAM has only a handful of key constructs: Atoms (global enums), Maps (dictionaries), Enumerable (lists), Functions and the most interesting and relevant to this project: Processes. These processes are not OS level processes - rather, a BEAM VM process is a data structure of a few MBs that represent a process, it's state and it's mailbox. From the "),n("a",{attrs:{href:"https://elixir-lang.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Elixir"),n("OutboundLink")],1),e._v(" website:")]),e._v(" "),n("blockquote",[n("p",[e._v("All Elixir code runs inside lightweight threads of execution (called processes) that are isolated and exchange information via messages. Due to their lightweight nature, it is not uncommon to have hundreds of thousands of processes running concurrently in the same machine. Isolation allows processes to be garbage collected independently, reducing system-wide pauses, and using all machine resources as efficiently as possible (vertical scaling). Processes are also able to communicate with other processes running on different machines in the same network. This provides the foundation for distribution, allowing developers to coordinate work across multiple nodes (horizontal scaling).")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('current_process = self()\n\n# Spawn an Elixir process (not an operating system one!)\nspawn_link(fn ->\n  send(current_process, {:msg, "hello world"})\nend)\n\n# Block until the message is received\nreceive do\n  {:msg, contents} -> IO.puts(contents)\nend\n')])])]),n("h2",{attrs:{id:"the-scheduler"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-scheduler"}},[e._v("#")]),e._v(" The Scheduler")]),e._v(" "),n("p",[e._v("These processes require a scheduler to operate. The scheduler is responsible for ensuring that every process pulls from it's mailbox, performs it's action and then goes back to polling the mailbox. This is a step. The interesting feature of the scheduler is that every process in the VM gets one step before a process is allowed to step again. This means that while they are not actually \"realtime\" every process operates in lock step with every other process, effectively appearing to function in real time to "),n("em",[e._v("each other")]),e._v(", giving us the foundational block of the simulation. [CITATION REQUIRED]")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("#Step Start\nProcess 1 Step 1\nProcess 2 Step 1\nProcess 3 Step 1\n#Step End\n\n#Step Start\nProcess 1 Step 2\nProcess 2 Step 2\nProcess 3 Step 2\n#Step End\n")])])]),n("h2",{attrs:{id:"the-neuron"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-neuron"}},[e._v("#")]),e._v(" The Neuron")]),e._v(" "),n("p",[e._v("BEAM processes form the basis of neurons in the simulation. Each neuron is represented as a process, which receives inputs from other neurons as messages in it's mailbox and transmits activations to other neurons via messages. Connections can be formed in multiple ways, ranging from keeping a reference to the target neuron to using more sophisticated messaging methods discussed below.")]),e._v(" "),n("h2",{attrs:{id:"liveview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#liveview"}},[e._v("#")]),e._v(" LiveView")]),e._v(" "),n("p",[e._v("Currently in prerelease state, Phoenix LiveView is a library for server side HTML rendering in Elixir. LiveView creates a socket connection to the DOM of the browser and automatically updates the view when the backing data is changed. In this way, using LiveView with a library like D3JS is an excellent choice for rendering of the networks for visual inspection and real time modification.")]),e._v(" "),n("h2",{attrs:{id:"neat-neuroevolution-of-augmenting-topologies"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#neat-neuroevolution-of-augmenting-topologies"}},[e._v("#")]),e._v(" NEAT (NeuroEvolution of Augmenting Topologies)")]),e._v(" "),n("p",[e._v("The paper Evolving Neural Networks Through Augmenting Topologies introduced the NEAT algorithm. NEAT is an evolutionary algorithm for not only training neural networks but for also building their structure through genetic algorithms. While this is not the only algorithm for neuroevolution, it is uniquely suited to this project because of the flexibility of network structures that can be generated - neurons that connect backwards, neurons that connect to form a loop, neurons that bypass huge chunks of the network, etc. At presented, NEAT is the algorithm being primarily considered for creating networks.")]),e._v(" "),n("h2",{attrs:{id:"design-and-implementation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#design-and-implementation"}},[e._v("#")]),e._v(" Design and Implementation")]),e._v(" "),n("h3",{attrs:{id:"mark-i-agents-genserver-and-supervisors"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mark-i-agents-genserver-and-supervisors"}},[e._v("#")]),e._v(" Mark I: Agents, GenServer and Supervisors")]),e._v(" "),n("p",[e._v('The first implementation of this project used the Elixir construct Agents to represent a neuron. A network was an Agent with a collection of nueron agents and a cluster was an Agent with a collection of network agents. In addition, BEAM Supervisors were used to connect neurons, networks and clusters. Supervisors are a special type of process that watch other processes for crashes. Supervisors can respond to crashes by spining up new process, logging and load balancing and is an essential construct for high performance server side computing - Elixir\'s motto in fact is to "Let it Crash", relying on BEAMs fault tolerance rather than complex coding.')]),e._v(" "),n("p",[e._v("Unfortunately, this design became unweildy quickly. Supervisors don't have state where information such as the ID's of every neuron used by the network can be stored so in actuality, there were two processes for networks, one for the supervisor and one for the actor. Additionally, neurons had to store references to each others process IDs, however, process ID's are not allocated until after a neuron has started, adding complexity to initialization and modification. Finally, while supervisors are essential for server side processes such as data process, mail sending, login, etc. they are less essetential for a simulated neural network. Each neuron does very little work: read received input, add to current state, if current state is greater than activation threshold then transmit state to connected neurons. There are no other dependencies and if a single neuron fails in a network, then the whole network becomes invalidated. Ultimately, Mark I was too complex for the task at hand and shelved.")]),e._v(" "),n("h3",{attrs:{id:"mark-ii-genserver-and-phoenix-pubsub"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mark-ii-genserver-and-phoenix-pubsub"}},[e._v("#")]),e._v(" Mark II: GenServer and Phoenix PubSub")]),e._v(" "),n("p",[e._v("The goal of Mark II was to simplify the neuron, network and cluster representation, creation and modification process. The first step was to eliminate the usage of Agents and fallback to GenServers. Agents are in fact a subclass of GenServers (Generic Servers). Agents are designed to store and retrieved data with logic (i.e a stack implementation around a list). GenServers on the other hand are functions that take in the state of a process and can optionally modify it, resulting in a simpler and direct interface to the data. Supervisors were also discarded at the neuron/network level as they added no additional value at this state, though there is a potential for reintroduction at a later stage as needed.")]),e._v(" "),n("p",[e._v("Finally, the largest improvement made was to integrate Phoenix PubSub. PubSub is a standalone feature of the Phoenix library. PubSub allows processes to register to topics and all registered process receive any messages sent to that topic. Here, each neuron has an ID similar to "),n("code",[e._v("neuron:1:2:3")]),e._v(' representing Cluster ID 1, Network ID 2, Neuron ID 3. All processes that "connect" to this neuron subscribe to the topic ID of the target neuron. When the subscribed neuron has an activation, it sends the activation to the topic and all connected neurons receive that message.')]),e._v(" "),n("h2",{attrs:{id:"blocking-issue-interfacing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#blocking-issue-interfacing"}},[e._v("#")]),e._v(" Blocking Issue: Interfacing")]),e._v(" "),n("p",[e._v("After completing the Mark II revisions, a new roadblock was reached. It turns out that building such a network is the easy part of this problem. However, unlike the traditional machine learning language of choice, Python, Elixir is not designed for data science. While it's easy to build a network in Elixir, it's much harder to evaluate and test that network. Most of the required libraries in data science and machine learning such as PyTorch, Pandas, Numpy, OpenAI Gym, etc. are Python based. Rewriting such core functionality is simply too much overheard to maintain for an experimental design that changes often.")]),e._v(" "),n("h2",{attrs:{id:"mark-iii-research"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mark-iii-research"}},[e._v("#")]),e._v(" Mark III Research")]),e._v(" "),n("p",[e._v("Instead of trying to reimplement data science in Elixir the current direction is to develop the neural simulation engine in Elixir and interface to it from outside using Python. The goal is to build the system that allows for the creation of networks, neurons and clusters via an API which can be queried and modified from outside of Elixir and BEAM, via Python. In this way, the Python libraries can be used to setup experiments (for example using OpenAI Gym) and connect to the simulated network in Elixir for predictions. Two options are being considered for this:")]),e._v(" "),n("h3",{attrs:{id:"erlang-port-protocol"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#erlang-port-protocol"}},[e._v("#")]),e._v(" Erlang Port Protocol")]),e._v(" "),n("p",[e._v("Erlang Port Protocol is the BEAM protocol for interfacing functions inside BEAM to the outside world. Similar to Python bindings for C libraries, using EPP, it is possible to talk directly to the functions inside Elixir to manipulate data. More about this can be found here: https://hackernoon.com/mixing-python-with-elixir-7a2b7ac6696")]),e._v(" "),n("h3",{attrs:{id:"phoenix-webserver"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#phoenix-webserver"}},[e._v("#")]),e._v(" Phoenix Webserver")]),e._v(" "),n("p",[e._v("Another alternative is to build a server with an API for performing specific tasks (i.e. create network with configuration x, delete neuron y, etc.). The Pheonix library has many communication methods ranging from REST endpoints to WebSockets. This approach unlike the EPP above would result in a more decoupled library which can be used with any language at the cost of added complexity and implementation work.")])],1)}),[],!1,null,null,null);t.default=r.exports}}]);