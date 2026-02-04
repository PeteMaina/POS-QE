# Intensive Project Roadmap / TODO List

This roadmap is derived from the Software Requirements Specification (SRS) for the Offline-First Desktop POS System. It breaks down the system into granular activities to ensure every detail is covered.

## Phase 1: Project Initialization & Architecture (Tasks 1-80)

### Environment Setup
- [ ] 1. Install Python 3.10+
- [ ] 2. Set up virtual environment
- [ ] 3. Create requirements.txt
- [ ] 4. Install FastAPI
- [ ] 5. Install Uvicorn
- [ ] 6. Install SQLModel
- [ ] 7. Install Alembic
- [ ] 8. Install Pydantic
- [ ] 9. Install Passlib[bcrypt]
- [ ] 10. Install Python-Jose[cryptography]
- [ ] 11. Install Pytest
- [ ] 12. Create .gitignore file
- [ ] 13. Initialize Git repository
- [ ] 14. Create README.md
- [ ] 15. Create project folder structure (backend)
- [ ] 16. Create project folder structure (frontend)

### Backend Structure
- [ ] 17. Create `app/main.py` entry point
- [ ] 18. Create `app/core/config.py` for settings
- [ ] 19. Define environment variables in `.env`
- [ ] 20. Implement logging configuration in `app/core/logging.py`
- [ ] 21. Create `app/db` package
- [ ] 22. Create `app/api` package
- [ ] 23. Create `app/models` package
- [ ] 24. Create `app/schemas` package
- [ ] 25. Create `app/services` package
- [ ] 26. Create `app/utils` package
- [ ] 27. Setup CORS middleware
- [ ] 28. Setup Exception handlers
- [ ] 29. specific handler for ValidationErrors
- [ ] 30. specific handler for DatabaseErrors
- [ ] 31. specific handler for AuthenticationErrors
- [ ] 32. Setup Health Check endpoint

### Database Initialization
- [ ] 33. configure SQLite connection string
- [ ] 34. Create database session dependency
- [ ] 35. Setup Alembic for migrations
- [ ] 36. Configure `env.py` in Alembic
- [ ] 37. Create `Base` model class
- [ ] 38. Create script to initialize DB
- [ ] 39. Create script to seed initial data
- [ ] 40. Verify SQLite file creation

### Frontend foundation (React + Electron/Web)
- [ ] 41. Initialize React project (Vite)
- [ ] 42. Install Electron (dev dependency)
- [ ] 43. Configure Electron main process
- [ ] 44. Configure Electron preload script
- [ ] 45. Configure IPC communication bridge
- [ ] 46. Install React Router DOM
- [ ] 47. Install Styled Components or Emotion
- [ ] 48. Install Axios / TanStack Query
- [ ] 49. Install React Hook Form
- [ ] 50. Install Zod for validation
- [ ] 51. Install Framer Motion for animations
- [ ] 52. Install Lucide React for icons
- [ ] 53. Create `src/components` folder
- [ ] 54. Create `src/pages` folder
- [ ] 55. Create `src/hooks` folder
- [ ] 56. Create `src/context` folder
- [ ] 57. Create `src/utils` folder
- [ ] 58. Create `src/assets` folder
- [ ] 59. Create `src/styles` folder
- [ ] 60. Setup Global Styles
- [ ] 61. Configure Theme Provider (Dark/Light mode preparation)
- [ ] 62. Define Color Palette (Blues, Greens, White-ish)
- [ ] 63. Define Typography (Fonts)
- [ ] 64. Create `App.jsx`
- [ ] 65. Setup Routing structure
- [ ] 66. Create 404 Not Found Page
- [ ] 67. Create Error Boundary component
- [ ] 68. Create Loading Spinner component
- [ ] 69. Create Button generic component
- [ ] 70. Style Button (Primary)
- [ ] 71. Style Button (Secondary)
- [ ] 72. Style Button (Danger)
- [ ] 73. Create Input generic component
- [ ] 74. Style Input fields
- [ ] 75. Create Modal/Dialog container
- [ ] 76. Create Toast/Notification system
- [ ] 77. Create Card component
- [ ] 78. Create Grid/Layout container
- [ ] 79. Setup Prettier config
- [ ] 80. Setup ESLint config

## Phase 2: Authentication & User Management (Tasks 81-150)

### Backend - Auth
- [ ] 81. Define User model (SQLModel)
- [ ] 82. Add fields: id, username, password_hash, role
- [ ] 83. Add fields: is_active, last_login
- [ ] 84. Create User migration
- [ ] 85. Apply User migration
- [ ] 86. Create UserSchema (Pydantic) for Read
- [ ] 87. Create UserCreate Schema
- [ ] 88. Create UserUpdate Schema
- [ ] 89. Implement `get_password_hash` utility
- [ ] 90. Implement `verify_password` utility
- [ ] 91. Create `clean_up_token` utility
- [ ] 92. Create JWT token generation function
- [ ] 93. Create `get_current_user` dependency
- [ ] 94. Create `get_current_active_user` dependency
- [ ] 95. Create Role-based permission checker dependency
- [ ] 96. Create POST /login endpoint
- [ ] 97. Validate login credentials
- [ ] 98. Return Access Token
- [ ] 99. Create POST /users endpoint (Admin only)
- [ ] 100. Create GET /users endpoint (Admin only)
- [ ] 101. Create GET /users/me endpoint
- [ ] 102. Create PATCH /users/{id} endpoint
- [ ] 103. Create seed script for Super Admin
- [ ] 104. Test Login endpoint manually
- [ ] 105. Write unit test for password hashing
- [ ] 106. Write unit test for login route

