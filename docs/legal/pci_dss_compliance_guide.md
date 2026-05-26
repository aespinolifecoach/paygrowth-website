# PCI DSS COMPLIANCE GUIDE FOR MERCHANTS

**PayGrowth LLC** — Payment Card Industry Data Security Standard

---

## WHAT IS PCI DSS?

The **Payment Card Industry Data Security Standard (PCI DSS)** is a set of security requirements established by the PCI Security Standards Council to protect cardholder data. Compliance is **mandatory** for any business that accepts, processes, stores, or transmits credit card information.

As a PayGrowth merchant, you are contractually required to maintain PCI DSS compliance throughout your relationship with us. Failure to comply may result in fines, increased fees, or termination of your processing services.

---

## COMPLIANCE TIERS

Your compliance requirements depend on your annual transaction volume:

| Tier | Annual Visa Transactions | Requirements |
|------|-------------------------|--------------|
| **Tier 1** | Over 6 million | Annual on-site audit by QSA + network scan |
| **Tier 2** | 1 million – 6 million | SAQ D + quarterly network scan |
| **Tier 3** | 20,000 – 1 million | SAQ C or SAQ B-IP + quarterly network scan |
| **Tier 4** | Under 20,000 | SAQ A, SAQ A-EP, or SAQ B + quarterly network scan (if applicable) |

Most small to mid-size businesses fall into **Tier 3 or Tier 4**.

---

## THE 12 PCI DSS REQUIREMENTS

### Build and Maintain a Secure Network

| # | Requirement | What It Means for Your Business |
|---|-------------|----------------------------------|
| **1** | Install and maintain a firewall configuration | Use a firewall to protect cardholder data. Segment your payment systems from other business networks. |
| **2** | Do not use vendor-supplied defaults | Change all default passwords, usernames, and security parameters on POS systems, routers, and firewalls. |

### Protect Cardholder Data

| # | Requirement | What It Means for Your Business |
|---|-------------|----------------------------------|
| **3** | Protect stored cardholder data | Do not store full magnetic stripe data, CVV2/CVC2 codes, or PINs after authorization. If you store primary account numbers (PANs), render them unreadable (e.g., tokenization, truncation, hashing, encryption). |
| **4** | Encrypt transmission of cardholder data | Transmit cardholder data over open/public networks using strong encryption (TLS 1.2 or higher). Never send card numbers via email. |

### Maintain a Vulnerability Management Program

| # | Requirement | What It Means for Your Business |
|---|-------------|----------------------------------|
| **5** | Use and regularly update antivirus software | Install and maintain antivirus/anti-malware on all systems, especially POS systems and payment terminals. |
| **6** | Develop and maintain secure systems and applications | Keep all software, firmware, and POS systems updated with the latest security patches. |

### Implement Strong Access Control Measures

| # | Requirement | What It Means for Your Business |
|---|-------------|----------------------------------|
| **7** | Restrict access to cardholder data by business need-to-know | Only employees who absolutely need cardholder data to do their jobs should have access. Implement role-based access controls. |
| **8** | Assign a unique ID to each person with computer access | Every employee must have their own unique username and password. No shared accounts. Use multi-factor authentication where possible. |
| **9** | Restrict physical access to cardholder data | Secure areas where payment systems and paper records are stored. Use locks, cameras, and visitor logs. |

### Regularly Monitor and Test Networks

| # | Requirement | What It Means for Your Business |
|---|-------------|----------------------------------|
| **10** | Track and monitor all access to network resources and cardholder data | Maintain audit logs for all access to systems handling cardholder data. Logs should be retained for at least 12 months. |
| **11** | Regularly test security systems and processes | Perform quarterly network vulnerability scans (by an Approved Scanning Vendor). Conduct annual penetration testing for larger merchants. |

### Maintain an Information Security Policy

| # | Requirement | What It Means for Your Business |
|---|-------------|----------------------------------|
| **12** | Maintain a policy that addresses information security | Create, distribute, and maintain a written information security policy. Review annually and update as needed. Train all employees on security procedures. |

---

## SELF-ASSESSMENT QUESTIONNAIRE (SAQ)

The SAQ is a validation tool to confirm compliance. Select the correct SAQ for your environment:

| SAQ Type | Applicable To |
|----------|---------------|
| **SAQ A** | Card-not-present merchants (e-commerce, mail/phone order) that outsource all processing and do not store cardholder data |
| **SAQ A-EP** | E-commerce merchants that outsource payment processing but have a website that impacts payment page |
| **SAQ B** | Merchants using only standalone dial-out terminals or imprinters — no electronic cardholder data storage |
| **SAQ B-IP** | Merchants using standalone PTS-approved payment terminals with an IP connection (no electronic storage) |
| **SAQ C** | Merchants with payment application systems connected to the internet (e.g., web-based POS) |
| **SAQ C-VT** | Merchants using only web-based virtual terminals |
| **SAQ D** | All other merchants not eligible for any other SAQ type — most comprehensive |

**Most PayGrowth merchants will use SAQ A, SAQ A-EP, or SAQ C.**

---

## SELF-ASSESSMENT PROCESS

### Annual Compliance Steps

1. **Determine Your SAQ Type** (see above)
2. **Review the SAQ Questions** — available at pcisecuritystandards.org
3. **Complete the SAQ** — answer all questions truthfully and thoroughly
4. **Pass Quarterly Network Scan** (if applicable) — use an Approved Scanning Vendor (ASV)
5. **Submit Attestation of Compliance (AoC)** — sign and submit to PayGrowth
6. **Maintain Compliance** — continuously meet requirements throughout the year

