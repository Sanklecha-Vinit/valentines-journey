# Valentine's Journey 💕

A beautiful, interactive Valentine's Day journey with 8 unique days, each featuring smooth animations and heartfelt messages.

## ✨ Features

### 8 Special Days
1. **Rose Day** (Feb 7) - Animated SVG rose with heartfelt message
2. **Propose Day** (Feb 8) - Ring animation with commitment message
3. **Chocolate Day** (Feb 9) - Splitting chocolate bars revealing a heart
4. **Teddy Day** (Feb 10) - Comfort and warmth message
5. **Promise Day** (Feb 11) - Commitment and staying together
6. **Hug Day** (Feb 12) - Finding home in each other
7. **Kiss Day** (Feb 13) - Closeness and intimacy
8. **Valentine's Day** (Feb 14) - Complete love letter

### Animations
- Smooth Framer Motion animations
- Progressive text reveals
- Gradient backgrounds
- Emoji animations
- Responsive design

## 🚀 Quick Start

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Open your browser:**
```
http://localhost:3000
```

## 🎯 Usage

### Testing Mode
Press **Ctrl + Shift + D** (Cmd + Shift + D on Mac) on the home page to unlock all days for testing.

### Day Progression
Days unlock sequentially from Feb 7-14, 2026.

## 📁 Project Structure

```
valentines-journey/
├── app/
│   ├── day/[dayId]/page.tsx   # Individual day pages
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx               # Home page
├── components/
│   ├── days/                  # Day components
│   │   ├── RoseDay.tsx
│   │   ├── ProposeDay.tsx
│   │   ├── ChocolateDay.tsx
│   │   ├── TeddyDay.tsx
│   │   ├── PromiseDay.tsx
│   │   ├── HugDay.tsx
│   │   ├── KissDay.tsx
│   │   └── ValentinesDay.tsx
│   └── [other components]
├── data/
│   └── daysConfig.ts          # Day configuration
└── hooks/
```

## 🎨 Customization

### Messages
Edit messages in `components/days/` files. Each component has clearly structured text sections.

### Colors
Modify Tailwind gradient classes in each component:
- Rose Day: `from-rose-950 via-pink-900 to-rose-950`
- Propose Day: `from-purple-950 via-violet-900 to-purple-950`
- Etc.

### Dates
Change unlock dates in `data/daysConfig.ts`

## 🛠 Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion

## 📱 Browser Support

✅ Chrome/Edge 90+
✅ Firefox 88+
✅ Safari 14+
✅ Mobile browsers

## 🚢 Deployment

Deploy to Vercel:
```bash
npm run build
vercel
```

## 💖 Made with Love

Every detail crafted with care to make Valentine's Week unforgettable.

---

**Enjoy your Valentine's Journey! 💕**
