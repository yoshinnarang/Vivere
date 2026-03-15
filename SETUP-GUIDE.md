# VELOUR — Shopify Theme Setup Guide
## From GitHub to Live Store in 10 Steps

---

## FOLDER STRUCTURE (upload everything as-is)

```
velour-theme/
├── layout/
│   └── theme.liquid          ← Main HTML wrapper (every page uses this)
├── templates/
│   ├── index.json            ← Homepage sections config
│   ├── collection.liquid     ← All collection pages
│   └── product.liquid        ← All product pages
├── sections/
│   ├── hero.liquid           ← Homepage hero banner
│   ├── featured-collections.liquid
│   └── featured-products.liquid
├── snippets/
│   ├── header.liquid         ← Site header
│   ├── footer.liquid         ← Site footer
│   └── announcement-bar.liquid
├── assets/
│   ├── velour.css            ← ALL styles
│   └── velour.js             ← ALL JavaScript
└── config/
    └── settings_schema.json  ← Theme settings
```

---

## STEP 1 — Create GitHub Repository

1. Go to https://github.com and sign in (create account if needed)
2. Click **"New repository"**
3. Name it: `velour-shopify-theme`
4. Set to **Private**
5. Click **Create repository**
6. Upload ALL the theme files maintaining the folder structure above

---

## STEP 2 — Connect GitHub to Shopify

1. Log into your **Shopify Admin** at yourstorename.myshopify.com/admin
2. Go to **Online Store → Themes**
3. Click **"Add theme"** button
4. Select **"Connect from GitHub"**
5. Authenticate your GitHub account
6. Select repository: `velour-shopify-theme`
7. Select branch: `main`
8. Click **Connect**

Shopify will pull your theme and show it in your theme library.

---

## STEP 3 — Publish the Theme

1. Once connected, click **"Preview"** to check it looks right
2. Click **"Publish"** to make it your live theme

From now on, every time you push code to GitHub → Shopify auto-updates. 

---

## STEP 4 — Add Your Products in Shopify

For each product, go to **Products → Add product** and set:

| Field | What to enter |
|-------|--------------|
| Title | e.g. "Pearl Ivory Coord Set" |
| Product type | e.g. "Night Sets" |
| Tags | `new-in` OR `bestseller` OR `trending` OR `low-stock` |
| Price | e.g. 1499 |
| Compare-at price | e.g. 2200 (this shows the strikethrough + % off) |
| Options | Add "Size" with values: XS, S, M, L, XL — Add "Color" with values: Ivory, Blush, Mauve |
| Images | Upload 4–5 product photos |

---

## STEP 5 — Create Your Collections

Go to **Products → Collections** and create:

| Collection handle | Title |
|------------------|-------|
| `ivory-edit` | The Ivory Edit |
| `mauve-nights` | Mauve Nights |
| `satin-series` | The Satin Series |
| `lace-ease` | Lace & Ease |
| `silken-mornings` | Silken Mornings |
| `night-sets` | Night Sets |
| `new-arrivals` | New Arrivals |
| `sale` | Sale |
| `separates` | Separates |

Set each collection to **Automatic** and use product tags to assign products, OR manually assign.

---

## STEP 6 — Configure Theme Settings

Go to **Online Store → Customize** and you can edit:
- Hero banner image and text
- Collection images
- Social media links (Instagram, Facebook etc.)

---

## STEP 7 — Set Up Payments (Razorpay)

1. Go to **Settings → Payments**
2. Click **"Add payment method"**
3. Search for **Razorpay**
4. Install and connect your Razorpay account
5. Enable **COD** (Cash on Delivery) under "Manual payment methods"

---

## STEP 8 — Set Up Shipping

1. Go to **Settings → Shipping and delivery**
2. Add India as shipping zone
3. Create rates:
   - Free shipping: ₹0 for orders above ₹999 (set minimum order value)
   - Standard: ₹99 for orders under ₹999
4. Add COD as a manual payment method

---

## STEP 9 — Domain Setup

1. Go to **Settings → Domains**
2. Click **"Buy new domain"** and search for `velour.in`
3. OR if you already own it: click **"Connect existing domain"**

---

## STEP 10 — Go Live Checklist

Before launching, verify:
- [ ] All products added with images, prices, and compare-at prices
- [ ] Collections created and products assigned
- [ ] Hero banner image uploaded (1800×1000px recommended)
- [ ] Razorpay connected and tested
- [ ] COD enabled
- [ ] Shipping rates configured
- [ ] Domain connected
- [ ] Footer links all working (size guide, returns, contact pages created)
- [ ] Test order placed and completed

---

## ONGOING WORKFLOW (After Launch)

To update the site:
1. Edit the Liquid/CSS/JS files locally
2. Commit and push to GitHub
3. Shopify auto-syncs within minutes

To add a new product: Just add it in Shopify Admin — no code needed.
To run a sale: Update the compare-at price on products.
To launch a new collection: Create collection in Shopify, add `lace-ease` tag to products.

---

## SUPPORT

For Shopify issues: help.shopify.com
For Razorpay: razorpay.com/support
For theme customisation: Come back and ask!