### Frontend - Auth
- [ ] 107. Create AuthContext
- [ ] 108. Implement Login state management
- [ ] 109. Implement Logout action
- [ ] 110. Persist token in Secure Storage / LocalStorage
- [ ] 111. Create Login Page Layout
- [ ] 112. Add Logo to Login Page
- [ ] 113. Create Login Form Component
- [ ] 114. Bind Username Input
- [ ] 115. Bind Password Input
- [ ] 116. Handle Form Submission
- [ ] 117. Connect to Login API
- [ ] 118. Handle Loading State during login
- [ ] 119. Handle Error State (Wrong password)
- [ ] 120. Handle Network Error
- [ ] 121. Redirect to Dashboard on success
- [ ] 122. Create ProtectedRoute component
- [ ] 123. Protect Dashboard routes
- [ ] 124. Create AdminRoute component
- [ ] 125. Protect Admin-only routes
- [ ] 126. Style Login Page with Blue/Green theme
- [ ] 127. Add animation to Login entrance

### User Management UI (Admin)
- [x] 128. Design User List Page (Table View) <!-- id: 128 -->
- [x] 129. Create User List Component <!-- id: 129 -->
- [x] 130. Backend Integration: Fetch Users <!-- id: 130 -->
- [x] 131. Add "Create User" Button <!-- id: 131 -->
- [x] 132. Create "Add User" Modal/Form <!-- id: 132 -->
- [x] 133. Form Validation (Username required, Password match) <!-- id: 133 -->
- [x] 134. Backend Integration: Create User <!-- id: 134 -->
- [x] 135. Add "Edit User" Button <!-- id: 135 -->
- [x] 136. Create "Edit User" Modal/Form (Pre-fill data) <!-- id: 136 -->
- [x] 137. Backend Integration: Update User <!-- id: 137 -->
- [x] 138. Add "Delete User" Button (with confirmation) <!-- id: 138 -->
- [x] 139. Backend Integration: Delete User <!-- id: 139 -->
- [x] 140. Implement Role Selection (Dropdown) <!-- id: 140 -->
- [x] 141. Implement Active/Inactive Toggle <!-- id: 141 -->
- [x] 142. Display Success/Error Toasts <!-- id: 142 -->
- [x] 143. Handle "Self-deletion" prevention <!-- id: 143 -->
- [x] 144. Design Layout (Sidebar + Header) <!-- id: 144 -->
- [x] 145. Implement Sidebar Navigation <!-- id: 145 -->
- [x] 146. Highlight Active Route in Sidebar <!-- id: 146 -->
- [ ] 147. Add Search filter to User Table
- [ ] 148. Verify Admin permissions on UI
- [ ] 149. Verify Cashier cannot see User Management
- [ ] 150. Verify Owner cannot edit Users (optional per role)

## Phase 3: Inventory Management Module (Tasks 151-300)

### Backend - Inventory
- [x] 151. Define Category model <!-- id: 151 -->
- [x] 152. Define Product model <!-- id: 152 -->
- [x] 153. Define Variant model (Size, Color) <!-- id: 153 -->
- [x] 154. Define StockLog model (for tracking movements) <!-- id: 154 -->
- [x] 155. Migration for Inventory tables <!-- id: 155 -->
- [x] 156. Apply Inventory migration <!-- id: 156 -->
- [x] 157. Create Category Schemas (Create, Read, Update) <!-- id: 157 -->
- [x] 158. Create Product Schemas (Create, Read, Update) <!-- id: 158 -->
- [x] 159. Create Variant Schemas <!-- id: 159 -->
- [x] 160. CRUD Endpoint: GET /categories <!-- id: 160 -->
- [x] 161. CRUD Endpoint: POST /categories <!-- id: 161 -->
- [x] 162. CRUD Endpoint: PUT /categories/{id} <!-- id: 162 -->
- [x] 163. CRUD Endpoint: DELETE /categories/{id} <!-- id: 163 -->
- [x] 164. CRUD Endpoint: GET /products <!-- id: 164 -->
- [x] 165. Implement Pagination for products <!-- id: 165 -->
- [x] 166. Implement Search for products (Name, SKU) <!-- id: 166 -->
- [x] 167. CRUD Endpoint: POST /products <!-- id: 167 -->
- [x] 168. Handle Image upload (optional, maybe just store path) <!-- id: 168 -->
- [x] 169. CRUD Endpoint: GET /products/{id} <!-- id: 169 -->
- [x] 170. CRUD Endpoint: PUT /products/{id} <!-- id: 170 -->
- [x] 171. CRUD Endpoint: POST /products/{id}/variants <!-- id: 171 -->
- [x] 172. Endpoint: POST /inventory/adjust <!-- id: 172 -->
- [x] 173. Logic to update stock count <!-- id: 173 -->
- [x] 174. Logic to create StockLog entry <!-- id: 174 -->
- [x] 175. Logic to prevent negative stock (if configured) <!-- id: 175 -->
- [ ] 176. Endpoint: GET /inventory/low-stock
- [ ] 177. Bulk import endpoint (JSON/CSV)
- [ ] 178. Unit tests for Product creation
- [ ] 179. Unit tests for Stock adjustment logic

