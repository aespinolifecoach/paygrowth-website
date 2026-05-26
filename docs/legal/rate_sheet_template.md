# PAYGROWTH — RATE SHEET & FEE SCHEDULE

**PayGrowth LLC** — ISO Payment Processor

*Effective: June 2025*

---

*This Rate Sheet is incorporated by reference as Exhibit A to the Merchant Services Agreement. All rates are subject to change with 30 days' notice. Interchange rates and Card Network assessments are passed through at cost and subject to change without notice.*

---

## 1. PRICING MODEL: INTERCHANGE-PLUS

PayGrowth uses the **Interchange-Plus** pricing model — the most transparent in the industry. You pay the actual interchange rate set by the Card Networks plus a clearly defined markup.

**Formula:**
```
Total Cost = Interchange Rate + Card Network Assessments + PayGrowth Markup
```

---

## 2. CARD-PRESENT TRANSACTIONS
*(Swiped, dipped, or tapped at a physical terminal)*

### 2.1 Consumer Credit Cards

| Card Type | Interchange | PayGrowth Markup | **Effective Rate (est.)** |
|-----------|-------------|------------------|--------------------------|
| Standard Consumer Credit | Interchange | + 0.25% + $0.10 | ~1.80% - 2.20% |
| Rewards / Premium | Interchange | + 0.25% + $0.10 | ~2.40% - 2.80% |
| Corporate / Purchasing | Interchange | + 0.25% + $0.10 | ~2.80% - 3.20% |

### 2.2 Debit Cards

| Card Type | Interchange | PayGrowth Markup | **Effective Rate (est.)** |
|-----------|-------------|------------------|--------------------------|
| PIN Debit | Flat fee | + $0.10 | ~$0.25 - $0.35 per tx |
| Signature Debit | Interchange | + 0.15% + $0.08 | ~0.80% - 1.20% |

### 2.3 Other Card Types

| Card Type | Processing Fee |
|-----------|---------------|
| EBT / SNAP | $0.10 per transaction |
| Discover | Interchange + 0.25% + $0.10 |
| American Express | Quoted separately (varies by volume) |

---

## 3. CARD-NOT-PRESENT TRANSACTIONS
*(E-commerce, virtual terminal, mail/phone order)*

### 3.1 Consumer Credit Cards

| Card Type | Interchange | PayGrowth Markup | **Effective Rate (est.)** |
|-----------|-------------|------------------|--------------------------|
| Standard Consumer Credit — CNP | Interchange | + 0.35% + $0.15 | ~2.40% - 2.80% |
| Rewards / Premium — CNP | Interchange | + 0.35% + $0.15 | ~2.80% - 3.30% |
| Corporate / Purchasing — CNP | Interchange | + 0.35% + $0.15 | ~3.20% - 3.60% |

### 3.2 Debit Cards — CNP

| Card Type | Interchange | PayGrowth Markup | **Effective Rate (est.)** |
|-----------|-------------|------------------|--------------------------|
| Signature Debit — CNP | Interchange | + 0.25% + $0.12 | ~1.10% - 1.60% |

---

## 4. ACH PAYMENTS

| Transaction Type | Fee |
|-----------------|-----|
| Web-Initiated Debit | $0.50 per transaction |
| Single Entry | $0.75 per transaction |
| Recurring / Subscription | $0.35 per transaction |
| Same-Day ACH | $1.50 per transaction |
| Return Fee (NSF) | $2.50 per occurrence |
| Reverse / Reversal | $2.00 per occurrence |

---

## 5. MONTHLY FEES

| Fee Type | Amount | Notes |
|----------|--------|-------|
| Monthly Minimum Fee | $25.00 | Applied if total transaction fees < $25 in a month |
| Gateway / Monthly Service Fee | $15.00 | Includes API access, reporting, virtual terminal |
| PCI Compliance Fee | $15.00/month | Waived if merchant is fully PCI DSS compliant |
| Paper Statement Fee | $10.00/month | Free for electronic statements |
| Annual Service Fee | $99.00 | Billed annually on account anniversary |

---

## 6. ONE-TIME FEES

