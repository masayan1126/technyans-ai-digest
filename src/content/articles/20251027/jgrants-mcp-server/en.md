---
title: "Japan's Digital Agency Releases Official MCP Server for Natural Language Subsidy Search"
description: "On October 24, 2025, Japan's Digital Agency released an official Model Context Protocol (MCP) server for J-Grants subsidy search. Built with FastMCP framework, it enables natural language searches from AI assistants like Claude Desktop."
date: 2025-10-27
category: "Other"
tags: ["Digital Agency", "MCP", "J-Grants", "Subsidy Search", "FastMCP", "Claude Desktop", "Government DX"]
locale: "en"
technyanComment: "The Digital Agency releasing an official MCP server is groundbreaking! Having a national government agency embrace the latest AI integration standard dramatically improves accessibility to government services. Implementing it for practical use cases like subsidy search is brilliant! 🚀"
---

On October 24, 2025, Japan's Digital Agency released an official server implementing the Model Context Protocol (MCP) for its J-Grants electronic subsidy application system. This enables natural language searches for subsidy information and detailed inquiries from AI assistants like Claude Desktop.

## What is Model Context Protocol (MCP)?

Model Context Protocol (MCP) is a standardized protocol published by Anthropic in November 2024 for connecting Large Language Models (LLMs) with external systems. Previously, accessing external APIs or databases from LLMs required individual custom implementations, but MCP enables these connections through a unified approach.

### Basic MCP Architecture

MCP consists of three core components:

- **MCP Host**: AI systems or intelligent agents (e.g., Claude Desktop, VS Code)
- **MCP Client**: Components that operate within the host and communicate with MCP servers
- **MCP Server**: Implementation providing actual functionality. Handles tool implementation and resource management

This separated architecture enables highly modular and maintainable systems.

## What is J-Grants?

J-Grants (jGrants) is an electronic application system for subsidies and grants operated by Japan's Digital Agency. Since its service launch in 2020, approximately 1,000 types of subsidies are published annually, with over one million applications processed cumulatively.

### J-Grants Features

- **24/7 Application Access**: Online application procedures available anytime
- **Unified Search Function**: Search for subsidies by keywords or conditions
- **Application Status Management**: Manage draft and submitted applications through My Page
- **Notification Document Confirmation**: Check next application procedures

The Digital Agency is promoting the expansion of J-Grants usage, aiming to make electronic applications the standard for all business subsidy applications from 2025 onward.

## Design Philosophy of the J-Grants MCP Server

The newly released J-Grants MCP server is not merely a technical demonstration but a well-considered design emphasizing practicality.

### Key Point 1: Intent-Based Tool Design

For MCP tool design, the Digital Agency adopted a medium-granularity design based on "user intent." This design approach solves the problem where tools that are too granular make tool selection by LLMs difficult, while tools that are too coarse increase the risk of misuse by LLMs.

Example mapping of subsidy application process to J-Grants MCP tools:

| Process | Business User Action | MCP Tool Definition | J-Grants API |
|---------|---------------------|---------------------|--------------|
| Information Gathering | Learn about subsidies | get_subsidy_overview() | /subsidies |
| Search & Selection | Search and narrow by conditions | search_subsidies() | /subsidies |
| Detail Review | Review requirements and materials | get_subsidy_detail()<br>get_file_content() | /subsidies/id/{id} |

### Key Point 2: Handling File Processing AI Struggles With

Attachment files returned from the J-Grants API are large-volume BASE64-encoded data. Passing this directly to AI rapidly consumes conversation token limits, creating a significant challenge.

To solve this problem, two features were implemented:

1. **Local File Storage**: BASE64 data is decoded server-side and file:// URLs are returned, dramatically reducing token consumption

2. **Markdown Conversion**: Using Microsoft's MarkItDown library, various file formats (PDF, Word, Excel, PowerPoint, ZIP) are converted to Markdown. This enables LLMs to directly understand document content and answer questions

## Implemented MCP Tools

The J-Grants MCP server provides six tools:

| MCP Tool Name | J-Grants API | Extended/Additional Features |
|--------------|--------------|------------------------------|
| get_subsidy_overview | None (original implementation) | Automatic classification by deadline period, aggregation by amount scale, urgent case extraction, CSV format output |
| search_subsidies | GET /subsidies | Sort function, complex condition combinations, accepting application filtering, default keyword "business" |
| get_subsidy_detail | GET /subsidies/id/{id} | Automatic BASE64 file decoding, local file storage, MCP access information, automatic acceptance status determination |
| get_file_content | None (original implementation) | MarkItDown conversion (PDF/Word/Excel etc.), BASE64/Markdown format selection, multi-format file support |
| ping | None (MCP standard) | Connection check, server response verification |

### Technology Stack

The implementation uses the following Python libraries:

- **FastMCP**: Framework simplifying MCP server implementation
- **httpx**: Asynchronous HTTP communication
- **pdfplumber**: PDF text extraction
- **markitdown**: Convert various file formats to Markdown

## Setup and Usage

### Prerequisites

- Python 3.11 or higher
- macOS / Linux / WSL (Windows compatible)
- Network connection to J-Grants API

### Installation Steps