### Frontend - Inventory (Admin)
- [ ] 180. Create Inventory Dashboard Layout
- [ ] 181. Create Sidebar Navigation item "Inventory"
- [ ] 182. Create Category Management Page
- [ ] 183. List Categories
- [ ] 184. Add Category Modal
- [ ] 185. Edit Category Modal
- [ ] 186. Create Product List Page
- [ ] 187. Table Column: SKU
- [ ] 188. Table Column: Name
- [ ] 189. Table Column: Price
- [ ] 190. Table Column: Stock
- [ ] 191. Table Column: Category
- [ ] 192. Table Column: Actions
- [ ] 193. Implement Search Bar for Products
- [ ] 194. Implement Category Filter
- [ ] 195. Create "Add Product" Page/Modal
- [ ] 196. Form Section: Basic Info (Name, SKU)
- [ ] 197. Form Section: Pricing (Cost, Selling)
- [ ] 198. Form Section: Categorization
- [ ] 199. Form Section: Initial Stock
- [ ] 200. Form Section: Variants (Dynamic list)
- [ ] 201. Input for Variant Name (e.g., Size)
- [ ] 202. Input for Variant Option (e.g., Large)
- [ ] 203. Input for Variant Price Modifier
- [ ] 204. Validation: SKU must be unique
- [ ] 205. Validation: Price must be positive
- [ ] 206. Submit New Product
- [ ] 207. Handle API Errors
- [ ] 208. Create Product Detail View
- [ ] 209. Create "Edit Product" Page
- [ ] 210. Pre-fill data
- [ ] 211. Save Changes
- [ ] 212. Create Stock Adjustment Interface
- [ ] 213. Select Product for adjustment
- [ ] 214. Input quantity to add/remove
- [ ] 215. Input reason for adjustment
- [ ] 216. Submit Adjustment
- [ ] 217. Show updated stock immediately
- [ ] 218. Bulk Entry Mode UI
- [ ] 219. Grid input for fast entry
- [ ] 220. Keyboard navigation in Grid
- [ ] 221. Auto-save in Bulk Mode
- [ ] 222. Visual indicator for Low Stock items
- [ ] 223. Export Inventory to CSV button
- [ ] 224. Import Inventory from CSV interface

## Phase 4: Cashier Module / POS Interface (Tasks 225-450)

### Design & Layout
- [ ] 225. Design Cashier Layout (Header, Left: Cart, Right: Grid)
- [ ] 226. Implement Fullscreen toggle
- [ ] 227. Hide Admin specific navigation elements
- [ ] 228. Create Top Bar (User info, Date/Time, Connection Status)
- [ ] 229. Implement Clock component
- [ ] 230. Implement Offline status indicator

### Product Search & Grid
- [ ] 231. Create Product Grid Component
- [ ] 232. Create Product Card Component
- [ ] 233. Show Product Name on Card
- [ ] 234. Show Price on Card
- [ ] 235. Show Thumbnail (if available) on Card
- [ ] 236. Handle Click on Card (Add to Cart)
- [ ] 237. Create Search Bar Component
- [ ] 238. Implement "Search as you type" logic
- [ ] 239. Filter Grid based on Search
- [ ] 240. Optimize search performance (local filtering)
- [ ] 241. Implement SKU scanning listener (Barcode scanner simulation)
- [ ] 242. Handle scanned input (auto add to cart)
- [ ] 243. Create Category Tabs filter
- [ ] 244. Implement "Favorites" or "Frequent" tab
- [ ] 245. Handle large product lists (Virtualization)

### Cart Logic
- [ ] 246. Create Cart State (Zustand/Context)
- [ ] 247. Action: Add Item
- [ ] 248. Action: Remove Item
- [ ] 249. Action: Increment Quantity
- [ ] 250. Action: Decrement Quantity
- [ ] 251. Action: Clear Cart
- [ ] 252. Action: Set Discount
- [ ] 253. Calculation: Line Item Total
- [ ] 254. Calculation: Subtotal
- [ ] 255. Calculation: Tax (if applicable)
- [ ] 256. Calculation: Grand Total
- [ ] 257. Create Cart UI Container
- [ ] 258. Create Cart Item Row Component
- [ ] 259. Display Quantity Controls
- [ ] 260. Display Line Price
- [ ] 261. Display Variant details
- [ ] 262. Add "Delete" icon to row
- [ ] 263. Create Cart Summary Section
- [ ] 264. Display Total Big and Bold
- [ ] 265. Formatting: Add commas to thousands
- [ ] 266. Formatting: Fix to 2 decimal places

### Checkout Flow
- [ ] 267. Create "Pay" / Checkout Button
- [ ] 268. Disable Pay button if cart empty
- [ ] 269. Create Payment Modal
- [ ] 270. Display Total Amount Due
- [ ] 271. Create "Amount Received" Input
- [ ] 272. Implement Numpad UI for touchscreen support
- [ ] 273. Connect Numpad to Amount Input
- [ ] 274. Auto-calculate Change
- [ ] 275. Display Change Due clearly
- [ ] 276. Color code Change (Red if insufficient, Green if okay)
- [ ] 277. Create Quick Cash Buttons ($10, $20, $50, Exact)
- [ ] 278. Implement "Confirm Payment" Button
- [ ] 279. Handle Payment Confirmation
- [ ] 280. Create Pending Sale object
- [ ] 281. Send Sale to Backend API
- [ ] 282. Handle "Success" response
- [ ] 283. Trigger Receipt Print (Mock for now)
- [ ] 284. Show Success Animation/Message
- [ ] 285. Reset Cart after success
- [ ] 286. Close Payment Modal
- [ ] 287. Handle "Failure" response
- [ ] 288. Show Error Message
- [ ] 289. Retry mechanism

