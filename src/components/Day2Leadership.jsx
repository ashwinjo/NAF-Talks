import React from 'react'
import MarkdownRenderer from './MarkdownRenderer'

const Day2Leadership = () => {
  const content = `## Day 2 — Leadership Track

### **Session 1: Beyond the Code: People-Centric Leadership for Technical Projects**

**Speaker:** Eyvonne Sharp (Customer Engineering Manager, Google Cloud)

Eyvonne Sharp presented the inaugural talk of the Leadership Track, focusing on the critical role of **people-centric leadership** in the success of technical projects.

**The Failure of Projects:**

* Projects often fail not due to technical issues, but due to human factors, as evidenced by a 1987 London Stock Exchange project that was abandoned after six years and spending £400 million.
* **Failure Causes:** Unclear leadership, scope creep, communication problems, and conflating business problems with technical problems.
* Technical leadership is essential because it is the **leadership (or lack thereof)** that can deliver or derail a project's success.

**The Mindset Shift to Leadership:**

* **Leadership vs. Engineering:** Leading is a distinct job requiring a different skillset than engineering or management.
* **Success Metric:** A leader's success is defined by **growing other people** and making the *team* more effective, not by individual effectiveness ("our work" over "my work"). This is a difficult transition for engineers to make.
* **The Problem:** 75% of executives in a PMI survey believed projects were **"doomed from the start."**

**Essential Communication Skills (Three Tips):**

1. **Say the obvious thing out loud** to ensure clear alignment.
2. **Write it down:** Define the achievement goal, list people/roles, and clarify the **escalation process** *before* things go wrong.
3. Use a **canonical document** that includes a defined project scope.

**Driving Project Success:**

* **Cultivate an Executive Sponsor:** This person is key to **knocking down organizational barriers** and keeping the project on track.
* **Collaborative Leadership:** Focus on the **Why and the What** of the project, not the How, allowing the team to bring their own creativity and ideas.
* **Systemic Feedback:** Talk to team members to identify what is slowing projects down or causing stress in the system.

***

### **Session 2: How to Build a CFO-Worthy Business Case for Network Automation**

**Speaker:** Alex Henthorn-Iwane (Marketing Expert)

Alex Henthorn-Iwane provided practical guidance on building a financial justification for network automation that appeals directly to the executive level, especially the CFO.

**The Funding Challenge:**

* **The Final Boss:** The CFO (or other executive) is the "Final Boss" for funding, and they care about making a **sound business investment**, not networking details.
* **Value is Not Obvious:** Even clear benefits like faster provisioning and reduced downtime require explicit justification for executive buy-in.

**Three Building Blocks of Business Case Success:**

1. **Tell a Value Story** that connects with business goals.
2. **Run the numbers** that the financial stakeholders care about.
3. **Build trust** by managing up and out (persuading the system).

**The Need to "Persuade the System":**

* **Great managers persuade the system,** while good managers protect their people.
* Engineers must step **out of their domain** with curiosity and courage to talk to non-technical stakeholders who influence project success.

**Strategic Mapping:**

* **Identify Investment Drivers:** Determine what drives the company's investments (e.g., revenue, cost savings, risk reduction, mission).
* **Map Value:** Tie the value of network automation directly to those identified drivers.
* **Opex vs. Capex:** Determine the organization's preference for **Operational Expenditure (Opex)** or **Capital Expenditure (Capex)** business cases, and frame the financial numbers accordingly.

**Recommended Storytelling Formula:**

1. Choose your **lead business driver**.
2. Describe the current problem and the **estimated annual impact**.
3. Make your investment request (Year 1 and a 5-year projection).
4. Describe the **financial outcome** (Opex or Capex).
5. Describe the **strategic outcome**, tying it back to the original business driver.

***

### **Session 3: Don't Start Somewhere - A Methodical Approach to Network Automation**

**Speaker:** Srividya Iyer

Srividya Iyer challenged the common advice to "just start somewhere," arguing that this leads to disorganized efforts, and advocated for a **methodical, deliberate approach** centered on the **Five W's of Network Automation**.

**Pitfalls of the "Just Start Somewhere" Approach:**

* Undocumented, individual scripts.
* Lack of time, focus, and accurate project estimation.
* Absence of objectives and expected outcomes.

**The Five W's (Methodical Approach):**

1. **Why:** Define clear **business and technical benefits**. Goals must be compelling, not just an executive edict or following a trend.
2. **Where:** Understand the current state of network automation. Since there's no official maturity model, use an existing scale (like one suggested by John Howard) to know your position.
3. **Who:** Identify all **stakeholders** (including executive sponsors) because different teams have conflicting priorities that must be aligned early.
4. **What You Need:**
   * **Objectives:** Must be **measurable** (e.g., "reduce time to resolve tickets by 20%"), not vague ("improve operational efficiency"). They must map back to the identified benefits.
   * **Use Cases, Policies, Staffing, Tools/Technologies.**
5. **Tools and Technologies:** This should be the **last step, not the first**. Consider the **Network Automation Framework** for guidance.

**Staffing and Planning:**

* The network automation team needs people with **development skills**.
* Estimate the number of people required to **support and maintain** automation over the next 3 years.

The methodical approach of defining scope and clear goals reinforces the leadership principles discussed by Eyvonne Sharp.

***

### **Session 4: Case Study: Building an Enterprise Automation Platform in Banking**

**Speaker:** Sujit Gangadharan (VP - Infra Automation and DevOps, VyStar Credit Union)

Sujit Gangadharan shared a case study on how VyStar Credit Union successfully implemented **Ansible** to build an enterprise automation platform, focusing heavily on strategy and culture.

**Drivers for Automation:**

* Unsustainable manual processes (took days).
* Competition from fintechs.
* Cybersecurity threats and customer expectations.
* Business-wide emphasis on cost optimization and innovation.
* Regulatory constraints requiring extensive approval workflows.

**Cultural and Technical Barriers:**

* **Culture:** Engineers were resistant, worried about job replacement, and familiar with existing manual processes.
* **Process:** Manual IT operations were slow.

**Strategic Approach (Vision to Reality):**

* **Defined Roles:** Worked with Red Hat and system integrators to clearly define roles and set up the platform.
* **Internal Champions:** Identified and kept internal champions engaged through regular project updates.
* **Funding & Learning:** Funded **Ansible training** and created learning opportunities.
* **Initial Focus:** Prioritized **tedious, repeatable, non-critical tasks** with clear value and low risk to ensure early wins and build internal confidence.

**Timeline: First 4-6 Months:**

* Set up the Ansible platform and developed a mix of use case playbooks (5 simple, 3 medium, 2 complex).
* Implemented **ServiceNow integration**.
* Established a **guardrail** to ensure every change was documented and audited.
* **Communication:** Initiated ongoing communication with the team to address pain points and clearly state that automation was **not intended to take away jobs**.

**Cultural Shifts and Lessons Learned:**

* **Attitude Change:** Nurtured by ongoing communication, engineers became internal champions, shifting teams from manual processes to strategic thinking. Cultural shifts take time.
* **Lessons Learned:**
  * **Culture shifts are harder** than technology implementation.
  * A **hybrid approach** (partners and internal development) proved most sustainable.
  * The **skills gap** was significant and required more time to address.

**Impact:** Early wins included **66% efficiency improvement** and a savings of **3,500 hours**.`

  return (
    <section id="day2-leadership" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-4xl">👥</span>
            <h2 className="text-3xl font-bold text-terminal-green">Day 2 - Leadership Track</h2>
          </div>
          <p className="text-terminal-gray font-mono text-sm">$ ls -la day2_leadership/</p>
        </div>
        
        <div className="border border-terminal-green-dim bg-terminal-darker bg-opacity-50 rounded-lg p-8 backdrop-blur-sm">
          <MarkdownRenderer content={content} />
        </div>
      </div>
    </section>
  )
}

export default Day2Leadership