```bash
# Clone repository
git clone https://github.com/digital-go-jp/jgrants-mcp-server.git
cd jgrants-mcp-server

# Create Python virtual environment
python3 -m venv venv

# Activate virtual environment (macOS/Linux)
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Start as HTTP server
python -m jgrants_mcp_server.core
```

### Claude Desktop Integration

Add the following to Claude Desktop's configuration file (`~/Library/Application Support/Claude/claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "jgrants": {
      "command": "uvx",
      "args": [
        "fastmcp",
        "run",
        "http://localhost:8000/mcp"
      ]
    }
  }
}
```

After configuration, restart Claude Desktop to enable natural language subsidy searches.

## Real-World Usage Examples

The following natural language queries become possible:

- "Tell me about the latest subsidies on J-Grants"
- "Are there any subsidies for a Tokyo manufacturing business with 50 employees, under 10 million yen, closing this month?"
- "Summarize the application guidelines and forms for DX promotion subsidies"

The AI uses the J-Grants API to search for appropriate subsidies and presents organized information including target industries, amounts, acceptance periods, and application links.

## Corporate Practical Applications

### Franca AI: Subsidy Flash

Franca AI Corporation released "Subsidy Flash," a subsidy application support SaaS leveraging the J-Grants MCP server.

#### Main Features

1. **Subsidy Search AI**: Natural language subsidy search
   - Flexible queries like "Manufacturing business in Tokyo with 50 employees, subsidies over 8 million yen?"

2. **Alternative Suggestions When No Perfect Match**: AI suggests similar subsidies by relaxing conditions

3. **Provision for Local Governments and Certified Support Organizations**: Companies, professionals, and local governments share information on the same platform

## Significance for Government Digital Transformation

The release of the J-Grants MCP server represents significant progress in government DX in the following ways:

### 1. Improved Interoperability Through Standardization

By adopting MCP as a standard protocol, various AI tools can access J-Grants in a unified manner. This eliminates the need for developers to create individual custom implementations, dramatically lowering barriers to utilizing government services.

### 2. Enhanced User Experience

Natural language subsidy searches provide a more intuitive and user-friendly interface compared to traditional form-based searches. This represents a major benefit especially for small and medium enterprises and individual business owners unfamiliar with IT.

### 3. Promoting Value Creation by Private Companies

Providing an official MCP server enables private companies to easily develop subsidy application support services. As demonstrated by Franca AI, various services based on the MCP server are expected to emerge going forward.

### 4. Potential Expansion to Other Government Services

The J-Grants success story motivates the adoption of similar approaches for other government services. As various government procedures become MCP-compatible, accessibility to government services overall could improve significantly.

## Technical Challenges and Future Prospects

### Current Challenges

1. **Setup Complexity**: Currently requires technical knowledge for starting MCP servers and configuring Claude Desktop
2. **Standardization Uncertainty**: Whether MCP becomes the de facto standard is uncertain. OpenAI, Meta, Mistral, etc. might propose their own standards
3. **Limited Functionality**: Currently only supports subsidy search and detailed information retrieval. Full application process API-fication is not yet supported

### Future Possibilities

1. **Cloud Service Deployment**: Deploying to cloud services like Railway or Render enables multiple users to share the same MCP server

2. **Application Process Automation**: In the future, subsidy application form creation and submission may become possible via MCP

3. **Integration with Other Government Services**: As government services beyond J-Grants become MCP-compatible, an integrated government procedure platform becomes achievable

## Technyan's Comment

"The Digital Agency releasing an official MCP server is truly groundbreaking! Having a national government agency be first to embrace the latest AI integration standard represents huge progress for Japan's government DX.

What's particularly impressive is that this isn't just a tech demo—it's implemented for J-Grants, an actual service people use. By providing a concrete use case of subsidy search, they've shown a clear example of 'this is how you use it.'

The implementation using the FastMCP framework is excellent too, achieving this much functionality with just 430 lines of code. The idea of converting PDF and Word files to Markdown for LLMs is a brilliant solution that maintains practicality while reducing token consumption.

Don't miss that Franca AI quickly released a service called Subsidy Flash using this. With the official MCP server released, an ecosystem is emerging where private companies can rapidly develop valuable services.

This isn't just technical progress—it has the potential to transform the nature of government services themselves. If other ministries and local governments follow suit and various government procedures become MCP-compatible, 'government procedure AI-ification' could accelerate dramatically! 🚀

One caveat: setup is currently somewhat complex, requiring technical knowledge. But this is unavoidable at an early stage. Going forward, I hope more user-friendly tools emerge that even general users can easily use!"

## Conclusion

The Digital Agency's release of the J-Grants MCP server represents a crucial milestone in AI utilization for government services. By adopting Model Context Protocol as a standardized protocol, subsidy information becomes accessible from various AI tools in a unified manner.

Design philosophies emphasizing practicality, such as intent-based tool design and handling file processing AI struggles with, will serve as references for future government API design. Additionally, rapid service development by private companies like Franca AI demonstrates the effectiveness of providing official MCP servers.

While challenges like setup complexity and limited functionality exist currently, these are unavoidable issues at an early stage. As other government services advance MCP compatibility and more user-friendly tools emerge, dramatic improvements in government service accessibility are expected.

The J-Grants MCP server will serve as an important case study not just as a technical implementation example, but showing how government should respond to new standards in the AI era.