### Variant Selection
- [ ] 290. Detect if product has variants on click
- [ ] 291. Open Variant Selection Modal
- [ ] 292. Display Variant Options
- [ ] 293. Select logic for variants
- [ ] 294. Add specific variant to cart
- [ ] 295. Cancel variant selection

## Phase 4.5: POS Advanced Features & Shortcuts (Tasks 296-450)

### Keyboard Shortcuts & Accessibility
- [ ] 296. Define global keymap configuration
- [ ] 297. Implement F-key shortcuts (F1: Help, F12: Pay)
- [ ] 298. Bind "Esc" to Cancel/Close Modals
- [ ] 299. Bind "Space" to Quick Pay (optional)
- [ ] 300. Bind "Search" to Ctrl+F
- [ ] 301. Bind "+" to Increase Qty
- [ ] 302. Bind "-" to Decrease Qty
- [ ] 303. Bind "Del" to Remove Item
- [ ] 304. Implement focus trapping in Modals
- [ ] 305. Ensure ARIA labels on all Grid items
- [ ] 306. Ensure ARIA labels on all Cart items
- [ ] 307. Test tab navigation flow in Cashier
- [ ] 308. Test screen reader announcements for Total updates

### Discounts & Promotions
- [ ] 309. Create Discount Model (Backend)
- [ ] 310. Define Discount Types (Percentage, Fixed Amount)
- [ ] 311. Backend API for applying discount
- [ ] 312. Frontend UI: Add Discount Button
- [ ] 313. Modal to enter Discount Code or Amount
- [ ] 314. Apply Discount to single line item
- [ ] 315. Apply Discount to entire cart
- [ ] 316. Validate Discount limits (e.g. max 100%)
- [ ] 317. Display Discount visually in Cart
- [ ] 318. Display Original Price vs Discounted Price
- [ ] 319. Calculate Total Savings
- [ ] 320. Print Savings on Receipt

### Held Carts / Suspended Sales
- [ ] 321. Define SuspendedSale model
- [ ] 322. Backend API to park/suspend sale
- [ ] 323. Backend API to retrieve suspended sales
- [ ] 324. UI Button: "Hold Cart"
- [ ] 325. Clear current cart on Hold
- [ ] 326. Store Customer Name interaction for Hold
- [ ] 327. UI Section: "Recall Held Cart"
- [ ] 328. List valid held carts
- [ ] 329. Restore items to active cart
- [ ] 330. Delete held cart if abandoned

### Session Management & Locking
- [ ] 331. Implement Auto-lock timer
- [ ] 332. Create Pin Pad Lock Screen
- [ ] 333. Validate PIN against User DB
- [ ] 334. Quick Switch User feature
- [ ] 335. Audit Log for Lock/Unlock events
- [ ] 336. Persist Cart state across reloads (LocalStorage)
- [ ] 337. Persist User session (Refresh Tokens)
- [ ] 338. Handle Token Expiration gracefully

### Advanced Checkout Scenarios
- [ ] 339. Split Payment UI (Cash + Card) - Future proofing
- [ ] 340. Handle partial payments
- [ ] 341. Calculate logic for remaining balance
- [ ] 342. Refund/Return Mode toggle
- [ ] 343. Search historical sale for return
- [ ] 344. Select items to return from history
- [ ] 345. Validate return quantity <= sold quantity
- [ ] 346. Process Negative Transaction (Refund)
- [ ] 347. Update Inventory (Add back)
- [ ] 348. Print Refund Receipt
- [ ] 349. Manager Override requirement for Refunds
- [ ] 350. Manager Override UI (Modal for Admin Creds)

### Customer Association (Lightweight CRM)
- [ ] 351. Define Customer Model
- [ ] 352. Backend API: Create Customer
- [ ] 353. Backend API: Search Customer
- [ ] 354. POS UI: "Add Customer" Button
- [ ] 355. Search Customer by Phone/Name
- [ ] 356. Create New Customer Quick Form
- [ ] 357. Link Customer to Sale
- [ ] 358. Display Customer Name on Cart header
- [ ] 359. Display Customer Loyalty Points (Placeholder)
- [ ] 360. Save Customer logic in Sales Transaction

### UI State Management (Detailed)
- [ ] 361. Design "Empty Cart" State illustration
- [ ] 362. Design "No Products Found" State
- [ ] 363. Design "Network Error" Toast
- [ ] 364. Design "Success" Sale Completion Modal
- [ ] 365. Implement Skeleton Loader for Product Grid
- [ ] 366. Implement Loading Spinner for Payment processing
- [ ] 367. Handle "Item Out of Stock" warning on add
- [ ] 368. Handle "Low Stock" warning visually
- [ ] 369. Create Tooltips for icon-only buttons
- [ ] 370. Create "Help" overlay for keyboard shortcuts

