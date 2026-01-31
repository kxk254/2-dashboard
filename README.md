# 2-Dashboard

```
RootLayout (global) – wraps the whole app
├─ <html lang="en">
├─ <body class="font + dark:bg-gray-900">
│
├─ ThemeProvider  ← provides dark/light mode context
│  └─ SidebarProvider  ← provides sidebar state context
│     └─ children (all pages)
│
│     └─ AdminLayout (nested layout for /admin)
│        ├─ AppSidebar
│        ├─ Backdrop
│        ├─ AppHeader
│        └─ Page Content (children of AdminLayout)
│
│     └─ Other Pages (non-admin)
│        └─ Just render page content

```