| Fee Type | Amount | Notes |
|----------|--------|-------|
| Application / Setup Fee | $99.00 | Includes underwriting, account setup |
| Mid-Term Contract Buyout | Varies | If transferring from another processor |
| Early Termination Fee | $295.00 | If terminated within first 12 months |

---

## 7. EVENT-BASED FEES

| Fee Type | Amount | Notes |
|----------|--------|-------|
| Chargeback Fee | $25.00 per occurrence | Per disputed transaction |
| Retrieval Request Fee | $15.00 per occurrence | Per copy request from cardholder's bank |
| Excessive Chargeback Fee | $50.00 per occurrence | Applied when over Card Network thresholds |
| AVS Verification | $0.01 per transaction | Address Verification Service |
| CVV2 Verification | $0.005 per transaction | Card security code verification |
| Batch Close Fee | $0.10 per batch | Applied at end-of-day batch settlement |
| Address Correction | $0.50 per occurrence | BIN lookup corrections |
| Account Re-Activation Fee | $50.00 | If terminated account is reinstated |
| Wire Transfer Fee | $15.00 per transfer | For expedited settlements via wire |

---

## 8. EQUIPMENT PRICING

### 8.1 Purchase Options

| Equipment | One-Time Purchase Price |
|-----------|----------------------|
| Clover Flex (Mobile POS) | $499.00 |
| Clover Mini (Countertop) | $599.00 |
| Clover Station (Full POS) | $1,399.00 |
| Dejavoo V3c (Countertop) | $399.00 |
| PAX A80 (Mobile Card Reader) | $249.00 |
| PAX A920 (Smart Terminal) | $599.00 |
| Mobile Card Reader (Audio Jack/BLE) | $49.00 |
| PIN Pad (Verifone/Ingenico) | $149.00 |

### 8.2 Lease Options

| Equipment | Monthly Lease Price | Lease Term |
|-----------|-------------------|------------|
| Clover Mini | $24.99/month | 48 months |
| Clover Flex | $19.99/month | 48 months |
| Clover Station | $49.99/month | 48 months |
| PAX A920 | $24.99/month | 48 months |

*Lease includes hardware warranty and support. Early buyout available after 12 months.*

---

## 9. CHARGEBACK & RISK MANAGEMENT

### 9.1 Chargeback Thresholds

| Metric | Card Network Threshold | PayGrowth Action Threshold |
|--------|----------------------|---------------------------|
| Chargeback Ratio (Visa) | >0.90% of transactions | >0.50% — monitoring |
| Chargeback Ratio (Mastercard) | >1.00% of transactions | >0.50% — monitoring |
| Monthly Chargeback Count (Visa) | >100 per month | >50 per month — review |

### 9.2 Reserve Requirements

| Risk Level | Reserve Amount | Release Schedule |
|------------|---------------|------------------|
| Low Risk | No reserve | N/A |
| Medium Risk | 5% - 10% of monthly volume | Held for 6 months post-termination |
| High Risk | 10% - 25% of monthly volume | Held for 9 months post-termination |
| Rolling Reserve | 10% of daily settlements | Released 180 days after settlement |

---

## 10. VOLUME DISCOUNTS

Merchants processing the following monthly volumes may qualify for reduced markup rates:

| Monthly Processing Volume | Discount on Markup |
|--------------------------|-------------------|
| $50,000 - $100,000 | -0.05% on credit markup |
| $100,001 - $500,000 | -0.10% on credit markup |
| $500,001 - $1,000,000 | -0.15% on credit markup |
| Over $1,000,000 | Negotiated custom pricing |

---

## 11. VALUE-ADDED SERVICES

| Service | Monthly Fee | Description |
|---------|-------------|-------------|
| Advanced Fraud Detection | $29.00/month | ML-based fraud scoring |
| 3D Secure (3DS 2.0) | $0.02/transaction | Liability shift for CNP |
| Chargeback Alerts | $0.25/alert | Early notification of disputes |
| QuickBooks Integration | $19.00/month | Automatic reconciliation |
| Recurring Billing Module | Included with gateway | Subscription management |
| Multi-User Access | Included | Up to 5 users |
| Developer API Access | Included | RESTful API with documentation |
| Advanced Reporting | Included | Real-time dashboards and exports |

---

