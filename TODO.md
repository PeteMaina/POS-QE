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
- [ ] 128. Create User List Page
- [ ] 129. Fetch Users from API
- [ ] 130. Render Users in a Table
- [ ] 131. Create "Add User" Modal
- [ ] 132. Create "Add User" Form
- [ ] 133. Field: Username
- [ ] 134. Field: Password
- [ ] 135. Field: Role Selection (Dropdown)
- [ ] 136. Submit New User to API
- [ ] 137. Handle Success/Error in Add User
- [ ] 138. Create "Edit User" Modal
- [ ] 139. Populate Edit Form with user data
- [ ] 140. Submit Edit User to API
- [ ] 141. Implement "Delete/Deactivate User" button
- [ ] 142. Confirm Deletion Dialog
- [ ] 143. Call Delete API
- [ ] 144. Refresh User List after updates
- [ ] 145. Style User Table
- [ ] 146. Add Pagination to User Table
- [ ] 147. Add Search filter to User Table
- [ ] 148. Verify Admin permissions on UI
- [ ] 149. Verify Cashier cannot see User Management
- [ ] 150. Verify Owner cannot edit Users (optional per role)

## Phase 3: Inventory Management Module (Tasks 151-300)

### Backend - Inventory
- [ ] 151. Define Category model
- [ ] 152. Define Product model
- [ ] 153. Define Variant model (Size, Color)
- [ ] 154. Define StockLog model (for tracking movements)
- [ ] 155. Migration for Inventory tables
- [ ] 156. Apply Inventory migration
- [ ] 157. Create Category Schemas (Create, Read, Update)
- [ ] 158. Create Product Schemas (Create, Read, Update)
- [ ] 159. Create Variant Schemas
- [ ] 160. CRUD Endpoint: GET /categories
- [ ] 161. CRUD Endpoint: POST /categories
- [ ] 162. CRUD Endpoint: PUT /categories/{id}
- [ ] 163. CRUD Endpoint: DELETE /categories/{id}
- [ ] 164. CRUD Endpoint: GET /products
- [ ] 165. Implement Pagination for products
- [ ] 166. Implement Search for products (Name, SKU)
- [ ] 167. CRUD Endpoint: POST /products
- [ ] 168. Handle Image upload (optional, maybe just store path)
- [ ] 169. CRUD Endpoint: GET /products/{id}
- [ ] 170. CRUD Endpoint: PUT /products/{id}
- [ ] 171. CRUD Endpoint: POST /products/{id}/variants
- [ ] 172. Endpoint: POST /inventory/adjust
- [ ] 173. Logic to update stock count
- [ ] 174. Logic to create StockLog entry
- [ ] 175. Logic to prevent negative stock (if configured)
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