### Tax Handling
- [ ] 371. Define Tax Rules (Global/Category based)
- [ ] 372. Configure Tax Rate in Settings
- [ ] 373. Calculate Tax logic in Cart
- [ ] 374. Toggle Tax Inclusive/Exclusive prices
- [ ] 375. Display Tax Line item in Totals
- [ ] 376. Ensure Tax rounding compliance
- [ ] 377. Backend storage of Tax collected

### POS Settings & Configuration
- [ ] 378. Settings Page: General
- [ ] 379. Settings Page: Peripheral Setup
- [ ] 380. Settings Page: Receipt Header/Footer
- [ ] 381. Settings: Toggle Sound Effects
- [ ] 382. Settings: Toggle Dark/Light Mode
- [ ] 383. Settings: Default Category
- [ ] 384. Settings: Grid Layout density
- [ ] 385. Store Settings in LocalStorage/Electron-Store

### Robustness & Edge Cases
- [ ] 386. Test max integer limits on Quantity
- [ ] 387. Test max float limits on Price
- [ ] 388. Prevent rapid-fire double clicks on "Pay"
- [ ] 389. Sanitize input for Product Search (SQL Injection check)
- [ ] 390. Handle special characters in Product Names
- [ ] 391. Handle long Product Names (Truncate/Wrap)
- [ ] 392. Handle extremely long receipts
- [ ] 393. Stress test Cart with 100+ items
- [ ] 394. Stress test Search with 10k items
- [ ] 395. Optimize re-renders for Cart updates (useMemo)

### Code Cleanup & Refactoring (Mid-Project)
- [ ] 396. Refactor CartReducer
- [ ] 397. Extract "PriceFormatter" utility
- [ ] 398. Extract "DateFormatter" utility
- [ ] 399. Ensure strict type checking (Prop-types or TS interface)
- [ ] 400. Review console warnings
- [ ] 401. Standardize spacing in CSS
- [ ] 402. Standardize color variables
- [ ] 403. Check consistent button sizes
- [ ] 404. Verify Icon set consistency (Lucide)
- [ ] 405. Organize imports (Absolute paths)

### Unit Testing POS Logic
- [ ] 406. Test: Add Item calculation
- [ ] 407. Test: Remove Item calculation
- [ ] 408. Test: Subtotal calculation
- [ ] 409. Test: Tax calculation
- [ ] 410. Test: Discount calculation
- [ ] 411. Test: Change Due calculation
- [ ] 412. Test: Rounding logic
- [ ] 413. Test: Stock deduction prediction
- [ ] 414. Test: JSON serialization of Order
- [ ] 415. Test: Receipt data formatting

### Integration Testing POS
- [ ] 416. Test flow: Search -> Add -> Pay -> Print
- [ ] 417. Test flow: Scan -> Add -> Pay
- [ ] 418. Test flow: Add -> Change Qty -> Pay
- [ ] 419. Test flow: Add -> Remove -> Empty
- [ ] 420. Test flow: Hold -> Resume -> Pay

### Visual Regression Preparation
- [ ] 421. Snapshot test: Empty Cart
- [ ] 422. Snapshot test: Full Cart
- [ ] 423. Snapshot test: Payment Modal
- [ ] 424. Snapshot test: Product Card
- [ ] 425. Snapshot test: Grid Layout

### Mobile/Tablet Responsiveness (if needed)
- [ ] 426. Adjust Grid columns for smaller screens
- [ ] 427. Hide Sidebar on mobile (Hamburger menu)
- [ ] 428. Increase touch targets for Tablet mode
- [ ] 429. Disable hover effects on touch devices
- [ ] 430. Test Virtual Keyboard interference

### Localization & Internationalization (Prep)
- [ ] 431. Extract hardcoded strings to translation file
- [ ] 432. Setup i18n provider
- [ ] 433. Configurable Currency Symbol
- [ ] 434. Configurable Date Format
- [ ] 435. Configurable Decimal Separator

### Miscellaneous POS Features
- [ ] 436. "Open Drawer" No-Sale button
- [ ] 437. Manager verify for No-Sale
- [ ] 438. Clock-in / Clock-out feature
- [ ] 439. Cash Drop / Pay Out feature (Petty cash)
- [ ] 440. Track Cash Drawer starting balance
- [ ] 441. End of Day Reconciliation (Z-Report logic)
- [ ] 442. Input Opening Float
- [ ] 443. Input Closing Cash Count
- [ ] 444. Calculate Cash Shortage/Overage
- [ ] 445. Print Z-Report
- [ ] 446. Save Z-Report to DB
- [ ] 447. Block Sales after Close Day
- [ ] 448. Alert if Close Day not done
- [ ] 449. Auto-logout after Close Day
- [ ] 450. Verify Z-Report Math

## Phase 5: Sales History & Reporting (Tasks 451-550)

### Backend - Sales
- [ ] 451. Define SalesOrder model
- [ ] 452. Define SalesOrderItem model
- [ ] 453. Define PaymentMethod enum
- [ ] 454. Migration for Sales tables
- [ ] 455. Apply Sales migration
- [ ] 456. Schema for Sales Order Input
- [ ] 457. Schema for Sales Order Output
- [ ] 458. Endpoint: POST /sales (Create Sale)
- [ ] 459. Transaction: Start
- [ ] 460. Transaction: Create Order
- [ ] 461. Transaction: Create Items
- [ ] 462. Transaction: Deduct Inventory
- [ ] 463. Transaction: Commit
- [ ] 464. Transaction: Rollback on error
- [ ] 465. Endpoint: GET /sales
- [ ] 466. Filter: Date Range (Start, End)
- [ ] 467. Filter: Cashier ID
- [ ] 468. Filter: Payment Method
- [ ] 469. Endpoint: GET /sales/{id}
- [ ] 470. Endpoint: GET /sales/stats/daily
- [ ] 471. Endpoint: GET /sales/stats/items