### Quarterly Network Scans
If your SAQ type requires network scanning (SAQ C, SAQ D, SAQ A-EP), you must:
- Use an Approved Scanning Vendor (ASV) — list available at pcisecuritystandards.org
- Complete a scan once every 90 days
- Remediate any failing items within the scan window
- Provide scan reports to PayGrowth upon request

---

## COMMON PITFALLS & BEST PRACTICES

### What Not To Do

| Common Mistake | Why It's Dangerous |
|----------------|-------------------|
| Storing CVV2/CVC2 codes after authorization | Direct violation of PCI DSS Requirement 3.2 |
| Storing full magnetic stripe data | Direct violation; potential for massive data breach |
| Using default passwords on POS systems | Extremely common attack vector |
| Sharing login credentials | Violation of Requirement 8; no accountability |
| Sending card numbers via email | Unencrypted transmission; common breach cause |
| Skipping security patches | Leaves known vulnerabilities unaddressed |
| Ignoring suspicious activity | Delays breach detection |

### Best Practices

| Practice | Benefit |
|----------|---------|
| Use tokenization | Replaces PANs with tokens; reduces PCI scope |
| Use point-to-point encryption (P2PE) | Encrypts data from swipe to processor; reduces PCI scope |
| Limit data storage | Less data = less risk; easier compliance |
| Employee security training | Human error is the leading cause of breaches |
| Maintain an incident response plan | Faster containment in case of breach |
| Use separate networks for payment systems | Limits exposure if other systems are compromised |
| Enable MFA for remote access | Significantly reduces unauthorized access risk |
| Regular backup of non-cardholder data | Business continuity if systems are compromised |

---

## CONSEQUENCES OF NON-COMPLIANCE

| Consequence | Description |
|-------------|-------------|
| **Monthly Non-Compliance Fee** | $20/month assessed by PayGrowth until compliant |
| **Card Network Fines** | $5,000 - $100,000+ per incident from Visa/Mastercard |
| **Data Breach Costs** | $100 - $500+ per record (including forensic investigation, credit monitoring, legal fees) |
| **Increased Processing Rates** | Non-compliant merchants may be surcharged |
| **Service Suspension** | Processing may be suspended until compliance is achieved |
| **Account Termination** | Persistent non-compliance results in permanent termination |
| **Loss of Card Acceptance** | May lose ability to accept credit/debit cards entirely |
| **Legal Liability** | Lawsuits, regulatory actions, and reputational damage from breaches |

---

## REPORTING A DATA BREACH

If you suspect or confirm a data breach involving cardholder data, you must:

1. **Immediately notify PayGrowth** at [breach-report@paygrowth.com] or [Emergency Phone Number]
2. **Contain the breach** — isolate affected systems, do not destroy evidence
3. **Preserve logs and forensic evidence** — do not power down systems unnecessarily
4. **Notify your acquiring bank** — PayGrowth will coordinate this
5. **Engage a PCI forensic investigator (PFI)** — as required by Card Networks
6. **Notify law enforcement** — if criminal activity is suspected
7. **Cooperate with investigation** — full cooperation is mandatory under Card Network rules

**Do NOT:**
- Investigate on your own without guidance
- Destroy or alter potential evidence
- Publicly disclose the breach before consulting with PayGrowth and legal counsel
- Ignore the incident — early containment significantly reduces damage

---

## RESOURCES

| Resource | URL |
|----------|-----|
| PCI Security Standards Council | https://www.pcisecuritystandards.org/ |
| SAQ Documents and Instructions | https://www.pcisecuritystandards.org/document_library/ |
| List of Approved Scanning Vendors (ASVs) | https://www.pcisecuritystandards.org/assessors_and_solutions/ |
| List of Qualified Security Assessors (QSAs) | https://www.pcisecuritystandards.org/assessors_and_solutions/ |
| Visa Compliance Program | https://usa.visa.com/ |
| Mastercard Security Rules | https://www.mastercard.us/ |
| PayGrowth Compliance Support | compliance@paygrowth.com |

---

## COMPLIANCE CHECKLIST (Quick Reference)

### Monthly
- [ ] Verify all POS/payment systems are operating normally
- [ ] Check for software/firmware updates
- [ ] Review user accounts (remove terminated employees)

### Quarterly
- [ ] Complete ASV network scan (if required)
- [ ] Review firewall and security configurations
- [ ] Verify antivirus definitions are current

### Annually
- [ ] Complete and submit SAQ
- [ ] Submit Attestation of Compliance (AoC) to PayGrowth
- [ ] Review and update security policy
- [ ] Conduct employee security awareness training
- [ ] Review all third-party service provider compliance
- [ ] Perform risk assessment

### Upon Any Change
- [ ] Assess impact on PCI DSS compliance
- [ ] Update SAQ if processing environment changes
- [ ] Re-scan network after significant changes

---

**QUESTIONS?** Contact PayGrowth Compliance Department:
- Email: compliance@paygrowth.com
- Phone: [Phone Number]
- Hours: Monday–Friday, 9:00 AM – 6:00 PM ET

---

*This guide is for informational purposes and does not replace the official PCI DSS standard. Merchants are responsible for understanding and complying with all applicable PCI DSS requirements. Always refer to the PCI Security Standards Council for the most current requirements.*

*Document Version: 1.0 — June 2025*