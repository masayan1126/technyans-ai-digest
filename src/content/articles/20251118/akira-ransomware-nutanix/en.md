---
title: "Akira Ransomware Expands to Nutanix AHV Virtual Environments"
description: "U.S. CISA and FBI warn that Akira ransomware group has expanded attacks to Nutanix AHV virtual machines. With $244.17M in ransom proceeds as of late September 2025, the threat to critical infrastructure is growing."
date: 2025-11-18
category: "Other"
tags: ["Ransomware", "Cybersecurity", "Akira", "Nutanix", "Virtualization"]
locale: "en"
technyanComment: "Akira's multi-platform strategy is scary! They target 'forgotten assets' like VPN appliances and edge devices. Thorough asset management is critical! 🛡️"
---

# Akira Ransomware Expands to Nutanix AHV Virtual Environments

## Overview

The U.S. Cybersecurity and Infrastructure Security Agency (CISA) and FBI have issued a new advisory warning that the Akira ransomware group has expanded its attacks to Nutanix AHV virtual machines. This expansion means all major virtualization platforms - VMware ESXi, Hyper-V, and now Nutanix AHV - are now targeted.

## Details

### Key Points

- **Expanded Targets**: Now targeting Nutanix AHV in addition to VMware ESXi and Hyper-V
- **Ransom Proceeds**: Approximately $244.17 million as of late September 2025
- **Target Shift**: From SMBs to large enterprises and critical infrastructure
- **Attack Speed**: Approximately 2 hours from data exfiltration to encryption
- **Target Industries**: Manufacturing, IT, healthcare, financial services, food and agriculture

### Detailed Attack Methodology

#### Initial Access

Akira gains initial access through:

1. **VPN Exploitation**
   - Targets VPN services without multi-factor authentication (MFA)
   - Exploits known vulnerabilities (CVEs) in Cisco, SonicWall products

2. **Credential Theft/Abuse**
   - Password spraying attacks
   - Spearphishing campaigns
   - Abuse of valid credentials

3. **Remote Access Exploitation**
   - Remote Desktop Protocol (RDP)
   - Secure Shell (SSH) protocol
   - Router IP address exploitation with tunneling

4. **Backup Server Vulnerabilities**
   - Exploits unpatched Veeam Backup and Replication components

#### Privilege Escalation & Persistence

- **Remote Access Tool Abuse**: Uses legitimate tools like AnyDesk, LogMeIn to evade detection
- **New User Account Creation**: Adds accounts to administrator groups
- **EDR Uninstallation**: Removes endpoint detection and response systems
- **Impacket Usage**: Executes remote commands (wmiexec.py)

#### Network Discovery & Lateral Movement

- Uses `nltest /dclist:` to discover domain controllers
- Uses `nltest/DOMAIN_TRUSTS` to investigate domain trust relationships
- Employs PowerShell and WMIC to disable services

#### Data Exfiltration

- **Collection Tools**: FileZilla, WinRAR
- **Transfer Tools**: WinSCP, RClone
- **Speed**: Completes in approximately 2 hours from initial access

#### Encryption & Ransom Demand

1. **Encryption Method**
   - Uses ChaCha20 stream cipher with RSA public-key cryptosystem
   - Enables fast and secure key exchange

2. **File Extensions**
   - Legacy: `.akira` or `.powerranges`
   - New version (Akira_v2): `.akiranew` or `.aki`

3. **Ransom Note**
   - Named `fn.txt` or `akira_readme.txt`
   - Placed in root directory and each user's home directory

4. **Recovery Inhibition**
   - Deletes Volume Shadow Copy Service (VSS) via PowerShell
   - Complicates forensic analysis

### Double Extortion Model

Akira employs a double extortion tactic:
1. System and data encryption
2. Threat of publishing stolen data

### Significance of Multi-Platform Strategy

Sanchit Vir Gogia, Chief Analyst and CEO at Greyhound Research, notes:

"Akira's expansion beyond Windows into Linux servers, VMware ESXi, Hyper-V, and now Nutanix AHV is not some side experiment. It is a very deliberate signal that this group is planning for the long haul. Multi-platform ransomware is expensive to build and even harder to maintain."

### Exploited Blind Spots

Gogia identifies several enterprise "blind spots" that Akira exploits:

1. **Remote Access**: Forgotten VPN appliances
2. **Patching**: Under-patched firewalls
3. **Backups**: Aging backup servers
4. **Edge Devices**: Devices outside everyday security conversations

"Akira wins not because it has reinvented ransomware, but because it has perfected the parts enterprises fail to take seriously. It exploits the inertia around forgotten VPN appliances, under-patched firewalls, aging backup servers, and edge devices that fall outside everyday security conversations."

### Recommended Countermeasures

1. **Basic Security Hygiene**
   - Implement MFA on all VPN services
   - Apply timely patches for known vulnerabilities
   - Regular backups with offline storage

2. **Advanced Defensive Measures**
   - Robust network segmentation (to contain breaches)
   - Vigilant monitoring for unusual admin activity
   - Extend detection and response to backup servers and hypervisor consoles

3. **Proactive Measures**
   - Proactive threat hunting
   - Strict privilege management
   - Rehearse full-scale ransomware scenarios

Devroop Dhar, Co-founder and MD at Primus Partners, states:

"In 2025 alone, Akira ransomware accounted for about 8–11% of all successful ransomware attacks globally, with a 38% increase in incident count and a notable expansion into multi-platform attack methods. This versatility means simultaneous disruption of endpoints and core business infrastructure, demonstrating a calculated, long-term vision by Akira's developers."

## Tech-nyan's Comment

"Akira's multi-platform capability isn't just an experiment - it's a long-term strategy. With the ability to target Windows, Linux, ESXi, Hyper-V, and now Nutanix AHV, enterprise security becomes much more complex. What's particularly important is addressing 'forgotten assets.' VPN appliances, firewalls, backup servers, and edge devices that slip through regular security operations are exactly what gets targeted. Thorough asset management and consistent patch management and MFA implementation across all systems are critical. Also, considering the 2-hour speed from data theft to encryption, reducing detection-to-response time is key. Pre-planned exercises and clear incident response plans are essential."

## Sources

- [CSO Online - Akira ransomware expands to Nutanix AHV, raising stakes for enterprise security](https://www.csoonline.com/article/4090995/akira-ransomware-expands-to-nutanix-ahv-raising-stakes-for-enterprise-security.html)
- [CISA Advisory - Akira Ransomware](https://www.cisa.gov/news-events/cybersecurity-advisories)