### Frontend - Reports
- [ ] 472. Create Sales History Page
- [ ] 473. Fetch Sales Data
- [ ] 474. Render Sales List
- [ ] 475. Show Date, ID, Total, Cashier
- [ ] 476. Detail View for Sale
- [ ] 477. Show Items in Sale Detail
- [ ] 478. Create Date Range Picker Component
- [ ] 479. Implement Filter Logic
- [ ] 480. Create Reports Dashboard Page
- [ ] 481. Widget: Total Sales Today
- [ ] 482. Widget: Total Transactions Today
- [ ] 483. Widget: Top Selling Products
- [ ] 484. Widget: Sales by Cashier
- [ ] 485. Implement Chart.js or Recharts
- [ ] 486. Create Line Chart for Weekly Sales
- [ ] 487. Create Pie Chart for Category Distribution
- [ ] 488. Create "Export Report" button
- [ ] 489. Generate PDF Report (client side)
- [ ] 490. Generate CSV Export
- [ ] 491. Generate Excel Export (xlsx)
- [ ] 492. Backend endpoint for Excel generation
- [ ] 493. UI for Export Options (Date range, Columns)
- [ ] 494. Advanced Report: Hourly Sales Heatmap
- [ ] 495. Advanced Report: Payment Method Breakdown
- [ ] 496. Advanced Report: Tax Collected Report
- [ ] 497. Advanced Report: Voided/Cancelled Orders
- [ ] 498. Advanced Report: Discount Usage
- [ ] 499. Advanced Report: Low Stock Alert History
- [ ] 500. Advanced Report: Cashier Performance (Avg Ticket Size)
- [ ] 501. Advanced Report: Profit Margin Analysis
- [ ] 502. Backend: Optimize Aggregation Queries
- [ ] 503. Start Report: Category Performance
- [ ] 504. Start Report: Variant Performance
- [ ] 505. Drill-down: Click category to see products
- [ ] 506. Drill-down: Click day to see hours
- [ ] 507. Dashboard Widget: "Busy Hours" prediction
- [ ] 508. Dashboard Widget: "Top Customers" (if CRM enabled)
- [ ] 509. Dashboard Widget: "Recent Alerts"
- [ ] 510. UI: Graph Tooltips implementation
- [ ] 511. UI: Toggle Chart Types (Bar vs Line)
- [ ] 512. UI: Compare with Previous Period (WoW, MoM)
- [ ] 513. Backend: Logic for "Previous Period" calculation
- [ ] 514. Print Report functionality
- [ ] 515. Email Report functionality (Backend SMTP)
- [ ] 516. Email Report UI Modal
- [ ] 517. Schedule Report endpoint (Future)
- [ ] 518. Report Data Caching (Redis or Memory)
- [ ] 519. Invalidate Cache on New Sale
- [ ] 520. Verify Report Accuracy vs Sales List

### Sales History Actions
- [ ] 521. Action: Void Sale (Admin only)
- [ ] 522. Action: Flag Sale for Review
- [ ] 523. Action: Add Note to Sale
- [ ] 524. Action: Email Receipt copy
- [ ] 525. Action: Print Gift Receipt
- [ ] 526. UI: Timeline view of Sale events
- [ ] 527. UI: Highlight modified/voided sales
- [ ] 528. Advanced Search: By Amount Range
- [ ] 529. Advanced Search: By Exact Time
- [ ] 530. Advanced Search: By Items contained

### System Logs & Audit
- [ ] 531. Create AuditLog model
- [ ] 532. Log Login/Logout events
- [ ] 533. Log Price Change events
- [ ] 534. Log Inventory Adjustment events
- [ ] 535. Log User Creation/Deletion events
- [ ] 536. Create Audit Log Viewer Page
- [ ] 537. Filter Audit Logs
- [ ] 538. Color code Severity (Info, Warn, Danger)
- [ ] 539. Auto-archive old logs
- [ ] 540. Export Audit Logs

### Hardware & Peripherals Preparation
- [ ] 541. Define Hardware Interface Layer
- [ ] 542. Create Mock Hardware Service
- [ ] 543. Create Polling mechanism for device status
- [ ] 544. UI: Hardware Status Indicator in Footer
- [ ] 545. UI: Connection Troubleshooter wizard
- [ ] 546. Research: Raw Printing vs Driver Printing
- [ ] 547. Research: WebUSB API possibilities
- [ ] 548. Research: Electron SerialPort usage
- [ ] 549. Install `serialport` for Electron
- [ ] 550. Permission handling for USB devices

## Phase 6: Receipt Printing & Hardware (Tasks 551-620)

