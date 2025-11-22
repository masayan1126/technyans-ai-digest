---
title: "What is TOON? New AI-Optimized Format Achieves 30-60% Token Reduction Over JSON/YAML"
description: "TOON (Token-Oriented Object Notation), a new data format optimized for AI/LLMs, achieves up to 60% token reduction compared to JSON with improved accuracy, earning 18.1k+ GitHub stars."
date: 2025-11-21
category: "Other"
tags: ["AI", "LLM", "Developer Tools", "開発者ツール", "Open Source", "オープンソース", "Generative AI"]
locale: "en"
technyanComment: "TOON cuts AI conversation costs by up to 60%! By eliminating JSON's redundant brackets and using CSV-style tables, it's a win-win with improved LLM comprehension!"
---

In October 2025, a new data format optimized for AI/LLMs called "TOON (Token-Oriented Object Notation)" was released. Created by developer Johann Schopplich, this format achieves 30-60% token reduction while maintaining full JSON compatibility, attracting attention as a game-changer for AI cost optimization.

## What is TOON Format?

### Basic Concepts

TOON stands for "Token-Oriented Object Notation" and is a data serialization format designed with token efficiency as the top priority.

Key features:

- **Token Efficiency**: 30-60% fewer tokens than JSON (40% average reduction)
- **Reversibility**: 100% lossless conversion between JSON⇔TOON
- **Human Readable**: YAML-like readable syntax
- **LLM-Friendly**: Explicit structure improves AI comprehension accuracy

### Design Philosophy

TOON is designed based on three core principles:

1. **Eliminate Redundancy**: Minimize repetition of brackets, commas, and quotes
2. **Explicit Structure**: Declare array lengths and field definitions to support LLM parsing
3. **Tabular Representation**: Declare fields only once for data with uniform structure

## Key Features

### 1. YAML-Style Indentation for Hierarchy

TOON uses indentation instead of JSON's curly braces `{}` to represent hierarchy:

**JSON (32 tokens):**
```json
{
  "user": {
    "id": 123,
    "name": "Ada",
    "email": "ada@example.com"
  }
}
```

**TOON (20 tokens):**
```
user:
  id: 123
  name: Ada
  email: ada@example.com
```

Token reduction: **37.5%**

### 2. CSV-Style Table Format

TOON's standout feature is representing arrays with uniform structure in tabular format.

**JSON (125 tokens):**
```json
{
  "users": [
    {"id": 1, "name": "Alice", "role": "admin"},
    {"id": 2, "name": "Bob", "role": "user"},
    {"id": 3, "name": "Carol", "role": "user"}
  ]
}
```

**TOON (54 tokens):**
```
users[3]{id,name,role}:
1,Alice,admin
2,Bob,user
3,Carol,user
```

Token reduction: **56.8%**

Syntax explanation:
- `users[3]`: Array name and element count (3 items)
- `{id,name,role}`: Field definition (declared once only)
- Following lines: Data for each record (CSV format)

### 3. Minimal Quotation

TOON can omit quotes for strings without spaces or special characters:

**JSON:**
```json
{
  "status": "active",
  "message": "Hello World"
}
```

**TOON:**
```
status: active
message: Hello World
```

Use quotes only when necessary:
```
title: "Hello, World!"  # Quotes needed for comma
path: /home/user/file   # Slashes don't need quotes
```

### 4. Concise Primitive Arrays

Simple arrays can be expressed efficiently:

**JSON:**
```json
{
  "tags": ["admin", "ops", "dev"]
}
```

**TOON:**
```
tags[3]: admin,ops,dev
```

### 5. Alternative Delimiters for Further Optimization

Using tabs (`\t`) or pipes (`|`) instead of commas can reduce tokens even further:

**Tab-delimited:**
```
items[2	]{sku	qty	price}:
A1	2	9.99
B2	1	14.5
```

**Pipe-delimited:**
```
items[2|]{sku|qty|price}:
A1|2|9.99
B2|1|14.5
```

## Comparison with JSON and YAML

### Real Data Comparison

**User list example:**

| Format | Token Count | Reduction |
|--------|-------------|-----------|
| JSON | 125 | - |
| YAML | 98 | 21.6% |
| TOON | 54 | 56.8% |

**E-commerce product data (100 items):**

| Format | Token Count | Reduction |
|--------|-------------|-----------|
| JSON | 4,200 | - |
| YAML | 3,800 | 9.5% |
| TOON | 1,800 | 57.1% |

