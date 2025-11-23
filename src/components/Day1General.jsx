import React from 'react'
import MarkdownRenderer from './MarkdownRenderer'

const Day1General = () => {
  const content = `## Day 1 — General Track

### **Session 1: IBM and the Role of AI in Network Automation**

**Speaker:** Benjamin Hickey (IBM)

IBM's presence at a network automation conference is rooted in **Artificial Intelligence (AI)**. While IBM has a massive portfolio including tools like **Terraform** and **Ansible**, the core message is that networking, and specifically network automation, will benefit from their deep history in AI.

**Key AI Concepts:**

* **Beyond LLMs:** AI is not limited to **Large Language Models (LLMs)**, which are good for right-brain, creative thinking.
* **Deterministic AI:** AI also encompasses techniques for deeply and factually understanding data, providing the **deterministic answers** required for correct decisions about network events.
* **Two Sides of AI:** Network automation requires both the **creative (LLM)** and **deterministic (data-centric)** sides of AI.

The industry has moved from wondering about AI's potential to actively exploring its capabilities with **network telemetry**, making this a timely focus for IBM.

***

### **Session 2: Opening Keynote: Funding Network Automation Projects**

**Speaker:** Jeff Gray (Keynote)

The opening keynote focused on how network engineers can effectively **obtain funding** for network automation projects by learning to speak the language of the business—**money and finance**.

**The Communication Problem:**

* **Executive Focus:** Executives (CxOs) do not speak the language of network engineering (protocols, software development, Go vs. Python).
* **The Purse Strings:** Financial stakeholders hold the budget and make the final decision.
* **The Solution:** Network engineers must learn to frame their projects in the context of **business value** and financial impact, not purely technical merits.

**The Language of Finance (Impact Model):**

Engineers must learn the lingo and math to have a business-relevant conversation. This includes understanding the impact model, which captures:

1.  Current cash flow state.
2.  Target cash flow for 5 years out.
3.  A business plan to ramp to the target, backed by research.

**Key Financial Metrics to Know:**

* **Net Present Value (NPV)**
* **Payback Period**
* **Internal Rate of Return (IRR)**

These numbers must be based on a defensible reality, using network data like device count, downtime hours, and outage costs. Assembling a validated **business case** with a projected rollout plan increases the likelihood of project approval. The core question to answer for a CxO is: **"What's in it for me?"**

***

### **Session 3: De-hyping AI and the Path to Autonomous Ops**

**Speaker:** Peter Sprygada (Itential)

Peter Sprygada de-hyped AI, asserting that it is simply **"just another tool"** to make network operations better.

**AI Integration Challenges:**

1.  **Security:** AI systems must be secure to prevent major organizational risks.
2.  **Understandability:** Operators must understand exactly what the AI is doing with the infrastructure.
3.  **Infrastructure Design:** Current infrastructure was not designed to talk to AI natively, requiring a clear integration plan.

**Path to Safe and Useful AI Integration (Three Pillars):**

1.  **Instrumentation** of the infrastructure.
2.  **Deterministic Execution** (same input yields the same output every time).
3.  **Reasoning** with the information to decide on infrastructure actions.

**Journey to Autonomous Operations:**

This foundation provides a path toward **autonomous network operations**, moving through phases:

* **Human in the loop**
* **Human on the loop** (monitoring bounded AI execution)
* **Human out of the loop**

**Itential's Solution:** Peter introduced **FlowAI**, which combines infrastructure instrumentation, deterministic execution, and AI reasoning for network orchestration and automation.

***

### **Session 4: The Network Automation Framework (NAF)**

**Speaker:** Dinesh Dutt (subbing for Ryan Shaw)

Dinesh Dutt introduced the **Network Automation Framework (NAF)**, a community effort to create a **common language** and set of terms for talking about network automation. NAF is a conceptual **map, not the territory**; it does not recommend specific tools or protocols.

**Objective:** Provide common building blocks that are simple, functional, and composable, all built on network engineering fundamentals.

**The Six Common Building Blocks (Architecture):**

1.  **Intent:** What is wanted? (Captures expected outcomes; should be versioned, extensible, normalized, and declarative.)
2.  **Observability:** What was received? (Captures operational truth; should be timestamped and queryable.)
3.  **Executor:** Pushes changes. (Should support multiple protocols, be dry-runnable, and idempotent.)
4.  **Collector:** Gathers network telemetry/data. (Should support push/pull, and be multi-vendor/multi-protocol.)
5.  **Orchestrator:** Coordinates and integrates the various blocks.
6.  **Presentation:** The human interaction layer (CLI, GUI, diagram, etc.). (Neither implies nor precludes a single pane of glass.)

The NAF is currently seeking community effort to expand and increase the usefulness of the documentation.

***

### **Session 5: "Confessions of a CLI Lifer" - Overcoming Automation Resistance**

**Speaker:** Andy Lapteff (Host of 'The Art of Network Engineering' Podcast)

Andy Lapteff shared a deeply personal story about his transformation from being an **"anti-automation CLI Lifer"** to an automation advocate.

**The Barrier:**

* Andy's resistance stemmed from a persistent story he told himself: that he couldn't code, rooted in a past failure in computer science.
* This perspective was challenged during a year of unemployment, leading to a moment of crisis and a realization that the problem was his own negative self-narrative.

**The Breakthrough:**

* He took an online Python class and, upon successfully writing a script to log into a network device, his entire perspective changed.
* He advocates for **learning in public**, sharing successes and failures to help others overcome their psychological barriers.

**Key Takeaways for Engineers:**

* Traditional network engineers need to **start telling themselves a different, positive story** about their capabilities.
* **Don't wait for a layoff** or moment of crisis to start learning automation and skilling up.

***

### **Session 6: Breaking Down Barriers Before Building Platforms**

**Speaker:** Mark Prosser (IP Consulting Engineer at Nokia / Founder of TORNOG)

Mark Prosser discussed the need to focus on essential questions and **break down organizational barriers** before investing heavily in network automation platforms. He noted that common debates (e.g., Ansible vs. Python) often distract from these core issues.

**The Platform Paradox:**

* **Platforms** are useful as a collection of working subsystems with a unified layer.
* **The Challenge:** They often have trouble scaling, may be limited to specific use cases/technologies, and can lead to running multiple, disparate platforms.
* **Rule 6 (RFC 1925):** "It is easier to move a problem around than it is to solve it"—meaning platforms often involve trade-offs rather than pure solutions.

**The Automation Assembly Line & Data Stores:**

* Automating network operations involves much more than the CLI; it touches ticketing, change management, and business logic.
* An automation platform must encompass various **data stores** (services, ticketing, inventory). Critical questions around these stores include:
    * Who owns the data?
    * How is it controlled?
    * What format is it in?

**The Biggest Barriers to Automation (and Cultural Change):**

1.  **Understanding the network as a system.**
2.  **Skills** (Do you build or buy the necessary expertise?)
3.  **Culture** (Is your organization ready to adapt to the change automation brings?)

***

### **Session 7: Network Automation Case Study: From Turnkey to Custom Source of Truth**

**Speaker:** Greg Botts (Senior Network Engineer, Intel Data Centers)

Greg Botts presented a case study of Intel's journey from a screen-scraping, legacy automation system to a customized, data-centric solution for their 5,000-device leaf-spine network.

**Phase 1: Turnkey Solution (2019):**

* **Initial Setup:** Used a vendor's turnkey solution with ZTP (Zero Touch Provisioning) built-in.
* **Configuration:** Relied on **YAML and Jinja** templates stitched together by a rendering engine.
* **The Problem:** The turnkey system had a device limit, and the configuration file grew unmanageably large, requiring multiple instances and customization.

**Phase 2: Customization and Technical Debt (Years 1-5):**

* **Action:** Moved templates and rendering logic off-box into a proper repository. Developed an in-house self-service database engine and API server.
* **Result:** Managed 5,000 devices with only 1.5 full-time employees.
* **The New Problem:** The vendor made unsupported feature changes, licensing costs (per-device) increased, and technical debt accumulated from years of customization.

**Phase 3: Data-Centric Overhaul (The Present):**

* **Goal:** Focus on **data modeling** so that configuration becomes a byproduct.
* **Source of Truth:** Adopted **Nautobot** as the network Source of Truth (NSoT).
* **Implementation Steps:**
    1.  Built **ZTP capability** pulling inventory from Nautobot.
    2.  Modeled their own data within the Nautobot schema (e.g., modeling VLANs to devices, locations, VRFs).
    3.  Leveraged **golden configs** within Nautobot and developed separate code to push configurations.
    4.  Integrated third-party tools (e.g., an MLAG checker).
    5.  Standardized push processes and handed the system over to network engineers.

**Impact:** The migration was delivered on time and under budget, **cutting provisioning time by 75%**.

***

### **Session 8: Lifecycle Automation: The Middle Phase of a Network Device's Life**

**Speaker:** Cat Gurinsky

Cat Gurinsky focused on the "middle" part of a network device's life—**lifecycle automation** for operations, monitoring, maintaining, and troubleshooting. Automation is critical here to combat issues like low headcount, high device volume, and limited budget.

**Automation in Troubleshooting:**

* **Standard Steps:** Common troubleshooting for alerts (link down, power supply issues) follows a standard set of steps that can be automated.
* **End-to-End Automation:** This includes not just information gathering, but also interacting with the help ticketing system and creating work orders.

**Case Study: MLAG OS Upgrades (High-Risk Automation):**

* Cat detailed the complex process of automating OS upgrades on a production device during the production day, leveraging MLAG pairs and ISSU (In-Service Software Upgrade) features.
* **Risk:** Events must be performed in the correct order; forgetting a dependency can lead to major outages.
* **Gotchas:** Watch out for **"one off" devices** with non-standard configs, single-homed devices, and devices with low flash memory.

**OS Upgrade Phases (Incrementally Built):**

1.  **Pre-Upgrade:** Check for flash room, verify LAGs, get a config baseline, collect "show" commands via API, and confirm the switch is ready.
2.  **Upgrading:** Boot the new OS extension-free for a sanity check, reload to boot the new OS, perform basic ping tests, and verify MLAG status.
3.  **Post-Upgrade:** Re-push the baseline config, re-install extensions, clean up flash, run various final "show" commands, and perform a final gathering of device facts.

**Development Advice:** Build complex automation **incrementally**, adding functionality bit by bit using a wrapper script, rather than attempting an "all or nothing" approach. She also encourages peer code review and using AI for assistance.

***

### **Session 9: 2025 State of Network Automation Survey Results**

**Speaker:** Chris Grundemann

Chris Grundemann shared the 2025 results of the annual State of Network Automation Survey, highlighting key statistics about the industry's progress and challenges.

**Key Survey Statistics (2025 Results):**

* **Automation in Titles:** **25%** of respondents are officially designated "automators" in their job titles.
* **Automation Level:** Most networks are currently only **30% automated**.
* **Most Common Use Cases:**
    * Configuration pushes (without validation).
    * Monitoring.
    * *(Note: Chris wondered why config pushes—a hard task—are prioritized over easier "low-hanging fruit" without validation.)*
* **Least Common Use Case:** Fully **autonomous remediation**.
* **Tooling:**
    * Most people use **open source or homegrown** tools. Less than half use vendor automation tooling.
    * **Python** is used by almost everyone writing their own scripts.
    * **Ansible** is the most frequently used free OSS tool, and also the most frequently used paid tool.
* **LLMs in Practice:** Not too many people are using LLMs in their automation practice **yet**.
* **Troubleshooting:** Lots of people *think* they should be automating troubleshooting, but few have actually done it.
* **Impact Measurement:** Measurement is inconsistent. **Nearly half** of respondents are not measuring automation's impact at all.
* **Biggest Barriers to Adoption:**
    * Lack of skills.
    * Organizational & cultural challenges.`

  return (
    <section id="day1-general" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-terminal-darker bg-opacity-30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-4xl">1️⃣</span>
            <h2 className="text-3xl font-bold text-terminal-green">Day 1 - General Track</h2>
          </div>
          <p className="text-terminal-gray font-mono text-sm">$ ls -la day1_general/</p>
        </div>
        
        <div className="border border-terminal-green-dim bg-terminal-bg bg-opacity-50 rounded-lg p-8 backdrop-blur-sm">
          <MarkdownRenderer content={content} />
        </div>
      </div>
    </section>
  )
}

export default Day1General

