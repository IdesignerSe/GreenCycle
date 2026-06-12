🌿 GreenCycle — Second‑Hand & Take‑Away Store (Hybrid Online + Physical)
GreenCycle is a modern, Scandinavian‑inspired second‑hand marketplace designed to support a real physical store. It combines two unique concepts:

1. Take‑Away Items (Free Section)
A curated collection of donated items that are completely free.
These items act as a community give‑away zone and help attract visitors to the physical store.
No login is required — anyone can browse and discover what’s available.

2. Second‑Hand Items (Priced Section)
A selection of affordable, pre‑loved items with symbolic prices.
Users can log in with a simple alias membership to reserve items online.
Once reserved, the item is marked as unavailable and can be picked up in‑store.

🧩 Concept
Take‑Away Items (Free Section)
Donated items that are completely free

Used to attract people to visit the physical store

No login required to browse

Displayed in a product grid

Optional photo per item (uploaded by staff)

Second‑Hand Items (Priced Section)
Pre‑loved items with symbolic prices

Users can reserve items online

Reservation marks the item as RESERVED

Pickup happens in the physical store

Simple alias membership required (no password)

Alias Membership
Login with alias + email

Stored in LocalStorage

Only needed for reserving priced items

Admin Area
Staff can add new items

Set item as free or priced

Optional photo upload

Mark items as reserved

Data stored locally (no backend)

📦 Project Structure

```text

src/
  components/
    Navbar.jsx
    Footer.jsx
    SocialIcons.jsx
    ProductCard.jsx
    ProductGrid.jsx
    LoginForm.jsx
    AdminForm.jsx

  pages/
    Home.jsx
    TakeAway.jsx
    SecondHand.jsx
    ProductDetails.jsx
    Login.jsx
    Checkout.jsx
    Admin.jsx

  context/
    AuthContext.jsx
    ProductsContext.jsx

  data/
    products.json

  hooks/
    useAuth.js
    useProducts.js

  utils/
    formatPrice.js
    storage.js

  styles/
    theme.css

  assets/
    logo.png
    placeholder images


```
📄 Pages Overview
Home  
Intro to GreenCycle, links to Take‑Away and Second‑Hand sections.

TakeAway  
Grid of free items, no login required.

SecondHand  
Grid of priced items, with “Reserve” actions.

ProductDetails  
Full view of a single item (image, description, price/free, status).

Login  
Alias + email membership, stored in LocalStorage.

Checkout  
Simulated reservation flow (no real payment), marks item as reserved.

Admin  
Add/edit items, set free/priced, upload optional photo, mark reserved.

🎨 Design & UX
Minimal Scandinavian style

Soft pastel green (#81C784) as primary accent

White and light gray backgrounds

Soft shadows and rounded corners

Clean typography and spacing

Social media icons (Instagram, Facebook, TikTok, YouTube, LinkedIn) in the footer

🛠 Tech Stack
React + Vite

React Router (SPA routing)

React Icons (social + UI icons)

LocalStorage (auth + product state)

GitHub Pages (deployment)

📍 Deployment
GreenCycle is deployed on GitHub Pages, with routing configured using:

vite.config.js base path

Router basename

404 redirect for SPA routing