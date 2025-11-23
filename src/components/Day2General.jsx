import React from 'react'
import MarkdownRenderer from './MarkdownRenderer'

const Day2General = () => {
  const content = `## Day 2 — General Track

### **Session 1: eBay's Custom Orchestration Platform: Spectron**

**Speakers:** Katarzyna Kurowska & Aldrin Isaac (eBay)

This session introduced **Spectron**, eBay's custom, intent-driven network orchestration platform designed for **data center fabric lifecycle management**.

**Spectron Core Vision & Requirements:**

* **Intent-Driven:** Users create "specs" (specifications) that represent the desired logical state of the network.
* **Modular & Extensible:** Built with interchangeable modules to compose different topologies and behaviors.
* **Lightweight & No Licensing:** Designed for internal efficiency and flexibility.
* **Digital Twin Support:** Enables logical testing and validation before configuration is pushed to the physical network.
* **Minimal Code-Writing:** Allows network engineers to run the network with minimal low-level coding.

**Key Capabilities:**

1.  Topology design and designing.
2.  Topology emulation (using **GNS3**).
3.  Transparent hardware replacement.
4.  Day-0/Day-1 configuration (using **ZTP**).

**System Architecture:**

Spectron is a **modular, model-driven** platform interlinked by a **central message bus**.

* **Foundation (Toolkit):** Northbound API, schema-based model generator, and Source of Truth framework.
* **Top Layer (Consumption):** Tools, configuration generation, and applications that plug into the message bus to create and enforce the network intent.

**Spectron Wins (Impact):**

* **Bridge between Teams:** Became a common platform that connects **network engineering** and **DevOps** teams.
* **Abstraction Layer:** Engineers interact with the **network model**, not the specific device details, ensuring consistent operations across different network devices.
* **Layered Provisioning:** Facilitates data center provisioning in stages: Layout → IP addressing → Routing details → Platforms.

**Lessons Learned:**

* **Abstraction is Hard:** Don't try to solve every problem in a single abstraction.
* **Design with Primitives:** Use "Lego bricks" to build other components.
* **Embed Engineers:** Involve network engineers early; developers don't know all the needs.
* **Easy Verification:** Make testing simple so people actually do it.
* **Adapters & Abstractions:** They enforce consistency while allowing for necessary variability in devices and OSs.
* **Extensibility:** The modular architecture makes Spectron future-proof.

***

### **Session 2: Kubernetes Network Emulation (KNE) Project**

**Speakers:** Manodipto Ghose (Keysight Technologies) & Ryan Elliott (Google)

This presentation covered the **Kubernetes Network Emulation (KNE) project**, a tool designed to solve the problem of **scalable, multi-vendor network testing**.

**The KNE Solution:**

* KNE provides vendor-neutral network device emulation in a lightweight environment, leveraging **containers** on a **Kubernetes cluster**.
* It allows users to create complex, cost-effective network topologies for testing.
* Validating network design earlier in the lifecycle via virtualization helps fix problems sooner.

**Architecture and Components:**

* **Network OS:** Vendors supply a **containerized NOS**.
* **Topology Definition:** Nodes and links are specified in **JSON** for deployment on the K8s cluster.
* **Traffic Generation:** Handled by the **Open Traffic Generation (OTG)** project.

**Open Traffic Generator (OTG):**

* OTG is open, model-driven, community-focused, and vendor-neutral.
* Its API is based on **Open-API**. Keysight provides a reference implementation: https://ixia-c.dev.
* The data model is open, allowing any traffic generator (e.g., Trex, Magna, hardware generators, Ixia-c) to interact with it to define test ports, flows, and protocols.

**KNE Ecosystem:**

The project enjoys significant vendor support, which is often driven by Google's involvement, differentiating it from many community-built open-source networking projects. Participants include: **OpenConfig, Google, Nokia, Cisco, Arista Networks, Juniper Networks, and Keysight Technologies.**

***

### **Session 3: H-E-B's Automation Journey: From Zero to IaC**

**Speaker:** Erich Crosswhite (H-E-B Retailer)

Erich Crosswhite shared his journey into network automation, comparing it to training for a marathon, noting that his experience at a retailer (not a hyperscaler) might be more relatable to many engineers.

**The Starting Line (IaC Mandate):**

* H-E-B issued an **Infrastructure-as-Code (IaC) mandate**. Erich started from basic internet searches on IaC and automating Arista switches, discovering **Ansible** along the way.

**Training (Proof of Concept):**

* He built a **home lab** using an old server and **EVE-NG LTD**.
* The lab included Arista Networks **Cloudvision Portal (CVP)**, EOS VMs, and **ZTP**.
* He used an old laptop to install **Ansible AWX** and integrated it with **GitLab**, creating a functional proof-of-concept pipeline.
* He used Ansible AWX to build configurations, update CVP, and ensure **Confluence** documentation was updated automatically.

**The Importance of Labbing:**

* Labbing was crucial for discovering how certain directives behaved, preventing potentially "resume generating events" in production.

**Hitting a Wall (Source of Truth Integration):**

* Erich later integrated **Nautobot** (Source of Truth) to make the workflow more capable.
* This increased complexity exposed the system to **unintended consequences** (e.g., a change in Nautobot almost reflected in production due to an accidental DNS issue).
* **Pivot:** H-E-B paused Nautobot integration and focused on **validating proposed config changes** before pushing. They leveraged **Batfish** for this validation.

**Finishing the Race:**

H-E-B now has a functional and operational IaC system for their network. The journey, like a marathon, wasn't about speed, but about persistence and getting a functional system implemented.

***

### **Session 4: Autonomy vs. Automation: The Next Frontier**

**Speaker:** Scott Robohn (Network Automation Forum AutoCon Co-organizer)

Scott Robohn discussed the difference between automation and autonomy, asserting that **autonomy is the required next step** in IT evolution.

**Definitions:**

| Concept | Definition |
| :--- | :--- |
| **Automation** | Scripted, deterministic tasks. |
| **Autonomy** | Goal-driven, adaptive behavior (e.g., self-healing, self-configuring, self-optimizing). |

**Argument for Autonomy:**

* Autonomy saves work and reduces toil, aligning with the historical progression of information technology (e.g., moving from manual switchboard operators to autonomous switching, or using MPLS and BGP).

**How to Achieve Autonomy (Five Areas):**

1.  **Control Loops:** Reactions to signaling mechanisms (telemetry, observability).
2.  **Error Handling:** Accommodating unforeseen circumstances and exceptions safely.
3.  **Incremental Development:** Building workflow by workflow, which forces the reduction of corner cases.
4.  **People in/on/out of the loop:** Transitioning control as trust increases. 
5.  **Trust:** The system must be trusted before it can be liberated to act autonomously. Incremental development builds this trust.

**The Role of AI:**

* Scott believes AI is a **"how," not a "what"**. It is just a tool that does not change the five fundamental steps to autonomy.
* AI enables a **hybrid approach**, leveraging existing tools in new ways.
* AI can accelerate autonomy by reducing the need for humans in the loop, reacting automatically to control loops, and generating tedious designs.

**Control Plane 3.0:** Scott suggests the industry is moving towards **Control Plane 3.0**, characterized by distributed intelligence and increased autonomy, which AI is well-positioned to facilitate. The recommendation is to **"always be evaluating."**

***

### **Session 5: Internet2's AI Troubleshooting Agents (HAWAT)**

**Speaker:** Karl Newell (Internet2)

Karl Newell introduced **HAWAT (Heuristic Analysis With Adaptive Troubleshooting)**, an Internet2 project inspired by the "mentat" concept in *Dune*. The goal is to create an AI bot that can answer plain English questions, gather information, and offload tedious networking tasks for both staff and I2 network consumers.

**Key Concept: Tool Calling:**

* A standard LLM does not know network state. **Tool Calling** is the mechanism where the LLM is given a list of tools (like a network API) it can access.
* The LLM determines which tool(s) to use, runs the query, and returns the synthesized answer to the user.
* *Dangers:* The LLM can get stuck in a loop or exceed the maximum context window size.

**HAWAT Technical Stack:**

* **Frontend:** Streamlit
* **Backend:** Pydantic AI (formerly LangChain and LangGraph)
* **Development Lab:** Containerlab

**HAWAT Capabilities (Examples of Successful Prompts):**

* "Draw an ASCII network topology."
* "Show me the OSPF neighbors on core2."
* "I changed OSPF configuration and can no longer reach core4 from core1, what happened?"
* "My OSPF adjacency keeps dropping between core1 and core2."

**Future Direction (Insight Console & MCP):**

* A different version, the **Insight Console**, exposes a raw API to the LLM, allowing the LLM to autonomously figure out the necessary API queries.
* **Model Context Protocol (MCP):** Karl is working on an MCP implementation (a wrapper around the API) but noted that the results are currently *worse* than the current system, indicating a need for further development and refinement of the MCP architecture.

***

### **Session 6: USAA's Seven-Year Automation Evolution to AVD**

**Speaker:** Brandon Cavett (USAA)

Brandon Cavett detailed USAA's seven-year network automation journey, culminating in the adoption of **Arista's Architect, Validate, Deploy (AVD)** framework.

**Initial Processes (Day 0, Day 1, Day 2):**

* **Day 0/1 (Provisioning):** Used pipelines to grab available ports, integrate with management systems, and configure management/rack switches via calls to **Arista Cloudvision**. These processes were initially **single-threaded**.
* **Day 2 (Post-Provisioning):** Initially relied heavily on manual CLI interactions, which were error-prone and slow.

**Evolution to Ansible (The "Okay" Phase):**

* Moved to **Ansible playbooks**, which required extensive debugging.
* Developed **rollback playbooks** for quick recovery.
* **Challenges:** Difficulty keeping the design in Cloudvision synchronized with running configs, and inconsistencies due to varied engineer competency with Ansible.
* **NOS Upgrades:** Used Cloudvision to perform staggered, health-checked upgrades of switches.

**Revolution to AVD (Config-as-Code):**

* USAA investigated and began translating all their configuration into **Config-as-Code** using **Arista AVD**.
* **Advantages of AVD:**
    * **Opinionated Structure:** Enforces a standardized approach.
    * **Ease of Use:** Easier to use and train new staff on than raw Ansible.
* **Impact:**
    * **Standardization:** Configs are standardized across the environment.
    * **Rapid Change:** Changes can be pushed rapidly.
    * **Improved Control:** Uses AVD's built-in change control for review/approval and pre-staging changes, giving engineers back deployment time.

**Next Steps:**

* Map deployment processes onto a **CI/CD pipeline**.
* Integrate Arista **Cloud Test** & **Network Test Automation**.
* Retrofit other **brownfield** network environments to AVD (a hard task).

**Conclusion:** Brandon emphasized that a **mindset shift** is required for engineers to buy into automation, but once they recognize the hours saved, they embrace it.

***

### **Session 7: The AI Inflection Point: VibeOps and Digital Coworkers**

**Speaker:** John Capobianco

John Capobianco argued that **AI is a required next step** for network operations, marking a new inflection point in the 15-year transition from traditional operations to Dev/Ops practices.

**The Reality of Modern Networking:**

* **70% of engineers** still use traditional operations.
* Networks are now **beyond human ability to comprehend** individually; AI is necessary to make sense of the modern environment.

**The Power of AI ("VibeOps"):**

* The technology exists today to do "**VibeOps**," where engineers can ask the network in plain English what is going on (e.g., "What interfaces are having a problem?").
* John was "stunned" by the results when connecting an LLM to a programmatic network interface (like **pyATS**).

**Recommendations for Engineers (Incorporating AI):**

1.  Use **copilots** in your IDE.
2.  Use next-generation **AI-augmented CLIs**.
3.  Build **ReACT agents**.
4.  Add Model Context Protocol (MCP) servers to your MCP clients.
5.  Augment agents with RAG, RAPTOR, and graphs.

**The Future: Digital Coworkers:**

* John asserts that attendees are likely **the last generation of humans to work without digital coworkers**.
* While problems like hallucinations and power consumption exist, history suggests these will be solved.
* AI is not going away; it will become a permanent part of network operations. The sooner engineers adopt it, the better.`

  return (
    <section id="day2-general" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-4xl">2️⃣</span>
            <h2 className="text-3xl font-bold text-terminal-green">Day 2 - General Track</h2>
          </div>
          <p className="text-terminal-gray font-mono text-sm">$ ls -la day2_general/</p>
        </div>
        
        <div className="border border-terminal-green-dim bg-terminal-darker bg-opacity-50 rounded-lg p-8 backdrop-blur-sm">
          <MarkdownRenderer content={content} />
        </div>
      </div>
    </section>
  )
}

export default Day2General

