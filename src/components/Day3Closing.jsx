import React from 'react'
import MarkdownRenderer from './MarkdownRenderer'

const Day3Closing = () => {
  const content = `## Day 3 — Closing Notes

### **Session 1: The NetDevOps Journey: Manual Firefighting to Agentic Autonomy**

**Speaker:** Greg Freeman (VP Network and Customer Transformation, Lumen)

Greg Freeman delivered the closing keynote on Lumen's transition to a **NetDevOps mindset**, covering their journey from manual firefighting to using Agentic AI.

**Lumen Network Context:**

* **Scale:** Over 340,000 miles of global fiber and 350 Tbps of global backbone capacity.

**The NetDevOps Transformation Focus:**

1.  **People:** Pivoted to a new culture by training their highest-skilled engineers to become **automation engineers**.
2.  **Data Analytics:** Focused heavily on data acquisition and analytics as the foundation for transformation.
3.  **Task Automation:** Stringing together task automations leads to **workflow orchestration**, which is focused on solving large-scale **business problems** rather than small network fixes.

**Three Principles for Operations:**

1.  **Don't let it break:** Focus on **fire prevention** over fire-fighting.
2.  **Fix it fast:** Workflows must be designed to **speed up repairs** when failures occur.
3.  **Communicate effectively.**

**Implementation and Scale:**

* Lumen has developed **355 workflows** to date, running **60 million tasks** through the system.
* **Workflows** are initiated by machines, humans, or run entirely by machines.
* **Process Standardization:** Required hard work upfront, including two mandatory documents (**Process Description Doc** and **Solution Design Doc**) to formalize processes before coding began.
* **Tooling:** Deployed **Ansible** for each network, integrated with ticketing, alarming, Splunk, and CMDB. **Itential** is used as the central automation platform.
* **Impact:** Over 80% of network configurations are pushed **machine-to-machine**.

**Investigating AI (The Next Phase):**

Lumen is investigating AI to help manage network orchestration and take action on network events.

* **Machine Learning (ML):** AI that **predicts**.
* **Generative AI (GenAI):** AI that **creates** (LLMs, chatbots).
* **Agentic AI:** AI that **takes action** (The goal for network operations).

Lumen has developed an Agentic AI solution with a natural language interface that returns technical output, diagrams, and recommendations. They use **Model Context Protocol (MCP)** to support client applications integrating with these domain-specific AI agents.

***

### **Session 2: The Secret to Network Config & Security Compliance at Scale**

**Speaker:** Vincent Phelan (Standard Chartered Bank)

Vincent Phelan presented on how a strong **architecture combined with automation** is essential for driving network configuration and security compliance at scale.

**The Foundation: Architecture & Standardization:**

* **Power:** Architecture drives standardization, and automation thrives in standardized environments.
* **The Problem:** A haphazard network without a clear vision or architecture is **not automatable**.
* **Integration:** Automation is not a last-minute fix; it must be **integrated with architecture from the start**.
* **Anti-Pattern Symptoms:** Too many tools, too many exceptions, and too many corner cases ("Too much/many").

**Anti-Patterns in Automation Deployments:**

1.  **Optimize prematurely** and combine steps.
2.  Be **too specific** ("pets over cattle").
3.  Fail to eliminate manual steps and **multiple sources** of truth.
4.  Worry about **imaginary scaling issues** in either direction.
5.  **Forcing network engineers into foreign formats** (e.g., YAML, Jinja2).

**Key Lessons Learned:**

1.  **Effective automation requires architecture:** Reduce the number of products/frameworks and eliminate one-offs.
2.  **Iterate and improve:** Experiment, keep what works, and discard what doesn't.
3.  **Pick your battles and your pace:** Don't do too much too soon, which disrupts progress.
4.  **Eliminate manual steps:** Automation must be **self-maintaining** to be successful.

***

### **Session 3: Using AI to Build a Network Supporting AI**

**Speaker:** Senad Palislamovic

Senad Palislamovic discussed building a southbound network interaction layer using AI, addressing the industry's continued reliance on vendor-native execution engines instead of standardized **YANG models**.

**The AI Challenge in Network Engineering:**

* **The Requirement:** Network engineering requires **100% accuracy** and zero errors, which LLMs are not inherently capable of providing.
* **The Goal:** Can AI perform a discrete set of **exact instructions** (e.g., configuring BGP on a Juniper device)? Senad believes it can.

**Senad's AI Framework (Modular Architecture):**

The pipeline includes a **prompt factory, MCP server, LLM, RAG, and network devices**. The architecture is modular to allow swapping LLM models.

1.  **Prompt Engineering:** Increases **determinism** by explicitly telling the LLM its role is an **execution engine** and providing exact instructions, suppressing its natural creativity.
2.  **RAG (Retrieval-Augmented Generation):** Solves the LLM hallucination problem. RAG uses a **vector database** of domain-specific information (enterprise and vendor-specific data) to ground the foundation model.
    * *Chunk Size Note:* The optimal chunk size for RAG content is between 2K and 3K.
3.  **Model Context Protocol (MCP):** Acts like a **route reflector**. Its role is to decide **what API call goes where** within the pipeline.

**Conclusion:** Achieving 100% accuracy for LLMs in network engineering is not dependent on a single model, but on the synergistic collaboration of all data sources, RAG, prompt engineering, and the other components within the detailed architecture.

***

### **Session 4: Crossing the Chasm with Gluware**

**Speaker:** Ernest Lefner (CPO, Gluware)

Ernest Lefner presented a sponsored talk on how **Gluware** helps organizations cross the automation chasm, achieving the **Pareto Principle** (20% effort for 80% value).

**The Automation Chasm:**

* The chasm represents the 80% effort required to build a foundational automation capability (training, tools, development).
* **The Key:** Leveraging the engineers' network knowledge to drive business value.

**Gluware's Foundational Capability:**

The platform aims to provide this foundation with essential features:

* **Core Features:** Security, RBAC, Source of Truth, disaster recovery, and ability to scale.
* **Support:** Starts with **config drift and config auditing**, moving to **device management** and **config modeling**.
* **Other Features:** **OS Manager** (for upgrades/patches) and **Network RPA** (for no-code process automation).

**The Next Step: Gluware Titan (AI Ops):**

Gluware has launched **Gluware Titan**, an AI Ops offering built on three pillars:

1.  **Co-Pilot**
2.  **AI Agents**
3.  **MCP Services Layer** (for integrating with third-party agents and tools like NetBox and ServiceNow).

**The MCP Layer's Role:**

The MCP server acts like an **air traffic controller** and provides validation capabilities:

* Validated On-Boarding
* Validated Change
* Validated Agent Interaction

***

### **Session 5: Why Haven't We Seen Full Adoption of Network Automation Yet?**

**Speaker:** Simon Lok (RG Nets, Inc.)

Simon Lok concluded the session by addressing the provocative question: **"Why haven't we seen full adoption of network automation yet?"** He offered three primary reasons:

1.  **The Admins Themselves (The Trust Barrier):**
    * **The Problem:** Admins are the least comfortable and least trusting ("over my dead body" mindset). Their skepticism is often justified by years of negative experience.
    * **The Solution:** To build psychological comfort, the system must **show its work** (e.g., providing a clear \`diff\`). The industry needs better tools to achieve this transparency.

2.  **Vendor Lock-In and Vertical Integration:**
    * **The Problem:** Vendors often push for a **vertically integrated walled garden** approach.
    * **The Solution:** Customers should seek out and buy **fully disaggregated solutions** and demand access to **source code** to build their own custom solutions.

3.  **Lack of Community Critical Mass:**
    * **The Problem:** The network automation community is still too insular.
    * **The Solution:** The community needs to focus on **growing the global community** rather than just gathering in small, separate groups.`

  return (
    <section id="day3-closing" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-terminal-darker bg-opacity-30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-4xl">3️⃣</span>
            <h2 className="text-3xl font-bold text-terminal-green">Day 3 - Closing Notes</h2>
          </div>
          <p className="text-terminal-gray font-mono text-sm">$ ls -la day3_closing/</p>
        </div>
        
        <div className="border border-terminal-green-dim bg-terminal-bg bg-opacity-50 rounded-lg p-8 backdrop-blur-sm">
          <MarkdownRenderer content={content} />
        </div>
      </div>
    </section>
  )
}

export default Day3Closing

