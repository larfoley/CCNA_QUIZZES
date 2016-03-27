// TAGS:
// foo, bar, ipv6
var questions = {

	getRandom: function(type) {

		function getRandomNum(max) {
			return Math.round((Math.random() * max) );
		}

		var ranNum;
		var totalQuestions = (function() {
			// Creating a copy of the questions.all array without refrencing it
			var array = [];
			for (var i = 0; i < questions.all.length; i++) {
				if (questions.all[i].question_type === type) {
					array.push(questions.all[i])
				}
			}
			console.log()
			return array;
		}());
		var randomQuestions = [];
		var questionsAdded = 0;
		var i = 0;

		while (questionsAdded !== totalQuestions.length) {

			if (questions.all[i].question_type === type) {
				ranNum = getRandomNum(totalQuestions.length - 1);
				randomQuestions.push(totalQuestions[ranNum]);
				// remove question from the total questions
				totalQuestions.splice(ranNum, 1);
			}
			i++;
			if (i === questions.all.length) {
					i = 0;
			}
		}
		return randomQuestions;
	},
	getByTagName: function(tagName, questionType) {
		var questions = []
		for (var i = 0; i < this.all.length; i++) {

			for (var j = 0; j < this.all[i].tags.length; j++) {

				if (this.all[i].tags[j] === tagName && this.all[i].question_type === questionType) {
					if (questionType && this.all[i].question_type === questionType) {
						questions.push(this.all[i]);
					}
				}
			}
		}
		return questions;
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
	getAllTags: function(quizType) {
		var allTags = [];
		var tags;
		var tag;
		var tagExists = false;
		var allquestions = quizType ? this.getByType(quizType) : this.all;
		//iterate through each question
		for (var i = 0; i < allquestions.length; i++) {
			// store the questions tags
			tags = this.all[i].tags;
			// iterate throuhgh each questions tags
			for (var j = 0; j < tags.length; j++) {
				// cache the question tag so we can compare it
				tag = tags[j];
				// Iterate through the allTags
				for (var k = 0; k < allTags.length; k++) {
					if (tag === allTags[k]) {
						tagExists = true;
					} else {
						//console.log("this tag does not exist: " + tag);
					}
				}
				// If current tag is not already in the allTags array then add the current tag
				if (tagExists === false) {
					allTags.push(tag);
				}
				tagExists = false;
			}
		}
		return allTags;
	},
	all: [
		{
			question_type: "icnd2",
			tags: ["hsrp"],
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
			tags: ["hsrp"],
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
			tags: ["vrrp"],
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
			tags: ["glbp"],
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
			tags: ["glbp"],
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
			tags: ["glbp"],
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
			multiple_choice: true,
			correct_choices: 3,
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
			explanation: "The “show ip cache flow” command displays a summary of the NetFlow accounting statistics.<br><img src='http://www.9tut.net/images/ICND2/Netflow/show_ip_cache_flow.jpg'>",
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
		},
		{
			question_type: "icnd2",
			tags: ["wan"],
			question: "Which PPP subprotocol negotiates authentication options?",
			choices: [
				{
					id: "A",
					choice: "NCP",
					correct: false
				},
				{
					id: "B",
					choice: "ISDN",
					correct: false
				},
				{
					id: "C",
					choice: "SUP",
					correct: false
				},
				{
					id: "D",
					choice: "LCP",
					correct: true
				},
				{
					id: "E",
					choice: "DLCI",
					correct: false
				}
			],
			multiple_choice: false,
			correct_choices: 1,
			explanation: "Link Control Protocol (LCP) is a subprotocol within the Point-to-Point Protocol protocol suite that is responsible for link management. During establishment of a PPP communication session, LCP establishes the link, configures PPP options, and tests the quality of the line connection between the PPP client and PPP server. LCP automatically handles encapsulation format options and varies packet sizes over PPP communication links.",
			imgSrc: ""
		},
		{
			question_type: "icnd2",
			tags: ["wan"],
			question: "Which two options are valid WAN connectivity methods? (Choose two)",
			choices: [
				{
					id: "A",
					choice: "PPP",
					correct: true
				},
				{
					id: "B",
					choice: "WAP",
					correct: false
				},
				{
					id: "C",
					choice: "DSL",
					correct: true
				},
				{
					id: "D",
					choice: "L2TPv3",
					correct: false
				}
			],
			multiple_choice: true,
			correct_choices: 2,
			explanation: "",
			imgSrc: ""
		},
		{
			question_type: "icnd2",
			tags: ["wan"],
			question: "Refer to the exhibit. Which WAN protocol is being used?",
			choices: [
				{
					id: "A",
					choice: "ATM",
					correct: false
				},
				{
					id: "B",
					choice: "HDLC",
					correct: false
				},
				{
					id: "C",
					choice: "Frame Relay",
					correct: true
				},
				{
					id: "D",
					choice: "PPP",
					correct: false
				}
			],
			multiple_choice: false,
			correct_choices: 1,
			explanation: "Local Management Interface (LMI) is a signaling standard protocol used between your router (DTE) and the first Frame Relay switch. From the output we learn this interface is sending and receiving LMI messages -> Frame Relay is being used.",
			imgSrc: "http://www.9tut.net/images/ICND2/WAN/show_interface_pos.jpg"
		},
		{
			question_type: "icnd2",
			tags: ["wan"],
			question: "Refer to the exhibit. The show interfaces serial 0/1 command was issued on the R10-1 router. Based on the output displayed which statement is correct?",
			choices: [
				{
					id: "A",
					choice: "The cable connected to the serial 0/1 interface of the R10-1 router is a DTE cable.",
					correct: false
				},
				{
					id: "B",
					choice: "The R10-1 router can ping the router interface connected to the serial 0/1 interface.",
					correct: false
				},
				{
					id: "C",
					choice: "The clock rate used for interface serial 0/1 of the R10-1 router is 1,544,000 bits per second.",
					correct: false
				},
				{
					id: "D",
					choice: "The CSU used with the serial 0/1 interface of the R10-1 router has lost connection to the service provider.",
					correct: false
				},
				{
					id: "E",
					choice: "The interface of the remote router connected to the serial 0/1 interface of the R10-1 router is using the default serial interface encapsulation.",
					correct: true
				}
			],
			multiple_choice: false,
			correct_choices: 1,
			explanation: "From the output, we see the the line “Serial0/1 is up, line protocol is up”. That means the link is good and the interface is functioning normally. Also the encapsulation used on this interface is HDLC -> The other end must use the same encapsulation. Otherwise the line protocol will go down.",
			imgSrc: ""
		},
		{
			question_type: "icnd2",
			tags: ["wan"],
			question: "A network administrator needs to configure a serial link between the main office and a remote location. The router at the remote office is a non-Cisco router. How should the network administrator configure the serial interface of the main office router to make the connection?",
			choices: [
				{
					id: "A",
					choice: "Main(config)# interface serial 0/0<br>Main(config-if)# ip address 172.16.1.1 255.255.255.252<br>Main(config-if)# no shut",
					correct: false
				},
				{
					id: "B",
					choice: "Main(config)# interface serial 0/0<br>Main(config-if)# ip address 172.16.1.1 255.255.255.252<br>Main(config-if)# encapsulation ppp<br>Main(config-if)# no shut",
					correct: true
				},
				{
					id: "C",
					choice: "Main(config)# interface serial 0/0<br>Main(config-if)# ip address 172.16.1.1 255.255.255.252<br>Main(config-if)# encapsulation frame-relay<br>Main(config-if)# authentication chap<br>Main(config-if)# no shut",
					correct: false
				},
				{
					id: "D",
					choice: "Main(config)# interface serial 0/0<br>Main(config-if)#ip address 172.16.1.1 255.255.255.252 <br>Main(config-if)#encapsulation ietf <br>Main(config-if)# no shut",
					correct: false
				}
			],
			multiple_choice: false,
			correct_choices: 1,
			explanation: "“The router at the remote office is a non-Cisco router” so we cannot use HDLC which is a Cisco proprietary protocol -> A is not correct (HDLC is the default protocol on Cisco router for serial connection so we don’t need to type any command). <br>Frame Relay does not support authentication but if we run PPP over Frame Relay then we can use PAP or CHAP. Answer C does not have enough commands for this type of configuration -> C is not correct.<br>Cisco routers have two kinds of Frame Relay encapsulation: IETF or Cisco. A non-Cisco device does not understand “Frame Relay Cisco encapsulation” so if two routers use different kind of Frame Relay encapsulation, they cannot operate. So if we have a non-Cisco device we have to configure “encapsulation ietf” on both ends so that they can work. But the correct command should be “encapsulation frame-relay ietf” -> D is not correct.",
			imgSrc: ""
		},
		{
			question_type: "icnd2",
			tags: ["wan"],
			question: "Refer to the exhibit:",
			choices: [
				{
					id: "A",
					choice: "One interface has a problem.",
					correct: false
				},
				{
					id: "B",
					choice: "Two interfaces have problems.",
					correct: false
				},
				{
					id: "C",
					choice: "The interfaces are functioning correctly.",
					correct: true
				},
				{
					id: "D",
					choice: "The operational status of the interfaces cannot be determined from the output shown.",
					correct: false
				}
			],
			multiple_choice: false,
			correct_choices: 1,
			explanation: "",
			imgSrc: "http://www.9tut.net/images/ICND2/Basic_Questions/show_ip_interface_brief_functional.jpg"
		},
		{
			question_type: "icnd2",
			tags: ["frame relay"],
			question: "What can be done to Frame Relay to resolve split-horizon issues?(Choose two)",
			choices: [
				{
					id: "A",
					choice: "Disable Inverse ARP.",
					correct: false
				},
				{
					id: "B",
					choice: "Create a full-mesh topology.",
					correct: true
				},
				{
					id: "C",
					choice: "Develop multipoint subinterfaces.",
					correct: false
				},
				{
					id: "D",
					choice: "Configure point-to-point subinterfaces.",
					correct: true
				},
				{
					id: "E",
					choice: "Remove the broadcast keyword from the frame-relay map command.",
					correct: false
				}
			],
			multiple_choice: true,
			correct_choices: 2,
			explanation: "SPLIT HORIZON: A router never sends information about a route back in same direction which is original information came, routers keep track of where the information about a route came from. Means when router A sends update to router B about any failure network, router B does not send any update for same network to router A in same direction.<br>Therefore in order to resolve split-horizon issue, we can create a full-mesh topology (a network topology in which there is a direct link between all pairs of nodes) so that all the routers can learn all the routes advertised by the neighbors -> B is correct.<br>Configuring Point-to-point subinterfaces is a good way to resolve the split-horizon issue because each subinterface is treated as a separate interface so an interface can send and receive information about a route -> D is correct.",
			imgSrc: ""
		},
		{
			question_type: "icnd2",
			tags: ["frame relay"],
			question: "Which encapsulation type is a Frame Relay encapsulation type that is supported by Cisco routers?",
			choices: [
				{
					id: "A",
					choice: "IETF",
					correct: true
				},
				{
					id: "B",
					choice: "ANSI Annex D",
					correct: false
				},
				{
					id: "C",
					choice: "Q9333-A Annex A",
					correct: false
				},
				{
					id: "D",
					choice: "HDLC",
					correct: false
				}
			],
			multiple_choice: false,
			correct_choices: 1,
			explanation: "Cisco supports two Frame Relay encapsulation types: the Cisco encapsulation and the IETF Frame Relay encapsulation, which is in conformance with RFC 1490 and RFC 2427. The former is often used to connect two Cisco routers while the latter is used to connect a Cisco router to a non-Cisco router. You can test with your Cisco router when typing the command Router(config-if)#encapsulation frame-relay ? on a WAN link. Below is the output of this command (notice Cisco is the default encapsulation so it is not listed here, just press Enter to use it).<br><img src='http://www.9tut.net/images/ICND2/Frame_Relay/Frame_Relay_encapsulation_type.jpg'>",
			imgSrc: ""
		},
		{
			question_type: "icnd2",
			tags: ["frame relay"],
			question: "What are two characteristics of Frame Relay point-to-point subinterfaces? (Choose two)",
			choices: [
				{
					id: "A",
					choice: "They create split-horizon issues.",
					correct: false
				},
				{
					id: "B",
					choice: "They require a unique subnet within a routing domain.",
					correct: true
				},
				{
					id: "C",
					choice: "They emulate leased lines.",
					correct: true
				},
				{
					id: "D",
					choice: "They are ideal for full-mesh topologies.",
					correct: false
				},
				{
					id: "E",
					choice: "They require the use of NBMA options when using OSPF.",
					correct: false
				}
			],
			multiple_choice: true,
			correct_choices: 2,
			explanation: "Correct answers are B and C",
			imgSrc: ""
		},
		{
			question_type: "icnd2",
			tags: ["frame relay"],
			question: "What is the result of issuing the frame-relay map ip 192.168.1.2 202 broadcast command?",
			choices: [
				{
					id: "A",
					choice: "defines the destination IP address that is used in all broadcast packets on DLCI 202",
					correct: false
				},
				{
					id: "B",
					choice: "defines the source IP address that is used in all broadcast packets on DLCI 202",
					correct: false
				},
				{
					id: "C",
					choice: "defines the DLCI on which packets from the 192.168.1.2 IP address are received",
					correct: false
				},
				{
					id: "D",
					choice: "defines the DLCI that is used for all packets that are sent to the 192.168.1.2 IP address",
					correct: true
				}
			],
			multiple_choice: false,
			correct_choices: 1,
			explanation: "",
			imgSrc: ""
		},
		{
			question_type: "icnd2",
			tags: ["frame relay"],
			question: "What does the frame-relay interface-dlci command configure?",
			choices: [
				{
					id: "A",
					choice: "local DLCI on the subinterface",
					correct: true
				},
				{
					id: "B",
					choice: "remote DLCI on the main interface",
					correct: false
				},
				{
					id: "C",
					choice: "remote DLCI on the subinterface",
					correct: false
				},
				{
					id: "D",
					choice: "local DLCI on the main interface",
					correct: false
				}
			],
			multiple_choice: false,
			correct_choices: 1,
			explanation: "When configuring on a point-to-point subinterface, the command frame-relay interface-dlci associates the selected point-to-point subinterface with a DLCI. But remember that the DLCI number in this command is the local DLCI. An example of using this command is shown below:<br><br>R1(config)#interface Serial0/0.1 point-to-point<br>R1(config-subif)#ip address 192.168.1.1 255.255.255.252<br>R1(config-subif)#frame-relay interface-dlci 1<br>R1(config-fr-dlci)#exit",
			imgSrc: ""
		},
		{
			question_type: "icnd2",
			tags: ["frame relay"],
			question: "What command is used to verify the DLCI destination address in a Frame Relay static configuration?",
			choices: [
				{
					id: "A",
					choice: "show frame-relay pvc",
					correct: false
				},
				{
					id: "B",
					choice: "show frame-relay lmi",
					correct: false
				},
				{
					id: "C",
					choice: "show frame-relay map",
					correct: true
				},
				{
					id: "D",
					choice: "show frame relay end-to-end",
					correct: false
				}
			],
			multiple_choice: false,
			correct_choices: 1,
			explanation: "An example of the output of “show frame-relay map” command is shown below:<br><img src='http://www.9tut.net/images/ICND2/Frame_Relay/wandlciunderstand2.jpg'><br>We can see the IP address 172.16.3.1 is associated with the DLCI 100.",
			imgSrc: ""
		},
		{
			question_type: "icnd2",
			tags: ["frame relay"],
			question: "What occurs on a Frame Relay network when the CIR is exceeded?",
			choices: [
				{
					id: "A",
					choice: "All TCP traffic is marked discard eligible.",
					correct: false
				},
				{
					id: "B",
					choice: "All UDP traffic is marked discard eligible and a BECN is sent.",
					correct: false
				},
				{
					id: "C",
					choice: "All TCP traffic is marked discard eligible and a BECN is sent.",
					correct: false
				},
				{
					id: "D",
					choice: "All traffic exceeding the CIR is marked discard eligible.",
					correct: true
				}
			],
			multiple_choice: false,
			correct_choices: 1,
			explanation: "Committed information rate (CIR): The minimum guaranteed data transfer rate agreed to by the Frame Relay switch. Frames that are sent in excess of the CIR are marked as discard eligible (DE) which means they can be dropped if the congestion occurs within the Frame Relay network.<br>Note: In the Frame Relay frame format, there is a bit called Discard eligible (DE) bit that is used to identify frames that are first to be dropped when the CIR is exceeded.",
			imgSrc: ""
		},
		{
			question_type: "icnd2",
			tags: ["frame relay"],
			question: "What is the purpose of Inverse ARP?",
			choices: [
				{
					id: "A",
					choice: "to map a known IP address to a MAC address",
					correct: false
				},
				{
					id: "B",
					choice: "to map a known DLCI to a MAC address	",
					correct: false
				},
				{
					id: "C",
					choice: "to map a known MAC address to an IP address",
					correct: false
				},
				{
					id: "D",
					choice: "to map a known DLCI to an IP address",
					correct: true
				},
				{
					id: "E",
					choice: "to map a known IP address to a SPID",
					correct: false
				},
				{
					id: "F",
					choice: "to map a known SPID to a MAC address",
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
			tags: ["frame relay"],
			question: "What is the advantage of using a multipoint interface instead of point-to-point subinterfaces when configuring a Frame Relay hub in a hub-and-spoke topology?",
			choices: [
				{
					id: "A",
					choice: "It avoids split-horizon issues with distance vector routing protocols.",
					correct: false
				},
				{
					id: "B",
					choice: "IP addresses can be conserved if VLSM is not being used for subnetting.",
					correct: true
				},
				{
					id: "C",
					choice: "A multipoint interface offers greater security compared to point-to-point subinterface configurations.",
					correct: false
				},
				{
					id: "D",
					choice: "The multiple IP network addresses required for a multipoint interface provide greater addressing flexibility over point-to-point configurations.",
					correct: false
				}
			],
			multiple_choice: false,
			correct_choices: 1,
			explanation: "A main advantage of configuring Frame Relay multipoint compared to point-to-point subinterfaces is we can assign IP addresses on the same subnets/networks to the interfaces of Frame Relay switch, thus saving the subnets/networks you have.",
			imgSrc: ""
		},
		{
			question_type: "icnd2",
			tags: ["frame relay"],
			question: "Which command allows you to verify the encapsulation type (CISCO or IETF) for a frame relay link?",
			choices: [
				{
					id: "A",
					choice: "show frame-relay map",
					correct: true
				},
				{
					id: "B",
					choice: "show frame-relay lmi",
					correct: false
				},
				{
					id: "C",
					choice: "show inter serial",
					correct: false
				},
				{
					id: "D",
					choice: "show frame-relay pvc",
					correct: false
				}
			],
			multiple_choice: false,
			correct_choices: 1,
			explanation: "The “show frame-relay map” command displays the current map entries and information about the connections, including encapsulation type.",
			imgSrc: ""
		},
		{
			question_type: "icnd2",
			tags: ["frame relay"],
			question: "The command show frame-relay map gives the following output:<br>Serial 0 (up): ip 192.168.151.4 dlci 122, dynamic, broadcast, status defined, active.<br>Which statements represent what is shown? (Choose three).",
			choices: [
				{
					id: "A",
					choice: "192.168.151.4 represents the IP address of the remote router",
					correct: true
				},
				{
					id: "B",
					choice: "192.168.151.4 represents the IP address of the local serial interface",
					correct: false
				},
				{
					id: "C",
					choice: "DLC1122 represents the interface of the remote serial interface",
					correct: false
				},
				{
					id: "D",
					choice: "DLC1122 represents the local number used to connect to the remote address",
					correct: true
				},
				{
					id: "E",
					choice: "broadcast indicates that a dynamic routing protocol such as RIP v1 can send packets across this PVC",
					correct: true
				},
				{
					id: "F",
					choice: "active indicates that the ARP process is working",
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
			tags: ["frame relay"],
			question: "The output of the show frame-relay pvc command shows ”PVC STATUS=INACTIVE”. What does this mean?",
			choices: [
				{
					id: "A",
					choice: "The PVC is configured correctly and is operating normally,but no data packets have been detected for more than five minutes.",
					correct: false
				},
				{
					id: "B",
					choice: "The PVC is configured correctly, is operating normally and is no longer actively seeking the address the remote route.",
					correct: false
				},
				{
					id: "C",
					choice: "The PVC is configured correctly, is operating normally and is waiting for interesting to trigger a call to the remote router.",
					correct: false
				},
				{
					id: "D",
					choice: "The PVC is configured correctly on the local switch, but there is a problem on the remote end of the PVC.",
					correct: false
				},
				{
					id: "E",
					choice: "The PVC is not configured on the switch.",
					correct: false
				}
			],
			multiple_choice: false,
			correct_choices: 1,
			explanation: "The PVC STATUS displays the status of the PVC. The DCE device creates and sends the report to the DTE devices.",
			imgSrc: ""
		},
		{
			question_type: "icnd2",
			tags: ["frame relay"],
			question: "What two statistics appear in show frame-relay map output? (Choose two)",
			choices: [
				{
					id: "A",
					choice: "The number of FECN packets that are received by the router",
					correct: false
				},
				{
					id: "B",
					choice: "The number of BECN packets that are received by the router",
					correct: false
				},
				{
					id: "C",
					choice: "The ip address of the local router ",
					correct: false
				},
				{
					id: "D",
					choice: "The value of the local DLCI",
					correct: true
				},
				{
					id: "E",
					choice: "The status of the PVC that is configured on the router",
					correct: true
				}
			],
			multiple_choice: true,
			correct_choices: 2,
			explanation: "An example of the output of this command is shown below:<br><img src='http://www.9tut.net/images/ICND2/Frame_Relay/Frame_Relay_R0_show_frame-relay_map.jpg'><br>From the output we can see the local DLCI (102 & 103) and the status of the PVC configured on the router (both are defined, active).",
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