## 12. SAMPLE TRANSACTION COSTS

### Example 1: Coffee Shop (Card-Present)
| Detail | Amount |
|--------|--------|
| Transaction Amount | $5.00 |
| Card Type | Visa Standard Consumer Debit |
| Interchange | $0.22 (debit regulated) |
| Card Network Assessment | $0.0195 |
| PayGrowth Markup | $0.02 (0.25% + $0.10) = $0.0125 + $0.10 = $0.1125 |
| **Total Cost** | **$0.3520** |
| **Effective Rate** | **~7.04%** (high due to small ticket) |

### Example 2: Retail Store (Card-Present)
| Detail | Amount |
|--------|--------|
| Transaction Amount | $75.00 |
| Card Type | Visa Standard Consumer Credit |
| Interchange | $1.77 (2.36% of $75) |
| Card Network Assessment | $0.0195 |
| PayGrowth Markup | 0.25% + $0.10 = $0.1875 + $0.10 = $0.2875 |
| **Total Cost** | **$2.077** |
| **Effective Rate** | **~2.77%** |

### Example 3: E-commerce Store (Card-Not-Present)
| Detail | Amount |
|--------|--------|
| Transaction Amount | $150.00 |
| Card Type | Visa Rewards Credit |
| Interchange | $3.74 (2.49% of $150) |
| Card Network Assessment | $0.0195 |
| PayGrowth Markup | 0.35% + $0.15 = $0.525 + $0.15 = $0.675 |
| **Total Cost** | **$4.4345** |
| **Effective Rate** | **~2.96%** |

### Example 4: Subscription Business (Recurring)
| Detail | Amount |
|--------|--------|
| Transaction Amount | $29.99/month |
| Card Type | Visa Consumer Credit (recurring) |
| Interchange | $0.62 (2.07% of $29.99) |
| Card Network Assessment | $0.0195 |
| PayGrowth Markup | 0.30% + $0.12 = $0.09 + $0.12 = $0.21 |
| **Total Cost** | **$0.8495** |
| **Effective Rate** | **~2.83%** |

---

## 13. MONTHLY FEE COMPARISON TOOL

Use this simple worksheet to estimate your monthly costs:

| Line Item | Your Estimate |
|-----------|---------------|
| **A. Average monthly transaction volume** | $______________ |
| **B. Average ticket size** | $______________ |
| **C. Estimated monthly transactions** (A ÷ B) | ______________|
| **D. Estimated effective rate** (see Section 2-3) | _____% |
| **E. Estimated transaction fees** (A × D ÷ 100) | $______________ |
| **F. Monthly gateway/service fee** | $15.00 |
| **G. Monthly minimum (if E < $25)** | $25.00 (max of E or $25) |
| **H. PCI compliance fee** (if non-compliant) | $15.00 |
| **I. Estimated monthly total** (max of E or G + other fees) | $______________ |

---

## 14. DEFINITIONS

| Term | Definition |
|------|------------|
| **Interchange** | The fee set by card networks and paid to the cardholder's issuing bank. This is a pass-through cost. |
| **Card Network Assessment** | Fees charged by Visa, Mastercard, etc. for use of their networks. Pass-through costs. |
| **Markup** | PayGrowth's margin — the component we control. |
| **Effective Rate** | Total cost as a percentage of transaction amount. |
| **Discount Rate** | The percentage-based component of processing fees. |
| **SAQ** | Self-Assessment Questionnaire — PCI DSS compliance form. |
| **Chargeback** | A disputed transaction reversed through the Card Networks. |
| **Settlement** | Transfer of net proceeds to your bank account. |
| **Reserve** | Funds held to cover potential chargebacks and fees. |

---

## CONTACT & SUPPORT

**Sales & Pricing Inquiries:**
- Email: sales@paygrowth.com
- Phone: [Phone Number]

**Existing Merchant Support:**
- Email: support@paygrowth.com
- Phone: [Phone Number]
- Portal: [Portal URL]

---

*This Rate Sheet is confidential and intended solely for the Merchant to whom it is presented. Unauthorized distribution is prohibited.*

*PayGrowth LLC — ISO Payment Processor — [Address]*

*Version 1.0 — June 2025*