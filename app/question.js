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
			multiple_choice: true,
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
			multiple_choice: true,
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
			explanation: "Flow monitors are the Flexible NetFlow component that is applied to interfaces to perform network traffic monitoring. Flow monitors consist of a record and a cache. You add the record to the flow monitor after you create the flow monitor. The flow monitor cache is automatically created at the time the flow monitor is applied to the first interface. Flow data is collected from the network traffic during the monitoring process based on the key and nonkey fields in the record, which is configured for the flow monitor and stored in the flow monitor cache.",
			imgSrc: ""
		},
		{
			question_type: "icnd2",
			tags: ["netflow"],
			question: "What command visualizes the general NetFlow data on the command line?",
			choices: [
				{
					id: "A",
					choice: "show ip flow export",
					correct: false
				},
				{
					id: "B",
					choice: "show ip flow top-talkers",
					correct: false
				},
				{
					id: "C",
					choice: "show ip cache flow",
					correct: true
				},
				{
					id: "D",
					choice: "show mls sampling",
					correct: false
				},
			],
			multiple_choice: false,
			correct_choices: 1,
			explanation: "The “show ip cache flow” command displays a summary of the NetFlow accounting statistics.",
			imgSrc: ""
		},
		{
			question_type: "icnd2",
			tags: ["netflow"],
			question: "What are three reasons to collect NetFlow data on a company network? (Choose three)",
			choices: [
				{
					id: "A",
					choice: "To identify applications causing congestion.",
					correct: true
				},
				{
					id: "B",
					choice: "To authorize user network access.",
					correct: false
				},
				{
					id: "C",
					choice: "To report and alert link up / down instances.",
					correct: false
				},
				{
					id: "D",
					choice: "To diagnose slow network performance, bandwidth hogs, and bandwidth utilization.",
					correct: true
				},
				{
					id: "E",
					choice: "To detect suboptimal routing in the network.",
					correct: false
				},
				{
					id: "F",
					choice: "To confirm the appropriate amount of bandwidth that has been allocated to each Class of Service.",
					correct: true
				}
			],
			multiple_choice: true,
			correct_choices: 3,
			explanation: "<a href='http://www.cisco.com/c/en/us/products/collateral/ios-nx-os-software/ios-netflow/prod_white_paper0900aecd80406232.html' alt='cisco'>Link</a>",
			imgSrc: ""
		},
		{
			question_type: "icnd2",
			tags: ["netflow"],
			question: "What are three factors a network administrator must consider before implementing Netflow in the network? (Choose three)",
			choices: [
				{
					id: "A",
					choice: "CPU utilization",
					correct: true
				},
				{
					id: "B",
					choice: "where Netflow data will be sent",
					correct: true
				},
				{
					id: "C",
					choice: "number of devices exporting Netflow data",
					correct: true
				},
				{
					id: "D",
					choice: "port availability",
					correct: false
				},
				{
					id: "E",
					choice: "SNMP version",
					correct: false
				},
				{
					id: "F",
					choice: "WAN encapsulation",
					correct: false
				}
			],
			multiple_choice: true,
			correct_choices: 3,
			explanation: "",
			imgSrc: ""
		},
		{
			question_type: "icnd2",
			tags: ["netflow"],
			question: "What Cisco IOS feature can be enabled to pinpoint an application that is causing slow network performance?",
			choices: [
				{
					id: "A",
					choice: "SNMP",
					correct: false
				},
				{
					id: "B",
					choice: "Netflow",
					correct: true
				},
				{
					id: "C",
					choice: "WCCP",
					correct: false
				},
				{
					id: "D",
					choice: "IP SLA",
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
			tags: ["wan"],
			question: "Which two statements about using the CHAP authentication mechanism in a PPP link are true? (Choose two)",
			choices: [
				{
					id: "A",
					choice: "CHAP uses a two-way handshake.",
					correct: false
				},
				{
					id: "B",
					choice: "CHAP uses a three-way handshake.",
					correct: true
				},
				{
					id: "C",
					choice: "CHAP authentication periodically occurs after link establishment.",
					correct: true
				},
				{
					id: "D",
					choice: " CHAP authentication passwords are sent in plaintext.",
					correct: false
				},
				{
					id: "E",
					choice: "CHAP authentication is performed only upon link establishment.",
					correct: false
				},
				{
					id: "F",
					choice: "CHAP has no protection from playback attacks.",
					correct: false
				}
			],
			multiple_choice: true,
			correct_choices: 2,
			explanation: "Point-to-Point Protocol (PPP) can use either Password Authentication Protocol (PAP) or Challenge Handshake Authentication Protocol (CHAP) for authentication. CHAP is used upon initial link establishment and periodically to make sure that the router is still communicating with the same host. CHAP passwords arc exchanged as message digest algorithm 5 (MD5) hash values.",
			imgSrc: ""
		},
		{
			question_type: "icnd2",
			tags: ["wan"],
			question: "Refer to the exhibit. Hosts in network 192.168.2.0 are unable to reach hosts in network 192.168.3.0. Based on the output from RouterA, what are two possible reasons for the failure? (Choose two)",
			choices: [
				{
					id: "A",
					choice: "The cable that is connected to S0/0 on RouterA is faulty.",
					correct: false
				},
				{
					id: "B",
					choice: "Interface S0/0 on RouterB is administratively down.",
					correct: false
				},
				{
					id: "C",
					choice: "Interface S0/0 on RouterA is configured with an incorrect subnet mask.",
					correct: false
				},
				{
					id: "D",
					choice: "The IP address that is configured on S0/0 of RouterB is not in the correct subnet.",
					correct: false
				},
				{
					id: "E",
					choice: "Interface S0/0 on RouterA is not receiving a clock signal from the CSU/DSU.",
					correct: true
				},
				{
					id: "F",
					choice: "The encapsulation that is configured on S0/0 of RouterB does not match the encapsulation that is configured on S0/0 of RouterA.",
					correct: true
				}
			],
			multiple_choice: true,
			correct_choices: 2,
			explanation: "From the output we see the Serial0/0 of RouterA is in “status up/protocol down” state which indicates a Layer 2 problem so the problem can be:<br>+ Keepalives mismatch<br>+ Encapsulation mismatch<br>+ Clocking problem",
			imgSrc: "http://www.9tut.net/images/ICND2/Basic_Questions/show_ip_interface_brief_functional.jpg"
		},
		{
			question_type: "icnd2",
			tags: ["wan"],
			question: "Which command is used to enable CHAP authentication with PAP as the fallback method on a serial interface?",
			choices: [
				{
					id: "A",
					choice: "(config-if)# authentication ppp chap fallback ppp",
					correct: false
				},
				{
					id: "B",
					choice: "(config-if)# authentication ppp chap pap",
					correct: false
				},
				{
					id: "C",
					choice: "(config-if)# ppp authentication chap pap",
					correct: true
				},
				{
					id: "D",
					choice: "(config-if)# ppp authentication chap fallback ppp",
					correct: false
				}
			],
			multiple_choice: false,
			correct_choices: 1,
			explanation: "The command “ppp authentication chap pap” command indicates the CHAP authentication is used first. If it fails or is rejected by other side then uses PAP instead. If you want to use PAP first (then CHAP) you can use the “ppp authentication pap chap” command.",
			imgSrc: ""
		},
		{
			question_type: "icnd2",
			tags: ["wan"],
			question: "Which Layer 2 protocol encapsulation type supports synchronous and asynchronous circuits and has built-in security mechanisms?",
			choices: [
				{
					id: "A",
					choice: "HDLC ",
					correct: false
				},
				{
					id: "B",
					choice: "PPP",
					correct: true
				},
				{
					id: "C",
					choice: "X.25",
					correct: false
				},
				{
					id: "D",
					choice: "Frame Relay",
					correct: false
				}
			],
			multiple_choice: false,
			correct_choices: 1,
			explanation: "PPP supports both synchronous (like analog phone lines) and asynchronous circuits (such as ISDN or digital links). With synchronous circuits we need to use clock rate.",
			imgSrc: ""
		},
		{
			question_type: "icnd2",
			tags: ["wan"],
			question: "At which layer of the OSI model does PPP perform?",
			choices: [
				{
					id: "A",
					choice: "Layer 2",
					correct: true
				},
				{
					id: "B",
					choice: "Layer 3",
					correct: false
				},
				{
					id: "C",
					choice: "Layer 4",
					correct: false
				},
				{
					id: "D",
					choice: "Layer 5",
					correct: false
				}
			],
			multiple_choice: false,
			correct_choices: 1,
			explanation: "Layer 2 includes the popular WAN standards, such as the Point-to-Point Protocol (PPP), High-Level Data-Link Control (HDLC) and Frame Relay protocols.",
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