### Characteristics of Each Format

**JSON:**
- ✅ Most widely adopted
- ✅ Excellent tool support
- ❌ Poor token efficiency
- ❌ Redundant brackets and commas

**YAML:**
- ✅ Human readable
- ✅ Popular for configuration files
- ⚠️ Repeats keys even for tabular data
- ❌ Complex indentation rules

**TOON:**
- ✅ Best token efficiency
- ✅ High LLM comprehension accuracy
- ✅ Especially strong for tabular data
- ⚠️ New format (ecosystem still developing)
- ❌ Limited compatibility with legacy tools

## Benchmark Results

### Token Reduction Rate

According to official benchmarks, reduction rates vary by data structure type:

- **Uniform array data**: 50-60% reduction
- **Nested objects**: 30-40% reduction
- **Primitive arrays**: 25-35% reduction
- **Complex mixed structures**: 20-30% reduction

### LLM Comprehension Accuracy Test

Testing 209 data retrieval questions across 4 major LLMs (Claude, GPT-4, Gemini, Grok):

| Format | Average Accuracy |
|--------|------------------|
| **TOON** | **73.9%** |
| JSON | 69.7% |
| YAML | 71.2% |

TOON demonstrates not only token reduction but also improved LLM comprehension accuracy. This is attributed to explicit structure (array length, field definitions) helping LLMs validate data.

### Cost Reduction Impact

Calculation using GPT-4 (assuming $30 per 1M tokens):

**Scenario: 10,000 API calls/day, average 1,000 tokens/request**

| Format | Daily Tokens | Monthly Cost | Annual Cost |
|--------|--------------|-------------|-------------|
| JSON | 10M | $300 | $3,600 |
| TOON | 6M | $180 | $2,160 |
| **Savings** | **4M** | **$120** | **$1,440** |

Large-scale AI applications can expect thousands of dollars in annual cost savings.

## Ecosystem and Adoption Status

### GitHub Statistics

- **Stars**: 18.1k+
- **Initial Release**: October 2025
- **Specification Version**: v2.0

### Official Implementations

**Official SDKs in development:**
- **TypeScript/JavaScript**: @toon-format/toon (official implementation)
- **Python**
- **Rust**
- **Go**
- **.NET**

### Community Implementations

Implementations in progress for 20+ languages:
- C++, Clojure, Crystal, Dart, Elixir, Gleam
- Java, Kotlin, Lua, OCaml, PHP, R
- Ruby, Scala, Swift, and more

### Industry Adoption

- **Openapi.com**: Announced TOON API support within weeks
- **Startups**: AI-related startups experimenting with adoption
- **LLM Developer Community**: Rapidly growing awareness

### Tools and Resources

**Official Resources:**
- Official Spec: https://github.com/toon-format/spec
- TypeScript SDK: https://github.com/toon-format/toon
- Official Site: https://toonformat.dev
- NPM Package: @toon-format/toon

**Development Tools:**
- Format Tokenization Playground: Compare token counts
- TOON Tools: Online conversion tools
- ToonParse: Parser and validator

## Recommended Use Cases

### Where TOON Excels

1. **Data Exchange with LLMs**
   - Prompts to ChatGPT, Claude, Gemini, etc.
   - AI application responses

2. **Uniform Array Data**
   - User lists, product catalogs
   - Database query results
   - Log entries

3. **Time-Series Data**
   - Analytics data
   - Sensor data
   - Transaction logs

4. **Token Cost Optimization Critical Scenarios**
   - High-volume API calls
   - Maximizing context windows
   - Real-time processing

### When to Avoid TOON

1. **Deeply Nested Structures (3+ levels)**
   - JSON may be more efficient
   - Indentation becomes too complex

2. **Traditional REST APIs**
   - JSON is standard
   - Tool support required

3. **Non-uniform/Irregular Data**
   - Cannot leverage tabular format benefits
   - Records with varying fields

4. **Database or File Storage**
   - Should leverage existing JSON support
   - Compatibility is important

5. **Universal Tool Compatibility Required**
   - JSON or YAML is safer

## Getting Started

### Using with TypeScript/JavaScript

**Installation:**
```bash
npm install @toon-format/toon
```

