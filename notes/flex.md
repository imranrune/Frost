`flex` comes from **Flexbox**, a modern CSS layout system that makes it easy to align elements horizontally or vertically.

Here’s the simple explanation:

---

# ✅ **What `display: flex` does**

When you add:

```css
display: flex;
```

to a container (like `.header`), it changes the layout behavior of its children.

By default:

### ✔ It puts child elements **in a row** (horizontally)

So your image and text appear next to each other instead of stacked vertically.

### ✔ It lets you easily align them

For example:

```css
align-items: center;
```

→ Vertically centers everything in that row.

```css
justify-content: center;
```

→ Horizontally centers everything.

---

# 🧠 Visual Example

Without flex:

```
[  LOGO  ]
[  TEXT  ]
```

With flex:

```
[ LOGO | TEXT ]
```

---

# 🎯 Why we used it in your header

You needed:

* Logo + title on the same line
* Text to be aligned nicely next to the image
* No weird spacing issues

Flexbox handles this perfectly.

---

# 🔥 Quick Summary

| Property                                     | What it does                    |
| -------------------------------------------- | ------------------------------- |
| `display: flex`                              | Makes children line up in a row |
| `flex-direction: row/column`                 | Choose row or column layout     |
| `align-items: center`                        | Vertical alignment              |
| `justify-content: space-between/center/etc.` | Horizontal alignment            |

---

If you want, I can show you a live-style side-by-side example or teach you Flexbox in 2 minutes.