### Printer Integration
- [ ] 551. Research ESC/POS python libraries
- [ ] 552. Install `python-escpos` or similar
- [ ] 553. Create Printer Service in Backend
- [ ] 554. Define Printer Configuration (USB VID/PID)
- [ ] 555. Create "Test Print" Endpoint
- [ ] 556. specific method to Initialize Printer
- [ ] 557. specific method to Print Text Line
- [ ] 558. specific method to Print Bold
- [ ] 559. specific method to Print Alignment (Center, Left/Right)
- [ ] 560. specific method to Cut Paper
- [ ] 561. specific method to Open Cash Drawer
- [ ] 562. Design Receipt Layout
- [ ] 563. Header: Store Name & Info
- [ ] 564. Header: Transaction Metadata
- [ ] 565. Body: Table Header
- [ ] 566. Body: Item Rows (loop)
- [ ] 567. Footer: Totals
- [ ] 568. Footer: Thank You Message
- [ ] 569. Integrate Print call into Sales Finalization
- [ ] 570. Handle "Printer Not Found" error gracefully
- [ ] 571. Create "Reprint Receipt" button in History
- [ ] 572. Frontend setting to Select Printer (if possible)
- [ ] 573. Configure Receipt Header (Logo upload)
- [ ] 574. Configure Receipt Footer (Custom text)
- [ ] 575. Configure Tax ID on Receipt
- [ ] 576. Configure Barcode on Receipt (Sale ID)
- [ ] 577. Implementation: Generate QR Code for Receipt
- [ ] 578. Printer: Templating Engine (Jinja2 or JS string literal)
- [ ] 579. Printer: Charset encoding handling (International support)
- [ ] 580. Test: Long receipt paper cut logic
- [ ] 581. Test: Special characters printing
- [ ] 582. Test: Logo dithering/printing quality
- [ ] 583. Create "Print Job" Queue manager
- [ ] 584. Handle "Out of Paper" Retry logic
- [ ] 585. Handle "Printer Offline" queueing
- [ ] 586. Kitchen Printer support (Future prep)
- [ ] 587. Routing items to specific printers (Category based)

### Barcode Scanner Integration
- [ ] 588. Detect HID Keyboard input
- [ ] 589. Logic to distinguish Scanner vs Keyboard typing (Timing)
- [ ] 590. Configuration: Scanner Prefix/Suffix
- [ ] 591. Global Listener hook for scanning
- [ ] 592. Sound effect on successful scan
- [ ] 593. Error sound on "Product Not Found"
- [ ] 594. Test: Rapid scanning buffer
- [ ] 595. UI: visual flash on scan
- [ ] 596. Support for Weight Embedded Barcodes (EAN-13)
- [ ] 597. Parser for Weight Barcodes
- [ ] 598. Configuration: Mock Scanner for testing

### Cash Drawer Integration
- [ ] 599. Research Cash Drawer trigger codes
- [ ] 600. Define Trigger pulse duration
- [ ] 601. Map "Open Drawer" to Printer RJ11 signal
- [ ] 602. Test Drawer Open command
- [ ] 603. Secure "Open Drawer" permissions
- [ ] 604. Log "Manual Drawer Open" events

### Customer Display (Second Screen)
- [ ] 605. Electron: Multi-window management
- [ ] 606. Create Customer Facing View
- [ ] 607. Route Cart data to Second Screen
- [ ] 608. Display Idle Carousel (Ads/Promos)
- [ ] 609. Display Cart Items live
- [ ] 610. Display Total Due big
- [ ] 611. Display Change Given
- [ ] 612. Settings: Enable/Disable Second Screen
- [ ] 613. Communication: IPC Main to Second Window
- [ ] 614. Sync state between windows
- [ ] 615. Test: Double monitor setup
- [ ] 616. Test: Disconnect second monitor handling

### Weighing Scale Integration (Optional)
- [ ] 617. Research Scale Serial protocols
- [ ] 618. Read continuous weight stream
- [ ] 619. UI: "Get Weight" button
- [ ] 620. Auto-update quantity based on weight

## Phase 7: Data Management & Offline First (Tasks 621-680)

### Offline Resilience
- [ ] 621. Verify SQLite is local file
- [ ] 622. Configure DB for WAL mode (Write-Ahead Logging)
- [ ] 623. Ensure all static assets are bundled (no CDN links)
- [ ] 624. Test application without internet connection
- [ ] 625. Implement "Network Status" listener in React
- [ ] 626. Show global "Offline" banner if disconnected (optional)
- [ ] 627. Ensure Font files are local
- [ ] 628. Ensure Icon files are local

### Data Backup & Safety
- [ ] 629. Create Backup Script (Copy .db file)
- [ ] 630. Endpoint: POST /backup/now
- [ ] 631. Endpoint: GET /backup/list
- [ ] 632. Endpoint: POST /backup/restore
- [ ] 633. Admin UI for Backup Management
- [ ] 634. Schedule auto-backup (Cron or Background Task)
- [ ] 635. Implement Database Vacuum/Optimize
- [ ] 636. Verify ACID compliance via tests
- [ ] 637. Implement Database Integrity Check on Startup
- [ ] 638. Automatic cleanup of temporary files
- [ ] 639. Log Rotation policy (Keep last 7 days)
- [ ] 640. Implement "Factory Reset" (Dangerous)
- [ ] 641. Secure Wipe logic for Reset
- [ ] 642. Database Migration Testing (Upgrade path)
- [ ] 643. Test: Rollback failed migration
- [ ] 644. Corrupt DB handling (Restore prompt)
- [ ] 645. Export Data for Migration (JSON dump)
- [ ] 646. Import Data from Migration
- [ ] 647. App State persistence (Electron-store)
- [ ] 648. Save Window Position/Size
- [ ] 649. Save Last Logged in User (Username only)
- [ ] 650. Save Column preferences (Hidden/Visible)