**Basic usage example:**
```typescript
import { stringify, parse } from '@toon-format/toon';

// Convert JSON to TOON
const data = {
  users: [
    { id: 1, name: "Alice", role: "admin" },
    { id: 2, name: "Bob", role: "user" }
  ]
};

const toonString = stringify(data);
console.log(toonString);
// Output:
// users[2]{id,name,role}:
// 1,Alice,admin
// 2,Bob,user

// Convert TOON back to JSON
const parsedData = parse(toonString);
console.log(parsedData);
// Returns to original JSON object
```

### OpenAI API Usage Example

```typescript
import OpenAI from 'openai';
import { stringify } from '@toon-format/toon';

const client = new OpenAI();

const userData = {
  users: [/* large amount of user data */]
};

const response = await client.chat.completions.create({
  model: "gpt-4",
  messages: [
    {
      role: "user",
      content: `Analyze the following user data:\n\n${stringify(userData)}`
    }
  ]
});

// Check token usage
console.log(`Tokens used: ${response.usage.total_tokens}`);
// 30-60% reduction compared to JSON
```

## Technyan's Comment

"TOON format is truly revolutionary! Being able to reduce AI conversation costs by up to 60% is game-changing, especially for applications handling large amounts of data!

What surprised me first isn't just the token reduction, but the improvement in LLM comprehension accuracy too. TOON's 73.9% vs JSON's 69.7% is about 4 points difference! This is because explicitly declaring array length and fields like `users[3]{id,name,role}` makes it easier for LLMs to validate structure.

The tabular data representation is especially brilliant! In JSON, you have to repeat the same keys (`id`, `name`, `role`) over and over, but in TOON, you declare them once and just list the data CSV-style. This is super powerful for uniform structures like database query results, log data, or product lists!

The actual cost reduction impact can't be ignored either. Annual savings of $1,440 is significant for startups, and for enterprises the numbers would be even bigger. Plus, saving tokens means you can pack more information into the context window, which can improve AI performance.

However, being a new format, there are some considerations for adoption:

1. **Ecosystem Still Developing**: Unlike JSON, not everything supports it yet, so tool compatibility needs attention.

2. **Learning Cost**: Team members need to learn the new format. But the syntax itself is simple, so learning cost should be low.

3. **Identify Optimal Use Cases**: It's not suited for deeply nested complex structures, so choosing where to use it matters.

What I find interesting is using tabs or pipes as delimiters. Commas are often treated as 1 token by many tokenizers, so replacing them with tabs could further improve efficiency. However, tabs have low visibility, which could make debugging harder.

18.1k+ GitHub Stars in 2 months since release is impressive! You can feel the community momentum. With implementations progressing in 20+ languages, developer community interest is clearly high.

The news that Openapi.com will announce support within weeks is notable too. If major platforms start adopting it, it could spread rapidly. However, standardization will take time, so it's wise to use it "for LLM communication only" at this stage.

In conclusion, TOON should be used right now in these scenarios:

✅ **Sending data to LLMs**: When frequently using APIs like ChatGPT, Claude, Gemini
✅ **Uniform data structures**: User lists, product catalogs, log data, etc.
✅ **Cost reduction**: When token usage is high and costs are a concern
✅ **Context maximization**: When wanting to pack more information into limited context windows

Conversely, continue using traditional JSON in these cases:

❌ **REST APIs**: JSON is standard for public APIs
❌ **Complex nesting**: When 3+ levels of nesting are common
❌ **Irregular data**: When structure varies across records
❌ **Existing tool compatibility**: When JSON parsers or validators are essential

TOON has the potential to become a new standard in the AI-first era. It's still in the early adopter phase, but LLM developers should definitely keep this technology on their radar! 🚀📊"

## Summary

TOON format holds great potential as a new data representation method for the AI era:

1. **Remarkable Token Reduction**: 30-60% reduction from JSON, 40% average
2. **Improved Accuracy**: LLM comprehension accuracy improved to 73.9% (JSON: 69.7%)
3. **Cost Savings**: Thousands of dollars in annual API cost reduction for large-scale applications
4. **Rapid Adoption**: 18.1k+ GitHub stars in 2 months, implementations progressing in 20+ languages
5. **Practical**: Major platforms like Openapi.com planning adoption

TOON truly shines when exchanging uniformly structured data with LLMs. Beyond token cost reduction, it has the demonstrated side benefit of improving AI comprehension accuracy, making it a noteworthy technology for AI/LLM application developers.

While still a new format, considering its clear advantages and rapidly expanding ecosystem, it's likely to become one of the standard choices in future AI development. Particularly for large-scale AI applications where token efficiency is critical, early adoption could provide competitive advantages.
