---
title: MCP Celebrates First Anniversary with Major November 2025 Specification Update
description: Model Context Protocol (MCP), developed by Anthropic, celebrates its first anniversary with a major specification update. With approximately 2,000 server entries and 407% growth since September, major companies including GitHub, OpenAI, Microsoft, AWS, and Google Cloud have expressed their support.
date: 2025-11-26
category: Other
tags:
  - MCP
  - Anthropic
  - Open Source
  - Agent AI
  - Developer Tools
  - Ecosystem
locale: en
technyanComment: MCP turned 1 year old, nya! What started as a small experiment is now becoming an industry standard. Over 2,000 servers - the ecosystem growth is amazing, nya~!
---

Model Context Protocol (MCP), developed by Anthropic, has celebrated its first anniversary in November 2025 with a major specification update release.

## Remarkable Growth

In just one year since its November 2024 announcement, MCP has evolved from a small open-source experiment into an industry standard.

### Key Statistics

| Metric | Value |
|--------|-------|
| MCP Registry Server Count | ~2,000 |
| Growth Since September | 407% |
| Maintainers | 58 (9 core leaders) |
| Discord Contributors | 2,900+ |
| Weekly New Contributors | 100+ |

The ecosystem has expanded to the point where "if you can think of a scenario, there's probably an MCP server for it."

## Major Companies Building MCP Servers

Leading tech companies are actively building MCP servers:

- **Notion**: Note management
- **Stripe**: Payment workflows
- **GitHub**: Engineering process automation
- **Hugging Face**: Model management
- **Postman**: API test automation

## November 2025 New Specifications

### Task-Based Workflows (SEP-1686)

A new feature enabling server work tracking. Supports the following state management:

- `working`: Processing
- `input_required`: Awaiting input
- `completed`: Completed
- `failed`: Failed
- `cancelled`: Cancelled

Designed for healthcare data analysis and multi-step enterprise workflows.

### Simplified Authorization Flow (SEP-991)

URL-based client registration significantly reduces the complexity of Dynamic Client Registration (DCR). Enables more streamlined authentication using OAuth client ID metadata documents.

### Security Enhancements

- **SEP-1024**: Client security requirements for local server installation
- **SEP-835**: Default scope definitions for authorization specification
- Enterprise MCP registry vision established

### Extensions

Optional, configurable extensions support experimental features while keeping the core protocol stable:

- **SEP-1046**: OAuth client authentication
- **SEP-990**: Cross App Access

### URL Mode Invocation (SEP-1036)

Securely collects authentication credentials through browser OAuth flows. Improves security by ensuring clients never see authentication information directly.

### Sampling with Tools (SEP-1577)

A groundbreaking feature enabling servers to run their own agent loops:

- Tool invocation
- Parallel execution
- Multi-step reasoning

Enables more complex agent workflows.

### Developer Experience Improvements

- **SEP-986**: Standard format for tool names
- **SEP-1319**: Decoupling from RPC methods
- **SEP-1699**: SSE polling with server-side disconnection
- **SEP-1309**: Improved SDK specification versioning

## Industry Partner Support

Major companies have expressed support for MCP's standardization and importance in agent development:

- GitHub
- OpenAI
- Block
- Microsoft
- Hugging Face
- Okta
- AWS
- Google Cloud
- Obot AI

## Governance Structure Established

A system where community and Anthropic maintainers collaborate to approve Specification Extension Proposals (SEPs) has been established. Formal working groups and interest groups have been introduced, with a clear policy that "the maintainer team is not a gatekeeper, but helps surface issues and align on solutions."

## Future Direction

This release maintains backward compatibility. The development team plans to focus on:

- **Improved Reliability & Observability**: More stable protocol operation
- **Better Server Configuration Patterns**: Enhanced developer experience
- **Refined Enterprise Security Models**: Accelerated enterprise adoption

## Summary

MCP's first anniversary marks an important milestone in AI agent interoperability:

- **Rapid Growth**: 2,000 servers and 407% growth rate in one year
- **Industry Standardization**: Support from major tech companies
- **Technical Maturity**: Major updates including task-based workflows and security enhancements
- **Open Governance**: Community-driven specification development

As AI agents become mainstream, MCP is establishing itself as the foundational infrastructure for the ecosystem.