### Updates & Maintenance
- [ ] 651. Configure Electron-Updater
- [ ] 652. S3/GitHub Releases configuration for updates
- [ ] 653. UI: "Check for Updates" button
- [ ] 654. UI: "Update Available" notification
- [ ] 655. UI: Download Progress bar
- [ ] 656. Auto-install on quit logic
- [ ] 657. Validate Code Signing (Certificate)
- [ ] 658. Create Changelog viewer
- [ ] 659. Version mismatch handling (Client vs Server if split)
- [ ] 660. Force Update requirement logic

### Advanced Offline Logic
- [ ] 661. LocalStorage Quota management
- [ ] 662. Detect "False Online" (Captive portals)
- [ ] 663. Queue sync requests (if Cloud added later)
- [ ] 664. Retry exponential backoff (if Cloud added later)
- [ ] 665. Conflict resolution strategies (Last write wins)
- [ ] 666. UI: Sync Status detailed view
- [ ] 667. Manual "Force Sync" button
- [ ] 668. Cache warming strategies
- [ ] 669. Service Worker configuration (if PWA)
- [ ] 670. AppCache/Manifest verification

### Developer Experience (DX)
- [ ] 671. Setup Husky pre-commit hooks
- [ ] 672. Lint-staged configuration
- [ ] 673. Prettier-plugin-organize-imports
- [ ] 674. Setup Storybook for Component Library
- [ ] 675. Create Stories for Button, Card, Grid
- [ ] 676. Documentation Generator (JSDoc/Sphinx)
- [ ] 677. API Client Generator (OpenAPI TS)
- [ ] 678. Docker Compose setup for Dev (if needed)
- [ ] 679. VSCode settings sharing (`.vscode/settings.json`)
- [ ] 680. Debugging configurations (`launch.json`)

## Phase 8: Non-Functional & Polish (Tasks 681-780)

### Performance Tuning
- [ ] 681. Audit frontend bundle size
- [ ] 682. Implement code splitting
- [ ] 683. Optimize images
- [ ] 684. Memoize heavy React components
- [ ] 685. Profile Database queries
- [ ] 686. Add Indexes to SQL tables (User ID, Product Name)
- [ ] 687. Measure Product Search latency (<100ms)
- [ ] 688. Measure Checkout latency (<1s)

### UI/UX Polish
- [ ] 689. Audit Color Palette consistency
- [ ] 690. Ensure "Refreshing Blue" is used correctly
- [ ] 691. Ensure "Feel Good Green" is used correctly
- [ ] 692. Check Button Border Radius (Rounded)
- [ ] 693. Check Font Sizes (Big and Readable)
- [ ] 694. Verify Responsive behavior (Window resize)
- [ ] 695. Add hover effects to all buttons
- [ ] 696. Add active states to all buttons
- [ ] 697. Add focus states for accessibility
- [ ] 698. Implement nice transitions between pages
- [ ] 699. Add empty states for Tables/Lists
- [ ] 700. Add Loading skeletons for data fetching
- [ ] 701. Custom Scrollbar styling

### Security
- [ ] 702. Review Password Hashing algorithm
- [ ] 703. Ensure JWT secret is securely generated
- [ ] 704. Disable Swagger UI in Production
- [ ] 705. Rate Limit Login attempts
- [ ] 706. Sanitize all User Inputs
- [ ] 707. Audit Role permissions mapping

### Deployment Packaging
- [ ] 708. Create PyInstaller spec file
- [ ] 709. Bundle Backend into single executable
- [ ] 710. Build React App
- [ ] 711. Configure Electron builder
- [ ] 712. Bundle everything into an Installer (.exe)
- [ ] 713. Create Desktop Icon
- [ ] 714. Test clean install on fresh VM
- [ ] 715. Create Uninstaller

### Final Acceptance Testing
- [ ] 716. Test Script: Full Sales Cycle
- [ ] 717. Test Script: Refund/Cancel
- [ ] 718. Test Script: Inventory Update
- [ ] 719. Test Script: Admin Reports
- [ ] 720. Test Script: Printer Error handling
- [ ] 721. Test Script: Power failure simulation (DB integrity)
- [ ] 722. User Walkthrough: Cashier Role
- [ ] 723. User Walkthrough: Admin Role
- [ ] 724. User Walkthrough: Owner Role
- [ ] 725. Cross-browser check (if strictly web)
- [ ] 726. Resolution check (1024x768 support)
- [ ] 727. Verify "Zero Mental Arithmetic" goal
- [ ] 728. Verify "Reliability over Novelty" goal

### Documentation & Handoff
- [ ] 729. Write User Manual (Cashier)
- [ ] 730. Write User Manual (Admin)
- [ ] 731. Write Technical Documentation
- [ ] 732. Document API endpoints
- [ ] 733. Document Database Schema
- [ ] 734. Create Troubleshooting Guide
- [ ] 735. List dependencies and licenses
- [ ] 736. Final code review cleanup
- [ ] 737. Remove console.logs
- [ ] 738. Remove TODO comments in code
- [ ] 739. Archive research notes
- [ ] 740. Mark SRS as Delivered (Done)
