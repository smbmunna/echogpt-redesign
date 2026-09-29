# EchoGPT — Unified AI Workspace

EchoGPT is a high-performance, single-interface workspace that brings together over 40+ leading AI models (including DeepSeek, GPT, Gemini, Kimi, and Qwen). Instead of managing multiple $20/month subscriptions and juggling browser tabs, EchoGPT lets you switch models inline inside the same conversation thread, compare reasoning, and route tasks to the best engine instantly.

---

## 🛠️ Technologies Used

- **Framework:** Next.js 14+ (App Router) & React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS & Native CSS Custom Properties (`var(--surface)`, `var(--primary)`, `var(--border)`)
- **Animations:** Framer Motion (infinite marquee, viewport-triggered scroll reveals, micro-interactions)
- **Icons:** Lucide React

---

## 🚀 Setup Instructions

### Prerequisites
Ensure you have Node.js (v18.0.0 or higher) and npm/pnpm installed on your machine.

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/smbmunna/echogpt-redesign.git
   cd echogpt-redesign
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install    
   ```

3. **Run the local development server:**    
   ```bash
   npm run dev
   # or
   pnpm dev
   ```
**Open http://localhost:3000 in your browser to view the application.**

4. **Build for Production:**    
  ```bash
    npm run build
    npm run start
  ```

### 💡 Assumptions & Thought Process
When auditing the reference site (echogpt.live), several product design and marketing weaknesses stood out. The goal of this redesign was to shift from a plain feature list to a high-converting, outcome-focused product page.

**Weaknesses Identified in the Original Site:**    

* **Feature-focused rather than benefit-driven:** Explaining raw model names and specifications instead of showing how much money or time users save.
* **Static visual presentation:** Lacking motion, micro-interactions, or interactive preview elements, making the product feel flat and rigid.
* **Information overload:** Presenting 40+ models in a wall of text or flat grid, causing cognitive friction for first-time visitors trying to evaluate the tool.
* **Missing credibility signals:** Lacking social proof, customer feedback, and structured ROI breakdowns necessary for converting casual visitors into active users.

**Redesign Strategy:**
* **Outcome-first messaging:** Framed value propositions around concrete benefits like cutting monthly AI bills by 80% rather than just listing multi-model support.
* **Interactive UI preview:** Built a live browser mock directly into the hero section so users can immediately grasp how the interface functions before signing up.
* **Performance-first animations:** Used Framer Motion for smooth, hardware-accelerated spring animations, viewport-triggered entries, and pause-on-hover marquee loops.
* **Design system consistency:** Enforced root CSS variables across all components to ensure predictable contrast ratios, dark mode fidelity, and easy global rebranding.

### ✨ Enhancements Over echogpt.live

| Section / Feature | Original Site (echogpt.live) | Redesigned EchoGPT Build |
| :--- | :--- | :--- |
| **Hero Section** | Standard text with static image | Interactive browser mock preview with live code block streaming simulation |
| **Model Showcase** | Static text list | Infinite Marquee Strip using Framer Motion with model badges & pause-on-hover |
| **Why Choose Us** | Bulleted list of technical features | 2x2 Benefit Grid with outcome metrics, highlight checklists, and callout banner |
| **Social Proof** | Absent or minimal | 3-Card Testimonials Section featuring specific developer personas and ratings |
| **Design Language** | Hardcoded Tailwind classes | Tokenized CSS System utilizing root custom properties (`var(--primary)`, `var(--surface)`, etc.) |
| **Micro-Interactions** | Default browser states | Custom Framer Motion hover elevations, spring physics, and focus rings |
| **Responsive Layout** | Basic mobile scaling | Tailored breakpoints for mobile, tablet, and desktop with adaptive UI drawer mocks |

### 📁 Project Structure
```text
└── app/    
    ├── globals.css # Root design tokens & theme variable definitions
    ├── layout.tsx  # Main application layout & font setup
    ├── page.tsx    # The landing page of EchoGPT for Marketing
    ├── extension/
    │   └── page.tsx # Improved UI experience for the chrome extension
    ├── components/
    │   ├── EmptyChat.tsx
    │   ├── EmptyState.tsx
    │   ├── sidebar/
    │   │   ├── Conversation.tsx
    │   │   ├── NewChatBtn.tsx
    │   │   └── SidebarFooter.tsx
    │   ├── shared/
    │   │   ├── Footer.tsx
    │   │   ├── logo.tsx
    │   │   ├── navbar.tsx
    │   │   └── sidebar.tsx
    │   ├── LandingPage/
    │   │   ├── AIModels.tsx
    │   │   ├── FAQ.tsx
    │   │   ├── Features.tsx
    │   │   ├── Hero.tsx
    │   │   ├── Mockup.tsx
    │   │   ├── Pricing.tsx
    │   │   ├── Testimonials.tsx
    │   │   └── WhyChooseSection.tsx
    │   └── EmptyChat/
    │       ├── Greetings.tsx
    │       ├── ModelPicker.tsx
    │       └── PromptsComposer.tsx
    └── chat/
        └── page.tsx # EchoGPT main chat application redesigned 
```

