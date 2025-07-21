import React from 'react';

const CompanyPolicy = () => {
  return (
    <div className="min-h-screen bg-light-background text-light-textPrimary dark:bg-dark-background dark:text-dark-textPrimary p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-light-accent dark:text-dark-accent">
          Techverra Company Policy Handbook
        </h1>

        {/* SECTION TEMPLATE: Use for all policy blocks */}
        {/* 1. Internship Policy */}
        <section className="mb-10 bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border p-6 rounded-xl shadow-card">
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-dark-accent mb-2">
            1. Internship Policy
          </h2>
          <p className="mb-2">This policy ensures a structured, compliant, and secure internship program:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>Eligibility:</strong> Students or graduates within 12 months, aged 18+, preferably in Tech/Cybersecurity/Business.</li>
            <li><strong>Selection:</strong> Resume, cover letter, academic proof, interviews, background checks.</li>
            <li><strong>Duration:</strong> 1–12 months with fixed hours.</li>
            <li><strong>Stipend:</strong> Paid or unpaid.</li>
            <li><strong>Conduct:</strong> Dress code, punctuality, zero harassment/plagiarism.</li>
            <li><strong>Remote Work:</strong> Requires approval and secure internet.</li>
            <li><strong>Data Handling:</strong> NDA required; no personal devices.</li>
            <li><strong>IP Rights:</strong> Work is company property.</li>
            <li><strong>Certification:</strong> Based on performance.</li>
            <li><strong>Termination:</strong> With notice or for violations.</li>
            <li><strong>Liability:</strong> Company not liable for personal loss/injury.</li>
          </ul>
        </section>

        {/* 2. Consulting Agreement */}
        <section className="mb-10 bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border p-6 rounded-xl shadow-card">
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-dark-accent mb-2">
            2. Consulting Agreement
          </h2>
          <p className="mb-2">Applies to external consultants:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>Scope of Work:</strong> Defined in Annexure A.</li>
            <li><strong>Compensation:</strong> Milestone-based (30-40-30).</li>
            <li><strong>Term:</strong> Fixed start/end dates, renewable.</li>
            <li><strong>IP Ownership:</strong> Deliverables belong to the company.</li>
            <li><strong>Confidentiality:</strong> NDA required.</li>
            <li><strong>Penalties:</strong> Daily fines for delays.</li>
            <li><strong>Indemnity:</strong> Consultant liable for damages.</li>
            <li><strong>Data Protection:</strong> Must comply with IT law.</li>
            <li><strong>Arbitration:</strong> Disputes handled in Vijayawada.</li>
            <li><strong>Non-Compete:</strong> No competing work for 12 months post-contract.</li>
            <li><strong>Liability Limit:</strong> Capped at 6 months’ fees.</li>
            <li><strong>Force Majeure:</strong> Disasters suspend obligations.</li>
          </ul>
        </section>

        {/* 3. Offer Letter */}
        <section className="mb-10 bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border p-6 rounded-xl shadow-card">
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-dark-accent mb-2">
            3. Offer Letter
          </h2>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>Details:</strong> Candidate name, role, location, start date.</li>
            <li><strong>Position:</strong> Role, department, reporting manager.</li>
            <li><strong>Work Hours:</strong> Standard company hours/days.</li>
            <li><strong>Salary:</strong> Total CTC + breakdown.</li>
            <li><strong>Probation:</strong> Duration + performance review.</li>
            <li><strong>Compliance:</strong> Must follow all company policies.</li>
            <li><strong>Termination:</strong> 1-month notice or salary in lieu.</li>
            <li><strong>NDA:</strong> Signed on joining.</li>
            <li><strong>Deadline:</strong> Offer must be accepted by the due date.</li>
          </ul>
        </section>

        {/* 4. Director & Shareholder Policy 
        <section className="mb-10 bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border p-6 rounded-xl shadow-card">
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-dark-accent mb-2">
            4. Director & Shareholder Policy
          </h2>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>Directors:</strong> Maximum 2, must be family (blood or adopted).</li>
            <li><strong>Shareholding:</strong> 50% Family A, 50% Family B only.</li>
            <li><strong>Restrictions:</strong> No external transfers.</li>
            <li><strong>Decisions:</strong> Unanimous board/equity approvals required.</li>
            <li><strong>Exit:</strong> Shares offered to other family first.</li>
            <li><strong>Disputes:</strong> Resolved via arbitration in Vijayawada.</li>
          </ul>
        </section>*/}

        {/* 5–15. Additional Company Policies */}
        <section className="mb-10 bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border p-6 rounded-xl shadow-card">
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-dark-accent mb-2">
            4–15. Additional Company Policies
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Code of Conduct:</strong> Professionalism, respect, zero harassment.</li>
            <li><strong>Non-Disclosure:</strong> NDA required; protects IP, clients, finances.</li>
            <li><strong>Leave Policy:</strong> Annual (12–18 days), Sick (6–12), parental as per law.</li>
            <li><strong>Disciplinary:</strong> Theft, harassment, policy breach → warning → suspension → termination.</li>
            <li><strong>IT Security:</strong> No unauthorized software, mandatory VPN, monitored use.</li>
            <li><strong>Remote Work:</strong> Approval required, must maintain availability and security.</li>
            <li><strong>Training:</strong> Available post-probation, includes onboarding and compliance.</li>
            <li><strong>Grievance Matrix:</strong> HR → Dept Head → CEO → Legal. Confidential. No retaliation.</li>
            <li><strong>Workplace Safety:</strong> Drills, safety checks, mandatory reporting within 24 hrs.</li>
            <li><strong>Performance Appraisal:</strong> Bi-annual or annual. Ratings affect bonuses and promotions.</li>
            <li><strong>Exit Policy:</strong> 30-day notice, clearance required, NDA survives employment.</li>
          </ul>
        </section>

        {/* Footer Note */}
        <p className="text-sm italic text-light-textSecondary dark:text-dark-textSecondary mt-10">
          <strong>Note:</strong> All policies are under 6-month review cycles. This document is in drafting stage. Full legal versions available on request.
        </p>
      </div>
    </div>
  );
};

export default CompanyPolicy;
