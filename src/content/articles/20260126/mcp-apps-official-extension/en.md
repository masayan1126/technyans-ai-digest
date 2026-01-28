---
title: "MCP Apps Official Release: Open Standard for Interactive UI in AI Chat"
description: "Model Context Protocol's first official extension 'MCP Apps' officially released. Co-developed by Anthropic and OpenAI, it enables dashboards, forms, and visualization tools to display directly within AI chat interfaces."
date: 2026-01-26
category: "Claude"
locale: "en"
tags: ["Anthropic", "OpenAI", "MCP", "Developer Tools", "Open Source", "Agent AI"]
technyanComment: "Anthropic and OpenAI built an open standard together, nya! The era of AI chat becoming a 'mini-app platform' has arrived. Competing while collaborating - what an interesting relationship~"
---

# MCP Apps Official Release: Open Standard for Interactive UI in AI Chat

On January 26, 2026, "MCP Apps," the first official extension to the Model Context Protocol (MCP), was officially released. This enables AI tools to display interactive UI elements such as dashboards, forms, and visualization tools directly within conversations, beyond just text and structured data.

## What are MCP Apps?

MCP Apps is an extension specification (SEP-1865) that defines a standardized way for MCP servers to deliver interactive UI elements to host applications. First proposed in November 2025, it was developed through collaboration between MCP core maintainers at Anthropic and OpenAI, along with the MCP-UI Community Working Group.

### Why MCP Apps Are Needed

Traditional MCP tools could only return text and structured data. However, this was a significant constraint when interactive UIs like charts, forms, or video players were needed.

From the official MCP Apps blog:
"The model stays in the loop, seeing what users do and responding accordingly, but the UI handles what text can't: live updates, native media viewers, persistent states, and direct manipulation. Combined, they provide the model and user with all the context they need in one familiar interface."

## How It Works Technically

MCP Apps operates through the following flow:

1. **Tool Definition**: Tool declares a UI interface containing a `ui://` resource
2. **Tool Call**: LLM calls the tool on the server
3. **Host Rendering**: Host fetches the resource and displays it in a sandboxed iframe
4. **Bidirectional Communication**: Host passes tool data to UI via notifications, and UI can call other tools through the host

### Security Model

- **Sandboxed iframes**: UI content runs in isolated environments
- **JSON-RPC Communication**: Structured communication via postMessage creates audit trails
- **Explicit Approval**: Hosts can require explicit approval for UI-initiated tool calls

## Supported Platforms

At launch, the following platforms support MCP Apps:

- **Claude**: Web and desktop versions (Pro, Max, Team, Enterprise)
- **Visual Studio Code**: Available in Insiders, stable version coming soon
- **Goose**: Supported
- **ChatGPT**: Support expected this week

## Anthropic and OpenAI Collaboration

A notable aspect of MCP Apps is that competing companies Anthropic and OpenAI jointly developed this open standard. Drawing inspiration from both OpenAI's Apps SDK and MCP-UI, they created a unified specification as an industry standard, preventing fragmentation.

Clare Liguori, Senior Principal Engineer at AWS:
"MCP Apps address a real gap between what agentic tools can provide and how users naturally want to interact with them. The ability to render dynamic interfaces directly in conversation makes it easier to leverage MCP server capabilities in practical ways."

## Enterprise Use Cases

MCP Apps is particularly expected to be utilized in enterprise environments:

- **Interactive approval workflows**
- **Dashboard-based data exploration**
- **Configuration wizards**
- **Document reviews**
- **Real-time monitoring**

## Developer Resources

The `@modelcontextprotocol/ext-apps` package is available for developing apps with MCP Apps:

- **SDK for App Developers**: `@modelcontextprotocol/ext-apps`
- **React Hooks**: `@modelcontextprotocol/ext-apps/react`
- **SDK for Host Developers**: `@modelcontextprotocol/ext-apps/app-bridge`

GitHub Repository: [modelcontextprotocol/ext-apps](https://github.com/modelcontextprotocol/ext-apps)

## A Step Toward AI Chat "OS-ification"

The release of MCP Apps marks an important turning point where AI chatbots evolve from mere conversation tools to "application platforms." The AI industry is heading toward the direction of "mini apps" in Telegram and Discord, or "super apps" like China's WeChat.

The paradigm shift from "embedding AI into individual apps" to "making apps pluggable components within AI agents" is being accelerated by open standards.

## Sources

- [MCP Blog - MCP Apps: Bringing UI Capabilities To MCP Clients](https://blog.modelcontextprotocol.io/posts/2026-01-26-mcp-apps/)
- [GitHub - modelcontextprotocol/ext-apps](https://github.com/modelcontextprotocol/ext-apps)
- [The New Stack - Anthropic extends MCP with a UI framework](https://thenewstack.io/anthropic-extends-mcp-with-an-app-framework/)
- [The Register - Claude supports MCP Apps](https://www.theregister.com/2026/01/26/claude_mcp_apps_arrives/)
- [The Verge - MCP unites Claude chat with apps like Slack, Figma, and Canva](https://www.theverge.com/news/867673/claude-mcp-app-interactive-slack-figma-canva)
