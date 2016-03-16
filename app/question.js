// TAGS:
// foo, bar, ipv6
var questions = {
	getByTagName: function() {

	},
	getByType: function(type, start, amount) {
		var questions = [];
		for (var i = 0; i < this.all.length; i++) {
			if (this.all[i].question_type === type) {
				questions.push(this.all[i]);
			};
			this.all[i]
		};
		return questions;
	},
	getFrom: function(x, y) {
		var questions = [];
		for (var i = x; i < y; i++) {
			questions.push(this.all[i]);
		};
		return questions;
	},
	all: [
		{
			question_type: "icnd2",
			tags: ["HSRP", "VRRP", "GLBP"],
			question: "Which one of these is a valid HSRP Virtual Mac Address?",
			choices: [
				{
					id: "A",
					choice: "0000.0C07.AC01",
					correct: true
				},
				{
					id: "B",
					choice: "0000.5E00.0110",
					correct: false
				},
				{
					id: "C",
					choice: "0007.B400.1203",
					correct: false
				},
				{
					id: "D",
					choice: "0000.C007.0201",
					correct: false
				}
			],
			multiple_choice: false,
			correct_choices: 1,
			explanation: "With HSRP, two or more devices support a virtual router with a fictitious MAC address and unique IP address. There are two version of HSRP. With HSRP version 1, the virtual router’s MAC address is 0000.0c07.ACxx , in which xx is the HSRP group.With HSRP version 2, the virtual MAC address if 0000.0C9F.Fxxx, in which xxx is the HSRP group.",
			imgSrc: ""
		},
		{
			question_type: "icnd2",
			tags: ["HSRP", "VRRP", "GLBP"],
			question: "Which three statements about HSRP operation are true? (Choose three)",
			choices: [
				{
					id: "A",
					choice: "The virtual IP address and virtual MAC address are active on the HSRP Master router.",
					correct: true
				},
				{
					id: "B",
					choice: "The HSRP default timers are a 3 second hello interval and a 10 second dead interval.",
					correct: true
				},
				{
					id: "C",
					choice: "HSRP supports only clear-text authentication.",
					correct: false
				},
				{
					id: "D",
					choice: "The HSRP virtual IP address must be on a different subnet than the routers’ interfaces on the same LAN.",
					correct: false
				},
				{
					id: "E",
					choice: "The HSRP virtual IP address must be the same as one of the router’s interface addresses on the LAN.",
					correct: false
				},
				{
					id: "F",
					choice: "The HSRP virtual IP address must be the same as one of the router’s interface addresses on the LAN.",
					correct: true
				}
			],
			multiple_choice: true,
			correct_choices: 3,
			explanation: "The virtual MAC address of HSRP version 1 is 0000.0C07.ACxx, where xx is the HSRP group number in hexadecimal based on the respective interface. For example, HSRP group 10 uses the HSRP virtual MACaddress of 0000.0C07.AC0A. HSRP version 2 uses a virtual MAC address of 0000.0C9F.FXXX (XXX: HSRP group in hexadecimal)",
			imgSrc: ""
		},
		{
			question_type: "icnd2",
			tags: ["VRRP"],
			question: "Which statement describes VRRP object tracking?",
			choices: [
				{
					id: "A",
					choice: "It monitors traffic flow and link utilization.",
					correct: false
				},
				{
					id: "B",
					choice: "It ensures the best VRRP router is the virtual router master for the group.",
					correct: true
				},
				{
					id: "C",
					choice: "It causes traffic to dynamically move to higher bandwidth links",
					correct: false
				},
				{
					id: "D",
					choice: "It thwarts man-in-the-middle attacks.",
					correct: false
				},
			],
			multiple_choice: false,
			correct_choices: 1,
			explanation: "Object tracking is the process of tracking the state of a configured object and uses that state to determine the priority of the VRRP router in a VRRP group -> B is correct.",
			imgSrc: ""
		},
		{
			question_type: "icnd2",
			tags: ["GLBP"],
			question: "In GLBP, which router will respond to client ARP requests?",
			choices: [
				{
					id: "A",
					choice: "The active virtual gateway will reply with one of four possible virtual MAC addresses.",
					correct: true
				},
				{
					id: "B",
					choice: "All GLBP member routers will reply in round-robin fashion.",
					correct: false
				},
				{
					id: "C",
					choice: "The active virtual gateway will reply with its own hardware MAC address.",
					correct: false
				},
				{
					id: "D",
					choice: "The GLBP member routers will reply with one of four possible burned in hardware addresses.",
					correct: false
				}
			],
			multiple_choice: false,
			correct_choices: 1,
			explanation: "One disadvantage of HSRP and VRRP is that only one router is in use, other routers must wait for the primary to fail because they can be used. However, Gateway Load Balancing Protocol (GLBP) can use of up to four routers simultaneously. In GLBP, there is still only one virtual IP address but each router has a different virtual MAC address. First a GLBP group must elect an Active Virtual Gateway (AVG). The AVG is responsible for replying ARP requests from hosts/clients. It replies with different virtual MAC addresses that correspond to different routers (known as Active Virtual Forwarders – AVFs) so that clients can send traffic to different routers in that GLBP group (load sharing).",
			imgSrc: ""
		},
		{
			question_type: "icnd2",
			tags: ["GLBP"],
			question: "In a GLBP network, who is responsible for the arp request?",
			choices: [
				{
					id: "A",
					choice: "AVF",
					correct: false
				},
				{
					id: "B",
					choice: "AVG",
					correct: true
				},
				{
					id: "C",
					choice: "Active Router",
					correct: false
				},
				{
					id: "D",
					choice: "Standby Router",
					correct: false
				},
			],
			multiple_choice: false,
			correct_choices: 1,
			explanation: "",
			imgSrc: ""
		},
		{
			question_type: "icnd2",
			tags: ["GLBP"],
			question: "What are three benefits of GLBP? (Choose three)",
			choices: [
				{
					id: "A",
					choice: "GLBP supports up to eight virtual forwarders per GLBP group.",
					correct: false
				},
				{
					id: "B",
					choice: "GLBP supports clear text and MD5 password authentication between GLBP group members.",
					correct: true
				},
				{
					id: "C",
					choice: "GLBP is an open source standardized protocol that can be used with multiple vendors.",
					correct: false
				},
				{
					id: "D",
					choice: "GLBP supports up to 1024 virtual routers.",
					correct: true
				},
				{
					id: "E",
					choice: "GLBP can load share traffic across a maximum of four routers.",
					correct: true
				},
				{
					id: "F",
					choice: "GLBP elects two AVGs and two standby AVGs for redundancy.",
					correct: false
				}
			],
			multiple_choice: false,
			correct_choices: 1,
			explanation: "",
			imgSrc: ""
		},
		{
			question_type: "icnd2",
			tags: ["netflow"],
			question: "What are the benefit of using Netflow?",
			choices: [
				{
					id: "A",
					choice: "Network, Application & User Monitoring",
					correct: true
				},
				{
					id: "B",
					choice: "Network Planning",
					correct: false
				},
				{
					id: "C",
					choice: "Security Analysis",
					correct: true
				},
				{
					id: "D",
					choice: "Accounting/Billing",
					correct: true
				},
			],
			multiple_choice: false,
			correct_choices: 3,
			explanation: "<p>NetFlow traditionally enables several key customer applications including:</p> <p>+ Network Monitoring – NetFlow data enables extensive near real time network monitoring capabilities. Flow-based analysis techniques may be utilized to visualize traffic patterns associated with individual routers and switches as well as on a network-wide basis (providing aggregate traffic or application based views) to provide proactive problem detection, efficient troubleshooting, and rapid problem resolution.</p> <p>+ Application Monitoring and Profiling – NetFlow data enables network managers to gain a detailed, time-based, view of application usage over the network. This information is used to plan, understand new services, and allocate network and application resources (e.g. Web server sizing and VoIP deployment) to responsively meet customer demands.</p> <p>+ User Monitoring and Profiling – NetFlow data enables network engineers to gain detailed understanding of customer/user utilization of network and application resources. This information may then be utilized to efficiently plan and allocate access, backbone and application resources as well as to detect and resolve potential security and policy violations.</p> <p>+ Network Planning – NetFlow can be used to capture data over a long period of time producing the opportunity to track and anticipate network growth and plan upgrades to increase the number of routing devices, ports, or higher- bandwidth interfaces. NetFlow services data optimizes network planning including peering, backbone upgrade planning, and routing policy planning. NetFlow helps to minimize the total cost of network operations while maximizing network performance, capacity, and reliability. NetFlow detects unwanted WAN traffic, validates bandwidth and Quality of Service (QOS) and allows the analysis of new network applications. NetFlow will give you valuable information to reduce the cost of operating your network.</p> <p>+ Security Analysis – NetFlow identifies and classifies DDOS attacks, viruses and worms in real-time. Changes in network behavior indicate anomalies that are clearly demonstrated in NetFlow data. The data is also a valuable forensic tool to understand and replay the history of security incidents.</p> <p>+ Accounting/Billing – NetFlow data provides fine-grained metering (e.g. flow data includes details such as IP addresses, packet and byte counts, timestamps, type-of-service and application ports, etc.) for highly flexible and detailed resource utilization accounting. Service providers may utilize the information for billing based on time-of-day, bandwidth usage, application usage, quality of service, etc. Enterprise customers may utilize the information for departmental charge-back or cost allocation for resource utilization.</p>",
			imgSrc: ""
		},
		{
			question_type: "icnd2",
			tags: ["netflow"],
			question: "What are the three things that the NetFlow uses to consider the traffic to be in a same flow?",
			choices: [
				{
					id: "A",
					choice: "IP address",
					correct: true
				},
				{
					id: "B",
					choice: "Interface name",
					correct: false
				},
				{
					id: "C",
					choice: "Port numbers",
					correct: true
				},
				{
					id: "D",
					choice: "L3 protocol type",
					correct: true
				},
				{
					id: "E",
					choice: "MAC address",
					correct: false
				}
			],
			multiple_choice: false,
			correct_choices: 3,
			explanation: "Each packet that is forwarded within a router or switch is examined for a set of IP packet attributes. These attributes are the IP packet identity or fingerprint of the packet and determine if the packet is unique or similar to other packets...",
			imgSrc: ""
		},
		{
			question_type: "icnd2",
			tags: ["netflow"],
			question: "What NetFlow component can be applied to an interface to track IPv4 traffic?",
			choices: [
				{
					id: "A",
					choice: "flow monitor",
					correct: true
				},
				{
					id: "B",
					choice: "flow record",
					correct: false
				},
				{
					id: "C",
					choice: "flow sampler",
					correct: false
				},
				{
					id: "D",
					choice: "flow exporter",
					correct: false
				},
			],
			multiple_choice: false,
			correct_choices: 1,
			explanation: "Flow monitors are the Flexible NetFlow component that is applied to interfaces to perform network traffic monitoring. Flow monitors consist of a record and a cache. You add the record to the flow monitor after you create the flow monitor. The flow monitor cache is automatically created at the time the flow monitor is applied to the first interface. Flow data is collected from the network traffic during the monitoring process based on the key and nonkey fields in the record, which is configured for the flow monitor and stored in the flow monitor cache...",
			imgSrc: ""
		},
		{
			question_type: "icnd2",
			tags: [""],
			question: "",
			choices: [
				{
					id: "A",
					choice: "",
					correct: false
				},
				{
					id: "B",
					choice: "",
					correct: false
				},
				{
					id: "C",
					choice: "",
					correct: false
				},
				{
					id: "D",
					choice: "",
					correct: false
				},
				{
					id: "E",
					choice: "",
					correct: false
				},
				{
					id: "F",
					choice: "",
					correct: false
				}
			],
			multiple_choice: false,
			correct_choices: 1,
			explanation: "",
			imgSrc: ""
		},
		{
			question_type: "icnd2",
			tags: [""],
			question: "",
			choices: [
				{
					id: "A",
					choice: "",
					correct: false
				},
				{
					id: "B",
					choice: "",
					correct: false
				},
				{
					id: "C",
					choice: "",
					correct: false
				},
				{
					id: "D",
					choice: "",
					correct: false
				},
				{
					id: "E",
					choice: "",
					correct: false
				},
				{
					id: "F",
					choice: "",
					correct: false
				}
			],
			multiple_choice: false,
			correct_choices: 1,
			explanation: "",
			imgSrc: ""
		},
		{
			question_type: "icnd2",
			tags: [""],
			question: "",
			choices: [
				{
					id: "A",
					choice: "",
					correct: false
				},
				{
					id: "B",
					choice: "",
					correct: false
				},
				{
					id: "C",
					choice: "",
					correct: false
				},
				{
					id: "D",
					choice: "",
					correct: false
				},
				{
					id: "E",
					choice: "",
					correct: false
				},
				{
					id: "F",
					choice: "",
					correct: false
				}
			],
			multiple_choice: false,
			correct_choices: 1,
			explanation: "",
			imgSrc: ""
		},
		{
			question_type: "icnd2",
			tags: [""],
			question: "",
			choices: [
				{
					id: "A",
					choice: "",
					correct: false
				},
				{
					id: "B",
					choice: "",
					correct: false
				},
				{
					id: "C",
					choice: "",
					correct: false
				},
				{
					id: "D",
					choice: "",
					correct: false
				},
				{
					id: "E",
					choice: "",
					correct: false
				},
				{
					id: "F",
					choice: "",
					correct: false
				}
			],
			multiple_choice: false,
			correct_choices: 1,
			explanation: "",
			imgSrc: ""
		},
		{
			question_type: "icnd2",
			tags: [""],
			question: "",
			choices: [
				{
					id: "A",
					choice: "",
					correct: false
				},
				{
					id: "B",
					choice: "",
					correct: false
				},
				{
					id: "C",
					choice: "",
					correct: false
				},
				{
					id: "D",
					choice: "",
					correct: false
				},
				{
					id: "E",
					choice: "",
					correct: false
				},
				{
					id: "F",
					choice: "",
					correct: false
				}
			],
			multiple_choice: false,
			correct_choices: 1,
			explanation: "",
			imgSrc: ""
		},
		{
			question_type: "icnd2",
			tags: [""],
			question: "",
			choices: [
				{
					id: "A",
					choice: "",
					correct: false
				},
				{
					id: "B",
					choice: "",
					correct: false
				},
				{
					id: "C",
					choice: "",
					correct: false
				},
				{
					id: "D",
					choice: "",
					correct: false
				},
				{
					id: "E",
					choice: "",
					correct: false
				},
				{
					id: "F",
					choice: "",
					correct: false
				}
			],
			multiple_choice: false,
			correct_choices: 1,
			explanation: "",
			imgSrc: ""
		},
		{
			question_type: "icnd2",
			tags: [""],
			question: "",
			choices: [
				{
					id: "A",
					choice: "",
					correct: false
				},
				{
					id: "B",
					choice: "",
					correct: false
				},
				{
					id: "C",
					choice: "",
					correct: false
				},
				{
					id: "D",
					choice: "",
					correct: false
				},
				{
					id: "E",
					choice: "",
					correct: false
				},
				{
					id: "F",
					choice: "",
					correct: false
				}
			],
			multiple_choice: false,
			correct_choices: 1,
			explanation: "",
			imgSrc: ""
		},
		{
			question_type: "icnd2",
			tags: [""],
			question: "",
			choices: [
				{
					id: "A",
					choice: "",
					correct: false
				},
				{
					id: "B",
					choice: "",
					correct: false
				},
				{
					id: "C",
					choice: "",
					correct: false
				},
				{
					id: "D",
					choice: "",
					correct: false
				},
				{
					id: "E",
					choice: "",
					correct: false
				},
				{
					id: "F",
					choice: "",
					correct: false
				}
			],
			multiple_choice: false,
			correct_choices: 1,
			explanation: "",
			imgSrc: ""
		},
		{
			question_type: "icnd2",
			tags: [""],
			question: "",
			choices: [
				{
					id: "A",
					choice: "",
					correct: false
				},
				{
					id: "B",
					choice: "",
					correct: false
				},
				{
					id: "C",
					choice: "",
					correct: false
				},
				{
					id: "D",
					choice: "",
					correct: false
				},
				{
					id: "E",
					choice: "",
					correct: false
				},
				{
					id: "F",
					choice: "",
					correct: false
				}
			],
			multiple_choice: false,
			correct_choices: 1,
			explanation: "",
			imgSrc: ""
		}
		/*{
			question_type: "icnd2",
			tags: [""],
			question: "",
			choices: [
				{
					id: "A",
					choice: "",
					correct: false
				},
				{
					id: "B",
					choice: "",
					correct: false
				},
				{
					id: "C",
					choice: "",
					correct: false
				},
				{
					id: "D",
					choice: "",
					correct: false
				},
				{
					id: "E",
					choice: "",
					correct: false
				},
				{
					id: "F",
					choice: "",
					correct: false
				}
			],
			multiple_choice: false,
			correct_choices: 1,
			explanation: "",
			imgSrc: ""
		}	*/
	]
}
